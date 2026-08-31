import { useState } from "react";
import { Link } from "react-router";


import { motion } from "framer-motion";
import Popup from "../Popup";
import { LucideMessageCircle, LucidePhone, MessageCircle, MessageCircleCode, MessageCircleDashed, MessageCircleHeart, MessageCircleIcon, MessageCircleReply, Phone, PhoneCall, PhoneIcon } from "lucide-react";


export default function Header() {
  
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
      className="w-full bg-[#EAE9E9] flex flex-row justify-center items-center shadow px-4 py-4 lg:px-20 py-4 "
      initial="hidden"
      animate="visible"
      variants={headerFade}
    >
      {/* Upper Header */}
     
        <div className="w-full max-w-[1440px] flex flex-row justify-center items-center">
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
          <div className="blink-scale-btn w-1/2 overflow-relative flex flex-row gap-6 justify-end" >
            <motion.button
                      onClick={openPopup}
                      className="hidden md:flex relative px-6 py-2 font-medium z-50"
                      style={{
                        borderRadius: "10px",
                        background: "linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)",
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
                      <LucideMessageCircle className="mr-2 "/>
                       Let's Get Started
                                  
            </motion.button>
             <Link to='tel:+14159186468'>        
            <motion.button
                      
                      className="blink-scale-btn hidden md:flex relative px-6 py-2 font-bold z-50"
                      style={{
                        borderRadius: "10px",
                        background: "black",
                        color: "#FFF",
                        fontFamily: "Segoe UI",
                        fontSize: "16px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        cursor: "pointer",
                        border: "none",
                      }}
                      whileHover={buttonHover}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                                  
            </motion.button>
            </Link>   
                          
          </div>
        </div>

       
     
     
       
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </motion.header>
  );
}






