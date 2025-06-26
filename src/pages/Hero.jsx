import React from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/images/A1.png";

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-r from-midnight-blue via-dark-blue to-indigo-800"
            : "bg-gradient-to-r from-orchid via-pink-500 to-blueviolet"
        } opacity-50`}
      ></div>

      {/* Logo */}
      <div className="mt-20 sm:mt-6">
        <img src={logo} alt="Logo" className="w-32 sm:w-40 mx-auto my-0" />
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center transition-all duration-500">
        Junior <span className="text-indigo-300 dark:text-indigo-500">Web Developer</span>
      </h1>

      {/* Typewriter Text */}
      <p className="text-base sm:text-lg md:text-xl text-opacity-75 mt-3 transition-all duration-500">
        I specialize in{" "}
        <span className="font-semibold text-indigo-300 dark:text-indigo-400">
          <Typewriter words={["HTML", "TailwindCSS", "Bootstrap", "JavaScript", "React", "Node", "Express", "PHP", "MySQL", "Git", "Python Basics",]} loop={0} cursor cursorColor="white" />
        </span>
        .
      </p>

      {/* Responsive Layout for Quote, Image, and Mission */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-8 md:gap-16 w-full px-4">
        {/* Left Side - Designer */}
        <div className="w-full md:w-1/3 text-center md:text-right px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif">
            Designer
            </h2>
            <p className="italic text-opacity-60 mt-2 sm:mt-3 text-sm sm:text-base">
            Crafting visually stunning and user-friendly web experiences with a focus on aesthetics, branding, and UI/UX design.
            </p>
        </div>

        {/* Center - Profile Image */}
        <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg mx-auto md:mx-0">
          <img src={require("../assets/images/gel.png")} alt="Profile" className="w-full h-full object-cover scale-110" />
        </div>

        {/* Right Side - Coder */}
        <div className="w-full md:w-1/3 text-center md:text-left px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif">
            &lt;Coder&gt;
            </h2>
            <p className="text-opacity-75 mt-2 sm:mt-3 text-sm sm:text-base">
            Writing efficient, scalable, and secure backend code to power web applications and ensure seamless functionality.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;