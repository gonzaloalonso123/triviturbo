"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamImageReveal() {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Variants for the container (clip-path and rotation)
  const containerVariants = {
    initial: {
      clipPath: "polygon(15% 25%, 85% 15%, 95% 60%, 85% 85%, 15% 75%, 5% 40%)",

      rotate: 0,
    },
    hover: {
      clipPath: "polygon(25% 15%, 75% 15%, 95% 50%, 75% 85%, 25% 85%, 5% 50%)",
      rotate: 5,
    },
  };

  // Variants for the first image (scale and opacity)
  const firstImageVariants = {
    initial: { opacity: 1, scale: 1 },
    hover: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  };

  // Variants for the second image (scale and opacity)
  const secondImageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    hover: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center justify-center py-8">
      {/* Fixed size outer container */}
      <div className="relative w-[600px] h-[600px]">
        {/* Blob shape container with clip-path */}
        <motion.div
          ref={containerRef}
          className="absolute inset-0 cursor-pointer"
          style={{
            overflow: "hidden", // Ensure images are clipped
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            willChange: "clip-path, transform, opacity", // Optimize rendering
          }}
          initial="initial"
          animate={isHovering ? "hover" : "initial"}
          variants={containerVariants}
          transition={{
            type: "spring",
            damping: 25, // Smoother spring for clip-path
            stiffness: 100,
            duration: 0.5,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Image container */}
          <div className="absolute inset-0 w-full h-full">
            {/* First image */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              variants={firstImageVariants}
              initial="initial"
              animate={isHovering ? "hover" : "initial"}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ontwerp%20zonder%20titel%20%2832%29-LLnN4g3pfEb2M1eSV80Ge1dYfyHFdV.webp"
                alt="Ons professionele team met AI assistent"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </motion.div>

            {/* Second image */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              variants={secondImageVariants}
              initial="initial"
              animate={isHovering ? "hover" : "initial"}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-20%20at%2020.47.43%20%281%29-d2nCgbpjzMpVlYUnuciXLChcLK1cld.jpeg"
                alt="Ons echte team met octopus knuffel"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </motion.div>

            {/* Hover instruction */}
            <div
              className="absolute top-10 right-10 z-30 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#072ac8] transition-opacity duration-300"
              style={{ opacity: isHovering ? 0 : 0.7 }}
            >
              Beweeg muis hier 👀
            </div>
          </div>
        </motion.div>
      </div>

      {/* Text labels positioned OUTSIDE the blob */}
      <div className="absolute w-full h-full pointer-events-none">
        {/* Professional team text */}
        <motion.div
          className="absolute bottom-0 left-1/4 transform -translate-x-1/2 bg-[#072ac8]/90 text-white px-4 py-2 rounded-lg shadow-lg"
          animate={{
            opacity: isHovering ? 0 : 1,
            y: isHovering ? 20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-bold text-xl">Ons Professionele Team</p>
          <p className="text-base opacity-90">Met onze AI assistent</p>
        </motion.div>

        {/* Real team text */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="absolute bottom-0 right-1/4 transform translate-x-1/2 bg-[#072ac8]/90 text-white px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-bold text-xl">Ons Echte Team</p>
              <p className="text-base opacity-90">Met onze mascotte Otto de Octopus</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun elements that appear on hover */}
        <AnimatePresence>
          {isHovering && (
            <>
              <motion.div
                className="absolute top-[10%] left-0 z-30 bg-yellow-300 rounded-full px-4 py-2 font-bold text-black transform -rotate-12 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                De waarheid!
              </motion.div>
              <motion.div
                className="absolute top-[20%] right-0 z-30 text-5xl transform rotate-12 bg-white/80 rounded-full p-2 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                🤣
              </motion.div>
              <motion.div
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
        </AnimatePresence>
      </div>

      {/* Decorative blobs around the main image */}
      <div className="absolute -z-10 w-full h-full pointer-events-none">
        <motion.div
          className="absolute w-32 h-32 bg-[#fcf300]/30 rounded-full blur-xl"
          animate={{
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "10%", left: "15%" }}
        />
        <motion.div
          className="absolute w-40 h-40 bg-[#1e96fc]/20 rounded-full blur-xl"
          animate={{
            x: [0, -15, 15, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ bottom: "15%", right: "10%" }}
        />
        <motion.div
          className="absolute w-28 h-28 bg-[#a2d6f9]/30 rounded-full blur-xl"
          animate={{
            x: [0, 12, -12, 0],
            y: [0, -12, 12, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ bottom: "20%", left: "20%" }}
        />
      </div>
    </div>
  );
}
