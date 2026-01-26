import React from "react";
import { SlArrowDown } from "react-icons/sl";

function LandingPage() {
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

  return (
    <div className="w-full h-screen bg-white pt-1">
      <style>{styles}</style>

      <div className="px-6 md:px-20 textstructure mt-10 pt-20">
        <div className="space-y-4 md:space-y-6">
          {lines.map((item, index) => (
            <div
              key={index}
              className="masker font-[Founders_Grotesk] font-semibold"
            >
              <h1 className="
                uppercase text-black 
                text-[12vw] sm:text-[10vw] md:text-9xl
                leading-[10vw] sm:leading-[8vw] md:leading-[5.5vw]
                tracking-tighter
              ">
                {item}
              </h1>
            </div>
          ))}
        </div>

        <div className="border-t-[1px] border-zinc-800 mt-20 md:mt-32"></div>

        <div className="flex justify-between mt-4 gap-4">
          {subtitles.map((item, index) => (
            <p
              key={index}
              className="text-sm md:text-md font-light tracking-tight leading-snug text-zinc-700 max-w-[45%]"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <SlArrowDown className="text-3xl md:text-4xl" style={blinkStyle} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
