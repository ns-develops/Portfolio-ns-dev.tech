import { motion } from "framer-motion";
import Fotboll from "../assets/football.png";
import Ecommerce from "../assets/testphone.png";

const Portfolio = () => {
  const fyde = "";
  const vise = "";

  return (
    <div className="w-full bg-white text-black min-h-screen">
      <div className="w-full px-6 md:px-20 border-b border-zinc-800 pb-4 md:pb-8">
        <h1 className="text-4xl md:text-8xl font-semibold tracking-tight">
          Featured projects
        </h1>
      </div>

      {/* PROJECTS */}
      <div className="px-6 md:px-20 mt-10 md:mt-20 flex flex-col md:flex-row flex-wrap gap-10">

        {/* PROJECT 1 */}
        <div className="flex flex-col w-full md:w-[48%]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="text-sm font-semibold">Sportly.se</span>
          </div>

          <a href="https://www.sportly.se" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="relative group rounded-xl h-64 md:h-[75vh] overflow-hidden flex items-center justify-center bg-gray-200"
              whileHover={{ scale: 0.95, filter: "brightness(0.8)" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <img
                src={Fotboll}
                alt="Sportly"
                className="w-8/12 md:w-6/12 rounded-xl shadow-lg"
              />

              <h1 className="absolute top-1/2 right-1/4 -translate-y-1/2 text-3xl md:text-6xl font-bold text-[#CDEA68] flex">
                {fyde.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </motion.div>
          </a>

          <div className="mt-4 flex gap-2 flex-wrap">
            <button className="px-4 py-2 text-sm border rounded-full">mern</button>
            <button className="px-4 py-2 text-sm border rounded-full">jwt</button>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="flex flex-col w-full md:w-[48%]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="text-sm font-semibold">Sustainable E-commerce</span>
          </div>

          <a
            href="https://e-commerce-web-next-js-36sp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="relative group rounded-xl h-64 md:h-[75vh] overflow-hidden flex items-center justify-center bg-gray-200"
              whileHover={{ scale: 0.95, filter: "brightness(0.8)" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <img
                src={Ecommerce}
                alt="Ecommerce"
                className="w-8/12 md:w-6/12 rounded-xl shadow-lg"
              />

              <h1 className="absolute top-1/2 left-1/4 -translate-y-1/2 text-3xl md:text-6xl font-bold text-[#CDEA68] flex">
                {vise.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </motion.div>
          </a>

          <div className="mt-4 flex gap-2 flex-wrap">
            <button className="px-4 py-2 text-sm border rounded-full">stripe</button>
            <button className="px-4 py-2 text-sm border rounded-full">e-commerce</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
