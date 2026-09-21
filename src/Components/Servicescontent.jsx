import React, { useState } from 'react';
import { Link } from 'react-router';
import Popup from './Popup';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '/src/assets/Confetti Burst.json'; // Adjust the path to your Lottie JSON file
import phoneanimation from '/src/assets/button (3).json';

// Define reusable variants for image and text animations
    const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: animationData,phoneanimation,
       rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice'
       }
     };
   
     const style = {
       height: 300,
       width: 300,
     };

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const buttonHover = {
  scale: 1.1,
  y: -3,
  boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
};

export default function Servicescontent({
  whyChooseUsText = 'Why Choose Us',
  mainHeading = 'Covering Your Risks, And\nSecuring Your Future.',
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
  image = '/images/book4.webp',
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <motion.section
      className="w-full bg-[#EAE9E9] pt-20 pb-30 px-4 lg:px-16 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center relative">
        {/* Left: Image */}
        <motion.div
          className="relative w-full max-w-lg flex-shrink-0"
          variants={imageVariants}
        >
          <motion.img src={image} loading="lazy" alt="Books" />
        </motion.div>

        {/* Right: Content */}
        <motion.div className="flex-1 lg:pl-16 mt-10 lg:mt-0" variants={containerVariants}>
          <motion.p
            className="text-sm text-black mb-1"
            style={{ fontFamily: 'Lora, serif', fontSize: 22, fontStyle: 'italic', fontWeight: 500 }}
            variants={textVariants}
          >
            {whyChooseUsText}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[32px] lg:text-[48px]"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}
            variants={textVariants}
          >
            {mainHeading.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br className="hidden md:block" />
              </React.Fragment>
            ))}
          </motion.h2>
          <motion.p
            className="text-[#555555] mb-8 max-w-2xl"
            style={{ fontFamily: 'Lora, serif', fontSize: 16, fontWeight: 400 }}
            variants={textVariants}
          >
            {description}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-3 mb-5" variants={containerVariants}>
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
                              style={{width: 225,}}
                              className="mt-[-120px] ml-[-70px] z-0"
                              
                              
                              // You can also pass other props like speed, direction, etc.
                            />    
                             
                      </Link>
                      <Link to="tel:+14159186468" className='z-99 hidden md:flex'>
                      <p  className="ml-[-200px] z-99 mt-[10px] "
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
          </motion.div>
        </motion.div>
      </div>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </motion.section>
  );
}
