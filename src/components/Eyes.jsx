import React from 'react';
import RetroEntryVideo from '../assets/retroentry.MOV';

export const Eyes = () => {
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
};
