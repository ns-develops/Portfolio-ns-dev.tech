import React, { useRef, useState, useEffect } from 'react';
import '../input.css';

export const Eyes = () => {
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [overlayOpacity, setOverlayOpacity] = useState(0); // Börjar på 0
  const targetOpacityRef = useRef(0); 
  const prevScrollYRef = useRef(0);

  const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - prevScrollYRef.current;

      targetOpacityRef.current += scrollDiff / 500;
      targetOpacityRef.current = Math.min(Math.max(targetOpacityRef.current, 0), 1);

      prevScrollYRef.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setOverlayOpacity(prev => {
        const diff = targetOpacityRef.current - prev;
        const step = diff * 0.1; 
        return Math.abs(diff) < 0.001 ? targetOpacityRef.current : prev + step;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const getPupilStyle = (eyeRef) => {
    if (!eyeRef.current) return { transform: 'translate(0, 0)' };
    const rect = eyeRef.current.getBoundingClientRect();
    const dx = mousePos.x - (rect.left + rect.width / 2);
    const dy = mousePos.y - (rect.top + rect.height / 2);
    const radius = rect.width / 4;
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), radius);
    const angle = Math.atan2(dy, dx);
    return { transform: `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)` };
  };

  return (
    <>
      <div
        className="w-full relative flex flex-col justify-center items-center bg-white"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-zinc-900 pointer-events-none"
          style={{ opacity: overlayOpacity }}
        ></div>

        <h2 className="absolute top-[10%] left-[5%] text-[2vw] font-montserrat text-zinc-700 select-none tracking-widest">
          ART & DESIGN
        </h2>

        <h2 className="absolute top-[10%] right-[5%] text-[2vw] font-montserrat text-zinc-900 select-none tracking-widest">
          EST.
        </h2>

        {overlayOpacity > 0 && (
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[20vw] h-[20vw] flex justify-center items-start gap-6 pt-4">
            {[eye1Ref, eye2Ref].map((ref, i) => (
              <div key={i} className="flex items-center justify-center w-[8vw] h-[8vw] rounded-full bg-zinc-100">
                <div
                  ref={ref}
                  className="flex items-center justify-center w-3/4 h-3/4 rounded-full bg-zinc-900 relative overflow-hidden"
                >
                  <div
                    className="w-1/4 h-1/4 rounded-full bg-zinc-100 absolute"
                    style={getPupilStyle(ref)}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        <h1 className="text-[8vw] font-montserrat text-zinc-900 mt-[35vh] select-none">
          Portfolio
        </h1>
      </div>

      <div className="w-full bg-zinc-900" style={{ height: '100vh' }}></div>
    </>
  );
};




//import ResumeImage from '../assets/boldresume.png';

   {/*  <img
        src={ResumeImage}
        alt="Resume"
        className="max-w-4xl w-full h-auto object-contain"
      /> */}

//import RetroEntryVideo from '../assets/retroentry.MOV';

{/* export const Eyes = () => {
  return (
<div className="eyes w-full h-screen overflow-hidden relative zinc-800 flex justify-center">
  <video
    className="mt-16 w-full h-auto object-contain"
    src={RetroEntryVideo}
    autoPlay
    loop
    muted
  />
<div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4">
  <h1 className="text-white text-4xl">NEW</h1>
  <h1 className="text-white text-4xl">TEMPORARY</h1>
</div>
</div>

  );
};*/}
