import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { throttle } from "lodash";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolling(window.scrollY > 50);
    }, 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[50%] flex justify-around items-center py-3 px-6 rounded-full transition-all duration-300 z-50
        ${darkMode ? "bg-indigo-900/40 backdrop-blur-md shadow-md" : "bg-white/60 backdrop-blur-lg shadow-lg"}
        ${scrolling ? "scale-95" : "scale-100"}
      `}
    >
      {/* Home */}
      <Link
        to="/"
        className={`nav-item ${location.pathname === "/" ? "text-indigo-500" : "text-gray-700"} hover:text-indigo-500 transition-colors duration-200`}
        aria-label="Home"
      >
        <FaHome size={24} />
      </Link>

      {/* About */}
      <Link
        to="/about"
        className={`nav-item ${location.pathname === "/about" ? "text-indigo-500" : "text-gray-700"} hover:text-indigo-500 transition-colors duration-200`}
        aria-label="About"
      >
        <FaUser size={24} />
      </Link>

      {/* Projects */}
      <Link
        to="/projects"
        className={`nav-item ${location.pathname === "/projects" ? "text-indigo-500" : "text-gray-700"} hover:text-indigo-500 transition-colors duration-200`}
        aria-label="Projects"
      >
        <FaBriefcase size={24} />
      </Link>

      {/* Contact */}
      <Link
        to="/contact"
        className={`nav-item ${location.pathname === "/contact" ? "text-indigo-500" : "text-gray-700"} hover:text-indigo-500 transition-colors duration-200`}
        aria-label="Contact"
      >
        <FaEnvelope size={24} />
      </Link>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="rounded-full transition-all"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <FaMoon size={20} className="text-white hover:text-gray-300 transition-colors duration-200" />
        ) : (
          <FaSun size={20} className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;