import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Section4() {
  // Variants for fade and slide animation
  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.8 },
    },
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.8 },
    },
  };

  return (
   
    <motion.section
      className="relative w-full py-10 px-4 lg:px-16 flex justify-center items-center bg-[#EAE9E9] bg-cover bg-no-repeat bg-center bg-[#EAE9E9]"
      style={{
        backgroundImage: "url('/images/coveredsections.webp')",
        
      }}  
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center relative ">
        {/* Left: Image */}
        <motion.div
          className="relative w-full max-w-lg flex-shrink-0"
          variants={fadeSlideLeft}
        >
          <img
            src="/images/section-4-mockups.png"
            loading="lazy"
            alt="Books"
            className="w-full"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="flex-1 lg:pl-16 mt-10 lg:mt-0"
          variants={fadeSlideRight}
        >
          <h2
            className="text-white font-bold mb-4 text-[32px] lg:text-[48px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              lineHeight: "1",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            Become A Published Author in 2026
          </h2>
          <p
            className="text-white mb-8 max-w-2xl"
            style={{
              fontFamily: "Lora, serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            2026 is your year to step into the spotlight as an author. Whether you’re starting with a spark of an idea or a polished manuscript, Glastonbury Publications is here to make it happen. We provide expert book publishing services—from editing, formatting, and cover design to ghostwriting and targeted book marketing. As a trusted book publishing company, we transform writers into published authors with professional care and global reach. Your story deserves to be seen, shared, and celebrated. Let’s publish it with the support of a book publisher for new authors who believes in your voice.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
