// components/StickySteps.jsx
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import { Circle, CircleCheck, CircleCheckBig, Dot, DotIcon, LucideMessageCircle , Phone, Youtube } from "lucide-react";
import Popup from "../../Popup";

const defaultItems = [
  {
    title: "Pre-Launch Setup",
    body:
      "Preparing ISBNs, trim sizes, and compliance checks to ensure your book is ready for bookstore and library distribution.",
  },
  {
    title: "Audience Outreach ",
    body:
      "Engaging readers before launch with targeted campaigns, early promotions, and community connections.",
  },
  {
    title: "Market Positioning ",
    body:
      "Strategically placing your book for maximum discoverability in bookstores, libraries, and catalogs.",
  },
  {
    title: "Professional Publishing ",
    body:
      "Delivering industry-standard formatting and design that meets the expectations of retailers and institutions.",
  },
  {
    title: "Retail Readiness ",
    body:
      "Making sure your book complies with bookstore and library requirements for smooth acceptance and stocking.",
  },
  {
    title: "Post-Launch Marketing ",
    body:
      "Driving visibility and sustaining demand with ongoing promotions and outreach after release.",
  },
];

function StickyStepsingram({
    
  items = defaultItems,
  title = "What We Deliver: Distribution Power with IngramSpark",
  blurb = "IngramSpark connects you to bookstores, libraries, and retailers worldwide. With Glastonbury Publications, your book will meet industry standards and achieve maximum distribution potential.",
}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
     const buttonHover = {
     scale: 1.05,
     boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  };
  return (
    <section className="relative bg-[#F2F4F3]">
      <div className="mx-auto flex flex-col md:flex-row gap-10">
        

        {/* RIGHT: Sticky text/CTA (stays in view while left column scrolls) */}
        <aside className="lg:sticky lg:top-24 self-start">
          <h2 className="heading-lp text-[32px] font-bold">
           
              {title}
           
          </h2>
          <p className="text-lp mt-4 max-w-md text-[#333] mb-8">{blurb}</p>

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
        </aside>
        {/* LEFT: Scroll-reveal cards */}
        <div className="md:w-1/2 space-y-4">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              className="rounded-xl p-5 shadow-lg ring-1 ring-black/5 text-white
                         bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)]"
            >
              <h4 className="heading-lp text-[24px] font-semibold">{it.title}</h4>
              <p className="text-lp mt-2 text-[16px] md:text-[18px] opacity-95">{it.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </section>
  );
}
export default StickyStepsingram