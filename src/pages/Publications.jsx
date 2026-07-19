import { Link } from "react-router-dom";
import Cursor from "../Cursor";

import ResearchPaper from "../assets/research-paper.pdf";
import Certificate from "../assets/publication-certificate.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBookOpen,
  FaCertificate,
  FaFilePdf,
} from "react-icons/fa";

export default function Publications() {
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
            <li className="hover:text-orange-400 transition-all duration-300">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-orange-400 transition-all duration-300">
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li className="hover:text-orange-400 transition-all duration-300">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="hover:text-orange-400 transition-all duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/ishwari-sapkal?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ishwari-sapkal-22a814400/"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ishwarisapkal50@gmail.com"
              className="text-orange-400 hover:text-orange-300 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </nav>

        {/* PAGE CONTENT */}

        <div className="max-w-[92%] mx-auto px-8 py-16">
          <h1 className="text-5xl font-bold text-center mb-16">
            Research{" "}
            <span className="text-orange-400">
              Publication
            </span>
          </h1>

          <div
            className="
              bg-white/5
              border
              border-orange-500/20
              rounded-3xl
              p-10
              backdrop-blur-md
              shadow-[0_0_40px_rgba(255,140,26,0.08)]
            "
          >
            {/* TOP SECTION */}

            <div className="flex flex-col lg:flex-row gap-10">
              {/* LEFT */}

              <div className="lg:w-[35%]">
                <div
                  className="
                    h-[300px]
                    rounded-3xl
                    border
                    border-orange-500/30
                    bg-gradient-to-br
                    from-orange-500/20
                    to-orange-900/20
                    flex
                    items-center
                    justify-center
                    text-center
                    p-8
                  "
                >
                  <div>
                    <FaBookOpen
                      size={60}
                      className="mx-auto mb-6 text-orange-400"
                    />

                    <h2 className="text-2xl font-bold">
                      Research Paper
                    </h2>

                    <p className="text-gray-400 mt-3">
                      Blockchain & Digital Governance
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="lg:w-[65%]">
                <h2 className="text-3xl font-bold leading-tight mb-5">
                  Human Trust Aware Blockchain
                  System For Preventing Silent
                  Data Manipulation In Digital
                  Governance Platforms
                </h2>

                <p className="text-orange-400 mb-2">
                International Research Journal of
                Modernization in Engineering,
                Technology and Science (IRJMETS)
                </p>

                <p className="text-gray-400 mb-6">
                Published: February 2026
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                    Blockchain
                  </span>

                  <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                    Cyber Security
                  </span>

                  <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                    Digital Governance
                  </span>

                  <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                    Data Integrity
                  </span>

                  <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                    Trust Management
                  </span>
                </div>

                <p className="text-gray-400 leading-8 mb-8">
                  Published research focused on
                  integrating blockchain technology
                  with trust-aware governance systems
                  to prevent silent data manipulation,
                  improve transparency, and strengthen
                  data integrity in digital governance
                  platforms.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={ResearchPaper}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-6
                      py-4
                      rounded-xl
                      bg-orange-500/10
                      border
                      border-orange-500/40
                      hover:bg-orange-500/20
                      transition-all
                      duration-300
                    "
                  >
                    <FaFilePdf className="inline mr-2" />
                    View Publication
                  </a>

                  <a
                    href={Certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-6
                      py-4
                      rounded-xl
                      bg-orange-500/10
                      border
                      border-orange-500/40
                      hover:bg-orange-500/20
                      transition-all
                      duration-300
                    "
                  >
                    <FaCertificate className="inline mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* ABSTRACT */}

            <div className="mt-14 pt-10 border-t border-orange-500/20">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">
                Abstract
              </h3>

              <p className="text-gray-300 leading-9">
                This research presents a Human Trust
                Aware Blockchain System designed to
                mitigate silent data manipulation in
                digital governance environments.
                Traditional governance systems face
                challenges related to unauthorized
                data modifications, lack of
                transparency, and trust deficits.
                The proposed solution leverages
                blockchain technology to ensure
                immutability, accountability, and
                secure record management while
                incorporating trust evaluation
                mechanisms to improve reliability
                and decision-making. The framework
                strengthens governance processes by
                providing a transparent, secure, and
                tamper-resistant platform for data
                management and citizen services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}