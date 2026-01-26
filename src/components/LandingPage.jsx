import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

function LandingPage() {
  // Remove the video-related state
  // const [showVideo, setShowVideo] = useState(true);
  // const [countdown, setCountdown] = useState(3);

  // Comment out the countdown effect
  /*
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
  */

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
