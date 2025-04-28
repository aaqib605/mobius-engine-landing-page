import { motion } from "framer-motion";

import React from "react";
import HeroEbook from "../assets/hero-ebook.png";
import Button from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <motion.section
      className="flex-grow flex items-center justify-center px-16 max-md:px-3 max-lg:py-16"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1080px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Land job interviews <br />
            <span className="text-[#0649E7]">10x </span>
            <span>faster</span>
          </h1>
          <p className="text-gray-200 text-base md:text-lg">
            Custom-built resumes that match your goals, keywords, and recruiter
            expectations.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button href="#">Get Started →</Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            <img
              src={HeroEbook}
              alt="Hiring Trends E-book"
              className="w-72 md:w-80 rounded-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
