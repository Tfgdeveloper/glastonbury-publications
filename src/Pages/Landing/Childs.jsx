import { useState } from "react";
import Sidebar from '../../Components/landing/Sidebar'
import { Link } from "react-router";
import { motion } from "framer-motion";
import Popup from "../../Components/Popup";
import { Check, CircleCheckBig, LucideMessageCircle , Phone, PhoneIcon} from "lucide-react";
import Heroform from "../../Components/landing/Heroform";
import Headerchilds from "../../Components/landing/Headerchilds";
import Formchild from "../../Components/Heroformchild";
import Testimonialschild from "../../Components/landing/Testimonial/Testimonialschild";
import Popupchild from "../../Components/landing/Popup";



const Childs = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,  // faster staggering
        when: "beforeChildren",
        ease: "easeOut",
      } 
    },
  };

  // Item fade + slide up with faster transition
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 150,  // slightly stiffer spring for snappier effect
        damping: 15, 
        duration: 0.3   // shorter duration
      } 
    },
  };
 
  return (
    <div>
    <Sidebar/>
      <Headerchilds/>
    
      
    {/* Section 1 */}
      <motion.section
      className="relative w-full flex flex-row justify-center items-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url('/Landing/childhero2.png')` }}
      initial="hidden"
      animate="visible"
      variants={headerFade}
      >
        <img src="Landing/childhero3.png" className="w-full absolute bottom-0 " />
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-9 md:pl-26 md:pr-6 px-4  py-36 z-50   ">
          <motion.div className=" md:w-1/2 flex flex-col justify-center md:justify-start items-center md:items-start md:mt-[-100px] "
          
          initial="hidden"
          animate="visible"
          variants={slideLeftFade}>
            <div className="hidden md:flex">
            <h1 className="chewy text-[36px] md:text-[42px]  text-center md:text-left  text-white mb-2 gap-0">
              <span className="text-[#1987D1]">Get Your Children’s Book Published  </span> <br/><span className="text-[#FC532B]">With Stunning Illustrations,</span><br/><span className="text-[#FF52C4]"> And Worldwide Distribution</span>
            </h1>
            </div>
            <div className="md:hidden flex">
            <h1 className="chewy text-[42px] text-center md:text-left  text-white mb-2 gap-0">
              <span className="text-[#1987D1]">Get Your Children’s Book</span> <span className="text-[#FC532B]">With Stunning Illustrations, </span><span className="text-[#FF52C4]">Published   And Worldwide Distribution</span>
            </h1>
            </div>
            <p className="josh text-[18px] text-center md:text-left  text-[#555555] mb-6">
             Every children’s book begins with a spark of imagination. We help turn that spark into colorful pages filled with lively characters, delightful illustrations, and stories kids beg to read again and again. Your story deserves to shine in little hands.
            </p>
            <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center items-center md:justify-start md:items-start" >
                <motion.button
                      onClick={openPopup}
                      className="w-41 jost relative font-medium z-50 p-2"
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
                      <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
                </motion.button>
                <Link to='tel:+14159186468'>        
                <motion.button
                      onClick={openPopup}
                      className="w-50 jost relative  font-medium z-50 p-2 flex justify-center items-center"
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
                      <div className="w-auto flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
              </motion.button>
                </Link>   
                          
          </div>
          </motion.div>
            <motion.div className="md:w-[660px] bg-white md:bg-transparent p-4 md:p-0 rounded-[30px] md:rounded-[0px] relative md:bg-[url('/Landing/formchild.png')] md:bg-contain bg-no-repeat flex justify-center items-center md:h-[650px] h-auto"
            
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
              <div className="relative w-auto flex flex-col justify-center items-center rounded-lg p-4 md:mt-0  md:mr-15 border-3 border-dashed border-[#0092A1] rounded-[100px] md:border-0 md:rounded-[0px]">
                <h1 className="chewy chewy text-[28px] text-[#E44A1A] mb-2 text-center">
                              Start Your Publishing Journey
                            </h1>
                            <Formchild/>
                            <img src="Landing/side10.png" className="floating-img absolute left-90 mt-20 w-30"/>
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
        <div className="relative w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-16">
          <img src="Landing/books.png" className="hidden md:flex floating-img absolute -top-10 right-0 w-25"/>
          <img src="Landing/books1.png" className="floating-img absolute -bottom-10 left-0 w-25"/>
            <motion.div className="order-2 md:order-1 md:w-1/2 flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideLeftFade}
            >
              
                <img src="Landing/child2.png" className=""/>
              
            </motion.div>
            <motion.div className="order-1 md:order-2 md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          variants={slideRightFade}>
            
            <h2 className="max-w-2xl chewy text-[32px] md:text-[48px] text-center md:text-left  text-[#28273A] mb-2">
             Comprehensive <span className="text-[#F01614]">Children’s Book Publishing</span>  Publishing Services 
            </h2>
            <p className="josh text-[16px] text-center md:text-left  text-[#555] mb-6">
             Publishing a children’s book requires creating a story that captivates young minds and appeals to parents, teachers, and schools. Our services are designed specifically for children’s authors, offering everything from professional editing and age-appropriate illustrations to engaging layouts and high-quality formatting. We ensure your story is polished, visually stunning, and ready to compete in today’s market. Once complete, we handle global distribution, making your book available through leading platforms like Amazon, Barnes & Noble, and other online retailers. Whether you’re writing a picture book, a rhyming story, or an illustrated adventure, our team makes the process smooth, professional, and rewarding, so your book reaches the readers it was meant for.
            </p>
                     
            <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center  " >
                <motion.button
                      onClick={openPopup}
                      className="w-41 jost relative font-medium z-50 p-2"
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
                      <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
                </motion.button>
                <Link to='tel:+14159186468'>        
                <motion.button
                      onClick={openPopup}
                      className="w-50 jost relative  font-medium z-50 p-2 flex justify-center items-center"
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
                      <div className="w-auto flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
              </motion.button>
                </Link>   
                          
          </div>
          </motion.div>
        </div>  
      </motion.section>
    {/* Section 3 */}
      <motion.section
      className="relative w-full flex flex-row justify-center items-center bg-[#F37063]"
      
      initial="hidden"
      animate="visible"
      variants={headerFade}
      >
        <img src="/Landing/servicet.png" className="w-full absolute -top-2 md:-top-9" />
        <img src="/Landing/servicesr.png" className="w-30 absolute top-0 left-0" />
        <img src="/Landing/servicel.png" className="w-30 absolute bottom-0 right-0" />
        <img src="/Landing/servicesb.png" className="w-full absolute -bottom-2 md:-bottom-9 " />
        <div className="w-full max-w-[1720px] flex flex-col justify-center items-center gap-9 px-4 md:px-20 py-36 z-50   ">
          <img src="/Landing/side1.png" className="floating-img w-30 absolute top-0 right-0" />
          <img src="/Landing/books2.png" className="floating-img w-30 absolute bottom-0 left-0" />
          <motion.div className="max-w-2xl flex flex-col justify-start items-start md:mt-[-100px] "
          
          initial="hidden"
          animate="visible"
          variants={slideLeftFade}>
            <h1 className="chewy text-[36px] md:text-[48px]  text-center text-white mb-2">
              Why Choose Our Children’s Book Publishing Services?
            </h1>
            <p className="josh text-[18px] text-center text-[#fff] mb-6">
             Children’s books need a unique approach, bright visuals, engaging storytelling, and professional publishing. We specialize in turning your story into a book kids love and parents trust.
            </p>
        
          </motion.div>
            <motion.div className="relative flex justify-center  items-center "
            
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
              <div className="relative w-auto grid grid-cols-1 md:grid-cols-3 flex flex-col justify-center items-center gap-[35px]">
                <div className="bg-[#C8EFFF] rounded-[37px] p-[15px] flex flex-col justify-center md:items-start items-center h-75">
                  <div className="w-full h-full rounded-[30px] p-[25px] border-2 border-dashed border-[#45B3DF] space-y-5">
                    <div className="w-full flex flex-row gap-3">
                      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#45B3DF]">
                        <img src="/Landing/Vector.png" className="w-6" />
                      </div>
                      <h1 className="chewy text-[28px]  text-center text-black">
                        Specialized Editing 
                      </h1>
                    </div>
                    <p className="josh text-[16px] text-center md:text-left text-[#555] mb-6">
                    Writing for young readers requires the right balance of simplicity, clarity, and imagination. Our editors refine your manuscript to ensure the language, tone, and flow perfectly match your target age group.
                    </p>
                  </div> 
                </div>
                <div className="bg-[#FFCEDC] rounded-[37px] p-[15px] flex flex-col justify-center md:items-start items-center h-75">
                  <div className="w-full h-full rounded-[30px] p-[25px] border-2 border-dashed border-[#FA9DB7] space-y-5">
                    <div className="w-full flex flex-row gap-3">
                      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#FA9DB7]">
                        <img src="/Landing/Vector.png" className="w-6" />
                      </div>
                      <h1 className="chewy text-[28px]  text-center text-black">
                        Custom Illustrations 
                      </h1>
                    </div>
                    <p className="josh text-[16px] text-center md:text-left text-[#555] mb-6">
                    Illustrations are the heart of any children’s book. We work with professional artists who design unique, colorful visuals tailored to your story, creating characters and scenes children instantly connect with.
                    </p>
                  </div> 
                </div>
                <div className="bg-[#FEE0A6] rounded-[37px] p-[15px] flex flex-col justify-center md:items-start items-center h-75">
                  <div className="w-full h-full rounded-[30px] p-[25px] border-2 border-dashed border-[#FFC85B] space-y-5">
                    <div className="w-full flex flex-row gap-3">
                      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#FFC85B]">
                        <img src="/Landing/Vector.png" className="w-6" />
                      </div>
                      <h1 className="chewy text-[28px]  text-center text-black">
                       Design & Formatting
                      </h1>
                    </div>
                    <p className="josh text-[16px] text-center md:text-left text-[#555] mb-6">
                   From playful layouts to eye-catching covers, our design team ensures your book is as visually appealing as it is enjoyable to read. Every page is crafted to keep little readers engaged.
                    </p>
                  </div> 
                </div>
                <div className="bg-[#FFDEC9] rounded-[37px] p-[15px] flex flex-col justify-center md:items-start items-center h-75">
                  <div className="w-full h-full rounded-[30px] p-[25px] border-2 border-dashed border-[#FA690C] space-y-5">
                    <div className="w-full flex flex-row gap-3">
                      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#FA690C]">
                        <img src="/Landing/Vector.png" className="w-6" />
                      </div>
                      <h1 className="chewy text-[28px]  text-center text-black">
                       End-to-End Publishing 
                      </h1>
                    </div>
                    <p className="josh text-[16px] text-center md:text-left text-[#555] mb-6">
                    We manage the entire process, from manuscript preparation and ISBN assignment to printing and digital publishing. You focus on your story, and we’ll make sure it’s publication-ready.
                    </p>
                  </div> 
                </div>
                <div className="bg-[#ACF4CC] rounded-[37px] p-[15px] flex flex-col justify-center md:items-start items-center h-75">
                  <div className="w-full h-full rounded-[30px] p-[25px] border-2 border-dashed border-[#07B151] space-y-5">
                    <div className="w-full flex flex-row gap-3">
                      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#07B151]">
                        <img src="/Landing/Vector.png" className="w-6" />
                      </div>
                      <h1 className="chewy text-[28px]  text-center text-black">
                        Global Distribution 
                      </h1>
                    </div>
                    <p className="josh text-[16px] text-center md:text-left text-[#555] mb-6">
                       Your book deserves a wide audience. We distribute through Amazon, Barnes & Noble, Apple Books, and other major platforms, making it easy for parents, teachers, and libraries worldwide to find your work.
                    </p>
                  </div> 
                </div>
                <div className="bg-[#CECCFF] rounded-[37px] p-[15px] flex flex-col justify-center md:items-start items-center h-75">
                  <div className="w-full h-full rounded-[30px] p-[25px] border-2 border-dashed border-[#4C489B] space-y-5">
                    <div className="w-full flex flex-row gap-3">
                      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#4C489B]">
                        <img src="/Landing/Vector.png" className="w-6" />
                      </div>
                      <h1 className="chewy text-[28px]  text-center text-black">
                        24/7 Author Support
                      </h1>
                    </div>
                    <p className="josh text-[16px] text-center md:text-left text-[#555] mb-6">
                       Publishing a children’s book can feel overwhelming, but you won’t have to do it alone. Our team supports you at every stage with advice, updates, and resources to help you succeed as an author.
                    </p>
                  </div> 
                </div>
              </div>
              
            </motion.div>
            <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center  " >
                <motion.button
                      onClick={openPopup}
                      className="w-41 jost relative font-medium z-50 p-2"
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
                      <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
                </motion.button>
                <Link to='tel:+14159186468'>        
                <motion.button
                      onClick={openPopup}
                      className="w-50 jost relative  font-medium z-50 p-2 flex justify-center items-center"
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
                      <div className="w-auto flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
              </motion.button>
                </Link>   
                          
          </div>
        </div>  
      </motion.section>
    {/* Section 4 */}
      <motion.section
      className="relative w-full flex flex-row justify-center items-center"
      
      initial="hidden"
      animate="visible"
      variants={headerFade}
      >s
        <div className="relative w-full max-w-[1720px] flex flex-col justify-center items-center gap-9 px-4 md:px-20  py-36 z-50   ">
          <img src="/Landing/side2.png" className="floating-img w-30 absolute top-10 right-0" />
          <img src="/Landing/side7.png" className="floating-img w-15 absolute bottom-10 left-0" />
          <motion.div className="max-w-2xl flex flex-col "
          
          initial="hidden"
          animate="visible"
          variants={slideLeftFade}>
             <h2 className="chewy text-[32px] md:text-[48px] text-center text-[#28273A] mb-2">
             A Showcase of <span className="text-[#F01614]">Published Children’s<br/>Publishing</span> Books That Inspire
            </h2>
            <p className="josh text-[18px] text-center text-[#555] mb-6">
             Our portfolio reflects the creativity of authors who trusted us to bring their stories to life. Each book demonstrates the quality, detail, and care we put into children’s publishing.
            </p>
        
          </motion.div>
            <motion.div className="relative flex justify-center  items-center "
            
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
              <div className="relative w-auto grid grid-cols-1 md:grid-cols-3 flex flex-col justify-center items-center gap-[15px]">
                <img src="/Landing/book1.png" className="hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl" />
                <img src="/Landing/book2.png" className="hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl" />
                <img src="/Landing/book3.png" className="hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl" />
                <img src="/Landing/book4.png" className="hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl" />
                <img src="/Landing/book5.png" className="hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl" />
                <img src="/Landing/book6.png" className="hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl" />
              </div>
              
            </motion.div>
            <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center  " >
                <motion.button
                      onClick={openPopup}
                      className="w-41 jost relative font-medium z-50 p-2"
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
                      <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
                </motion.button>
                <Link to='tel:+14159186468'>        
                <motion.button
                      onClick={openPopup}
                      className="w-50 jost relative  font-medium z-50 p-2 flex justify-center items-center"
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
                      <div className="w-auto flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
              </motion.button>
                </Link>   
                          
          </div>
        </div>  
      </motion.section>
    {/* Section 5 */}
      <motion.section
      className="relative w-full flex flex-row justify-center items-center bg-[#F37063]"
      
      initial="hidden"
      animate="visible"
      variants={headerFade}
      >
        <img src="/Landing/servicet.png" className="w-full absolute -top-2 md:-top-9" />
        
        <img src="/Landing/servicesb.png" className="w-full absolute -bottom-2 md:-bottom-9 " />
        <div className="w-full max-w-[1720px] flex flex-col md:flex-row justify-center items-center gap-9 px-4 md:px-20 z-50   ">
          <img src="/Landing/child4.png" className="w-100 -mt-20 -ml-20
          
          
          
          " />
          
          <motion.div className="flex flex-col justify-center items-center"
          
            initial="hidden"
            animate="visible"
            variants={slideLeftFade}>
            <h2 className="chewy text-[36px] md:text-[48px]  text-center text-white mb-2 max-w-lg">
              We’d Love to Hear About Your Story </h2>
            <p className="josh text-[18px] text-center text-[#fff] mb-6">
             Contact us now and let’s explore how we can bring your children’s book to life.
            </p>
              <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center  " >
                <motion.button
                      onClick={openPopup}
                      className="w-41 jost relative font-medium z-50 p-2"
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
                      <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
                </motion.button>
                <Link to='tel:+14159186468'>        
                <motion.button
                      onClick={openPopup}
                      className="w-50 jost relative  font-medium z-50 p-2 flex justify-center items-center"
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
                      <div className="w-auto flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
              </motion.button>
                </Link>   
                          
          </div>         
          </motion.div>
          <img src="/Landing/child3.png" className="w-75 md:-mt-20 mt-0 -mr-20" /> 
        </div>  
      </motion.section>
      {/* Section 6 */}
      <motion.section
      className="relative w-full flex flex-row justify-center items-center"
      
      initial="hidden"
      animate="visible"
      variants={headerFade}
      >
        <div className="hidden relative w-full max-w-[1720px] flex flex-col justify-center items-center gap-9 md:px-20 px-4 pt-36 z-50   ">
          <img src="/Landing/side4.png" className="floating-img w-15 absolute top-10 right-0" />
          <img src="/Landing/side5.png" className="floating-img md:w-30 w-20 absolute md:bottom-10 bottom-0 left-0" />
          <motion.div className="max-w-2xl flex flex-col "
          
          initial="hidden"
          animate="visible"
          variants={slideLeftFade}>
             <h2 className="chewy text-[32px] md:text-[48px] text-center text-[#28273A] mb-2">
             Pick the Perfect  <span className="text-[#F01614]"> Package Publishing</span> for Your Children’s Book
            </h2>
            <p className="josh text-[18px] text-center text-[#555] mb-6">
             From first-time authors to seasoned storytellers, our pricing is designed to match your needs—clear, fair, and flexible every step of the way.
            </p>
        
          </motion.div>
            <motion.div className="relative flex justify-center  items-center "
            
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
              <div className="relative w-auto grid grid-cols-1 md:grid-cols-3 flex flex-col justify-center items-center gap-[50px] md:gap-[15px]">
                <div className="relative bg-[#FF708F] rounded-tl-[150px] w-full p-2 space-y-[20px]"> 
                  <div className="absolute right-5 -top-10 w-30 h-30 rounded-full bg-[#FF708F]  drop-shadow-[0_9px_10px_rgba(0,0,0,0.5)] z-50 flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row justify-center items-center">
                      <span className="chewy text-white text-[36px] font-semibold mt-2">$</span>
                      <p className="chewy text-white text-[48px] font-semibold ">200</p>
                    </div>
                    
                  </div>
                  <div className="bg-white rounded-tl-[150px] w-full drop-shadow-[0_9px_10px_rgba(0,0,0,0.5)] flex flex-col jutify-center items-center p-4 gap-5">
                    <div className="w-full flex flex-col justify-center items-center pb-3 border-b-1 border-black">
                      <img src="Landing/pricing.png" className="w-12"/>
                      <h3 className="chewy text-[42px]">Basic</h3>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FF708F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>

                    </div>
                    <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center   " >
                        <motion.button
                              onClick={openPopup}
                              className="w-41 jost relative font-medium z-50 p-2"
                              style={{
                                borderRadius: "30px",
                                background: "#FF708F",
                                color: "#FFF",
                                fontSize: "16px",
                                letterSpacing: "1px",
                                cursor: "pointer",
                                border: "none",
                              }}
                              whileHover={buttonHover}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                              <LucideMessageCircle className="mr-2 "/>
                              Get Started
                              </div>           
                        </motion.button>                      
                    </div>
                  </div>
                    <p className="josh text-[14px] text-center text-[#fff] mb-6">
                      Amazon is the world’s largest book marketplace </p>    
                </div>
                <div className="relative bg-[#7F78FF] rounded-tl-[150px] w-full p-2 space-y-[20px]"> 
                  <div className="absolute right-5 -top-10 w-30 h-30 rounded-full bg-[#7F78FF]  drop-shadow-[0_9px_10px_rgba(0,0,0,0.5)] z-50 flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row justify-center items-center">
                      <span className="chewy text-white text-[36px] font-semibold mt-2">$</span>
                      <p className="chewy text-white text-[48px] font-semibold ">200</p>
                    </div>
                    
                  </div>
                  <div className="bg-white rounded-tl-[150px] w-full drop-shadow-[0_9px_10px_rgba(0,0,0,0.5)] flex flex-col jutify-center items-center p-4 gap-5">
                    <div className="w-full flex flex-col justify-center items-center pb-3 border-b-1 border-black">
                      <img src="Landing/pricing2.png" className="w-12"/>
                      <h3 className="chewy text-[42px]">Basic</h3>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#7F78FF] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>

                    </div>
                    <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center   " >
                        <motion.button
                              onClick={openPopup}
                              className="w-41 jost relative font-medium z-50 p-2"
                              style={{
                                borderRadius: "30px",
                                background: "#7F78FF",
                                color: "#FFF",
                                fontSize: "16px",
                                letterSpacing: "1px",
                                cursor: "pointer",
                                border: "none",
                              }}
                              whileHover={buttonHover}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                              <LucideMessageCircle className="mr-2 "/>
                              Get Started
                              </div>           
                        </motion.button>                      
                    </div>
                  </div>
                    <p className="josh text-[14px] text-center text-[#fff] mb-6">
                      Amazon is the world’s largest book marketplace </p>    
                </div>
                <div className="relative bg-[#FFD34F] rounded-tl-[150px] w-full p-2 space-y-[20px]"> 
                  <div className="absolute right-5 -top-10 w-30 h-30 rounded-full bg-[#FFD34F]  drop-shadow-[0_9px_10px_rgba(0,0,0,0.5)] z-50 flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row justify-center items-center">
                      <span className="chewy text-white text-[36px] font-semibold mt-2">$</span>
                      <p className="chewy text-white text-[48px] font-semibold ">200</p>
                    </div>
                    
                  </div>
                  <div className="bg-white rounded-tl-[150px] w-full drop-shadow-[0_9px_10px_rgba(0,0,0,0.5)] flex flex-col jutify-center items-center p-4 gap-5">
                    <div className="w-full flex flex-col justify-center items-center pb-3 border-b-1 border-black">
                      <img src="Landing/pricing3.png" className="w-12"/>
                      <h3 className="chewy text-[42px]">Basic</h3>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>
                      <span className="w-full flex flex-row justify center items-center gap-2">
                      <Check className="text-[#FFD34F] w-5"/>
                      <p className="josh text-[16px] text-left text-[#555]">
                      Amazon is the world’s largest book market</p>    
                      </span>

                    </div>
                    <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center   " >
                        <motion.button
                              onClick={openPopup}
                              className="w-41 jost relative font-medium z-50 p-2"
                              style={{
                                borderRadius: "30px",
                                background: "#FFD34F",
                                color: "#FFF",
                                fontSize: "16px",
                                letterSpacing: "1px",
                                cursor: "pointer",
                                border: "none",
                              }}
                              whileHover={buttonHover}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                              <LucideMessageCircle className="mr-2 "/>
                              Get Started
                              </div>           
                        </motion.button>                      
                    </div>
                  </div>
                    <p className="josh text-[14px] text-center text-[#fff] mb-6">
                      Amazon is the world’s largest book marketplace </p>    
                </div>
                
              </div>
              
            </motion.div>
            <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center   " >
                <motion.button
                      onClick={openPopup}
                      className="w-41 jost relative font-medium z-50 p-2"
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
                      <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
                </motion.button>
                <Link to='tel:+14159186468'>        
                <motion.button
                      onClick={openPopup}
                      className="w-50 jost relative  font-medium z-50 p-2 flex justify-center items-center"
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
                      <div className="w-auto flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
              </motion.button>
                </Link>   
                          
          </div>
        </div>  
      </motion.section>
      {/* Section 7 */}
      <motion.section
      className="relative w-full flex flex-row justify-center items-center"
      
      initial="hidden"
      animate="visible"
      variants={headerFade}
      >
        <div className="relative w-full max-w-[1720px] flex flex-col justify-center items-center gap-9 md:px-2 px-4 py-36 z-50   ">
          
          <img src="/Landing/side3.png" className="floating-img w-30 absolute bottom-10 left-0" />
          <motion.div className="flex flex-col "
          
          initial="hidden"
          animate="visible"
          variants={slideLeftFade}>
             <h2 className="chewy text-[32px] md:text-[48px] text-center text-[#28273A] mb-2">
             What  <span className="text-[#F01614]">Authors Say About</span> Us
            </h2>
            <p className="josh text-[18px] text-center text-[#555] mb-6 max-w-3xl">
             Our clients share their experiences of turning stories into published children’s books. Hear how we helped them bring their visions to life.
            </p>
        
          </motion.div>
            <motion.div className="relative flex justify-center  items-center "
            
            initial="hidden"
            animate="visible"
            variants={slideRightFade}
            >
              
            <div>
              <Testimonialschild/>
            </div>
              
            </motion.div>
            <div className="overflow-relative flex flex-row md:gap-6 gap-2 justify-center md:justify-start md:items-start items-center   " >
                <motion.button
                      onClick={openPopup}
                      className="w-41 jost relative font-medium z-50 p-2"
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
                      <div className="w-auto flex justify-center items-center flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2 ">
                      <LucideMessageCircle className="mr-2 "/>
                       Get Started
                       </div>           
                </motion.button>
                <Link to='tel:+14159186468'>        
                <motion.button
                      onClick={openPopup}
                      className="w-50 jost relative  font-medium z-50 p-2 flex justify-center items-center"
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
                      <div className="w-auto flex flex-row border-2 border-white border-dashed rounded-[30px] px-3 py-2">
                      <Phone className="mr-2 "/>
                       (415) 918-6468
                       </div>           
              </motion.button>
                </Link>   
                          
          </div>
        </div>  
      </motion.section>


    <Popupchild isOpen={isPopupOpen} closePopup={closePopup} />
    
     <motion.section
      className="relative w-full bg-black flex flex-row justify-center items-center shadow"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
        <img src='Landing/footer1.png' className='w-full absolute top-0'/>
      <motion.div className="relative w-full max-w-[1720px] flex flex-col justify-center items-center gap-12  px-4 md:pt-50 pt-25 pb-10 lg:px-20" variants={itemVariants}>
                <img src='Landing/side6.png' className='floating-img w-15 md:w-25 absolute top-20 right-5 z-50'/>
                <img src='Landing/side8.png' className='floating-img w-15 md:w-25 absolute bottom-40 md:bottom-10 left-5 z-50'/>
                <div className="flex w-full flex flex-row justify-center items-center">
                          {/* Logo */}
                          <div className="full ">
                           
                              <img
                                src="/Landing/logo.png"
                                loading="lazy"
                                alt="Glastonbury Publications"
                                className="w-60 h-auto"
                              />
                           
                          </div>
                          
                        </div>
                        <div>
                            <p className='jost text-white text-[16px] text-center max-w-5xl '>
                                <span className="chewy font-bold text-[22px] ">Disclaimer: </span>Glastonbury Publications retains sole trademark rights to its name, logo, and all associated graphics. All other company names, trade names, trademarks, and logos referenced on this website are the property of their respective owners. Use of these names does not imply any affiliation with, endorsement by, or sponsorship from Glastonbury Publications unless explicitly stated. Upon full payment for completed services, Glastonbury Publications grants clients full ownership of the work supplied. We reserve the right to rescind ownership claims in the event of non-payment or breach of contract.
                            </p>
                        </div>
                        
                        <div className="w-full flex md:flex-row flex-col justify-center items-center border-t-1 border-white border-dashed pt-5 gap-12 max-w-5xl">
                          <div className="md:hidden flex md:w-1/2 overflow-relative flex flex-row gap-6 justify-end text-white" >
                            <Link to="/privacy-policy" >
                            <span className='josh text-[16px]'>Privacy Policy</span>
                            </Link>
                            <span className='josh text-[16px]'>|</span>
                             <Link to="/terms-and-conditions">
                            <span className='josh text-[16px]'>Terms & Conditions</span>
                            </Link>
                            <span className='josh text-[16px]'>|</span>
                            <Link to="/refund-policy">
                            <span className='josh text-[16px]'>Refund Policy</span>
                            </Link>
                                          
                          </div>
                          <div className="md:w-1/2 ">
                            <p className='josh text-white text-[14px] text-center md:text-left '>
                                Copyright © 2026 Glastonbury Publications All Rights Reserved.
                            </p>
                              
                           
                          </div>
                          <div className="hidden md:flex md:w-1/2 overflow-relative flex flex-row gap-6 justify-end text-white" >
                            <Link to="/privacy-policy" >
                            <span className='josh text-[16px]'>Privacy Policy</span>
                            </Link>
                            <span className='josh text-[16px]'>|</span>
                             <Link to="/terms-and-conditions">
                            <span className='josh text-[16px]'>Terms & Conditions</span>
                            </Link>
                            <span className='josh text-[16px]'>|</span>
                            <Link to="/refund-policy">
                            <span className='josh text-[16px]'>Refund Policy</span>
                            </Link>
                                          
                          </div>
                        </div>
      </motion.div>

    
     
    </motion.section>
    </div>
  )
}

export default Childs
