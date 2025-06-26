import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaPhp, FaJs, FaPython, FaUsers, FaClock, FaBrain, FaWrench, FaWindows, FaLinux, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiBootstrap, SiWix, SiApache, SiDotnet } from "react-icons/si";
const About = ({ darkMode }) => {
  const [title, setTitle] = useState("System Initializing...");

  useEffect(() => {
    setTimeout(() => setTitle("getToKnowMe.exe"), 3000);
    setTimeout(() => setTitle("Behind the Code"), 6000);
  }, []);

  return (
    <section className={`min-h-screen px-6 py-12 lg:px-20 xl:px-32 transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-[#F1F1E8] text-gray-800"}`}
    >
      <div className="max-w-5xl mx-auto mt-10">
        {/* Animated Title */}
        <h2 className={`text-center text-2xl md:text-3xl font-mono ${darkMode ? "text-green-400" : "text-purple-600"}`}>
          {title} <span className="animate-pulse">█</span>
        </h2>

        {/* About Me */}
        <h1 className="text-xs md:text-xl font-mono text-center mt-1 text-red-400">
          &lt;meta name="about" content="Angel Tadeo" /&gt;
        </h1>
        <div className={`p-6 rounded-lg shadow-lg mt-3 text-justify border border-green-500 
          ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-900"}`}>
          <p className="text-lg leading-relaxed">
            <span className="text-green-600 text-xl">👾 Greetings, traveler of the digital realm!</span>
            <br /> I’m <b>Angel</b>, but you can call me <b>Tenshi</b>—a byte-sized architect of the web, a CSS spellcaster 🪄, and an occasional bug tamer 🐛.
          </p>
          <p className="mt-4">
            My journey began with endless hours on <b>Y8 and Y3.com</b>, sneaking into computer shops to play Facebook games until midnight—thinking I was mastering technology, when really, I was just mastering the art of convincing my parents I had ‘school work.’
            Then quickly escalated into an endless loop of debugging, creating, and breaking things just to fix them again. Now, I build digital experiences that (hopefully) don’t crash and burn. 🚀
          </p>
          <p className="mt-4 font-mono text-green-600">
            📟<b className="text-red-400">Current Status:</b> Debugging Life v2.0...<br />
            💾<b className="text-red-400">Mission:</b> Turning caffeine into code & chaos into creativity.<br />
            🕹<b className="text-red-400">Cheat Code:</b> Press <b>Ctrl + Z</b> if things get messy.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-10">
          <h3 className={`text-2xl font-semibold text-center mb-4 ${darkMode ? "text-green-400" : "text-purple-600"}`}>Tech Stack</h3>
          <h5 className="text-lg font-semibold text-center m-4">Web Servers</h5>
          <div className="flex flex-wrap justify-center gap-3">
            <TechIcon Icon={SiApache} name="Apache" color="text-red-500" />
          </div>
          <h5 className="text-lg font-semibold text-center m-4">Operating Systems</h5>
          <div className="flex flex-wrap justify-center gap-3">
            <TechIcon Icon={FaLinux} name="Linux" color="text-orange-500" />
            <TechIcon Icon={FaWindows} name="Windows" color="text-blue-600" />
          </div>
          <h5 className="text-lg font-semibold text-center m-4">Programming Languages</h5>
          <div className="flex flex-wrap justify-center gap-3">
            <TechIcon Icon={FaPhp} name="PHP" color="text-indigo-600" />
            <TechIcon Icon={FaJs} name="JavaScript" color="text-yellow-500" />
            <TechIcon Icon={FaPython} name="Python" color="text-blue-600" />
            <TechIcon Icon={SiDotnet} name="VB.Net" color="text-purple-600" />
          </div>  
          <h5 className="text-lg font-semibold text-center m-4">Frameworks & Libraries</h5>
          <div className="flex flex-wrap justify-center gap-3">  
            <TechIcon Icon={FaReact} name="React.js" color="text-blue-500" />
            <TechIcon Icon={FaNodeJs} name="Node.js" color="text-green-500" />
            <TechIcon Icon={SiExpress} name="Express.js" color="text-gray-600" />
            <TechIcon Icon={SiTailwindcss} name="Tailwind CSS" color="text-cyan-500" />
            <TechIcon Icon={SiBootstrap} name="Bootstrap CSS" color="text-purple-500" />
          </div>
          <h5 className="text-lg font-semibold text-center m-4">Content Management Systems</h5>
          <div className="flex flex-wrap justify-center gap-3"> 
            <TechIcon Icon={FaWordpress} name="WordPress" color="text-blue-400" />
            <TechIcon Icon={SiWix} name="Wix" color="text-gray-500" />
          </div>
          <h5 className="text-lg font-semibold text-center m-4">Database</h5>
          <div className="flex flex-wrap justify-center gap-3">  
            <TechIcon Icon={SiMysql} name="MySQL" color="text-blue-700" />
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-10">
          <h3 className={`text-2xl font-semibold text-center mb-6 ${darkMode ? "text-green-400" : "text-purple-600"}`}>Education</h3>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-600"></div>
            <EducationItem 
              year="2021 - 2025" 
              title="BS in Information Technology" 
              school="University of Abra" 
              details={
                <>
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Major: Web Technologies & Management</p>
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Thesis: <b>AdmitUAce</b> - Modernizing the College Placement Test Application Platform</p>
                </>
              }
            />
            <EducationItem year="2019 - 2021" title="Senior High - ICT Strand" school="Data Center College of the Philippines - Bangued" />
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-10">
          <h3 className={`text-2xl font-semibold text-center mb-4 ${darkMode ? "text-green-400" : "text-purple-600"}`}>Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard Icon={FaBrain} title="Analytical Thinking & Troubleshooting" />
            <SkillCard Icon={FaUsers} title="Teamwork & Collaboration" />
            <SkillCard Icon={FaWrench} title="Quick Learner & Adaptability" />
            <SkillCard Icon={FaClock} title="Efficient Task Management & Deadlines" />
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <h3 className={`text-2xl font-semibold text-center mb-6 ${darkMode ? "text-green-400" : "text-purple-600"}`}>Certifications</h3>

          <div className={`p-6 rounded-lg shadow-lg border border-green-500 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
            <ul className={`text-lg space-y-3 ${darkMode ? "text-gray-100" : "text-black"}`}>
              <li className="flex items-center gap-2">
                <span>✅</span> Civil Service Exam - Professional Level (2023)
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span> NCII CSS TESDA (2020-2024)
              </li>
              
              {/* Fortinet Certifications */}
              <li className="mt-2 font-semibold">Fortinet:</li>
              <li className="flex items-center gap-2">
                <span>🔹</span> Introduction to the Threat Landscape 2.0
              </li>
              <li className="flex items-center gap-2">
                <span>🔹</span> Fortinet FortiGate 7.4 Operator
              </li>
              <li className="flex items-center gap-2">
                <span>🔹</span> Fortinet Certified Associate Cybersecurity
              </li>

              {/* Cisco Certifications */}
              <li className="mt-2 font-semibold">Cisco:</li>
              <li className="flex items-center gap-2">
                <span>🔹</span> Introduction to Modern AI
              </li>
              <li className="flex items-center gap-2">
                <span>🔹</span> Introduction to Data Science
              </li>

              {/* IBM / Cisco */}
              <li className="mt-2 font-semibold">IBM / Cisco:</li>
              <li className="flex items-center gap-2">
                <span>🔹</span> Artificial Intelligence Fundamentals
              </li>
            </ul>

            {/* View Certifications Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a 
                href="https://www.credly.com/users/kristine-angel-tadeo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-5 rounded-lg transition-all duration-300"
              >
                View My Certifications
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1zrmugYKyz64d1OKzdE6SlGRuPCyqMGh3?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-center font-medium py-2 px-5 rounded-lg transition-all duration-300"
              >
                DICT Webinars
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

// Tech Stack Button Component
const TechIcon = ({ Icon, name, color }) => (
  <div className="flex flex-col items-center dark:bg-gray-800 bg-gray-200 shadow-md rounded-lg p-3 w-20 sm:w-24">
    <Icon className={`text-2xl sm:text-3xl ${color}`} />
    <p className="text-xs sm:text-sm mt-1 font-medium dark:text-gray-200 text-gray-800">{name}</p>
  </div>
);

// Education Timeline Component (Fixed Centered Circles)
const EducationItem = ({ year, title, school, details }) => (
  <div className="relative flex items-center justify-between w-full mb-10">
    <div className="w-1/2 text-right pr-6">
      <h4 className="text-lg md:text-xl font-semibold text-green-600">{year}</h4>
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-gray-900"></div>
    <div className="w-1/2 pl-6">
      <h4 className="text-lg md:text-xl font-semibold">{title}</h4>
      <p className="text-sm md:text-base text-gray-500">{school}</p>
      {details}
    </div>
  </div>
);

// Core Competencies Card Component
const SkillCard = ({ Icon, title }) => (
  <div className="flex items-center dark:bg-gray-800 bg-gray-200 p-4 rounded-lg shadow-md">
    <Icon className="text-green-400 text-3xl mr-4" />
    <p className="text-lg font-medium dark:text-gray-200 text-gray-800">{title}</p>
  </div>
);

export default About;