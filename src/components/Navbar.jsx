import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = ["Portfolio", "Info", "Reviews", "Contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed z-[999] w-full px-6 md:px-20 py-6 font-neuemontreal text-black bg-white">
      <div className="flex justify-between items-center">

        <span className="text-sm font-light"></span>

        <div className="hidden md:flex gap-10 items-center">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item)}
              className={`relative text-sm capitalize font-light group overflow-hidden ${
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

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[1px] bg-black"></span>
          <span className="w-6 h-[1px] bg-black"></span>
          <span className="w-6 h-[1px] bg-black"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-10 flex flex-col gap-6">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item)}
              className="text-left text-lg font-light capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
