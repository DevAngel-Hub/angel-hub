import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = ({ darkMode }) => {
  const contacts = [
    {
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/kristine-angel-tadeo",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={30} />,
      link: "https://github.com/DevAngel-Hub",
      label: "GitHub",
    },
    {
      icon: <MdEmail size={30} />,
      link: "mailto:dev.ktadeo@gmail.com",
      label: "Gmail",
    },
    {
      icon: <FaFacebook size={30} />,
      link: "https://facebook.com/profile.php?id=61577198651572",
      label: "Facebook",
    },
    {
      icon: <FaWhatsapp size={30} />,
      link: "https://wa.me/+639666997764",
      label: "WhatsApp",
    },
  ];

    return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-6 transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-gray-100" : "bg-[#F1F1E8] text-gray-800"}`}
    >
      {/* heading */}
      <h2
        className={`
          text-4xl sm:text-5xl font-extrabold mb-10 text-center animate-pulse
          bg-gradient-to-r bg-clip-text text-transparent transition-colors duration-300
          ${
            darkMode
              ? "from-green-400 via-emerald-400 to-cyan-400"   // dark-mode gradient
              : "from-purple-600 via-pink-500 to-red-500"      // light-mode gradient
          }
        `}
      >
        Contact&nbsp;Me
      </h2>

      {/* icon grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map(({ icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transform hover:scale-110 transition-transform duration-300"
          >
            <div
              className={`p-4 rounded-full shadow-lg transition-colors duration-300
                ${darkMode
                  ? "bg-gray-800 text-white shadow-green-400/30 group-hover:bg-green-700"
                  : "bg-white text-gray-900 shadow-purple-400/30 group-hover:bg-purple-100"}`}
            >
              {icon}
            </div>
            <span
              className={`text-sm font-medium
                ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;