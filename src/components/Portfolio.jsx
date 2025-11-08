import React from 'react';
import Fotboll from '../assets/bildfotboll.png';
import Ecommerce from '../assets/ecommerce1.png';

const Portfolio = () => {
  const fyde = "FYDE";
  const vise = "VISE";

  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-32">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight font-semibold">
          Featured projects
        </h1>
      </div>

      <div className="px-20 mt-20 flex gap-10 relative">

        <div className="flex flex-col w-1/2">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <span className="text-white text-sm font-semibold">Sportly.se</span>
          </div>

          <div className="cardcontainer relative group rounded-xl h-[75vh] overflow-hidden flex items-center justify-center bg-gray-300">
            <img 
              src={Fotboll} 
              alt="Fotboll" 
              className="w-6/12 h-6/12 object-cover rounded-xl shadow-lg"
            />
            <h1 className="absolute top-1/2 right-[20%] -translate-y-1/2 text-6xl font-bold text-[#CDEA68] flex">
              {fyde.split("").map((letter, index) => (
                <span
                  key={index}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          <div className="mt-4 flex gap-4 justify-start">
            <button className="px-6 py-3 border border-white text-white bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-colors">
              mern
            </button>
            <button className="px-6 py-3 border border-white text-white bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-colors">
              json webtoken
            </button>
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <span className="text-white text-sm font-semibold">Sustainable E-commerce</span>
          </div>

          <div className="cardcontainer relative group rounded-xl h-[75vh] overflow-hidden flex items-center justify-center bg-black">
            <img 
              src={Ecommerce} 
              alt="Ecommerce" 
              className="w-6/12 h-6/12 object-cover shadow-lg"
            />
            <h1 className="absolute top-1/2 left-[20%] -translate-y-1/2 text-6xl font-bold text-[#CDEA68] flex">
              {vise.split("").map((letter, index) => (
                <span
                  key={index}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          <div className="mt-4 flex gap-4 justify-start">
            <button className="px-6 py-3 border border-white text-white bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-colors">
              stripe
            </button>
            <button className="px-6 py-3 border border-white text-white bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-colors">
              e-commerce
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
