import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { Marquee } from './components/Marquee';
import Info from './components/Info';
import { Eyes } from './components/Eyes';
import Portfolio from './components/Portfolio';


//

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white">
      <Navbar />
      <LandingPage/>
      <Marquee/>
      <Info/>
      <Eyes/>
      <Portfolio/>

      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="p-8 rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  );
}
