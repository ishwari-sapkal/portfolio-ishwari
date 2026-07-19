
import { Link } from "react-router-dom";
import Cursor from "../Cursor";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaBriefcase,
  FaRocket,
  FaCertificate,
  FaPaperPlane,
  FaBookOpen,
} from "react-icons/fa";

import Profile from "./Profile.jpeg";
export default function Home() {
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
              <Link to="/portfolio">About Me</Link>
            </li>

            <li className="hover:text-orange-400 transition-all duration-300">
              <Link to="/portfolio">Portfolio</Link>
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
              className="text-orange-400 hover:text-orange-300 hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ishwari-sapkal-22a814400/"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:text-orange-300 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ishwarisapkal50@gmail.com"
              className="text-orange-400 hover:text-orange-300 hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </nav>

        {/* HERO SECTION */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-10
            min-h-[85vh]
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-16
          "
        >
          {/* LEFT SIDE */}

<div className="max-w-md lg:-ml-9">
  <div className="relative w-fit mb-10">
    <div className="absolute inset-0 bg-orange-500/30 blur-3xl rounded-full"></div>

    <img
      src={Profile}
      alt="Ishwari Sapkal"
      className="
        relative
        w-72
        h-72
        rounded-full
        object-cover
        border-4
        border-orange-400
        shadow-[0_0_50px_rgba(255,140,26,0.4)]
      "
    />
  </div>

  <div className="flex items-center text-5xl font-bold mb-4">
    <TypeAnimation
  sequence={[
    "Ishwari Sapk",
    1000,
  ]}
  speed={50}
  cursor={false}
  repeat={0}
  className="block"
/>

    <span className="text-orange-400 ml-1">
      al
    </span>
  </div>

  <h2 className="text-xl text-orange-400 mb-4">
    Full Stack Developer
  </h2>

  <p className="text-gray-400 leading-8">
    Passionate Full Stack Developer specializing in MERN
    technologies, focused on building modern, responsive and
    user-friendly digital experiences with clean design,
    efficient functionality and attention to detail.
  </p>
</div>

          {/* RIGHT SIDE BUTTONS */}

          <div className="flex flex-col gap-5">
            <Link to="/resume">
              <button
                className="
                  w-[48vw]
                  min-w-[420px]
                  max-w-[760px]
                  py-5
                  px-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-orange-500/30
                  hover:border-orange-400
                  hover:bg-orange-500/15
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-4
                  text-lg
                "
              >
                <FaFileAlt />
                Resume
              </button>
            </Link>

            <Link to="/portfolio">
              <button
                className="
                  w-[48vw]
                  min-w-[420px]
                  max-w-[760px]
                  py-5
                  px-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-orange-500/30
                  hover:border-orange-400
                  hover:bg-orange-500/15
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-4
                  text-lg
                "
              >
                <FaBriefcase />
                Portfolio
              </button>
            </Link>

            <Link to="/projects">
              <button
                className="
                  w-[48vw]
                  min-w-[420px]
                  max-w-[760px]
                  py-5
                  px-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-orange-500/30
                  hover:border-orange-400
                  hover:bg-orange-500/15
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-4
                  text-lg
                "
              >
                <FaRocket />
                Projects
              </button>
            </Link>

          <Link to="/Publications">
            <button
              className="
                w-[48vw]
                min-w-[420px]
                max-w-[760px]
                py-5
                px-6
                rounded-2xl
                bg-white/5
                border
                border-orange-500/30
                hover:border-orange-400
                hover:bg-orange-500/15
                transition-all
                duration-300
                flex
                items-center
                gap-4
                text-lg
              "
            >
              <FaBookOpen />
              Research Publication
            </button>
          </Link>


            <Link to="/certifications">
              <button
                className="
                  w-[48vw]
                  min-w-[420px]
                  max-w-[760px]
                  py-5
                  px-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-orange-500/30
                  hover:border-orange-400
                  hover:bg-orange-500/15
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-4
                  text-lg
                "
              >
                <FaCertificate />
                Certifications
              </button>
            </Link>

            <Link to="/contact">
              <button
                className="
                  w-[48vw]
                  min-w-[420px]
                  max-w-[760px]
                  py-5
                  px-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-orange-500/30
                  hover:border-orange-400
                  hover:bg-orange-500/15
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-4
                  text-lg
                "
              >
                <FaPaperPlane />
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
