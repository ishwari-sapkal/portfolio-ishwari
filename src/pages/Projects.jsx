import { useState } from "react";
import { Link } from "react-router-dom";
import Cursor from "../Cursor";

import HostelImg from "../assets/hostel.png";
import VotingImg from "../assets/voting.png";
import SweetDeliveryImg from "../assets/sweetdelivery.jpeg";
import SweetVideo from "../assets/sweet-delivery-demo.mp4";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function ProjectCard({
  title,
  image,
  video,
  college,
  github,
  shortDesc,
  overview,
  modules,
  working,
  tech,
  contribution,
  outcome,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-orange-500/20 rounded-3xl p-8 mb-10 backdrop-blur-md">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT IMAGE */}

        <div className="lg:w-[35%]">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-[250px]
                object-cover
                rounded-2xl
                border
                border-orange-500/30
                hover:border-orange-400
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_rgba(251,146,60,0.35)]
                transition-all
                duration-300
                cursor-pointer
              "
            />
          </a>
        </div>

        {/* RIGHT CONTENT */}

        <div className="lg:w-[65%]">

          <h2 className="text-3xl font-bold mb-2">
            {title}
          </h2>

          <p className="text-orange-400 mb-4">
            {college}
          </p>

          <p className="text-gray-300 leading-7 mb-5">
            {shortDesc}
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-orange-500/10
                  border
                  border-orange-500/30
                  text-sm
                "
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">

            <a
              href={github}
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
              "
            >
              <FaGithub className="inline mr-2" />
              GitHub Repository
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="
                px-5
                py-3
                rounded-xl
                bg-white/5
                border
                border-orange-500/40
                hover:bg-orange-500/10
                transition
              "
            >
              {open ? (
                <>
                  <FaChevronUp className="inline mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="inline mr-2" />
                  Read More
                </>
              )}
            </button>

          </div>
        </div>
      </div>

      {open && (
        <div className="mt-8 border-t border-orange-500/20 pt-8">

          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            Project Overview
          </h3>

          <p className="text-gray-300 leading-8 mb-6">
            {overview}
          </p>

         <div className="grid lg:grid-cols-2 gap-8 mb-8">

  {/* MODULES */}

  <div>
    <h3 className="text-xl font-semibold text-orange-400 mb-3">
      Modules Used
    </h3>

    <ul className="list-disc pl-5 text-gray-300 space-y-2">
      {modules.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>

  {/* VIDEO */}

  {video && (
    <div>
      <h3 className="text-xl font-semibold text-orange-400 mb-3">
        Project Demonstration
      </h3>

      <video
        controls
        preload="metadata"
        className="
          w-[450px]
          h-[600px]
          rounded-2xl
          border
          border-orange-500/30
          shadow-[0_0_20px_rgba(255,140,26,0.15)]
        "
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )}

</div>

          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            Working
          </h3>

          <ol className="list-decimal pl-5 text-gray-300 mb-6 space-y-2">
            {working.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>

          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            My Contribution
          </h3>

          <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-2">
            {contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            Outcome
          </h3>

          <p className="text-gray-300 leading-8 mb-8">
            {outcome}
          </p>

          
        </div>
      )}

    </div>
  );
}
export default function Projects() {
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

        {/* PAGE TITLE */}

        <div className="max-w-[85rem] mx-auto px-8 py-16">

          <h1 className="text-5xl font-bold text-center mb-16">
            My <span className="text-orange-400">Projects</span>
          </h1>

          {/* PROJECT 1 */}

          <ProjectCard
            image={HostelImg}
            title="Hostel Room Allocation System"
            college="Dr. Panjabrao Deshmukh Polytechnic, Amravati"
            github="https://github.com/ishwari-sapkal/Hostel-Room-Allocation-System"

            shortDesc="A smart hostel management platform developed to automate room allocation, student record management, occupancy tracking and hostel administration processes."

            overview="The Hostel Room Allocation System was developed to digitize hostel operations and eliminate manual room allocation processes. The system enables administrators to manage room availability, student records and hostel occupancy through a centralized dashboard. By automating room assignments and maintaining real-time records, the project improves operational efficiency and reduces administrative workload."

            modules={[
              "Student Registration Module",
              "Room Allocation Module",
              "Room Availability Management",
              "Student Record Management",
              "Admin Dashboard",
              "Hostel Monitoring System",
              "Occupancy Tracking",
            ]}

            working={[
              "Students register and submit accommodation details.",
              "Administrator verifies student information.",
              "System checks room availability.",
              "Rooms are allocated automatically.",
              "Allocation details are stored in MongoDB.",
              "Occupancy tracking updates in real time.",
              "Student records remain synchronized.",
            ]}

            tech={[
              "Python",
              "Flask",
              "MongoDB",
              "HTML",
              "CSS",
              "JavaScript",
            ]}

            contribution={[
              "Frontend UI Development",
              "Backend Development using Flask",
              "MongoDB Database Design",
              "Room Allocation Logic Implementation",
              "Testing and Validation",
            ]}

            outcome="Successfully automated hostel room allocation and management processes, reducing manual effort while improving efficiency, transparency and data management."
          />

          {/* PROJECT 2 */}

          <ProjectCard
            image={VotingImg}
            title="Quantum Secure Digital Voting System"
            college="Dr. Panjabrao Deshmukh Polytechnic, Amravati"
            github="https://github.com/ishwari-sapkal/Quantum-secure-Digital-voting-system"

            shortDesc="A secure digital voting platform designed to ensure voter authentication, vote integrity, transparency and efficient election management."

            overview="The Quantum Secure Digital Voting System provides a secure voting environment with authentication, transparency and reliable vote management. The project demonstrates how technology can modernize election processes while maintaining trust, security and result accuracy."

            modules={[
              "Voter Registration Module",
              "Candidate Management",
              "Authentication System",
              "Secure Login Module",
              "Vote Casting Module",
              "Election Management",
              "Result Generation System",
            ]}

            working={[
              "Voters register on the platform.",
              "Authentication verifies voter identity.",
              "Eligible voters access the voting dashboard.",
              "Candidates are displayed for selection.",
              "Votes are securely submitted.",
              "Duplicate voting is prevented.",
              "Results are generated automatically.",
            ]}

            tech={[
              "Python",
              "Flask",
              "MongoDB",
              "HTML",
              "CSS",
              "JavaScript",
            ]}

            contribution={[
              "Frontend Design",
              "Authentication System",
              "Database Management",
              "Voting Workflow Implementation",
              "Testing and Security Validation",
            ]}

            outcome="Demonstrated a secure digital election workflow that improves transparency, reduces manual election processes and enhances voter confidence."
          />

          {/* PROJECT 3 */}

          <ProjectCard
            image={SweetDeliveryImg}
            video={SweetVideo}
            title="Sweet Delivery Application"
            college="Personal Full Stack Development Project"
            github="https://github.com/ishwari-sapkal/Sweet-Delivery-Application"

            shortDesc="A complete online sweet ordering platform where users can browse sweets, place orders, track deliveries, manage profiles and receive order updates."

            overview="The Sweet Delivery Application provides customers with a seamless online sweet ordering experience. Users can register, log in securely, browse sweet categories, add products to cart, place orders and track delivery status. The application also provides profile management and order history functionality."

            modules={[
              "User Registration Module",
              "Login & Authentication System",
              "Sweet Catalog Management",
              "Cart Management",
              "Order Placement System",
              "Order Tracking System",
              "SMS Notification Module",
              "Profile Management",
              "Order History Dashboard",
            ]}

            working={[
              "Users register and log in securely.",
              "Customers browse sweets and categories.",
              "Products are added to cart.",
              "Orders are placed through checkout.",
              "Order details are stored in database.",
              "SMS notifications are sent.",
              "Users can track orders in real time.",
              "Order history is available in profile dashboard.",
            ]}

            tech={[
              "Java",
              "XML",
              "mySQL",
            ]}

            contribution={[
              "Complete Frontend Development",
              "Authentication Implementation",
              "Database Design",
              "Cart & Checkout Functionality",
              "Order Tracking Logic",
              "Profile Management",
              "SMS Notification Integration",
            ]}

            outcome="Successfully developed a full-stack e-commerce style sweet delivery platform that streamlines online ordering, delivery tracking and customer management."
          />

        </div>
      </div>
    </>
  );
}