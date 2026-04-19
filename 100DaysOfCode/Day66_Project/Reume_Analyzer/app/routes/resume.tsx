import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import Summary from "~/components/Feedback/Summary";
import ATS from "~/components/Feedback/Ats";
import Details from "~/components/Feedback/Details";

export const meta = () => ([
    { title: 'Resumind | Review ' },
    { name: 'description', content: 'Detailed overview of your resume' },
])

const Resume = () => {
    const { auth, isLoading, fs, kv, puterReady } = usePuterStore();
    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) navigate(`/auth?next=/resume/${id}`);
    }, [isLoading])

    useEffect(() => {
        const loadResume = async () => {
            if (!puterReady) return;
            try {
                const resume = await kv.get(`resume:${id}`);

                if (!resume) {
                    setErrorMsg("Resume not found.");
                    return;
                }

                const data = JSON.parse(resume);
                setFeedback(data.feedback);

                try {
                    const resumeBlob = await fs.read(data.resumePath);
                    if (resumeBlob) {
                        const pdfBlob = new Blob([resumeBlob], { type: 'application/pdf' });
                        setResumeUrl(URL.createObjectURL(pdfBlob));
                    }
                } catch (e) {
                    console.error("Resume PDF not found", e);
                }

                try {
                    const imageBlob = await fs.read(data.imagePath);
                    if (imageBlob) {
                        setImageUrl(URL.createObjectURL(imageBlob));
                    }
                } catch (e) {
                    console.error("Image not found", e);
                }
            } catch (err) {
                console.error("Error loading resume details", err);
                setErrorMsg("Failed to load resume details.");
            }
        }

        loadResume();
    }, [id, puterReady]);

    return (
        <main className="!pt-0">
            <nav className="resume-nav">
                <Link to="/" className="back-button">
                    <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
                    <span className="text-gray-800 text-sm font-semibold">Back to Homepage</span>
                </Link>
            </nav>
            <div className="flex flex-row w-full max-lg:flex-col-reverse">
                <section className="feedback-section bg-[url('/images/bg-small.svg') bg-cover h-[100vh] sticky top-0 items-center justify-center">
                    {imageUrl && resumeUrl && (
                        <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
                            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={imageUrl}
                                    className="w-full h-full object-contain rounded-2xl"
                                    title="resume"
                                />
                            </a>
                        </div>
                    )}
                </section>
                <section className="feedback-section">
                    <h2 className="text-4xl !text-black font-bold">Resume Review</h2>
                    {errorMsg ? (
                        <div className="flex flex-col items-center justify-center p-10 text-red-500 text-center font-bold text-xl">
                            <p>{errorMsg}</p>
                            <Link to="/" className="mt-4 primary-button w-fit text-lg">
                                Return Home
                            </Link>
                        </div>
                    ) : feedback ? (
                        <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
                            <Summary feedback={feedback} />
                            <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []} />
                            <Details feedback={feedback} />
                        </div>
                    ) : (
                        <img src="/images/resume-scan-2.gif" className="w-full" />
                    )}
                </section>
            </div>
        </main>
    )
}
export default Resume
