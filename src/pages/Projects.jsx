import React from "react";

const projects = [
  {
    title: "AdmitUAce: University Admission System",
    description: "A Capstone project developed to modernize the College Placement Test application platform of the University of Abra. The system streamlines application processing for both students and administrators. Built with PHP, JavaScript, Bootstrap, CSS, and MySQL, it features dynamic forms, admin panel, automated notifications, and responsive design.",
    link: "https://github.com/DevAngel-Hub/AdmitUAce_Screenshots",
  },
  {
    title: "Entry Tracking System",
    description: "Developed during internship at eFlexervices, this internal system logs employee entry using facial recognition and manual input. Built with PHP, JavaScript, Tailwind CSS, and MySQL. Deployed on ByetHost and tested on iOS touchscreen devices (iPads), it includes admin filtering tools, time logs, and Excel export features.",
    link: "https://github.com/DevAngel-Hub/Entry-Tracking-System-Screenshots",
  },
  {
    title: "Inventory Management System",
    description: "A school project that includes both client and server functionality. Built with Node.js, Express.js, Tailwind CSS, and MySQL, the system allows inventory tracking, user management, and data operations through RESTful APIs and dynamic UI. Designed for scalability and clean code structure.",
    link: "https://github.com/DevAngel-Hub/tadeo-kristine-angel-inventory-system",
  },
  {
    title: "Personal Portfolio Website",
    description: "This responsive and modern portfolio showcases my web development projects and skills. Developed using Node.js, Express.js, and Tailwind CSS. Features include project highlights, contact form, and structured sections for professional information.",
    link: "https://link-to-project3.com",
  },
  {
    title: "All Blue Travel & Leisure Website",
    description: "A group project built with Wix for a fictional travel and leisure agency. The site allows users to explore destinations, book flights and cruises, and browse travel packages. Focused on visual aesthetics and user navigation with a professional, commercial layout.",
    link: "https://tenshinoms.wixsite.com/all-blue-travels",
  },
  {
    title: "Wix Portfolio Website",
    description: "A personal project showcasing my design and content creation skills using Wix. The site serves as an early version of my portfolio, featuring my background, education, and past works with an emphasis on user-friendly layout and mobile responsiveness.",
    link: "https://tenshinoms.wixsite.com/angeltadeohub",
  },
  // Add more projects as needed
];

const Projects = ({ darkMode }) => {
  return (
    <section className={`min-h-screen px-6 py-12 lg:px-20 xl:px-32 transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-[#F1F1E8] text-gray-800"}`}
    >
      <div className="container mx-auto px-4 py-12">
        <h2
          className={`text-4xl font-extrabold text-center mb-10 ${
            darkMode ? "text-green-400" : "text-purple-600"
          }`}
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                darkMode
                  ? "bg-gray-800 text-white shadow-2xl"
                  : "bg-white text-gray-900 shadow-lg"
              } rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  darkMode ? "text-green-400" : "text-purple-600"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode ? "text-blue-400" : "text-blue-600"
                } font-medium hover:underline`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;