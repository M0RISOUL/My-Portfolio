import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-8">
      <div className="text-4xl font-bold">Jet Boy Abordaje</div>
      <nav className="space-x-4 text-purple-700">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
