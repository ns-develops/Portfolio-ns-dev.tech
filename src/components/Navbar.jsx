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
    <nav className="fixed z-[999] w-full px-20 py-8 font-neuemontreal text-black flex justify-end items-center">
      <div className="links flex gap-10">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item)}
            className={`relative text-lg capitalize font-light group overflow-hidden ${
              item === "Contact" ? "ml-16" : ""
            }`}
          >
      
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>

            <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>

            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>
    </nav>
  );
}
