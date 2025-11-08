import React from 'react';

const Portfolio = () => {
  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      
      {/* Header */}
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="px-20 mt-10">
        <div className="cards w-full flex gap-10">
          
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden">
            <div className="card w-full h-full rounded-xl bg-green-600"></div>
           {/* <img className="w-full h-full" src="" alt""/>*/}
          </div>

          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden">
            <div className="card w-full h-full rounded-xl bg-green-600"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
 