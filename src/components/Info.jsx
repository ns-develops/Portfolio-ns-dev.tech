import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import pictureMe from "../assets/new.jpg"; // importerar bilden

const Snake = () => {
  const canvasRef = useRef(null);
  const gridSize = 20;
  const canvasSize = 400;

  const [snake, setSnake] = useState([
    { x: 8, y: 8 },
    { x: 7, y: 8 },
    { x: 6, y: 8 },
  ]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [fruit, setFruit] = useState({ x: 12, y: 8 });
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setSnake([
      { x: 8, y: 8 },
      { x: 7, y: 8 },
      { x: 6, y: 8 },
    ]);
    setDirection({ x: 1, y: 0 });
    setFruit({ x: 12, y: 8 });
    setGameOver(false);
    setGameStarted(true);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!gameStarted || gameOver) return;
      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction, gameStarted, gameOver]);

  const handleCanvasClick = (e) => {
    if (!gameStarted || gameOver) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const clickX = Math.floor((e.clientX - rect.left) / gridSize);
    const clickY = Math.floor((e.clientY - rect.top) / gridSize);
    const head = snake[0];
    const dx = clickX - head.x;
    const dy = clickY - head.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0 && direction.x !== -1) setDirection({ x: 1, y: 0 });
      else if (dx < 0 && direction.x !== 1) setDirection({ x: -1, y: 0 });
    } else {
      if (dy > 0 && direction.y !== -1) setDirection({ x: 0, y: 1 });
      else if (dy < 0 && direction.y !== 1) setDirection({ x: 0, y: -1 });
    }
  };

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { x: prev[0].x + direction.x, y: prev[0].y + direction.y };
        if (
          head.x < 0 ||
          head.x >= canvasSize / gridSize ||
          head.y < 0 ||
          head.y >= canvasSize / gridSize ||
          prev.some((segment) => segment.x === head.x && segment.y === head.y)
        ) {
          setGameOver(true);
          setGameStarted(false);
          return prev;
        }
        let newSnake = [head, ...prev];
        if (head.x === fruit.x && head.y === fruit.y) {
          setFruit({
            x: Math.floor(Math.random() * (canvasSize / gridSize)),
            y: Math.floor(Math.random() * (canvasSize / gridSize)),
          });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [direction, fruit, gameOver, gameStarted]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!gameStarted) {
      const half = canvasSize / 2;
      ctx.fillStyle = "#89CFF0"; 
      ctx.fillRect(0, 0, half, half);
      ctx.fillStyle = "#F5DEB3";
      ctx.fillRect(half, 0, half, half);
      ctx.fillStyle = "#FF4C4C"; 
      ctx.fillRect(0, half, half, half);
      ctx.fillStyle = "#FFA500"; 
      ctx.fillRect(half, half, half, half);
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (gameStarted) {
      ctx.fillStyle = "red";
      ctx.fillRect(fruit.x * gridSize, fruit.y * gridSize, gridSize, gridSize);
      ctx.fillStyle = "pink";
      snake.forEach((segment) =>
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize)
      );
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const centerX = canvasSize / 2;
      const centerY = canvasSize / 2;
      ctx.font = "bold 36px Arial";
      ctx.fillText("SNAKE!", centerX, centerY - 100);
      ctx.fillText("SNAKE!", centerX, centerY - 60);
      ctx.fillText("SNAKE!", centerX, centerY - 20);

      ctx.font = "bold 28px Arial";
      ctx.fillText(
        gameOver ? "Game Over - Click to Restart" : "Click to Start",
        centerX,
        centerY + 40
      );
    }
  }, [snake, fruit, gameStarted, gameOver]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        onClick={(e) => {
          if (!gameStarted) startGame();
          handleCanvasClick(e);
        }}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

const Cartoon = () => {
  const canvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setImgSrc(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (!imgSrc) return;
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      cartoonify(canvas);
    };
  }, [imgSrc]);

  const cartoonify = (canvas) => {
    if (typeof cv === "undefined") {
      alert("OpenCV.js har inte laddats än!");
      return;
    }
    let src = cv.imread(canvas);
    let dst = new cv.Mat();
    cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
    let color = new cv.Mat();
    cv.bilateralFilter(dst, color, 9, 75, 75, cv.BORDER_DEFAULT);
    let gray = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
    cv.medianBlur(gray, gray, 7);
    let edges = new cv.Mat();
    cv.adaptiveThreshold(
      gray,
      edges,
      255,
      cv.ADAPTIVE_THRESH_MEAN_C,
      cv.THRESH_BINARY,
      9,
      2
    );
    cv.cvtColor(edges, edges, cv.COLOR_GRAY2RGB);
    let cartoon = new cv.Mat();
    cv.bitwise_and(color, edges, cartoon);
    cv.imshow(canvas, cartoon);
    src.delete();
    dst.delete();
    color.delete();
    gray.delete();
    edges.delete();
    cartoon.delete();
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="mb-4 text-center text-3xl font-bold">AI CARTOON EDITOR</h2>
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-5 ml-60" />
      <canvas ref={canvasRef} className="border border-gray-300" />
    </div>
  );
};

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
        It all began with my passion for programming in 2020, which eventually led me to earn a university degree in App and Web Development from the University of Gothenburg. With over five years of experience in web and native mobile development, I have worked with full service applications with modern technologies such as React, TypeScript, and Node.js. I am passionate about design, finding solutions, creating user-friendly applications that solve real-world problems. I spend a lot of my time learning new technologies, contributing to open-source projects, and exploring creative solutions to complex problems. It is a constant blend of art and logic, a space where imagination meets technology. It’s about understanding how people interact with design, how colors, typography, and layout influence emotion. There’s a unique satisfaction in seeing ideas take shape on the screen. At its core, being a creator in tech development is about storytelling.
      </p>
    </motion.div>
  );
};

export default Info;
//