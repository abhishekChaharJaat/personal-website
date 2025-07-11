import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../images/me3.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F9FBFA] via-[#F0F4F3] to-[#E6ECEA] text-[#394045] px-6 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-2xl sm:text-5xl font-bold mb-4 font-sans text-[#1B2B48]">
              Hi, I'm Abhishek Chahar
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-[#18475A]">
              I'm a passionate Software Engineer specialized in Front-End who
              loves crafting clean, modern, and responsive web interfaces. I
              enjoy turning complex problems into elegant digital experiences.
            </p>

            <div className="flex justify-center md:justify-start gap-6 mb-6 text-2xl text-[#13866F]">
              <a
                href="https://github.com/abhishekChaharJaat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0f5a4c] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="http://linkedin.com/in/abhishek-chahar-jaat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0f5a4c] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0f5a4c] transition-colors"
              >
                <FaTwitter />
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-[#13866F] hover:bg-[#0f5a4c] text-white px-6 py-2 rounded-md transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-[#13866F] hover:bg-[#13866F] hover:text-white px-6 py-2 rounded-md transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="cursor-pointer w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[#13866F] hover:border-[#0f5a4c] transition duration-300">
            <img
              src={profileImage}
              alt="Abhishek Chahar"
              className="object-cover w-full h-full brightness-95 hover:brightness-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
