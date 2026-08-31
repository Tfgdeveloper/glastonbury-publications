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


import CoverMarquee from "../../Components/landing/CoverMarquee";
import FaqAccordion from "../../Components/landing/FaqAccordion";
import ContactFooter from "../../Components/landing/ContactFooter";
import Heroform from "../../Components/landing/Heroform";
import SEO from '../../Components/SEO'
import Testimonials from "../../Components/landing/Testimonial/Testimonialsamazon";
import StickySteps from "../../Components/landing/Steps/StickyStepsamazon";
import Video from "../../Components/Video";
import Podcast from "../../Components/Podcast";

const Amazon = () => {
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
    question: "How do you help authors succeed in publishing?",
    answer:
      "We optimize every detail — from formatting to categories and keywords — to ensure your book is positioned for maximum visibility, discoverability, and sales across all major publishing platforms.",
  },
  { question: "Can you help me generate authentic reviews?",
    answer: "Yes. We guide you through ethical, reader-driven review strategies that build genuine feedback, strengthen credibility, and improve your book’s ranking in online marketplaces." },
  { question: "Will my book be available in both print and digital formats?",
    answer: "Absolutely. We prepare professional files for both print and eBook editions, ensuring your readers can access your work wherever they prefer — on tablets, e-readers, or in paperback form." },

  { question: "How do you ensure my book stands out among millions of titles?",
    answer: "Through expert design, keyword strategy, and category placement, we give your book the professional edge it needs to attract the right audience and compete successfully in today’s crowded market." },
  { question: "Can first-time authors publish successfully?",
    answer: "Definitely. We specialize in guiding new authors through every stage of the process — from manuscript preparation to publication and promotion — making professional publishing simple, transparent, and rewarding." },
];

  return (
    <div>
      <SEO
        title="Glastonbury Publishing Services" 
        description="Discover about Glastonbury Publications—USA’s #1 book publisher for top-quality editing, design, publishing & marketing services." 
        keyword="About"
        focusKeyword="About"
        />
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
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center gap-9">
          <motion.div className="md:w-1/2 "
          initial="hidden"
          animate="visible"
          variants={slideLeftFade}>
            <h1 className="heading-lp text-[36px] md:text-[48px] text-center md:text-left  text-white mb-2">
               Transforming Your Manuscript into a Published Masterpiece
            </h1>
            <p className="text-lp text-[18px] text-center md:text-left  text-white mb-6">
             Whether you need editing that polishes, design that captivates, or marketing that connects, we make your publishing dream a professional reality.
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
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideLeftFade}>
            <span className="heading-lp text-[18px] md:text-[20px] text-center md:text-left  text-black mb-2">
              Your Story Deserves All the Spotlight It Can Get!
            </span>
            <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-black mb-2">
             Publish Professionally. Market Globally. Inspire Fearlessly.
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
              At Glastonbury Publications, we specialize in turning manuscripts into market-ready masterpieces. Our publishing experts refine your content, design captivating covers, format for perfection, and promote your book across worldwide retail channels.

              We don’t just prepare your book for shelves, we prepare it for success. From the first edit to the global launch, every page reflects professionalism, purpose, and passion. Your story is ready. Let’s share it with the world.
            </p>
             <div className="overflow-relative flex flex-col gap-4  mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Seamless publishing	Solutions</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Optimized book metadata for visibility</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Professional cover design & formatting</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Faster publishing with fewer delays</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Reliable distribution to millions of readers</p>
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
              
                <img src="Landing/section2.png" className=""/>
              
            </motion.div>
        </div>  
      </motion.section>
    {/* Section 3 */}  
      <motion.section
      className="w-full flex flex-row justify-center  items-center bg-cover bg-no-repeat px-4 py-8 md:px-20 "
      style={{ backgroundImage: `url('/Landing/Section3.png')` }}
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 flex justify-start md:justify-center"
            initial="hidden"
            whileInView="visible"
            variants={slideUpFade}
            >
              
                <img src="Landing/g 1.png" className="w-[503px]"/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-white mb-2">
              Begin Your Publishing Journey with Glastonbury Publications
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Let’s turn your manuscript into a beautifully published book — one that captures your voice, your vision, and your journey, and proudly shares it with readers around the world.
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
        <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
          <motion.div className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={slideLeftFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[40px] text-center text-black mb-2">
            Your Step-by-Step Path to Publishing Success
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6">
             Publishing a book requires precision — from editing and design to formatting and distribution. At Glastonbury Publications, we’ve developed a streamlined process that ensures every stage is handled with care, so your book not only reaches the market but truly shines among readers everywhere.
            </p>
            
          </motion.div>
            <motion.div className="w-full flex flex-col md:flex-row"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              <div className="md:w-2/3">
               <StepTabs
                steps={AmazonSteps}
                initialKey="one"
                accentGradient="bg-[linear-gradient(180deg,#2B6781_0%,#31552F_99.09%)]"
                />
              </div>
              <div className="md:w-1/3 flex justify-end">
                <img src="Landing/8 1.png" className=""/>
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
        <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
          <StickySteps/>
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
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 flex justify-start md:justify-center"
            initial="hidden"
            whileInView="visible"
            variants={slideUpFade}
            >
              
                <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-white mb-2">
              Ready to Publish? Let’s Begin the Conversation.
            </h2>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
           
            <p className="text-lp text-[16px] text-center md:text-left  text-[#fff] mb-6">
              Connect with our team to explore how Glastonbury Publications can bring your book to life, from idea to global distribution.
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
        className="hidden w-full flex flex-row justify-center  items-center px-4 py-8 md:px-32 bg-[linear-gradient(180deg,#F4F4F4_30%,#fff_70%)]"
        initial="hidden"
        whileInView="visible"
        variants={headerFade}
        >
        <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-6">
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
                            <p className="heading-lp2 text-[16px]">Publishing on Amazon & Kindle</p>
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
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 flex justify-start md:justify-center"
            initial="hidden"
            whileInView="visible"
            variants={slideUpFade}
            >
              
                <img src="Landing/10 2.png" className=""/>
              
            </motion.div>
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideUpFade}>
           
            <h2 className="heading-lp text-[32px] md:text-[32px] text-center md:text-left  text-black mb-2">
              Turn Your Story Into a Global Bestseller with Trusted Publishing Support
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
              The world of publishing is bigger than ever — and Glastonbury Publications ensures your book stands out. Our end-to-end publishing solutions help you meet professional standards, maximize visibility, and position your book for real, lasting success.
            </p>
             <div className="overflow-relative flex flex-col gap-4 mb-8  " >
             
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Strategic keyword & category optimization</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Comprehensive global distribution in digital & print</p>
                </div>
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Seamless publishing management across all platforms</p>
                </div>
                  
               
                <div className="flex flex-row gap-3">
                <CircleCheckBig className="w-6"/>
                <p className="text-lp text-[16px] ">Ongoing sales growth & authentic review support</p>
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
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center gap-16">
          <motion.div className="md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideLeftFade}>
            
            <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-white mb-2">
             Why Choose Glastonbury Publications for Your Publishing Journey?
            </h2>
            <p className="text-lp text-[16px] text-center md:text-left  text-white mb-6">
             Publishing today means competing with millions of titles across countless platforms. Many authors release their books without a clear strategy, only to vanish in the crowd. At Glastonbury Publications, we ensure your book is professionally formatted, strategically positioned, and marketed for maximum visibility — helping you rise above the noise and connect with readers where it matters most.
            </p>
            
          </motion.div>
            <motion.div className="md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
                <img src="Landing/9 1.png" className=""/>
              
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
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
            <Testimonials/>
          </div>  
      </motion.section>
    {/* Section 11 */}                      
      <motion.section
        className="w-full flex flex-row justify-center items-center bg-white px-4 py-16 md:px-20 "
      
        initial="hidden"
        whileInView="visible"
        variants={headerFade}
        >
          <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center gap-16">
            <div className="w-full flex flex-col md:flex-row  justify-center items-center gap-16">
            <motion.div className="md:w-2/3 "
            initial="hidden"
            whileInView="visible"
            variants={slideLeftFade}>
              
              <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-black mb-2">
              Our Publishing Portfolio
              </h2>
              <p className="text-lp text-[16px] text-center md:text-left  text-[#333] mb-6">
            From bestselling novels to niche non-fiction, we’ve helped authors succeed across multiple publishing platforms with polished formatting, strategic positioning, and powerful visibility. Our work speaks for itself — every project reflects our commitment to excellence and author success.
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
                
                  <img src="Landing/OBJECTS.png" className=""/>
                
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
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
            <Video/>
          </div>  
      </motion.section>
      {/* Section 13 */}                      
      <motion.section
            className="w-full flex flex-row justify-center items-center bg-white px-4 py-16 md:px-20 "
          
            initial="hidden"
            whileInView="visible"
            variants={headerFade}
            >
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-16">
            <Podcast/>
          </div>  
      </motion.section>
    {/* Section 14 */}                        
      <motion.section
          className="w-full flex flex-row justify-center items-center bg-[#F4F4F4] px-4 py-16 md:px-20 "
        
          initial="hidden"
          whileInView="visible"
          variants={headerFade}
          >
        <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-10">
          <h2 className="heading-lp text-[32px] md:text-[40px] text-center md:text-left  text-black">
             FAQs
            </h2>
          <FaqAccordion items={faqItems} initialOpen={0} />
        </div>  
      </motion.section>
    {/* Section 15 */}                        
      <motion.section
      className="w-full flex flex-row justify-center  items-center px-4 py-8 md:px-32 "
      
      initial="hidden"
      whileInView="visible"
      variants={headerFade}
      >
        <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-col justify-center items-center">
            
              <h2 className="heading-lp text-[32px] md:text-[40px] text-center text-black mb-2">
              Publish with Confidence.<br/>Let’s Get Started!
            </h2>
            <p className="text-lp text-[16px] text-center text-[#333] mb-6 max-w-3xl">
           Your publishing journey begins here. With Glastonbury Publications, you’ll receive expert guidance and professional support designed to help your book succeed across every major marketplace — in both digital and print formats.
            </p>
            
            
          </div>                  
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">                  
          <motion.div className="w-full md:w-1/2 flex justify-start md:justify-center bg-cover bg-no-repeat rounded-3xl p-6"
          style={{ backgroundImage: `url('/Landing/Form.png')` }}
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
                <p className="heading-lp2 text-[16px] ">We’ll review your manuscript for formatting, layout, and publishing compliance.</p>
                </div>
                <div className="flex flex-row ">
              <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Our team will identify the most effective categories and keywords to maximize visibility.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">An experienced editor will refine your book for a polished, professional finish.</p>
                </div>
                <div className="flex flex-row ">
               <div className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] mr-3"></div>
                <p className="heading-lp2 text-[16px] ">Your dedicated project manager will oversee the entire publishing process to ensure a smooth and successful release.</p>
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

export default Amazon
