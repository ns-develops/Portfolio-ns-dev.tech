import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { Marquee } from './components/Marquee';
import Info from './components/Info';
import { Eyes } from './components/Eyes';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white">
      <Navbar />

      <LandingPage />
      <Marquee />

      <section id="info">
        <Info />
      </section>

      <Eyes />

      <section id="portfolio">
        <Portfolio />
      </section>

<section id="reviews" />
<section id="contact" />

<Footer />

    </div>
  );
}

//testpush