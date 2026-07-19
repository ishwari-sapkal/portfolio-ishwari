import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Cursor from "../Cursor";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zqitmed",
        "template_5hx0sux",
        form.current,
        "lBacbU7rSLRq-HcSo"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

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
              <Link to="/publications">Research</Link>
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

        {/* PAGE */}

        <div className="max-w-[92%] mx-auto px-8 py-16">
          <h1 className="text-5xl font-bold text-center mb-4">
            Get In{" "}
            <span className="text-orange-400">
              Touch
            </span>
          </h1>

          <p className="text-center text-gray-400 mb-14 max-w-3xl mx-auto">
            Have a project, internship opportunity,
            collaboration proposal, or professional inquiry?
            Feel free to contact me. I would be happy to
            connect and discuss new opportunities.
          </p>

          <div
            className="
              max-w-5xl
              mx-auto
              bg-white/5
              border
              border-orange-500/20
              rounded-3xl
              p-10
              backdrop-blur-md
              shadow-[0_0_40px_rgba(255,140,26,0.08)]
            "
          >
            {/* EMAIL DISPLAY */}

            <div className="mb-8">
              <label className="block text-orange-400 mb-3">
                Contact Email
              </label>

              <div
                className="
                  w-full
                  bg-black/20
                  border
                  border-orange-500/20
                  rounded-xl
                  px-5
                  py-4
                  text-gray-300
                "
              >
                ishwarisapkal50@gmail.com
              </div>
            </div>

            {/* FORM */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div>
                <label className="block text-orange-400 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-black/20
                    border
                    border-orange-500/20
                    focus:border-orange-400
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="block text-orange-400 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-black/20
                    border
                    border-orange-500/20
                    focus:border-orange-400
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="block text-orange-400 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-black/20
                    border
                    border-orange-500/20
                    focus:border-orange-400
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="block text-orange-400 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-black/20
                    border
                    border-orange-500/20
                    focus:border-orange-400
                    outline-none
                    resize-none
                  "
                ></textarea>
              </div>

              <button
                type="submit"
                className="
                  w-full
                  py-5
                  rounded-xl
                  bg-orange-500/10
                  border
                  border-orange-500/40
                  hover:bg-orange-500/20
                  transition-all
                  duration-300
                  text-lg
                  font-medium
                "
              >
                <FaPaperPlane className="inline mr-3" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}