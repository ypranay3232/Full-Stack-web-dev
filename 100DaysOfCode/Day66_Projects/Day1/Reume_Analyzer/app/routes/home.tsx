import Navbar from "../components/Navbar";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ResAnalyzer" },
    { name: "description", content: "Welcome to Resume Analyzer, check your ATS score and More !" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <h1>Track your Resume & check ATS score !</h1>
      <h2>Check your Resume ATS score and Land your first Job !</h2>
    </section>
  </main>;
}
