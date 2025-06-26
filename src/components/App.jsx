import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { getServerStatus } from "../api";

function App() {
  const [status, setStatus] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Load dark mode preference
  });

  useEffect(() => {
    getServerStatus().then(setStatus);
  }, []);

  // Save dark mode preference in localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
<Router>
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
          <Route path="/" element={<Hero darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
    </div>
</Router>
  );
};

export default App;