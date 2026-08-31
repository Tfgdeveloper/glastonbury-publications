import { useState } from "react";
import Header from '../../Components/landing/Header'
import Footer from '../../Components/landing/Footer'
import Sidebar from '../../Components/landing/Sidebar'
import { Link } from "react-router";
import { motion } from "framer-motion";
import Popup from "../../Components/Popup";
import { Check, CircleCheckBig, LucideMessageCircle , Phone,} from "lucide-react";
import StepTabs from "../../Components/landing/StepTabs";
import { AmazonSteps } from "../../Components/landing/Data/AmazonSteps";

import Testimonials from "../../Components/landing/Testimonials";
import CoverMarquee from "../../Components/landing/CoverMarquee";
import FaqAccordion from "../../Components/landing/FaqAccordion";
import ContactFooter from "../../Components/landing/ContactFooter";
import Heroform from "../../Components/landing/Heroform";
import PricingCard from "../../Components/landing/PricingCard";
import { DraftSteps } from "../../Components/landing/Data/DraftSteps";
import StickyStepsdraft from "../../Components/landing/Steps/StickyStepsdraft";
import Testimonialsdraft from "../../Components/landing/Testimonial/Testimonialsdraft";

const Draft2Digital = () => {
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
    question: "What makes Draft2Digital different?",
    answer:
      "Draft2Digital distributes your book to multiple online stores at once, expanding your reach without extra effort.",
  },

  { question: "How do you help authors succeed with Draft2Digital?",
    answer: "We prepare your manuscript, polish your metadata, and ensure your book is optimized for every partner platform." },
    
  { question: "Can I still publish on Amazon if I use Draft2Digital?",
    answer: "Yes, you can — we help you choose the best distribution strategy, including Amazon KDP if desired." },

  { question: "Do you handle formatting for Draft2Digital?",
    answer: "Yes. We create clean, professional layouts so your book looks perfect across all supported stores." },

  { question: "How do you support marketing when my book is on so many platforms?",
    answer: "We provide multi-channel marketing strategies to help you build visibility everywhere your book is sold." },
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
              Effortless eBook Distribution with Draft2Digital Experts
            </h1>
            <p className="text-lp text-[18px] text-center md:text-left  text-white mb-6">
             Draft2Digital takes your book to countless digital storefronts, but strategy matters as much as distribution. At Glastonbury Publications, we refine your manuscript, optimize metadata, and handle the technical details — so your book launches smoothly and reaches readers everywhere.
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
             Smarter Distribution with Draft2Digital
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
             With Draft2Digital, your book can reach multiple digital storefronts at once. Glastonbury Publications makes sure your manuscript is ready, polished, and optimized for smooth distribution and strong visibility across platforms.
            </p>
             <div className="overflow-relative flex flex-col gap-4  mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Wide distribution through Draft2Digital</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Polished, error-free formatting</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Metadata & description optimization</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Quick, reliable publishing process</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Professional author support</p>
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
              
                <img src="Landing/section22.png" className=""/>
              
            </motion.div>
        </div>  
      </motion.section>
    {/* Section 3 */}  
      <motion.section
      className="w-full flex flex-row justify-center  items-center bg-cover bg-no-repeat px-4 py-8 md:px-20 "
      style={{ backgroundImage: `url('/Landing/Section32.png')` }}
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
              
                <img src="Landing/g 13.png" className="w-[503px]"/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-white mb-2">
              Distribute Everywhere. Publish with Confidence.
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Draft2Digital takes your book to countless digital platforms, and Glastonbury Publications ensures every detail is handled perfectly — from formatting to metadata. Publish today and let your story reach readers across multiple marketplaces.
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
             Seamless Distribution Through Draft2Digital — Made Simple
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6">
             Draft2Digital opens the door to countless online storefronts. Our step-by-step publishing process ensures your book is prepared, optimized, and distributed smoothly across multiple platforms, giving you professional support every step of the way.
            </p>
            
          </motion.div>
            <motion.div className="w-full flex flex-col md:flex-row"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              <div className="md:w-2/3">
               <StepTabs
                steps={DraftSteps}
                initialKey="one"
                accentGradient="bg-[linear-gradient(180deg,#2B6781_0%,#31552F_99.09%)]"
                />
              </div>
              <div className="md:w-1/3 flex justify-end">
                <img src="Landing/8 13.png" className=""/>
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
          <StickyStepsdraft/>
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
              Ready to Distribute Your Book Everywhere?
            </h2>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
           
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Draft2Digital gives you access to countless platforms, and we make the process seamless. From editing and formatting to metadata optimization and marketing, Glastonbury Publications ensures your book is ready to succeed across all channels.
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
                            <p className="heading-lp2 text-[16px]">Publishing on Draft 2 Digital</p>
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
              
                <img src="Landing/10 22.png" className=""/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-black mb-2">
              Expand Your Reach Across Multiple Platforms with Draft2Digital
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
              Draft2Digital distributes your book to countless online storefronts — and Glastonbury Publications ensures your manuscript is ready to shine on every one. From formatting to strategy, we handle it all.
            </p>
             <div className="overflow-relative flex flex-col gap-4 mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Optimized distribution to partner stores</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Professional eBook formatting & setup</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Streamlined publishing administration</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Marketing strategies for multi-store success</p>
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
             Why Choose Glastonbury Publications for Draft2Digital?
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-white mb-6">
             Draft2Digital distributes your book to multiple storefronts, but maximizing its potential takes expertise. At Glastonbury Publications, we prepare your manuscript, polish metadata, and manage every detail — ensuring your book doesn’t just reach platforms, but reaches readers.
            </p>
            
          </motion.div>
            <motion.div className="md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
                <img src="Landing/9 13.png" className=""/>
              
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
            <Testimonialsdraft/>
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
             Our Draft2Digital Publishing Portfolio
              </h2>
              <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
            Through Draft2Digital, we’ve launched books across multiple platforms with seamless distribution. Our portfolio demonstrates how strategic preparation leads to visibility everywhere readers buy books.
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
                
                  <img src="Landing/OBJECTS3.png" className=""/>
                
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
              Distribute Everywhere with Draft2Digital — Let’s Talk!
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6 max-w-3xl">
            Draft2Digital simplifies distribution, and we maximize it for you. With our help, your book will reach multiple platforms with professional polish.
            </p>
            
            
          </div>                  
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">                  
          <motion.div className="w-full md:w-1/2 flex justify-start md:justify-center bg-cover bg-no-repeat rounded-3xl p-6"
          style={{ backgroundImage: `url('/Landing/Form3.png')` }}
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
                <p className="heading-lp2 text-[16px] ">We’ll review your manuscript for compatibility with Draft2Digital’s system.</p>
                </div>
                <div className="flex flex-row ">
              <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Our team will confirm metadata and descriptions for every storefront.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">An assigned editor will prepare your book for digital excellence.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Your project manager will coordinate multi-store publishing for smooth rollout.</p>
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

export default Draft2Digital
