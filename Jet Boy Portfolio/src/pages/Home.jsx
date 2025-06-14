import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const titles = ["Web Developer", "Game Developer"];
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const colorValues = ["#dc2626", "#2563eb", "#16a34a", "#ca8a04", "#9333ea"];
  const [colorIndex, setColorIndex] = useState(0);
  const [headingColorIndex, setHeadingColorIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[index];
      if (isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
        setColorIndex((prev) => (prev + 1) % colorValues.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, titles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingColorIndex((prev) => (prev + 1) % colorValues.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            JB
          </div>
          <h1 className="text-xl font-semibold">Jet Boy Abordaje</h1>
        </div>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About Me</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16 bg-gray-100">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold mb-2 transition-colors duration-1000" style={{ color: colorValues[colorIndex] }} > Hi, I’m John Doe </h2>

          <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
            Aspiring {typedText}
            <span className="animate-pulse">|</span>
          </h3>

          <p className="text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium animate-pulse">
            I build sleek and responsive web applications.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Resume Download
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Let’s Connect
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="md:w-1/2 flex flex-col items-center gap-4 mt-8 md:mt-0">
          <div className="w-40 h-40 rounded-full border-4 border-blue-500 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-sm text-gray-500">Profile</span>
          </div>
          <div className="flex space-x-4 text-2xl text-black">
            <FaFacebook className="hover:scale-125 transition-transform duration-300 hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:scale-125 transition-transform duration-300 hover:text-pink-500 cursor-pointer" />
            <FaGithub className="hover:scale-125 transition-transform duration-300 hover:text-gray-800 cursor-pointer" />
            <FaLinkedin className="hover:scale-125 transition-transform duration-300 hover:text-blue-700 cursor-pointer" />
            
            
            
            
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h2 className="text-2xl font-bold mb-6">What I Do / Services Offered</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="Web" className="transition-transform duration-200 group-hover:scale-125" >💻</span> Web Development
            </li>
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="Design" className="transition-transform duration-200 group-hover:scale-125" >🎨</span> UI/UX Design
            </li>
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="Game" className="transition-transform duration-200 group-hover:scale-125" >🎮</span> Game Development
            </li>
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="Mobile" className="transition-transform duration-200 group-hover:scale-125" >📱</span> Mobile Development
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">More About What I Offer</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="Architecture" className="transition-transform duration-200 group-hover:scale-125" >🔧</span> Full-Stack App Developer
            </li>
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="API" className="transition-transform duration-200 group-hover:scale-125" >🗐️</span> API Integration and Automation
            </li>
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="Data" className="transition-transform duration-200 group-hover:scale-125" >📊</span> Data Visualization Dashboards
            </li>
            <li className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105">
              <span role="img" aria-label="Testing" className="transition-transform duration-200 group-hover:scale-125" >🧪</span> Testing and Debugging
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
