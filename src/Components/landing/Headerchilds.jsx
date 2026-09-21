import { useState } from "react";
import { Link } from "react-router";


import { motion } from "framer-motion";

import { LucideMessageCircle, LucidePhone, MessageCircle, MessageCircleCode, MessageCircleDashed, MessageCircleHeart, MessageCircleIcon, MessageCircleReply, Phone, PhoneCall, PhoneIcon } from "lucide-react";
import Popupchild from "./Popup";


export default function Headerchilds() {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

 
  // Fade in for entire header container
  const headerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Slide from left + fade for mail section
  const slideLeftFade = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Slide from right + fade for phone section
  const slideRightFade = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Fade in for lower header content
  const lowerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

     const buttonHover = {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  };

  return (
    <motion.header
      className="w-full bg-teansparent flex flex-row justify-center items-center shadow px-4 py-4 lg:px-20 py-4 mb-[-100px] z-[999] "
      initial="hidden"
      animate="visible"
      variants={headerFade}
    >
      {/* Upper Header */}
     
        <div className="w-full max-w-[1720px] flex flex-row justify-center items-center z-[999]">
          {/* Logo */}
          <div className="w-1/2 ">
            <Link to="/">
              <img
                src="/images/Logo1.webp"
                loading="lazy"
                alt="Glastonbury Publications"
                className="w-60 h-auto"
              />
            </Link>
          </div>
          <div className="w-1/2 overflow-relative flex flex-row gap-6 justify-end" >

            <motion.button
                      onClick={openPopup}
                      className="jost hidden md:flex relative  font-medium z-50 p-2"
                      style={{
                        borderRadius: "30px",
                        background: "#C202F4",
                        color: "#FFF",
                        fontSize: "16px",
                        letterSpacing: "1px",
                        cursor: "pointer",
                        border: "none",
                      }}
                      whileHover={buttonHover}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
            </motion.button>
             <Link to='tel:+14159186468'>        
            <motion.button
                      
                      className="jost hidden md:flex relative  font-medium z-50 p-2"
                      style={{
                        borderRadius: "30px",
                        background: "#21679D",
                        color: "#FFF",
                        fontFamily: "Segoe UI",
                        fontSize: "16px",
                        fontWeight: 400,
                        letterSpacing: "1px",
                        cursor: "pointer",
                        border: "none",
                      }}
                      whileHover={buttonHover}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
            </motion.button>
            </Link>   
                          
          </div>
        </div>

       
     
     
       
      <Popupchild isOpen={isPopupOpen} closePopup={closePopup} />
    </motion.header>
  );
}






