export default function Navbar() {
  return (
    <nav className="fixed z-[999] w-full px-20 py-8 font-neuemontreal text-black flex justify-between items-center">
      <div className="logo"></div>
      <div className="links flex gap-10">
        {[, "Portfolio", "Info", "Reviews", "Contact"].map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className={`text-lg capitalize font-light ${index === 4 ? "ml-32" : ""}`}
          >
            {item} 
          </a>
        ))}
      </div>
    </nav>
  );
}