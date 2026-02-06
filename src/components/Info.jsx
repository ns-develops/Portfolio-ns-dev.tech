// import React, { useRef, useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import pictureMe from "../assets/new.jpg"; // importerar bilden

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
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full min-h-screen bg-white text-black px-6 md:px-20 lg:px-32 pt-10 pb-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img
        src={pictureMe}
        alt="Picture of me"
        className="w-full max-w-md h-auto mb-6 object-cover"
      />

      <h2 className="text-4xl font-bold mb-6 text-center">Om mig</h2>

      <p className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center text-[clamp(16px,2vw,22px)] leading-[clamp(24px,3vw,32px)] font-mono">
Det började med min passion för programmering år 2020, vilket så småningom ledde till att jag tog en universitetsexamen som App- och webbutvecklare vid Göteborgs universitet. Med över fem års erfarenhet av webb- och native-apputveckling har jag arbetat med fullständiga applikationer med moderna tekniker som React, TypeScript och Node.js.
Jag brinner för design, problemlösning och att skapa användarvänliga applikationer som löser verkliga behov. En stor del av min tid lägger jag på att lära mig nya tekniker, nyfiken på bidra till open source-projekt och utforska kreativa lösningar på komplexa problem. Det handlar om att förstå hur människor interagerar, hur färger, typografi och layout påverkar och tar form på skärmen.      </p>
    </motion.div>
  );
};

export default Info;
