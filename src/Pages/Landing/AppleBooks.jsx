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
import { AppleSteps } from "../../Components/landing/Data/AppleSteps";
import StickyStepsapple from "../../Components/landing/Steps/StickyStepsapple";
import Testimonialsapple from "../../Components/landing/Testimonial/Testimonialsapple";

const AppleBooks = () => {
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
    question: "Why is Apple Books a strong publishing option?",
    answer:
      "Apple Books reaches millions of Apple users, many of whom are loyal eBook readers.",
  },
  { question: "What’s unique about publishing on Apple compared to Amazon?",
    answer: "Apple emphasizes design and quality — books must meet strict formatting standards, and we ensure yours does." },

  { question: "Can my book be available on iPhones and iPads?",
    answer: "Yes! Apple Books is integrated across all Apple devices, and we format your book to deliver a seamless reading experience." },
  { question: "Do you help with Apple Books metadata and keywords?",
    answer: "Absolutely. We optimize your description and metadata specifically for Apple’s search and recommendation system." },

  { question: "Do you provide marketing tailored to Apple Books?",
    answer: "Yes, we craft campaigns that speak to Apple’s user base, boosting downloads and visibility in the store." },
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
              Stand Out on Apple Books – Publish with Professional Precision
            </h1>
            <p className="text-lp text-[18px] text-center md:text-left  text-white mb-6">
             Apple Books is home to millions of discerning readers who expect quality. Glastonbury Publications helps you meet that standard with flawless design, compelling descriptions, and professional publishing support — giving your book the polished edge it deserves in Apple’s marketplace.
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
             Professional Publishing for Apple Books
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
            Apple Books attracts millions of readers who value design and quality. At Glastonbury Publications, we refine your book to meet Apple’s exacting standards, ensuring a seamless publishing experience and professional results.
            </p>
             <div className="overflow-relative flex flex-col gap-4  mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Apple Books–ready formatting</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">High-quality cover design</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Metadata tailored for Apple audiences</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Smooth approval & distribution process</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Experienced publishing team</p>
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
              
                <img src="Landing/section25.png" className=""/>
              
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
              
                <img src="Landing/g 16.png" className="w-[503px]"/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-white mb-2">
              Stand Out in Apple’s Marketplace with a Professional Edge.
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Apple Books readers expect quality, and we help you deliver it. With Glastonbury Publications, your book will be beautifully prepared, optimized, and confidently published for millions of Apple users worldwide.
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
             A Professional Publishing Process for Apple Books
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6">
             Apple Books is known for quality and design — and so are we. Our guided publishing process makes sure your manuscript is refined, compliant, and positioned to shine in Apple’s marketplace, helping your book capture the attention it deserves.
            </p>
            
          </motion.div>
            <motion.div className="w-full flex flex-col md:flex-row"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              <div className="md:w-2/3">
               <StepTabs
                steps={AppleSteps}
                initialKey="one"
                accentGradient="bg-[linear-gradient(180deg,#2B6781_0%,#31552F_99.09%)]"
                />
              </div>
              <div className="md:w-1/3 flex justify-end">
                <img src="Landing/8 16.png" className=""/>
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
          <StickyStepsapple/>
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
              Ready to Publish on Apple Books?
            </h2>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
           
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Apple readers value quality — and so do we. Our expert team ensures your manuscript is professionally prepared, optimized, and published on Apple Books, giving your work the polished edge it deserves.
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
                            <p className="heading-lp2 text-[16px]">Publishing on Apple Books</p>
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
              
                <img src="Landing/10 25.png" className=""/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-black mb-2">
              Stand Out on Apple Books with Professional Publishing Support
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
              Apple Books readers expect excellence, and that’s what we deliver. At Glastonbury Publications, we ensure your book meets Apple’s strict quality standards and engages millions of Apple users.
            </p>
             <div className="overflow-relative flex flex-col gap-4 mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Apple Books–ready formatting & design</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Metadata optimized for Apple’s marketplace</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Smooth publishing & approval process</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Reader engagement strategies to boost downloads</p>
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
             Why Choose Glastonbury Publications for Apple Books?
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-white mb-6">
             Apple Books readers expect excellence in every title. With Glastonbury Publications, your manuscript is refined to meet Apple’s high standards. From flawless formatting to optimized metadata, we ensure your book stands out in Apple’s premium marketplace.
            </p>
            
          </motion.div>
            <motion.div className="md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
                <img src="Landing/9 16.png" className=""/>
              
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
            <Testimonialsapple/>
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
              Our Apple Books Publishing Portfolio
              </h2>
              <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
            Apple Books demands excellence — and our portfolio proves we deliver it. From stunning formatting to optimized metadata, we’ve helped authors publish premium-quality books that resonate with Apple’s readers.
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
                
                  <img src="Landing/OBJECTS6.png" className=""/>
                
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
              Publish Professionally on Apple Books — Begin Today
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6 max-w-3xl">
            Apple Books readers expect quality, and Glastonbury Publications ensures your book exceeds those standards. We’ll handle every detail with care.
            </p>
            
            
          </div>                  
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">                  
          <motion.div className="w-full md:w-1/2 flex justify-start md:justify-center bg-cover bg-no-repeat rounded-3xl p-6"
          style={{ backgroundImage: `url('/Landing/Form6.png')` }}
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
                <p className="heading-lp2 text-[16px] ">  We’ll review your manuscript for Apple Books’ formatting requirements.</p>
                </div>
                <div className="flex flex-row ">
              <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Our team will confirm metadata and optimize your description for Apple users.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">An editor will refine your manuscript for a premium reading experience.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Your publishing lead will manage approval and launch smoothly.</p>
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

export default AppleBooks
