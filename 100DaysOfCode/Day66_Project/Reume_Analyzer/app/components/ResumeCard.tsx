import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'
import { usePuterStore } from '~/lib/puter'

const ResumeCard = ({ resume }: { resume: Resume }) => {
  const { fs } = usePuterStore();
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (!resume.imagePath) return;
    if (resume.imagePath.startsWith('http') || resume.imagePath.startsWith('/images/')) {
        setImageUrl(resume.imagePath);
    } else {
        const loadImg = async () => {
            try {
                const blob = await fs.read(resume.imagePath);
                if (blob) {
                    setImageUrl(URL.createObjectURL(blob));
                }
            } catch (err) {
                console.error("Error loading image", err);
            }
        };
        loadImg();
    }
  }, [resume.imagePath, fs]);

  return (
    <Link to={`/resume/${resume.id}`} className='resume-card bg-white animate-in fade-in duration-1000 flex flex-col gap-4 p-4 border rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1'>
      <div className="relative w-full aspect-[1/1.2] rounded-xl overflow-hidden bg-gray-100 group border border-gray-100 shadow-inner">
        <img src={imageUrl || '/images/resume_01.png'} alt={resume.jobTitle} className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 right-3 scale-75 transform origin-top-right">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-1 pb-1">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{resume.jobTitle}</h3>
        <p className="text-md font-medium text-gray-500">{resume.companyName}</p>
      </div>
    </Link>
  )
}

export default ResumeCard
