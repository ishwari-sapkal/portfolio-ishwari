import { Link } from "react-router-dom";
import Cursor from "../Cursor";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaDatabase,
} from "react-icons/fa";

import Profile from "./Profile.jpeg";
import HeroCutout from "./HeroCutout.png";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  Backend: ["Python", "Flask", "Java"],
  Database: ["MongoDB", "MySQL"],
};

const quickFacts = [
  {
    icon: <FaLaptopCode />,
    title: "3+ Projects",
  },
  {
    icon: <FaDatabase />,
    title: "Research Paper",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Developer",
  },
];

const AnimationWrapper = ({
  children,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{
      opacity: 0,
      y: 60,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.8,
    }}
    viewport={{
      once: true,
    }}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  return (
    <>
      <Cursor />

      <div
        className="
        min-h-screen
        text-white
        overflow-hidden
        relative
      "
        style={{
          backgroundColor: "#050816",
          backgroundImage: `
          linear-gradient(rgba(255,122,0,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,122,0,.05) 1px, transparent 1px)
        `,
          backgroundSize: "70px 70px",
        }}
      >
        {/* ORANGE GLOW */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px] rounded-full" />

        {/* NAVBAR */}

        <nav
          className="
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-50
          w-[94%]
          max-w-7xl
          px-8
          py-4
          rounded-full
          border
          border-orange-500/20
          bg-black/30
          backdrop-blur-xl
          flex
          items-center
          justify-between
        "
        >
          <h1 className="text-4xl font-black text-orange-400 tracking-widest">
            IS
          </h1>

          <ul className="hidden lg:flex gap-10 text-gray-300 font-medium">
            <li className="hover:text-orange-400 transition">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-orange-400 transition">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="hover:text-orange-400 transition">
              <Link to="/publications">Publications</Link>
            </li>

            <li className="hover:text-orange-400 transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/ishwari-sapkal"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ishwari-sapkal-22a814400/"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ishwarisapkal50@gmail.com"
              className="text-orange-400 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </nav>

        {/* HERO */}

        <section
          className="
          max-w-7xl
          mx-auto
          px-6
          pt-40
          pb-20
        "
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-orange-500/20
              rounded-[30px]
              p-10
              shadow-[0_0_50px_rgba(255,122,0,0.08)]
            "
            >
              <p className="text-orange-400 mb-4 tracking-[4px] uppercase">
                Welcome To My Portfolio
              </p>

              <h1 className="text-6xl font-black leading-tight">
                Ishwari{" "}
                <span className="text-orange-400">
                  Sapkal
                </span>
              </h1>

              <div className="text-2xl text-orange-400 font-semibold mt-6 mb-6">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "Software Engineer",
                    1500,
                    "Technical Educator",
                    1500,
                    "AI Business Analyst",
                    1500,
                  ]}
                  repeat={Infinity}
                />
              </div>

              <p className="text-gray-400 leading-8 text-lg mb-8">
                Passionate Software Engineer focused on
                building impactful digital solutions using
                modern technologies. Interested in Full
                Stack Development, AI, research and
                innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/resume">
                  <button className="px-7 py-4 bg-orange-500 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
                    Resume
                    <FaArrowRight />
                  </button>
                </Link>

                <a
                  href="https://github.com/ishwari-sapkal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-7 py-4 rounded-2xl border border-orange-500/40 bg-white/5 hover:bg-orange-500/10 transition">
                    GitHub
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/in/ishwari-sapkal-22a814400/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="px-7 py-4 rounded-2xl border border-orange-500/40 bg-white/5 hover:bg-orange-500/10 transition">
                    LinkedIn
                  </button>
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}

            <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="
    relative
    flex
    justify-center
    items-center
    min-h-[620px]
  "
>

  {/* Glow */}

  <div
    className="
      absolute
      w-[420px]
      h-[420px]
      bg-orange-500/20
      blur-[120px]
      rounded-full
      z-0
    "
  />

  {/* Premium L Border */}

  <div
  className="
    absolute
    z-10
    right-[60px]
    bottom-[5px]
    w-[350px]
    h-[470px]
    border-r-[8px]
    border-b-[8px]
    border-orange-500/80
    rounded-br-[70px]
  "
/>

  {/* Secondary Border */}

  <div
  className="
    absolute
    z-10
    right-[35px]
    bottom-[20px]
    w-[320px]
    h-[440px]
    border-r
    border-b
    border-orange-500/20
    rounded-br-[60px]
  "
/>

  {/* Image */}

  <img
    src={HeroCutout}
    alt="Ishwari Sapkal"
    className="
      relative
      z-20
      h-[500px]
      object-contain
      drop-shadow-[0_0_30px_rgba(255,122,0,0.25)]
      hover:scale-[1.02]
      transition-all
      duration-500
    "
  />

