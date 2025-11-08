import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

function LandingPage() {
  const [showVideo, setShowVideo] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (showVideo && countdown > 0) {
      const countdownTimer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdownTimer);
    }

    if (countdown === 0) {
      const timer = setTimeout(() => setShowVideo(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, showVideo]);

  const lines = ["NS DEV", "We Create", "Signature"];
  const subtitles = [
    "Empowering startups and enterprise-level businesses",
    "Code meets solution",
  ];

  const blinkStyle = {
    animation: "blink 1s infinite",
  };

  const styles = `
    @keyframes blink {
      0%, 100% { color: white; }
      50% { color: black; }
    }
  `;

  if (showVideo) {
    return (
      <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
        <video
          src="brus.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[10vw] font-bold"
            style={{ color: "#cb364e", transition: "opacity 0.3s ease" }}
          >
            {countdown > 0 ? countdown : ""}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-white pt-1">
      <style>{styles}</style>

      <div className="px-20 textstructure mt-10 pt-20">
        <div className="space-y-6">
          {lines.map((item, index) => (
            <div
              key={index}
              className="masker font-[Founders_Grotesk] font-semibold"
            >
              <h1 className="uppercase text-black text-9xl leading-[5.5vw] tracking-tighter">
                {item}
              </h1>
            </div>
          ))}
        </div>

        <div className="border-t-[1px] border-zinc-800 mt-32"></div>

        <div className="flex justify-between mt-4">
          {subtitles.map((item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none text-zinc-700"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <SlArrowDown className="text-4xl" style={blinkStyle} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;



{/*import React from 'react'

function LandingPage() {
  return (
<div className="w-full h-screen bg-zinc-900 pt-1">
  <div className="px-20 pt-20 textstructure mt-10 
                 uppercase text-white leading-[6.5vw] tracking-tighter 
                 font-['Founders_Grotesk'] font-semibold"> 
    
    <div className="masker mb-2">
      <h1 className="text-9xl mb-0">
        NS DEV
      </h1>
    </div>
    
    <div className="masker mb-2">
      <h1 className="text-9xl mb-0">
        WE CREATE
      </h1>
   </div>
   
   <div className="masker mb-2">
      <h1 className="text-9xl mb-0">
        SIGNATURE
      </h1>
   </div>
  </div>
</div>

  )
}}
{/*import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
          
            <div className="masker font-['Founders_Grotesk']">
                <h1 className='uppercase text-white text-9xl leading-none tracking-tight'>We Create</h1>
            </div>
        </div>
    </div>
  )
}

export default LandingPage */}