import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cartoon = () => {
  const canvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgSrc(event.target.result);
      };
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
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-5 ml-60"
      />
      <canvas
        ref={canvasRef}
        className="border border-gray-300"
      />
    </div>  
  );
};

const Info = () => {
  return (
    <motion.div
      className="relative -mt-3 w-full p-20 bg-white text-black z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6 text-[3vw] leading-[4.5vw] font-mono">
        <p className="text-left relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          "
        </p>

        <p className="text-left relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          It all began with my passion for programming in 2020, which eventually led me to earn a university degree in App and Web Development from the University of Gothenburg.
        </p>
        <p className="text-right relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          With over five years of experience in web and native mobile development, I have worked with full service applications with modern technologies such as React, TypeScript, and Node.js. I am passionate about design, creating user-friendly applications that solve real-world problems.
        </p>
        <p className="text-left relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          I spend a lot of my time learning new technologies, contributing to open-source projects, and exploring creative solutions to complex problems.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-10 text-[3vw] leading-[4.5vw] font-mono">
        <p className="text-left relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          Life as a creative designer is a constant blend of art and logic — a space where imagination meets technology. Every day brings a new challenge: transforming ideas into digital experiences that are not only functional but also visually engaging.
        </p>
        <p className="text-right relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          It’s about understanding how people interact with design, how colors, typography, and layout influence emotion, and how every line of code brings a vision to life. As a creative designer, you live at the intersection of design and development — sketching wireframes in the morning and refining animations or front-end components by the afternoon.
        </p>
        <p className="text-left relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          There’s a unique satisfaction in seeing your ideas take shape on the screen, knowing that design decisions you make can impact how someone experiences a product or a brand.
        </p>
        <p className="text-right relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          But it’s också a journey of constant learning — exploring new tools, keeping up with trends, and finding fresh ways to express creativity through technology. At its core, being a creative designer in web development is about storytelling: crafting meaningful digital experiences that connect people and ideas.
        </p>
        <p className="text-right relative hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-300 px-2">
          "
        </p>
      </div>

      <div className="w-full flex gap-5 border-t-[1px] mt-20 border-zinc-800 pt-10">
        <div className="w-1/2">
          <h1 className="text-7xl font-[Neue_Montreal]">Approach:</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white"
          >
            Read More
          </motion.button>
        </div>
        <div className="w-1/2 flex justify-end relative">
          <motion.div
            className="bg-green-900 w-[70vh] h-[70vh] rounded relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="text-[5vw] font-bold whitespace-nowrap transform -rotate-45"
                  style={{
                    margin: "-2vh 0",
                    color: i % 2 === 0 ? "#f9cb9c" : "#F66AA2",
                    opacity: 0.9,
                  }}
                >
                  PICTURE PICTURE PICTURE PICTURE PICTURE PICTURE
                </span>
              ))}
              <span className="absolute text-[8vw] font-extrabold text-white">
                Graphics
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <Cartoon />
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20"></div>
    </motion.div>
  );
};

export default Info;
