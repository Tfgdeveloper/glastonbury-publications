// components/StickySteps.jsx
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import { Circle, CircleCheck, CircleCheckBig, Dot, DotIcon, LucideMessageCircle , Phone, Youtube } from "lucide-react";
import Popup from "../../Popup";

const defaultItems = [
  {
    title: "Pre-Distribution Setup ",
    body:
      "Preparing metadata, categories, and keywords for every partner store—laying the groundwork for maximum visibility before launch.",
  },
  {
    title: "Audience Preparation ",
    body:
      "Building your fan base early with pre-launch promotions, reader groups, and targeted outreach campaigns.",
  },
  {
    title: "Optimized Market Reach ",
    body:
      "Strategically positioning your book across multiple platforms to expand discoverability and reach new audiences.",
  },
  {
    title: "Publishing Professionalism ",
    body:
      "Delivering clean, compliant formatting and uploads that meet the technical requirements of every retail partner.",
  },
  {
    title: "Multi-Platform Visibility ",
    body:
      "Ensuring your book shines across Amazon, Apple, Kobo, Barnes & Noble, and other major outlets with consistent branding and presentation.",
  },
  {
    title: "Sales Growth Support ",
    body:
      "Driving ongoing momentum through post-launch promotions, seasonal campaigns, and engagement strategies to boost long-term sales.",
  },
];

function StickyStepsdraft({
    
  items = defaultItems,
  title = "What We Deliver: Smarter Publishing with Draft2Digital",
  blurb = "Draft2Digital simplifies distribution — and we maximize its potential. With Glastonbury Publications, your manuscript transforms into a polished, professional book distributed across multiple storefronts.",
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
export default StickyStepsdraft