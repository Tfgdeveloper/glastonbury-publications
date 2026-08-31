import { useState } from "react";
import Header from '../../Components/landing/Header'
import Footer from '../../Components/landing/Footer'
import Sidebar from '../../Components/landing/Sidebar'
import { Link } from "react-router";
import { motion } from "framer-motion";
import Popup from "../../Components/Popup";
import { Check, CircleCheckBig, LucideMessageCircle , Phone,} from "lucide-react";
import StepTabs from "../../Components/landing/StepTabs";

import Testimonials from "../../Components/landing/Testimonials";
import CoverMarquee from "../../Components/landing/CoverMarquee";
import FaqAccordion from "../../Components/landing/FaqAccordion";
import ContactFooter from "../../Components/landing/ContactFooter";
import Heroform from "../../Components/landing/Heroform";
import PricingCard from "../../Components/landing/PricingCard";
import { IngramSteps } from "../../Components/landing/Data/ingramSteps";
import StickyStepsingram from "../../Components/landing/Steps/StickyStepsingram";
import Testimonialsingram from "../../Components/landing/Testimonial/Testimonialsingram";

const IngramSpark = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
  
  const headerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Slide from left + fade for mail section
  const slideLeftFade = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const slideUpFade = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  // Slide from right + fade for phone section
  const slideRightFade = {
    hidden: { opacity: 0, x: 100 },
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

  const faqItems = [
  {
    question: "Why should I choose IngramSpark?",
    answer:
      "IngramSpark gives you access to bookstores, libraries, and major retailers worldwide — something no other platform can match.",
  },
  { question: "Can you help with the technical setup for IngramSpark?",
    answer: "Yes, we manage ISBNs, trim sizes, and compliance to make sure your book meets industry standards." },

  { question: "Will my book be available in libraries?",
    answer: "Yes. IngramSpark connects your book to global library distribution channels." },

  { question: "Do you also support print as well as eBooks on IngramSpark?",
    answer: "Absolutely. We prepare your book for both formats, ensuring professional quality in each." },

  { question: "Can you help me market to bookstores and libraries?",
    answer: "Yes, we provide marketing strategies and support to increase your book’s visibility with buyers in the retail and library market." },
];

  return (
    <div>
    <Sidebar/>
      <Header/>
    
      
    {/* Section 1 */}
      <motion.section
      className="w-full flex flex-row justify-center items-center bg-cover bg-no-repeat px-4 py-16 md:px-20 "
      style={{ backgroundImage: `url('/Landing/hero1.png')` }}
      initial="hidden"
      animate="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-9">
          <motion.div className="md:w-1/2 "
          initial="hidden"
          animate="visible"
          variants={slideLeftFade}>
            <h1 className="heading-lp text-[36px] md:text-[48px] text-center md:text-left  text-white mb-2">
             Maximize Reach with IngramSpark and Glastonbury Publications
            </h1>
            <p className="text-lp text-[18px] text-center md:text-left  text-white mb-6">
             IngramSpark opens doors to bookstores, libraries, and retailers worldwide. At Glastonbury Publications, we navigate the complexities of print and digital distribution for you, ensuring your book meets industry standards and gets the visibility it needs across every major channel.
            </p>
            <div className="overflow-relative flex flex-col md:flex-row gap-6 px-16 md:px-0  " >
                <motion.button
                          onClick={openPopup}
                          className="w-auto relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                          
                          className="w-full relative flex flex-row justify-center px-6 py-2 font-bold z-50"
                          style={{
                            borderRadius: "10px",
                            background: "white",
                            color: "#000",
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
          </motion.div>
            <motion.div className="md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              <div className="w-auto bg-white rounded-lg p-4">
                <h1 className="heading-lp text-[30px] text-black mb-2 text-center">
                              Start Your Publishing Journey
                            </h1>
                            <Heroform/>
              </div>
            </motion.div>
        </div>  
      </motion.section>
    {/*Section 2 */}                      
      <motion.section
      className="w-full flex flex-row justify-center items-center bg-white px-4 py-16 md:px-20 "
     
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideLeftFade}>
            <span className="heading-lp text-[18px] md:text-[20px] text-center md:text-left  text-black mb-2">
              Glastonbury Publications
            </span>
            <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-black mb-2">
             Reach Bookstores and Libraries with IngramSpark
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
             IngramSpark connects your book with thousands of retailers, libraries, and distributors worldwide. Glastonbury Publications ensures your title is professionally formatted, compliant, and ready for both print and digital sales.
            </p>
             <div className="overflow-relative flex flex-col gap-4  mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Wide bookstore & library distribution</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Print & eBook publishing expertise</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Professional-quality formatting</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Industry-standard compliance</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Reliable global publishing support</p>
                </div>
                             
             </div>               
            <div className="overflow-relative flex flex-col md:flex-row gap-6 px-16 md:px-0  " >
                <motion.button
                          onClick={openPopup}
                          className="w-auto relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                          
                          className="text-lp rounded-[10px] border-1 border-black w-full relative flex flex-row justify-center px-6 py-2 font-bold z-50"
                         
                          whileHover={buttonHover}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Phone className="mr-2 "/>
                          (415) 918-6468
                                      
                </motion.button>
                </Link>                   
          </div>
          </motion.div>
            <motion.div className="md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
                <img src="Landing/section24.png" className=""/>
              
            </motion.div>
        </div>  
      </motion.section>
    {/* Section 3 */}  
      <motion.section
      className="w-full flex flex-row justify-center  items-center bg-cover bg-no-repeat px-4 py-8 md:px-20 "
      style={{ backgroundImage: `url('/Landing/Section33.png')` }}
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 flex justify-start md:justify-center"
            initial="hidden"
            whileInView="visible"
            variants={slideUpFade}
            >
              
                <img src="Landing/g 15.png" className="w-[503px]"/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-white mb-2">
              Your Pathway to Bookstores and Libraries Starts Here.
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              IngramSpark connects authors with retailers, libraries, and distributors around the world. Glastonbury Publications helps you publish confidently, ensuring your book meets professional standards and reaches the widest possible audience.
            </p>
                          
            <div className="overflow-relative flex flex-col md:flex-row gap-6 px-16 md:px-0  " >
                <motion.button
                          onClick={openPopup}
                          className="w-auto relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                          
                          className="text-lp rounded-[10px] bg-white w-full relative flex flex-row justify-center px-6 py-2 font-bold z-50"
                         
                          whileHover={buttonHover}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Phone className="mr-2 "/>
                          (415) 918-6468
                                      
                </motion.button>
                </Link>                   
          </div>
          </motion.div>
            
        </div>  
      </motion.section>
    {/* Section 4 */}                      
      <motion.section
          className="w-full flex flex-row justify-center items-center bg-[#F4F4F4] px-4 py-16 md:px-20 "
        
          initial="hidden"
          whileInView="visible"
          variants={headerFade}
          >
        <div className="w-full max-w-[1720px] flex flex-col justify-center items-center gap-16">
          <motion.div className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={slideLeftFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[40px] text-center text-black mb-2">
             Your Pathway to Global Bookstores and Libraries with IngramSpark
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6">
             IngramSpark gives authors access to bookstores and libraries worldwide. At Glastonbury Publications, we’ve built a streamlined process to help you publish with confidence, ensuring your book meets industry standards and reaches its full potential.
            </p>
            
          </motion.div>
            <motion.div className="w-full flex flex-col md:flex-row"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              <div className="md:w-2/3">
               <StepTabs
                steps={IngramSteps}
                initialKey="one"
                accentGradient="bg-[linear-gradient(180deg,#2B6781_0%,#31552F_99.09%)]"
                />
              </div>
              <div className="md:w-1/3 flex justify-end">
                <img src="Landing/8 15.png" className=""/>
              </div>
            </motion.div>
        </div>  
      </motion.section>
    {/* Section 5 */}
      <motion.section
          className="w-full flex flex-row justify-center items-center bg-[#F4F4F4] px-4 py-16 md:px-20 "
        
          initial="hidden"
          whileInView="visible"
          variants={headerFade}
          >
        <div className="w-full max-w-[1720px] flex flex-col justify-center items-center gap-16">
          <StickyStepsingram/>
        </div>  
      </motion.section>
    {/* Section 6 */}                      
      <motion.section
      className="w-full flex flex-row justify-center  items-center bg-cover bg-no-repeat px-4 py-8 md:px-20 "
      style={{ backgroundImage: `url('/Landing/section6.png')` }}
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 flex justify-start md:justify-center"
            initial="hidden"
            whileInView="visible"
            variants={slideUpFade}
            >
              
                <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-white mb-2">
              Ready to See Your Book in Bookstores and Libraries?
            </h2>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
           
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              IngramSpark opens doors to retail and library networks worldwide. With Glastonbury Publications, your manuscript is transformed into a professional book that meets industry standards and reaches the shelves where readers are waiting.
            </p>
                          
            <div className="overflow-relative flex flex-col md:flex-row gap-6 px-16 md:px-0  " >
                <motion.button
                          onClick={openPopup}
                          className="w-auto relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                          
                          className="text-lp rounded-[10px] bg-white w-full relative flex flex-row justify-center px-6 py-2 font-bold z-50"
                         
                          whileHover={buttonHover}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Phone className="mr-2 "/>
                          (415) 918-6468
                                      
                </motion.button>
                </Link>                   
          </div>
          </motion.div>
            
        </div>  
      </motion.section>
    {/* Section 7 */}                        
      <motion.section
        className="w-full flex flex-row justify-center  items-center px-4 py-8 md:px-32 bg-[linear-gradient(180deg,#F4F4F4_30%,#fff_70%)]"
        initial="hidden"
        whileInView="visible"
        variants={headerFade}
        >
        <div className="w-full max-w-[1720px] flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-col justify-center items-center mb-8">
            
              <h2 className="heading-lp text-[32px] md:text-[40px] text-center text-black mb-2">
              What It Costs
            </h2>
            
            
            
          </div>                  
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">                  
             <div className="w-full bg-white text-black  p-4  rounded-2xl space-y-3"
                  style={{ filter: "drop-shadow(4.62px 5.544px 1.756px rgba(0,0,0,0.25))" }}>
                    <div className="w-full flex flex-row justify-between items-center">
                      <div >
                      <img src="Landing/circle.png" className="w-[32px] mt-8"/>
                      </div>
                      <div >
                      <p className="heading-lp2 text-white w-auto py-1 px-2 bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] rounded-lg">
                        5% off
                      </p>
                      </div>

                    </div>
                    <div className="w-full gap-2">
                        <h2 className="heading-lp text-[32px] text-center md:text-left">
                          Starter Package
                        </h2>
                    </div>
                    <div className="w-full flex flex-row justify-center md:justify-start items-center gap-3 ">
                        <h2 className="line-through heading-lp2 text-[32px] text-center md:text-left">
                         $1499
                        </h2>
                        <h2 className="heading-lp2 text-[32px] text-center md:text-left">
                          $699
                        </h2>
                    </div>
                     <div className="overflow-relative flex" >
                          <motion.button
                                    onClick={openPopup}
                                    className="w-full relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                                    
                                     Get Started
                                                
                          </motion.button>
                    </div>
                     <div className="overflow-x-hidden h-[250px] scroll flex flex-col gap-4 mb-8  " >
             
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-1">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Editing</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-1">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Formatting </p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-1">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Proofreading </p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Book Cover Design</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">ISBN registration</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Publishing on Ingram Spark</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">100% Ownership rights</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">100% Royalties</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Online sales dashboard</p>
                        </div>
                    </div>
            </div>  
            <div className="w-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] scale-110 text-white p-4 rounded-2xl space-y-3"
                  style={{ filter: "drop-shadow(4.62px 5.544px 1.756px rgba(0,0,0,0.25))" }}>

                    <div className="w-full flex flex-row justify-between items-center">
                      <div >
                      <img src="Landing/play.png" className="w-[32px] mt-8"/>
                      </div>
                    <div >
                      <p className="heading-lp2 text-black w-auto py-1 px-2 bg-white rounded-lg">
                        Most popular
                      </p>
                    </div>
                                      
                    </div>
                    <div className="w-full gap-2">
                        <h2 className="heading-lp text-[32px] text-center md:text-left">
                          Bestseller Package
                        </h2>
                        
                    </div>
                    <div className="w-full flex flex-row justify-center md:justify-start items-center gap-3 ">
                      
                        
                        <h2 className="line-through heading-lp2 text-[32px] text-center md:text-left">
                         $3499
                        </h2>
                      
                        <h2 className="heading-lp2 text-[32px] text-center md:text-left">
                          $1699
                        </h2>
                    </div>
                     <div className="overflow-relative flex" >
                          <motion.button
                                    onClick={openPopup}
                                    className="w-full relative justify-center flex flex-row px-6 py-2 font-medium z-50"
                                    style={{
                                      borderRadius: "10px",
                                      background: "#FFF",
                                      color: "#000",
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
                                    
                                     Get Started
                                                
                          </motion.button>
                    </div>
                     <div className="overflow-x-hidden h-[270px] flex flex-col gap-4 mb-8  " >
             
                        
                         
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Editing & developmental editing</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Proofreading</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] "> Formatting</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Book Cover Design</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">ISBN Registration</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Author's website</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Publishing on top 5 platforms</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Dedicated Project Manager</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">1 month social media management</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">10 author copies</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">100% Ownership rights</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-black min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-white flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">100% Royalties</p>
                        </div>
                    </div>
            </div>   
            <div className="w-full bg-white text-black  p-4  rounded-2xl space-y-3"
                  style={{ filter: "drop-shadow(4.62px 5.544px 1.756px rgba(0,0,0,0.25))" }}>
                    <div className="w-full flex flex-row justify-between items-center">
                      <div >
                      <img src="Landing/circle.png" className="w-[32px] mt-8"/>
                      </div>
                      <div >
                      <p className="heading-lp2 text-white w-auto py-1 px-2 bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] rounded-lg">
                        5% off
                      </p>
                      </div>

                    </div>
                    <div className="w-full gap-2">
                        <h2 className="heading-lp text-[32px] text-center md:text-left">
                          Premium Package
                        </h2>
                    </div>
                    <div className="w-full flex flex-row justify-center md:justify-start items-center gap-3 ">
                        <h2 className="line-through heading-lp2 text-[32px] text-center md:text-left">
                         $11999
                        </h2>
                        <h2 className="heading-lp2 text-[32px] text-center md:text-left">
                          $5499
                        </h2>
                    </div>
                     <div className="overflow-relative flex" >
                          <motion.button
                                    onClick={openPopup}
                                    className="w-full relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                                    
                                     Get Started
                                                
                          </motion.button>
                    </div>
                     <div className="overflow-x-hidden h-[250px] scroll flex flex-col gap-4 mb-8  " >
             
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-1">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Publishing on 30+ platforms</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-1">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Worldwide bookstore distribution</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-1">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px] ">Editing & Formatting</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Proofreading</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">ISBN & Copyright</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Book Cover Design</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">2 months social media management</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">2 months Amazon optimization</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">15–20 sec book trailer</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Author's website</p>
                        </div>
                        <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Sales dashboard access</p>
                        </div>
                         <div className="flex flex-row ">
                          <div className="heading-lp text-white min-w-5 min-h-5 max-w-5 max-h-5 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center mr-3 mt-[2px]">
                            <Check/>
                          </div>
                            <p className="heading-lp2 text-[16px]">Dedicated illustrations artist</p>
                        </div>
                    </div>
            </div>               
          </div>  
        </div>  
      </motion.section>
    {/* Section 8 */}
      <motion.section
      className="w-full flex flex-row justify-center  items-center bg-[#fff] px-4 py-8 md:px-20 "
      
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 flex justify-start md:justify-center"
            initial="hidden"
            whileInView="visible"
            variants={slideUpFade}
            >
              
                <img src="Landing/10 24.png" className=""/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-black mb-2">
              Get Your Book into Bookstores & Libraries with IngramSpark
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
              IngramSpark opens doors to retailers and libraries worldwide. With Glastonbury Publications, your book will be industry-ready, distributed globally, and positioned for maximum visibility.
            </p>
             <div className="overflow-relative flex flex-col gap-4 mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">ISBN, trim size, and compliance management</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Professional print & eBook formatting</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Global distribution through Ingram’s network</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Ongoing marketing support for retail success</p>
                </div>
                
                             
             </div>              
            <div className="overflow-relative flex flex-col md:flex-row gap-6 px-16 md:px-0  " >
                <motion.button
                          onClick={openPopup}
                          className="w-auto relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                          
                          className="text-lp rounded-[10px] bg-white border-2 border-black w-full relative flex flex-row justify-center px-6 py-2 font-bold z-50"
                         
                          whileHover={buttonHover}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Phone className="mr-2 "/>
                          (415) 918-6468
                                      
                </motion.button>
                </Link>                   
          </div>
          </motion.div>
            
        </div>  
      </motion.section>
    {/* Section 9 */}                      
      <motion.section
      className="w-full flex flex-row justify-center items-center bg-black px-4 py-16 md:px-20 "
     
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideLeftFade}>
            
            <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-white mb-2">
             Why Choose Glastonbury Publications for IngramSpark?
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-white mb-6">
             IngramSpark opens doors to bookstores, libraries, and retailers worldwide — but only if your book meets professional publishing standards. At Glastonbury Publications, we manage compliance, formatting, and distribution with precision, giving your book the credibility and reach it deserves.
            </p>
            
          </motion.div>
            <motion.div className="md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
                <img src="Landing/9 15.png" className=""/>
              
            </motion.div>
        </div>  
      </motion.section>
      
    {/* Section 10 */}                      
      <motion.section
            className="w-full flex flex-row justify-center items-center bg-[#F4F4F4] px-4 py-16 md:px-20 "
          
            initial="hidden"
            whileInView="visible"
            variants={headerFade}
            >
          <div className="w-full max-w-[1720px] flex flex-col justify-center items-center gap-16">
            <Testimonialsingram/>
          </div>  
      </motion.section>
    {/* Section 11 */}                      
      <motion.section
        className="w-full flex flex-row justify-center items-center bg-white px-4 py-16 md:px-20 "
      
        initial="hidden"
        whileInView="visible"
        variants={headerFade}
        >
          <div className="w-full max-w-[1720px] flex flex-col  justify-center items-center gap-16">
            <div className="w-full flex flex-col md:flex-row  justify-center items-center gap-16">
            <motion.div className="md:w-2/3 "
            initial="hidden"
            whileInView="visible"
            variants={slideLeftFade}>
              
              <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-black mb-2">
              Our IngramSpark Publishing Portfolio
              </h2>
              <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
                From bookstores to libraries, our IngramSpark projects show how professional publishing opens doors. Our portfolio reflects the reach and credibility that Glastonbury Publications delivers for every author.
              </p>
                            
              <div className="overflow-relative flex flex-col md:flex-row gap-6 px-16 md:px-0  " >
                  <motion.button
                            onClick={openPopup}
                            className="w-auto relative justify-center flex flex-row px-6 py-2 font-medium z-50"
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
                            
                            className="text-lp rounded-[10px] border-1 border-black w-full relative flex flex-row justify-center px-6 py-2 font-bold z-50"
                          
                            whileHover={buttonHover}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Phone className="mr-2 "/>
                            (415) 918-6468
                                        
                  </motion.button>
                  </Link>                   
            </div>
            </motion.div>
              <motion.div className="md:w-1/3 flex justify-end"
              initial="hidden"
              animate="visible"
              variants={slideRightFade}
              >
                
                  <img src="Landing/OBJECTS5.png" className=""/>
                
              </motion.div>
              </div>
              <div className="w-full">
                <CoverMarquee/>
              </div>
          </div>  
      </motion.section>
    {/* Section 12 */}                        
      <motion.section
          className="w-full flex flex-row justify-center items-center bg-[#F4F4F4] px-4 py-16 md:px-20 "
        
          initial="hidden"
          whileInView="visible"
          variants={headerFade}
          >
        <div className="w-full max-w-[1720px] flex flex-col justify-center items-center gap-10">
          <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-black">
             FAQs
            </h2>
          <FaqAccordion items={faqItems} initialOpen={0} />
        </div>  
      </motion.section>
    {/* Section 13 */}                        
      <motion.section
      className="w-full flex flex-row justify-center  items-center px-4 py-8 md:px-32 "
      
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1720px] flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-col justify-center items-center">
            
              <h2 className="heading-lp text-[32px] md:text-[40px] text-center text-black mb-2">
            Reach Bookstores & Libraries with IngramSpark — Work With Us
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6 max-w-3xl">
            IngramSpark connects you with bookstores and libraries worldwide. We’ll ensure your book meets industry standards and is ready for wide distribution.
            </p>
            
            
          </div>                  
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">                  
          <motion.div className="w-full md:w-1/2 flex justify-start md:justify-center bg-cover bg-no-repeat rounded-3xl p-6"
          style={{ backgroundImage: `url('/Landing/Form5.png')` }}
            initial="hidden"
            whileInView="visible"
            variants={slideUpFade}
            >
              
                <ContactFooter/>
              
          </motion.div>
          <motion.div className="md:w-1/2 p-4 bg-[#F8F8F9] rounded-3xl "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[28px] text-center text-black mb-8">
              What You Can Expect:
            </h2>
            
             <div className="overflow-relative flex flex-col gap-4 mb-8  " >
             
                <div className="flex flex-row ">
              <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">We’ll review your manuscript for professional compliance.</p>
                </div>
                <div className="flex flex-row ">
              <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Our team will confirm ISBN, trim size, and distribution preferences.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">An assigned editor will ensure your book is polished to industry quality.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Your project manager will oversee setup and launch for maximum reach.</p>
                </div>
                
                             
             </div>              
           
          </motion.div>
          </div>  
        </div>  
      </motion.section>
      

      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    
    <Footer/>
    </div>
  )
}

export default IngramSpark
