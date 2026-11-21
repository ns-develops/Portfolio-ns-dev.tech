
import React from "react";
import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import {
  SiKotlin,
  SiReact,
  SiSwift,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Info = () => {
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
    {
      name: "Express",
      icon: <SiExpress className="text-[150px]" />,
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
      ></motion.h2>

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
        <span className="block mb-4">
          Min resa inom programmering började 2020 genom egna projekt och ett
          växande intresse för teknik, design och problemlösning. Det ledde
          så småningom till en utbildning inom app- och webbutveckling, där jag
          fått möjlighet att utveckla min kompetens inom både frontend, backend
          och mobilutveckling.
        </span>

        <span className="block mb-4">
          Jag har erfarenhet av att utveckla fullstackapplikationer med tekniker
          som TypeScript, JavaScript, React, Node.js, Express och PostgreSQL.
          Jag har även arbetat med React Native och nativeutveckling för iOS
          och Android med Swift, Kotlin och Java. Genom mina projekt har jag
          fått erfarenhet av allt från API-integrationer, databashantering och
          autentisering till pushnotiser, molntjänster och driftsättning.
        </span>

        <span className="block mb-4">
          Jag har också ett stort intresse för AI och hur ny teknik kan användas
          för att skapa smartare digitala lösningar. Jag experimenterar med
          LLM-integrationer, API:er och agentisk programmering, bland annat med
          Claude Code och OpenAI. Jag tycker det är spännande att kombinera
          traditionell mjukvaruutveckling med nya möjligheter inom AI.
        </span>

        <span className="block">
          Jag brinner för design, problemlösning och att skapa användarvänliga
          applikationer som löser verkliga behov. En stor del av min tid lägger
          jag på att lära mig nya tekniker, bidra till open source-projekt och
          utforska kreativa lösningar på komplexa problem. Jag trivs med att
          arbeta både självständigt och tillsammans med andra, och motiveras
          av att få vara delaktig i hela processen – från idé till färdig
          produkt.
        </span>
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
          App and web developer
        </p>

        <p className="text-sm md:text-base mt-1">
          Folkuniversitetet via Göteborgs Universitet
        </p>
      </motion.div>

      {/* ===== COUNTERS BORTTAGNA ===== */}

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

        {/* ===== ANDRA RADEN – 4 IKONER ===== */}

        <div className="flex items-center justify-center gap-[150px]">
          {technologies.slice(4, 8).map((technology) => (
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