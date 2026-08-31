import { useState } from "react";
import Header from '../../Components/landing/Header'
import Footer from '../../Components/landing/Footer'
import Sidebar from '../../Components/landing/Sidebar'
import { Link } from "react-router";
import { motion } from "framer-motion";
import Popup from "../../Components/Popup";
import { Check, CircleCheckBig, LucideMessageCircle , Phone,} from "lucide-react";
import StepTabs from "../../Components/landing/StepTabs";
import CoverMarquee from "../../Components/landing/CoverMarquee";
import FaqAccordion from "../../Components/landing/FaqAccordion";
import ContactFooter from "../../Components/landing/ContactFooter";
import Heroform from "../../Components/landing/Heroform";
import PricingCard from "../../Components/landing/PricingCard";
import { KoboSteps } from "../../Components/landing/Data/KoboSteps";

import Testimonials from "../../Components/landing/Testimonial/Testimonialskobo";
import StickyStepskobo from "../../Components/landing/Steps/StickyStepsKobo";
import Testimonialskobo from "../../Components/landing/Testimonial/Testimonialskobo";

const Kobo = () => {
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
    question: "How does publishing on Kobo differ from Amazon?",
    answer:
      "Kobo specializes in global distribution, giving your book access to readers in over 190 countries.",
  },
  { question: "Can you help me make my book appeal to international audiences?",
    answer: "We optimize your metadata and categories so your book is discoverable worldwide, not just in one region." },
  { question: "Do you handle eBook formatting for Kobo?",
    answer: "Absolutely. We deliver ePub files that are fully compatible with Kobo’s reading devices and apps." },
  { question: "Will my book be available in local markets like Canada and Europe?",
    answer: "Yes, Kobo has strong market share in regions like Canada and parts of Europe, and we’ll make sure your book is positioned to sell there." },
  { question: "Do you provide marketing support specific to Kobo?",
    answer: "Yes, we guide you in leveraging Kobo promotions and global marketing opportunities to expand your readership." },
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
              Go Global on Kobo – Connect with Readers Worldwide
            </h1>
            <p className="text-lp text-[18px] text-center md:text-left  text-white mb-6">
             Kobo gives authors access to millions of readers in over 190 countries. With Glastonbury Publications, your book is optimized for international reach, seamless distribution, and professional presentation — so your story resonates with audiences far beyond borders.
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
             Expand Your Reach with Kobo Publishing Experts
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
             Glastonbury Publications helps authors unlock Kobo’s global network, connecting you with readers across more than 190 countries. Our expertise ensures your book is formatted, positioned, and promoted for maximum international reach.
            </p>
             <div className="overflow-relative flex flex-col gap-4  mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Global eBook distribution on Kobo</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Clean, professional formatting</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Strategic keyword & category placement</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Expertise in global audience engagement</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Consistent, timely publishing</p>
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
              
                <img src="Landing/section21.png" className=""/>
              
            </motion.div>
        </div>  
      </motion.section>
    {/* Section 3 */}  
      <motion.section
      className="w-full flex flex-row justify-center  items-center bg-cover bg-no-repeat px-4 py-8 md:px-20 "
      style={{ backgroundImage: `url('/Landing/Section31.png')` }}
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
              
                <img src="Landing/g 12.png" className="w-[503px]"/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-white mb-2">
              Share Your Story with Readers Across the Globe.
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Kobo reaches over 190 countries — and your book could be next. With Glastonbury Publications by your side, you’ll publish with confidence, knowing your work is optimized for global audiences who are eager for new voices.
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
             A Clear Process for Reaching Kobo’s Global Readers
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6">
             Kobo’s audience spans over 190 countries, and we make sure your publishing journey is tailored for maximum reach. Our proven process guides you from manuscript to global distribution, with every step designed to optimize your success on Kobo.
            </p>
            
          </motion.div>
            <motion.div className="w-full flex flex-col md:flex-row"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              <div className="md:w-2/3">
               <StepTabs
                steps={KoboSteps}
                initialKey="one"
                accentGradient="bg-[linear-gradient(180deg,#2B6781_0%,#31552F_99.09%)]"
                />
              </div>
              <div className="md:w-1/3 flex justify-end">
                <img src="Landing/8 12.png" className=""/>
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
          <StickyStepskobo/>
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
             Ready to Reach Readers in 190+ Countries?
            </h2>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
           
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Publishing on Kobo means global exposure — and we’ll get you there with ease. From professional preparation to worldwide distribution, Glastonbury Publications ensures your manuscript is polished, published, and ready for international success.
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
                            <p className="heading-lp2 text-[16px]">Publishing on Kobo</p>
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
              
                <img src="Landing/10 21.png" className=""/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-black mb-2">
              Reach Readers in 190+ Countries with Kobo Publishing Expertise
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
             Kobo’s global audience is waiting for your story. At Glastonbury Publications, we prepare your book for flawless international distribution, ensuring you connect with readers across every market.
            </p>
             <div className="overflow-relative flex flex-col gap-4 mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Global eBook publishing guidance</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Distribution tailored for multiple regions</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Professional Kobo formatting & compliance</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Post-launch support for global growth</p>
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
             Why Choose Glastonbury Publications for Kobo Publishing?
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-white mb-6">
             Kobo offers authors access to readers in more than 190 countries, but success requires more than distribution. At Glastonbury Publications, we tailor your publishing journey to thrive in global markets, ensuring your book is beautifully designed, strategically categorized, and optimized for international visibility.
            </p>
            
          </motion.div>
            <motion.div className="md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
                <img src="Landing/9 12.png" className=""/>
              
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
            <Testimonialskobo/>
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
              Our Kobo Publishing Portfolio
              </h2>
              <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
            We’ve guided authors to global audiences through Kobo’s expansive marketplace. From formatting to international reach, our portfolio showcases stories that have found readers worldwide.
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
                
                  <img src="Landing/OBJECTS2.png" className=""/>
                
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
              Go Global with Kobo Publishing — Start Your Journey Today!
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6 max-w-3xl">
            With Kobo, your story can reach readers in over 190 countries. We’ll ensure your book is prepared, optimized, and distributed seamlessly across the globe.
            </p>
            
            
          </div>                  
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">                  
          <motion.div className="w-full md:w-1/2 flex justify-start md:justify-center bg-cover bg-no-repeat rounded-3xl p-6"
          style={{ backgroundImage: `url('/Landing/Form2.png')` }}
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
                <p className="heading-lp2 text-[16px] ">We’ll evaluate your manuscript for Kobo’s ePub standards.</p>
                </div>
                <div className="flex flex-row ">
              <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Our team will confirm distribution preferences across Kobo’s regions.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">A professional editor will refine your book for global readers.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Your publishing manager will guide you through launch and promotions.</p>
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

export default Kobo
