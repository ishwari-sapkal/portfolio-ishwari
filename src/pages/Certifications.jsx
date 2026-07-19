import { Link } from "react-router-dom";
import Cursor from "../Cursor";

import {
  FaAward,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import TechGigPDF from "../assets/certificates/techgig.pdf";
import UnnatiPDF from "../assets/certificates/unnati.pdf";
import PsychometricPDF from "../assets/certificates/psychometric.pdf";
import Typing30PDF from "../assets/certificates/typing30.pdf";
import Typing40PDF from "../assets/certificates/typing40.pdf";
import UdemyPDF from "../assets/certificates/SFT-Certificate-Udemy-2026.pdf";

function CertificateCard({
  title,
  issuer,
  description,
  date,
  file,
}) {
  return (
    <div className="bg-white/5 border border-orange-500/20 rounded-3xl p-8 backdrop-blur-md hover:border-orange-400 transition-all duration-300">

      <div className="flex items-start justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold mb-2">
            {title}
          </h2>

          <p className="text-orange-400 mb-3">
            {issuer}
          </p>

          <p className="text-gray-300 leading-7 mb-4">
            {description}
          </p>

          <span className="text-sm text-gray-500">
            {date}
          </span>
        </div>

        <a
          href={file}
          target="_blank"
          rel="noreferrer"
          className="
            px-5
            py-3
            rounded-xl
            bg-orange-500/15
            border
            border-orange-500/40
            hover:bg-orange-500/25
            transition
            whitespace-nowrap
          "
        >
          <FaExternalLinkAlt className="inline mr-2" />
          View
        </a>

      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <>
      <Cursor />

      <div className="min-h-screen bg-[#050816] text-white">

        {/* HEADER */}

        <nav className="w-[95%] mx-auto pt-6 flex items-center justify-between">

          <h1 className="text-4xl font-bold text-orange-400 tracking-widest">
            IS
          </h1>

          <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/ishwari-sapkal?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ishwari-sapkal-22a814400/"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ishwarisapkal50@gmail.com"
              className="text-orange-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </nav>

        <div className="max-w-[85rem] mx-auto px-8 py-16">

          <h1 className="text-5xl font-bold text-center mb-6">
            Certifications &
            <span className="text-orange-400">
              {" "}Achievements
            </span>
          </h1>

          <p className="text-center text-gray-400 mb-14">
            Professional certifications, technical achievements and
            skill development programs completed throughout my
            academic journey.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 mb-16">

  <div className="bg-white/5 rounded-2xl p-6 border border-orange-500/20 text-center">
    <h2 className="text-4xl font-bold text-orange-400">6+</h2>
    <p className="text-gray-400 mt-2">Certifications</p>
  </div>

  <div className="bg-white/5 rounded-2xl p-6 border border-orange-500/20 text-center">
    <h2 className="text-4xl font-bold text-orange-400">165+</h2>
    <p className="text-gray-400 mt-2">Training Hours</p>
  </div>



</div>

<div className="space-y-8">

  <CertificateCard
    title="Python Beginner Level Champion"
    issuer="TechGig"
    description="Recognized for demonstrating strong understanding of Python programming fundamentals, problem solving and coding concepts."
    date="3 July 2025"
    file={TechGigPDF}
  />

  <CertificateCard
  title="Software Testing Fundamentals"
  issuer="Udemy"
  description="Successfully completed Software Testing Fundamentals training covering software testing concepts, testing methodologies, quality assurance principles, test case design and software quality practices."
  date="2026"
  file={UdemyPDF}
/>

  <CertificateCard
    title="UNXT Soft Skill Development Program"
    issuer="SGBS Unnati Foundation"
    description="Completed 165 hours of professional development training covering Spoken English, Employability Skills, Life Skills and Value Systems."
    date="2025"
    file={UnnatiPDF}
  />

  <CertificateCard
    title="Psychometric Assessment Report"
    issuer="Unnati Foundation"
    description="Professional personality and behavioral assessment evaluating communication skills, professional readiness, strengths and career development insights."
    date="2025"
    file={PsychometricPDF}
  />

  <CertificateCard
    title="English Typing Certification – 30 WPM"
    issuer="Typing Assessment"
    description="Certified typing proficiency demonstrating keyboard accuracy, speed and professional documentation skills."
    date="2025"
    file={Typing30PDF}
  />

  <CertificateCard
    title="English Typing Certification – 40 WPM"
    issuer="Typing Assessment"
    description="Advanced typing speed certification demonstrating improved productivity and typing efficiency."
    date="2025"
    file={Typing40PDF}
  />

</div>
        </div>
      </div>
    </>
  );
}