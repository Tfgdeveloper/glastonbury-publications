import React, { useState } from 'react';
import Autopopup from '../Components/Autopopup'
import SEO from '../Components/SEO'
import UpperHeader from '../Components/Header'
import HeroSection from '../Components/Hero'
import Popup from '../Components/Popup'
import { Link } from "react-router";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '/src/assets/Confetti Burst.json'; // Adjust the path to your Lottie JSON file
import phoneanimation from '/src/assets/button (3).json';
import AuthorsSection from '../Components/Authorssection';
import Footer from '../Components/Footer';


function Catalogue2026() {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => { setIsPopupOpen(true); };
  const closePopup = () => { setIsPopupOpen(false); };

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
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData, phoneanimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

      // Button hover animations using framer-motion props
  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  };


  return (
    <div>
      <Autopopup />
      <SEO
        title="About Glastonbury Publications | #1 Book Publishers in USA" 
        description="Discover about Glastonbury Publications—USA’s #1 book publisher for top-quality editing, design, publishing & marketing services." 
        keyword="About"
        focusKeyword="About"
        />
        <UpperHeader/>
        <HeroSection
      welcomeText = ""
      title = "Featured Books from Glastonbury Publications"
      description1 = "Discover remarkable stories and distinctive voices from Glastonbury Publications. Explore a handpicked selection of books created to inspire, entertain, and connect with readers around the world."
      linkText="" // Passing the link text
      linkUrl="" // Passing the link URL
      description2 = ""
      
      />
      <motion.section
      className="w-full bg-[#EAE9E9] flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-full w-full flex flex-col  items-center relative">
        {/* Right: Content */}
        <motion.div
          className="max-w-[1600px] mx-auto py-10 px-5 md:px-20 flex flex-col justify-between items-center md:flex-row"
          variants={fadeSlideUp}
        >
          <div className='md:w-1/2 flex flex-col justify-center mt-20'>
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
              The Glastonbury <span className='bg-[linear-gradient(145deg,#3b6635,#2d6588)] bg-clip-text text-transparent'>Collection</span>
            </motion.h2>
            <motion.h2
              className="text-3xl md:text-6xl font-bold mb-4 text-[32px] lg:text-[48px]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontWeight: 700,
                whiteSpace: "pre-line",
              }}
              variants={fadeSlideUp}
            >
              Stories That Travel <br/><span className='italic bg-[linear-gradient(145deg,#3b6635,#2d6588)] bg-clip-text text-transparent'>Beyond Borders</span>
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
              At Glastonbury Publications, we believe exceptional stories
              deserve to be discovered everywhere. Our catalogue brings
              together distinctive voices, compelling ideas, and
              memorable books created to connect with readers across
              cultures and generations. Explore works that entertain,
              inspire, challenge perspectives, and leave a lasting
              impression.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 mt-5">
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
                  style={{ height: 300, width: 300 }}
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
                <p className="ml-[-220px] z-99 mt-[10px] "
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

          <div className='md:w-1/2 flex flex-col justify-center'>

            <img
              src="/images/Group 21 2.png"
              loading="lazy"
              alt="Books"
              className="w-[95%]"
            />
          </div>
          {/* Buttons with motion hover */}



        </motion.div>

        {/* Left: Image with fade and slide */}
       
      </div>

      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
      </motion.section>

      <motion.section
      className="w-full bg-[#FFF] flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-full w-full flex flex-col  items-center relative">
        {/* Right: Content */}
        <motion.div
          className="max-w-[1600px] mx-auto py-10 px-5 md:px-20 flex flex-col justify-between items-center "
          variants={fadeSlideUp}
        >
          <div className='w-full flex flex-col justify-center items-center '>
            <motion.h2
              className="font-bold text-[32px] lg:text-[62px] text-center"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontWeight: 700,
                whiteSpace: "pre-line",
              }}
              variants={fadeSlideUp}
            >
              <span className='italic bg-[linear-gradient(145deg,#3b6635,#2d6588)] bg-clip-text text-transparent'>Featured</span>  Books 
            </motion.h2>
            <motion.h2
              className="font-bold mb-4 text-[18px] lg:text-[24px] text-center"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontWeight: 700,
                whiteSpace: "pre-line",
              }}
              variants={fadeSlideUp}
            >
              Glastonbury Publications | <span className='italic'>2026 Catalogue</span>
            </motion.h2>
            <motion.p
              className="text-[#555555] mb-8 max-w-2xl text-center"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
              variants={fadeSlideUp}
            >
              Discover a curated selection of remarkable titles from
              Glastonbury Publications, bringing together compelling
              stories, distinctive voices, and unforgettable ideas for
              readers around the world
            </motion.p>
            
          </div>

          <div className='relative w-full'>
            <div className='w-full h-10 md:h-40  absolute top-0 bg-gradient-to-b from-white to-transparent z-20'></div>
             <img
              src="/images/Group 1707481930.png"
              loading="lazy"
              alt="Books"
              className="w-[100%]"
            />
            
          </div>
          {/* Buttons with motion hover */}



        </motion.div>

        {/* Left: Image with fade and slide */}
       
      </div>

      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
      </motion.section>

      <motion.section
            className="relative w-full px-0 md:px-4 flex justify-center items-justify bg-[#EAE9E9] bg-cover bg-no-repeat bg-center bg-[#EAE9E9]"
            style={{
              backgroundImage: "url('/images/Group 1707481954.png')",
              
            }}  
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center relative ">
              {/* Left: Image */}
              <motion.div
                className="flex-1 mt-10 lg:mt-0 py-10"
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
                  Where Stories Meet the World
                </h2>
                <p
                  className="text-white mb-4 max-w-2xl"
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                  }}
                >
                  Meet Glastonbury Publications at international book fairs
                  and literary events, where authors, readers, and publishing
                  professionals come together to discover new voices, explore
                  remarkable books, and build connections across borders.</p>

            <div className="flex flex-col sm:flex-row">
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
                
              </div>


              
            </div>
              </motion.div>
      
              {/* Right: Content */}
              
              <motion.div
                className="relative w-full max-w-lg h-full bg-[#D9D9D9]/50 flex justify-center items-center pb-10"
                variants={fadeSlideLeft}
              >
                <img
                  src="/images/frankfurt-logo.png"
                  loading="lazy"
                  alt="Books"
                  className="w-[80%] mt-5"
                />
              </motion.div>
            </div>
      </motion.section>

      <motion.section
      className="w-full bg-[#EAE9E9] flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-full w-full flex flex-col  items-center relative">
        {/* Right: Content */}
        <motion.div
          className="max-w-[1600px] mx-auto py-10 px-5 md:px-20 flex flex-col justify-between items-center "
          variants={fadeSlideUp}
        >
          <div className='w-full flex flex-col justify-center items-center '>
            <motion.h2
              className="font-bold text-[32px] lg:text-[62px] text-center"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontWeight: 700,
                whiteSpace: "pre-line",
              }}
              variants={fadeSlideUp}
            >
              <span className='italic bg-[linear-gradient(145deg,#3b6635,#2d6588)] bg-clip-text text-transparent'>Featured</span>  Books 
            </motion.h2>
            <motion.h2
              className="font-bold mb-4 text-[18px] lg:text-[24px] text-center"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontWeight: 700,
                whiteSpace: "pre-line",
              }}
              variants={fadeSlideUp}
            >
              Glastonbury Publications | <span className='italic'>2026 Catalogue</span>
            </motion.h2>
            <motion.p
              className="text-[#555555] max-w-2xl text-center"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
              variants={fadeSlideUp}
            >
              Discover a curated selection of remarkable titles from
              Glastonbury Publications, bringing together compelling
              stories, distinctive voices, and unforgettable ideas for
              readers around the world
            </motion.p>
            
          </div>

          <div className='relative w-full'>
            
             <AuthorsSection/>
            
          </div>
          {/* Buttons with motion hover */}



        </motion.div>

       
       
      </div>

      
      </motion.section>

      <Footer/>        
    </div>
  )
}

export default Catalogue2026
