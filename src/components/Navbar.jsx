import React from 'react';

export default function Navbar() {
  const items = ["Portfolio", "Info", "Reviews", "Contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed z-[999] w-full px-20 py-8 font-neuemontreal text-black flex justify-between items-center">
      <div className="logo"></div>
      <div className="links flex gap-10">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item)}
            className="text-lg capitalize font-light"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
