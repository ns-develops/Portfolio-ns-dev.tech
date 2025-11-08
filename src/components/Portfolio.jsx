import React from 'react';
import Fotboll from '../assets/bildfotboll.png';
import Ecommerce from '../assets/ecommerce1.png';

const Portfolio = () => {
  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-20">
        <h1 className="text-8xl font-semibold['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>

      <div className="px-20 mt-10 relative">
        <div className="cards w-full flex gap-10 relative">
          
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden bg-gray-300 flex items-center justify-center">
            <img 
              src={Fotboll} 
              alt="Fotboll" 
              className="w-6/12 h-6/12 object-cover rounded-xl shadow-lg"
            />
          </div>

     
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden bg-black flex items-center justify-center">
            <img 
              src={Ecommerce} 
              alt="Ecommerce" 
              className="w-6/12 h-6/12 object-cover shadow-lg"
            />
          </div>

       
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white">
            FYDE
          </h1>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;