</motion.div>
          </div>
        </section>

                {/* ABOUT SECTION */}

        <AnimationWrapper>
          <section className="max-w-7xl mx-auto px-6 mt-10">

            <h2 className="text-5xl font-bold text-center mb-16">
              About
              <span className="text-orange-400"> Me</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">

              {/* ABOUT CARD */}

              <div
                className="
                lg:col-span-2
                bg-white/5
                backdrop-blur-xl
                border
                border-orange-500/20
                rounded-[35px]
                p-10
                hover:border-orange-400/40
                transition-all
              "
              >
                <h3 className="text-3xl font-bold mb-6">
                  Software Engineer & Research Enthusiast
                </h3>

                <p className="text-gray-400 leading-8 mb-6">
                  I am Ishwari Sapkal, a passionate Computer
                  Engineering graduate focused on Full Stack
                  Development, Software Engineering and AI-driven
                  solutions.
                </p>

                <p className="text-gray-400 leading-8 mb-6">
                  Through internships, research activities and
                  technical education initiatives, I continuously
                  improve my technical expertise while creating
                  meaningful digital products.
                </p>

                <p className="text-gray-400 leading-8">
                  My goal is to become a Software Engineer who
                  builds impactful solutions that solve real-world
                  challenges through innovation and technology.
                </p>
              </div>

              {/* QUICK FACTS */}

              <div className="space-y-5">

                {quickFacts.map((item) => (
                  <div
                    key={item.title}
                    className="
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-orange-500/20
                    rounded-[30px]
                    p-6
                    hover:-translate-y-1
                    hover:border-orange-400
                    transition-all
                  "
                  >
                    <div className="text-3xl text-orange-400 mb-3">
                      {item.icon}
                    </div>

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                ))}

              </div>

            </div>

          </section>
        </AnimationWrapper>



        {/* PREMIUM COUNTERS */}

        <AnimationWrapper>

          <section className="max-w-7xl mx-auto px-6 mt-24">

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

              {[
                ["91%", "Diploma Score"],
                ["3+", "Projects"],
                ["6+", "Certificates"],
                ["1", "Research Paper"],
                ["3", "Internships"],
              ].map(([number, title]) => (

                <div
                  key={title}
                  className="
                  bg-gradient-to-br
                  from-orange-500/10
                  to-transparent
                  border
                  border-orange-500/20
                  rounded-[30px]
                  p-8
                  text-center
                  hover:-translate-y-2
                  hover:border-orange-400
                  transition-all
                  duration-500
                "
                >

                  <h3 className="text-5xl font-black text-orange-400 mb-3">
                    {number}
                  </h3>

                  <p className="text-gray-400">
                    {title}
                  </p>

                </div>

              ))}

            </div>

          </section>

        </AnimationWrapper>



        {/* EDUCATION + EXPERIENCE */}

        <AnimationWrapper>

          <section className="max-w-7xl mx-auto px-6 mt-32">

            <h2 className="text-5xl font-bold text-center mb-20">
              Education &
              <span className="text-orange-400">
                {" "}Experience
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* EDUCATION */}

              <div>

                <h3 className="text-3xl font-bold mb-10 text-orange-400">
                  Education Journey
                </h3>

                <div className="relative border-l-2 border-orange-500">

                  {[
                    {
                      title:
                        "Secondary School Certificate (SSC)",
                      year: "2023",
                      desc:
                        "Achieved 88.20% and developed a strong academic foundation."
                    },

                    {
                      title:
                        "Diploma in Computer Engineering",
                      year: "2026",
                      desc:
                        "Completed Diploma with 91% and strong technical expertise."
                    },

                    {
                      title:
                        "Future Goal",
                      year: "Software Engineer",
                      desc:
                        "Focused on building scalable and impactful software solutions."
                    },

                  ].map((item) => (

                    <div
                      key={item.title}
                      className="relative ml-10 mb-12"
                    >

                      <div
                        className="
                        absolute
                        -left-[50px]
                        w-5
                        h-5
                        rounded-full
                        bg-orange-400
                      "
                      />

                      <div
                        className="
                        bg-white/5
                        border
                        border-orange-500/20
                        rounded-[30px]
                        p-7
                      "
                      >

                        <h4 className="text-xl font-bold mb-2">
                          {item.title}
                        </h4>

                        <p className="text-orange-400 mb-3">
                          {item.year}
                        </p>

                        <p className="text-gray-400 leading-7">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>



              {/* EXPERIENCE */}

              <div>

                <h3 className="text-3xl font-bold mb-10 text-orange-400">
                  Professional Experience
                </h3>

                <div className="space-y-6">

                  {[
                    {
                      title:
                        "AI Business Analyst Trainee",
                      company:
                        "MIDC Training Centre",
                    },

                    {
                      title:
                        "Android Developer Intern",
                      company:
                        "DTS Solution",
                    },

                    {
                      title:
                        "Full Stack Developer Intern",
                      company:
                        "Laksh IT Solution",
                    },

                    {
                      title:
                        "Technical Educator",
                      company:
                        "ALU Foundation",
                    },

                  ].map((item) => (

                    <div
                      key={item.title}
                      className="
                      bg-white/5
                      border
                      border-orange-500/20
                      rounded-[30px]
                      p-7
                      hover:-translate-y-2
                      hover:border-orange-400
                      transition-all
                    "
                    >

                      <h4 className="text-xl font-bold mb-2">
                        {item.title}
                      </h4>

                      <p className="text-orange-400">
                        {item.company}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </section>

        </AnimationWrapper>

        {/* SKILLS SECTION */}

        <AnimationWrapper>

          <section className="max-w-7xl mx-auto px-6 mt-32">

            <h2 className="text-5xl font-bold text-center mb-20">
              Technical
              <span className="text-orange-400">
                {" "}Skills
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {Object.entries(skills).map(([category, list]) => (

                <div
                  key={category}
                  className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-orange-500/20
                  rounded-[30px]
                  p-8
                  hover:border-orange-400
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
                >

                  <h3 className="text-2xl font-bold text-orange-400 mb-6">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {list.map((skill) => (

                      <span
                        key={skill}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-orange-500/10
                        border
                        border-orange-500/30
                        hover:border-orange-400
                        transition
                      "
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </section>

        </AnimationWrapper>



        {/* RESEARCH PUBLICATION */}

        <AnimationWrapper>

          <section className="max-w-6xl mx-auto px-6 mt-32">

            <div
              className="
              bg-gradient-to-r
              from-orange-500/10
              to-transparent
              border
              border-orange-500/20
              rounded-[40px]
              p-10
              text-center
            "
            >

              <h2 className="text-5xl font-bold mb-10">
                Research
                <span className="text-orange-400">
                  {" "}Publication
                </span>
              </h2>

              <h3 className="text-3xl font-bold mb-5">
                Human-Trust-Aware Blockchain System
              </h3>

              <p className="text-orange-400 text-lg mb-6">
                Published in IRJMETS • February 2026
              </p>

              <p className="text-gray-400 max-w-4xl mx-auto leading-8">
                Research focused on improving trust,
                transparency and security in digital
                governance systems using blockchain
                technology.
              </p>

              <Link to="/publications">

                <button
                  className="
                  mt-8
                  px-8
                  py-4
                  rounded-2xl
                  bg-orange-500
                  font-semibold
                  hover:scale-105
                  transition
                "
                >
                  View Publication
                </button>

              </Link>

            </div>

          </section>

        </AnimationWrapper>



        {/* ACHIEVEMENTS TIMELINE */}

        <AnimationWrapper>

          <section className="max-w-5xl mx-auto px-6 mt-32">

            <h2 className="text-5xl font-bold text-center mb-20">
              Achievements &
              <span className="text-orange-400">
                {" "}Recognition
              </span>
            </h2>

            <div className="relative border-l-2 border-orange-500">

              {[
                "Research Paper Published",
                "Python Beginner Level Champion",
                "Technical Educator at ALU Foundation",
                "165+ Hours Professional Training",
                "40 WPM English Typing Certification",
                "Psychometric Assessment Certified",
              ].map((item) => (

                <div
                  key={item}
                  className="relative ml-10 mb-10"
                >

                  <div
                    className="
                    absolute
                    -left-[49px]
                    w-5
                    h-5
                    rounded-full
                    bg-orange-400
                  "
                  />

                  <div
                    className="
                    bg-white/5
                    border
                    border-orange-500/20
                    rounded-[25px]
                    p-6
                    hover:border-orange-400
                    transition-all
                  "
                  >

                    <h3 className="font-semibold text-lg">
                      {item}
                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </AnimationWrapper>



        {/* CONTACT CTA */}

        <AnimationWrapper>

          <section className="max-w-7xl mx-auto px-6 mt-32">

            <div
              className="
              bg-gradient-to-r
              from-orange-500/10
              to-transparent
              border
              border-orange-500/20
              rounded-[40px]
              p-14
              text-center
            "
            >

              <h2 className="text-6xl font-black mb-6">
                Let's Build Something
                <span className="text-orange-400">
                  {" "}Amazing
                </span>
              </h2>

              <p className="text-gray-400 text-lg mb-10">
                Open to opportunities, collaborations
                and innovative projects.
              </p>

              <Link to="/contact">

                <button
                  className="
                  px-10
                  py-5
                  rounded-2xl
                  bg-orange-500
                  font-semibold
                  text-lg
                  hover:scale-105
                  transition
                "
                >
                  Contact Me
                </button>

              </Link>

            </div>

          </section>

        </AnimationWrapper>



        {/* FOOTER */}

        <footer className="mt-32 pb-10">

          <div className="text-center">

            <h3 className="text-3xl font-black text-orange-400 mb-4">
              IS
            </h3>

            <p className="text-gray-500">
              © 2026 Ishwari Sapkal
            </p>

            <div className="flex justify-center gap-6 text-2xl mt-6">

              <a
                href="https://github.com/ishwari-sapkal"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ishwari-sapkal-22a814400/"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ishwarisapkal50@gmail.com"
                className="text-orange-400 hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </footer>

      </div>

    </>
  );
}