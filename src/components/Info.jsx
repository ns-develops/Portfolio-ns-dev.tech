import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import pictureMe from "../assets/new.jpg"; // importerar bilden
import { useInView } from "framer-motion";

/* =========================
  SNAKE 
========================= */

// const Snake = () => {
//   const canvasRef = useRef(null);
//   const gridSize = 20;
//   const canvasSize = 400;

//   const [snake, setSnake] = useState([
//     { x: 8, y: 8 },
//     { x: 7, y: 8 },
//     { x: 6, y: 8 },
//   ]);
//   const [direction, setDirection] = useState({ x: 1, y: 0 });
//   const [fruit, setFruit] = useState({ x: 12, y: 8 });
//   const [gameOver, setGameOver] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);

//   const startGame = () => {
//     setSnake([
//       { x: 8, y: 8 },
//       { x: 7, y: 8 },
//       { x: 6, y: 8 },
//     ]);
//     setDirection({ x: 1, y: 0 });
//     setFruit({ x: 12, y: 8 });
//     setGameOver(false);
//     setGameStarted(true);
//   };

//   useEffect(() => {
//     ...
//   }, []);

//   return (
//     <div>
//       <canvas />
//     </div>
//   );
// };

/* =========================
  CARTOON 
========================= */

// const Cartoon = () => {
//   const canvasRef = useRef(null);
//   const [imgSrc, setImgSrc] = useState(null);

//   const handleUpload = (e) => {
//     ...
//   };

//   useEffect(() => {
//     ...
//   }, [imgSrc]);

//   const cartoonify = (canvas) => {
//     ...
//   };

//   return (
//     <div>
//       <h2>AI CARTOON EDITOR</h2>
//       <input type="file" />
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

/* =========================
  INFO – AKTIV
========================= */
const Info = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [applications, setApplications] = useState(1);
  const [interviews, setInterviews] = useState(1);

  useEffect(() => {
    if (!isInView) return;

    let app = 1;
    let intv = 1;

    const interval = setInterval(() => {
      app = app < 3 ? app + 1 : 3;
      intv = intv < 2 ? intv + 1 : 2;

      setApplications(app);
      setInterviews(intv);

      if (app === 3 && intv === 2) {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      className="flex flex-col items-center w-full min-h-screen bg-white text-black px-6 md:px-20 lg:px-32 pt-0 pb-24"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
      </motion.h2>

      <motion.p
        className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center text-sm md:text-base leading-relaxed tracking-wide mt-1"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        Det började med min passion för programmering år 2020, vilket så småningom ledde till att jag tog en universitetsexamen som app- och webbutvecklare. Jag har arbetat med fullständiga applikationer med moderna tekniker som Typescript och Node.js.

        Jag brinner för design, problemlösning och att skapa användarvänliga applikationer som löser verkliga behov. En stor del av min tid lägger jag på att lära mig nya tekniker, nyfiken på bidra till open source-projekt och utforska kreativa lösningar på komplexa problem.
      </motion.p>

      {/* ===== TIMELINE / STATUS SEKTION ===== */}
      <motion.div
        ref={sectionRef}
        className="mt-8 flex flex-row items-start justify-center gap-24 md:gap-40 text-center flex-wrap"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* sense */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">sense</span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            2026
          </span>
        </div>

        {/* applications */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">applications</span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            {applications}+
          </span>
        </div>

        {/* interviews */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">interviews</span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            {interviews}+
          </span>
        </div>

        {/* job offer */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">yaay!</span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            0
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Info;