"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Lightbulb, Rocket, CheckCircle, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: <Phone className="h-10 w-10 text-white" />,
      title: "Contact",
      description: "U neemt contact met ons op.",
      color: "bg-[#072ac8]",
      shadowColor: "shadow-[#072ac8]/20",
      hoverColor: "group-hover:bg-[#0625a3]",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Behoeften",
      description: "We ontdekken wat uw behoeften zijn in een gesprek.",
      color: "bg-[#1e96fc]",
      shadowColor: "shadow-[#1e96fc]/20",
      hoverColor: "group-hover:bg-[#0a7edb]",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Ontwerp",
      description: "We bespreken het ontwerp op basis van uw ideeën. U levert de content en het logo aan, of wij helpen u daarbij.",
      color: "bg-[#a2d6f9]",
      shadowColor: "shadow-[#a2d6f9]/20",
      hoverColor: "group-hover:bg-[#7fc1f0]",
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Ontwikkeling",
      description:
        "We bouwen binnen 24 uur uw website met de beste technologie, bugvrij en razendsnel.",
      color: "bg-[#ffc600]",
      shadowColor: "shadow-[#ffc600]/20",
      hoverColor: "group-hover:bg-[#e6b200]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="proces" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#a2d6f9] text-[#072ac8] hover:bg-[#a2d6f9]/80">Ons Proces</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hoe wij werken</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zo leveren wij uw perfecte website binnen 24 uur, zonder compromissen op kwaliteit.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-2xl bg-white p-8 transition-all duration-300 
                ${hoveredStep === index ? "scale-105 shadow-xl z-10" : "shadow-lg"}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              variants={itemVariants}
            >
              <div className="relative mb-8">
                {/* Numbered badge */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-gray-700 z-10">
                  {index + 1}
                </div>

                {/* Icon container */}
                <div
                  className={`${step.color} ${step.hoverColor} rounded-xl p-5 shadow-lg ${step.shadowColor} transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  {step.icon}
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-gray-100 opacity-70"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gray-200 opacity-70"></div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#072ac8] transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>

              {/* Timeline connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ChevronRight
                    className={`h-6 w-6 text-gray-400 ${
                      hoveredStep === index ? "text-[#072ac8]" : ""
                    } transition-colors duration-300`}
                  />
                </div>
              )}

              {/* Bottom connector for mobile/tablet */}
              {index < steps.length - 1 && (
                <div className="lg:hidden w-8 h-8 mx-auto mt-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline progress bar (desktop only) */}
        <div className="hidden lg:block relative h-1 bg-gray-200 rounded-full max-w-5xl mx-auto mt-8">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#072ac8] to-[#ffc600] rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mr-3 text-[#072ac8]">
              <Rocket className="h-5 w-5 mr-2" />
              <span className="font-bold">Levering binnen 24 uur</span>
            </div>
            <span className="text-gray-600">na goedkeuring van het ontwerp</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
