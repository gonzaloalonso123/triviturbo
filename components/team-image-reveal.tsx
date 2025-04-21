"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Hand } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { debounce } from "lodash";

export default function TeamImageReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getShape = (state: "initial" | "revealed") => {
    if (isMobile) {
      return "circle(50% at center)";
    } else {
      return state === "initial"
        ? "polygon(15% 25%, 85% 15%, 95% 60%, 85% 85%, 15% 75%, 5% 40%)"
        : "polygon(25% 15%, 75% 15%, 95% 50%, 75% 85%, 25% 85%, 5% 50%)";
    }
  };

  const firstImageVariants = {
    initial: { opacity: 1, scale: 1 },
    revealed: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  };
  const secondImageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    revealed: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const containerVariants = {
    initial: {
      clipPath: getShape("initial"),
      rotate: 0,
    },
    revealed: {
      clipPath: getShape("revealed"),
      rotate: 5,
    },
  };

  const handleInteraction = useCallback(
    debounce(() => {
      setIsRevealed((prev) => !prev);
    }, 300),
    []
  );

  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center justify-center py-8">
      <div className="relative w-[600px] h-[600px]">
        <motion.div
          ref={containerRef}
          className="absolute inset-0 cursor-pointer"
          style={{
            overflow: "hidden",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            willChange: "clip-path, transform, opacity",
          }}
          initial="initial"
          animate={isRevealed ? "revealed" : "initial"}
          variants={containerVariants}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.5,
          }}
          onMouseEnter={() => !isMobile && handleInteraction()}
          onMouseLeave={() => !isMobile && handleInteraction()}
          onClick={() => isMobile && handleInteraction()}
        >
          <div className="absolute inset-0 w-full h-full">
            <motion.div
              className="absolute inset-0 w-full h-full shadow-md"
              variants={firstImageVariants}
              initial="initial"
              animate={isRevealed ? "revealed" : "initial"}
            >
              <Image
                src="/trivi-turbo-header-robot.webp"
                alt="Ons professionele team met AI assistent"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 w-full h-full"
              variants={secondImageVariants}
              initial="initial"
              animate={isRevealed ? "revealed" : "initial"}
            >
              <Image
                src="/trivi-turbo-hero-us.webp"
                alt="Ons echte team met octopus Hank"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </motion.div>
          </div>
        </motion.div>

        <div
          className={`absolute top-20 right-4 z-40 px-3 py-1 rounded-full text-sm font-bold shadow-md flex items-center transition-all duration-300 ${
            isRevealed ? "bg-yellow-300 text-[#072ac8]" : "bg-[#072ac8] text-white"
          }`}
        >
          {isRevealed ? (
            <>
              <Sparkles className="w-4 h-4 mr-1" />
              Echte team!
            </>
          ) : (
            <>
              <Hand className="w-4 h-4 mr-1" />
              {isMobile ? "Tik" : "Beweeg"} over de robot
            </>
          )}
        </div>
      </div>

      <div className="absolute w-full h-full pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-1/4 transform -translate-x-1/2 bg-[#072ac8]/90 text-white px-4 py-2 rounded-lg shadow-lg"
          animate={{
            opacity: isRevealed ? 0 : 1,
            y: isRevealed ? 20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-bold text-xl">Ons Professionele Team</p>
          <p className="text-base opacity-90">Met onze AI assistent</p>
        </motion.div>

        {isRevealed && (
          <motion.div
            key="real-team-text"
            className="absolute bottom-20 right-1/4 transform translate-x-1/2 bg-[#072ac8]/90 text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-bold text-xl">Ons Echte Team</p>
            <p className="text-base opacity-90">Met onze mascotte Hank de Octopus</p>
          </motion.div>
        )}

        {isRevealed && (
          <>
            <motion.div
              key="truth-text"
              className="absolute top-[10%] left-0 z-30 bg-yellow-300 rounded-full px-4 py-2 font-bold text-black transform -rotate-12 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              De waarheid!
            </motion.div>
            <motion.div
              key="laugh-emoji"
              className="absolute top-[20%] right-0 z-30 text-5xl transform rotate-12 bg-white/80 rounded-full p-2 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              🤣
            </motion.div>
            <motion.div
              key="octopus-emoji"
              className="absolute bottom-[30%] left-0 z-30 text-5xl transform -rotate-12 bg-white/80 rounded-full p-2 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              🐙
            </motion.div>
          </>
        )}

        {isRevealed && (
          <motion.div
            key="sparkles"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Sparkles className="absolute top-[15%] right-[20%] text-[#ffc600] w-6 h-6" />
            <Sparkles className="absolute bottom-[25%] left-[15%] text-[#ffc600] w-8 h-8" />
            <Sparkles className="absolute top-[40%] left-[10%] text-[#ffc600] w-5 h-5" />
          </motion.div>
        )}
      </div>
    </div>
  );
}
