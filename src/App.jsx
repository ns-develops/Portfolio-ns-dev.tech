import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { Marquee } from './components/Marquee';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white">
      <Navbar />
      <LandingPage/>
      <Marquee/>
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="p-8 rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  );
}
