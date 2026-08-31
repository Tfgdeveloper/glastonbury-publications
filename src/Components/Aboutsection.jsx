import React, { useState } from 'react';
import { Link } from "react-router";
import Popup from './Popup';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '/src/assets/Confetti Burst.json'; // Adjust the path to your Lottie JSON file
import phoneanimation from '/src/assets/button (3).json';

export default function Aboutsection({
  whyChooseUsText = "Why Choose Us",
  mainHeading = "Covering Your Risks, And\nSecuring Your Future.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
  features = [
    {
      title: "Creative Team",
      text: "Lorem Ipsum is simply dummy industry. Lorem Ipsum has been..",
    },
    {
      title: "Dedicated Services",
      text: "Lorem Ipsum is simply dummy industry. Lorem Ipsum has been..",
    },
    {
      title: "Perfect Solutions",
      text: "Lorem Ipsum is simply dummy industry. Lorem Ipsum has been..",
    },
    {
      title: "24/7 Support",
      text: "Lorem Ipsum is simply dummy industry. Lorem Ipsum has been..",
    },
  ],
}) {
  const CheckIcon = () => (
    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1F3A1B] mr-3">
      <svg
        className="w-100 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => { setIsPopupOpen(true); };
  const closePopup = () => { setIsPopupOpen(false); };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, phoneanimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const style = {
    height: 300,
    width: 300,
  };

  // Variants for staggered features animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Variants for main content
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  // Button hover animations using framer-motion props
  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  };

  return (
    <motion.section
      className="w-full bg-[#EAE9E9] pt-20 pb-30 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-full w-full flex flex-col items-center relative">
        {/* Right: Content */}
        <motion.div
          className="w-full px-4 lg:pl-16 mt-10 lg:mt-0 flex flex-row"
          variants={fadeSlideUp}
        >
          <div className='md:w-1/2'>
            <motion.h2
              className="text-sm text-black mb-1"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "22px",
                fontStyle: "italic",
                fontWeight: 500,
              }}
              variants={fadeSlideUp}
            >
              {whyChooseUsText}
            </motion.h2>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[32px] lg:text-[48px]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontWeight: 700,
                whiteSpace: "pre-line",
              }}
              variants={fadeSlideUp}
            >
              {mainHeading}
            </motion.h2>
            <motion.p
              className="text-[#555555] mb-8 max-w-2xl"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
              variants={fadeSlideUp}
            >
              {description}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 mt-15">
              {/* Animated Get Started Button */}
              <div >
                <motion.button
                  onClick={openPopup}
                  className="scalable-div relative px-6 py-2 font-medium z-50"
                  style={{
                    borderRadius: "23.19px 23.19px 0px 23.19px",
                    background: "#0A2342",
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    cursor: "pointer",
                    border: "none",
                  }}
                  whileHover={buttonHover}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Get started

                </motion.button>
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={style}
                  className="mt-[-175px] ml-[-75px] rotate-100 "


                // You can also pass other props like speed, direction, etc.
                />
              </div>


              {/* Number Button */}
              <Link to="tel:+14159186468" className='hidden md:flex'>
                <Lottie
                  animationData={phoneanimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: 225, }}
                  className="mt-[-120px] ml-[-70px] z-0"


                // You can also pass other props like speed, direction, etc.
                />

              </Link>
              <Link to="tel:+14159186468" className='z-99 hidden md:flex'>
                <p className="ml-[-200px] z-99 mt-[10px] "
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 400,
                    letterSpacing: "1px",

                    border: "none",
                  }}
                > (415) 918-6468 </p>
              </Link>
            </div>
          </div>

          <div className='md:w-1/2'>

            <img
              src="/images/books1.webp"
              loading="lazy"
              alt="Books"
              className="max-w-full h-auto"
            />
          </div>
          {/* Buttons with motion hover */}



        </motion.div>

        {/* Left: Image with fade and slide */}
        <motion.div
          className="w-full"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          <motion.div
            className="w-full px-4 lg:pl-16 mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 mb-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} className="flex items-start" variants={featureVariants}>
                <CheckIcon />
                <div>
                  <h4
                    className="mb-1"
                    style={{
                      fontFamily: "Lora, serif",
                      fontSize: "22px",
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-[#555555] text-sm"
                    style={{
                      fontFamily: "Lora, serif",
                      fontSize: "16px",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </motion.section>
  );
}
