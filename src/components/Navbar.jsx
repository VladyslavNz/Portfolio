import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close the menu on mobile
  };

  return (
    <nav className="py-10 px-10 xl:px-32 flex items-center justify-between text-gray-200">
      {/* Logo / Title */}
      <div className="flex items-center">
        <h2 className="text-xl font-bold tracking-wide transition-colors duration-200">
          Portfolio
        </h2>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
          className="font-medium hover:text-blue-400 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => handleScroll(e, "skills")}
          className="font-medium hover:text-blue-400 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className="font-medium hover:text-blue-400 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="font-medium hover:text-blue-400 transition-colors duration-300"
        >
          Contact
        </a>
        <div className="flex items-center space-x-4 text-2xl">
          <a
            className="hover:text-blue-500 text-blue-400 hover:scale-110 transition-transform duration-300"
            href="https://www.linkedin.com/in/aditya-tiwari-31b785250/"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-gray-500 hover:scale-110 transition-transform duration-300"
            href="https://github.com/Adityatitu01"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-2xl hover:text-gray-500 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 z-50 shadow-lg flex flex-col items-center space-y-6 py-6 md:hidden">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
          <div className="flex items-center space-x-4 text-2xl">
            <a
              className="hover:text-blue-500 hover:scale-110 transition-transform duration-300"
              href="https://www.linkedin.com/in/aditya-tiwari-31b785250/"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-gray-500 hover:scale-110 transition-transform duration-300"
              href="https://github.com/Adityatitu01"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
