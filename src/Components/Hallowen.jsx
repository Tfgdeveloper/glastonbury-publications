import React, { useState } from "react";
import Popup from "./Popup";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import animationData from '/src/assets/Confetti Burst.json';
import phoneanimation from '/src/assets/button (2).json';
const Hallowen = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const style = {
    height: 300,
    width: 300,
  };
  // Hover state for animated button
   const buttonHover = {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  };
    
    const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
        ease: "easeOut",
      },
    },
  };
    const titleStyle = {
    fontFamily: "Green Fuz, sans-serif",
    fontSize: "56px",
    fontStyle: "normal",
    fontWeight: 700,
    color: "white",
    
    
  };
   const descriptionStyle = {
    fontFamily: "Lora, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    color: "white",
    textTransform: "normal",
  };
    
  return (
    <motion.section
      className="relative w-full pt-16 px-4 lg:px-16 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Halloween.png')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
        <div>
             <h2 className="green-fuz text-[56px] mb-4 tracking-[8px] text-center" style={titleStyle}>Happy halloween</h2>
             <div className='w-full flex flex-col md:flex-row md:gap-20 gap-0 justify-center md:items-center  md:ml-10'>
             <div>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Exclusive Halloween Edition Books
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        10% Off Horror & Thriller Titles
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Free Halloween-Themed Swag
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                       Exclusive Digital Halloween Short Stories
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Social Media Promotion
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Limited-Time Offer
                    </p>
                </span>
                
             </div>
             <div >
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Custom Halloween Bookmarks
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Halloween-Themed Cover Design
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Email Newsletter Feature
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                      Special Halloween Flash Sale Discounts
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                       Free Shipping on All Orders Over $550
                    </p>
                </span>
                <span className='flex flex-row'>
                    <img src="star.png" className='w-5 h-5 mr-3'/>
                    <p className="mb-5" style={descriptionStyle}>
                        Halloween-Exclusive Author Interviews & Readings
                    </p>
                </span>
                
             </div>
             </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-15 justify-center items-center ml-15 ">
                    {/* Animated Get Started Button */}
                    <div>
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
                        <p  className="ml-[-193px] z-99 mt-[-75px] "
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
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </motion.section>
  )
}

export default Hallowen
