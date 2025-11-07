import React, { useRef, useState, useEffect } from 'react';
import PortImage from '../assets/greenport.png';

export const Eyes = () => {
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const targetOpacityRef = useRef(0); 
  const prevScrollYRef = useRef(0);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - prevScrollYRef.current;

      targetOpacityRef.current += scrollDiff / 500;
      if (targetOpacityRef.current > 1) targetOpacityRef.current = 1;
      if (targetOpacityRef.current < 0) targetOpacityRef.current = 0;

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
        if (Math.abs(diff) < 0.001) return targetOpacityRef.current;
        return prev + step;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const getPupilStyle = (eyeRef) => {
    if (!eyeRef.current) return { transform: 'translate(0, 0)' };
    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;

    const radius = rect.width / 4;
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), radius);

    const angle = Math.atan2(dy, dx);
    const x = distance * Math.cos(angle);
    const y = distance * Math.sin(angle);

    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <>
      
      <div
        className="w-full relative flex justify-center items-start bg-white"
        onMouseMove={handleMouseMove}
      >
        <img
          src={PortImage}
          alt="Eyes Portfolio"
          className="w-[60vw] max-w-[800px] h-auto shadow-lg object-contain mt-0"
        />

      
        <div
          className="absolute top-0 left-0 w-full h-full bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        ></div>

     
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20vw] h-[20vw] flex justify-center items-start gap-6 pt-4">
          <div className="flex items-center justify-center w-[8vw] h-[8vw] rounded-full bg-zinc-100">
            <div
              ref={eye1Ref}
              className="flex items-center justify-center w-3/4 h-3/4 rounded-full bg-zinc-900 relative overflow-hidden"
            >
              <div
                className="w-1/4 h-1/4 rounded-full bg-zinc-100 absolute"
                style={getPupilStyle(eye1Ref)}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[8vw] h-[8vw] rounded-full bg-zinc-100">
            <div
              ref={eye2Ref}
              className="flex items-center justify-center w-3/4 h-3/4 rounded-full bg-zinc-900 relative overflow-hidden"
            >
              <div
                className="w-1/4 h-1/4 rounded-full bg-zinc-100 absolute"
                style={getPupilStyle(eye2Ref)}
              ></div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full zinc-900" style={{ height: '100vh' }}></div>
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
