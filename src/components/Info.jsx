import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { DiJava } from "react-icons/di";
import {
  SiKotlin,
  SiReact,
  SiSwift,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Info = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const [applications, setApplications] = useState(1);
  const [interviews, setInterviews] = useState(1);

  useEffect(() => {
    if (!isInView) return;

    let app = 1;
    let intv = 1;

    const interval = setInterval(() => {
      if (app < 13) {
        app++;
        setApplications(app);
      }

      if (intv < 3) {
        intv++;
        setInterviews(intv);
      }

      if (app >= 13 && intv >= 3) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isInView]);

  const technologies = [
    {
      name: "Java",
      icon: <DiJava className="text-[160px]" />,
    },
    {
      name: "Kotlin",
      icon: <SiKotlin className="text-[150px]" />,
    },
    {
      name: "React",
      icon: <SiReact className="text-[150px]" />,
    },
    {
      name: "Swift",
      icon: <SiSwift className="text-[150px]" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-[150px]" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[150px]" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-[150px]" />,
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center w-full min-h-screen bg-white text-black px-6 md:px-20 lg:px-32 pt-0 pb-24"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {/* ===== TEXT ===== */}

      <motion.h2
        className="text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
      </motion.h2>

      <motion.p
        className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center text-sm md:text-base leading-relaxed tracking-wide mt-1"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
      >
        Det började med min passion för programmering år 2020, vilket
        så småningom ledde till att jag tog en universitetsexamen som app-
        och webbutvecklare. Jag har arbetat med fullständiga applikationer
        med moderna tekniker som Typescript och Node.js.

        Jag brinner för design, problemlösning och att skapa användarvänliga
        applikationer som löser verkliga behov. En stor del av min tid lägger
        jag på att lära mig nya tekniker, nyfiken på bidra till open
        source-projekt och utforska kreativa lösningar på komplexa problem.
      </motion.p>

      {/* ===== UTBILDNINGAR ===== */}

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <span className="text-sm lowercase underline underline-offset-4">
          utbildningar
        </span>

        <div className="mt-4">
          <p className="text-base md:text-lg font-medium">
            Kandidatexamen inom Industrial Engineering and Management
          </p>

          <p className="text-sm md:text-base mt-1">
            Uppsala universitet
          </p>
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <p className="text-base md:text-lg font-medium">
          Mobilapputvecklare Yh
        </p>

        <p className="text-sm md:text-base mt-1">
          Folkuniversitetet
        </p>
      </motion.div>

      {/* ===== COUNTERS ===== */}

      <motion.div
        ref={sectionRef}
        className="mt-32 md:mt-40 flex flex-row items-start justify-center gap-24 md:gap-40 text-center flex-wrap"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {/* Sense */}

        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">
            sense
          </span>

          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            2026
          </span>
        </div>

        {/* Applications */}

        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">
            applications
          </span>

          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            {applications}+
          </span>
        </div>

        {/* Interviews */}

        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">
            interviews
          </span>

          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            {interviews}+
          </span>
        </div>

        {/* Job Offer */}

        <div className="flex flex-col items-center leading-none">
          <span className="text-sm lowercase">
            job offer
          </span>

          <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest">
            0
          </span>
        </div>
      </motion.div>

      {/* ===== TECH STACK ===== */}

      <motion.div
        className="mt-24 md:mt-32 flex flex-col items-center gap-8 md:gap-10"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {/* ===== FÖRSTA RADEN – 4 IKONER ===== */}

        <div className="flex items-center justify-center gap-[150px]">
          {technologies.slice(0, 4).map((technology) => (
            <motion.div
              key={technology.name}
              className="flex items-center justify-center text-gray-300 cursor-default"
              title={technology.name}
              whileHover={{
                y: -6,
                scale: 1.08,
                color: "#9ca3af",
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {technology.icon}
            </motion.div>
          ))}
        </div>

        {/* ===== ANDRA RADEN – 3 IKONER ===== */}

        <div className="flex items-center justify-center gap-[150px]">
          {technologies.slice(4, 7).map((technology) => (
            <motion.div
              key={technology.name}
              className="flex items-center justify-center text-gray-300 cursor-default"
              title={technology.name}
              whileHover={{
                y: -6,
                scale: 1.08,
                color: "#9ca3af",
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {technology.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Info;
