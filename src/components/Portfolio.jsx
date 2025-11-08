import React from 'react';
import Fotboll from '../assets/bildfotboll.png';
import Ecommerce from '../assets/ecommerce2.png';

const Portfolio = () => {
  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>

      <div className="px-20 mt-10">
        <div className="cards w-full flex gap-10">
          
          {/* Ljus box med centrerad bild */}
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden bg-gray-300 flex items-center justify-center">
            <img 
              src={Fotboll} 
              alt="Fotboll" 
              className="w-6/12 h-6/12 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Svart box med centrerad Ecommerce-bild */}
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden bg-black flex items-center justify-center">
            <img 
              src={Ecommerce} 
              alt="Ecommerce" 
              className="w-6/12 h-6/12 object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;

