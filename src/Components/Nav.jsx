import React, { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.3 } },
  };

  return (
    <ul className="hidden md:flex space-x-10 relative z-[9999]">
      <li>
        <Link
          to="/"
          className="px-3 rounded font-bold text-[18px] font-[Lora] font-serif transition hover:bg-gradient-to-br hover:from-[#3b6635] hover:to-[#2d6588] hover:bg-clip-text hover:text-transparent"
          style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/about"
          className="px-3 rounded font-bold text-[18px] font-[Lora] font-serif transition hover:bg-gradient-to-br hover:from-[#3b6635] hover:to-[#2d6588] hover:bg-clip-text hover:text-transparent"
          style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}
        >
          About
        </Link>
      </li>

      {/* Services with dropdown */}
      <li
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <li
          className="px-3 rounded font-bold text-[18px] font-[Lora] font-serif transition hover:bg-gradient-to-br hover:from-[#3b6635] hover:to-[#2d6588] hover:bg-clip-text hover:text-transparent"
          style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}
        >
          <Link to="/services">Services</Link>
        </li>

        <AnimatePresence>
          {isServicesOpen && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="absolute top-full left-0 w-60 bg-[#EAE9E9] rounded-xl shadow-lg text-black font-normal font-sans z-50"
            >
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white rounded-t-xl" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/publishing-solutions">Publishing Solutions</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/cover-design-and-layout">Cover Design And Layout</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/ebook-and-audiobook-publishing">Ebook And Audiobook Publishing</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/book-design-and-formatting">Book Design and Formatting</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/global-distribution">Global Distribution</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/ghost-writing">Ghost Writing</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white rounded-b-xl" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/book-translation">Book Translation</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>

      {/* Marketing and Promotion with dropdown */}
      <li
        className="relative"
        onMouseEnter={() => setIsMarketingOpen(true)}
        onMouseLeave={() => setIsMarketingOpen(false)}
      >
        <li
          className="px-3 rounded font-bold text-[18px] font-[Lora] font-serif transition hover:bg-gradient-to-br hover:from-[#3b6635] hover:to-[#2d6588] hover:bg-clip-text hover:text-transparent"
          style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}
        >
          <Link to="/marketing-and-promotion">Marketing And Promotion</Link>
        </li>

        <AnimatePresence>
          {isMarketingOpen && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="absolute top-full left-0 w-72 bg-[#EAE9E9] rounded-xl shadow-lg text-black font-normal font-sans z-50"
            >
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white rounded-t-xl" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/online-book-advertising-programs">Book Advertising Campaigns</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/amazon-author-page">Amazon Author Branding</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/podcast-booking-service">Podcast Booking & PR</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/author-website-design">Author Website Development</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/social-media-publicist">Social Media Author Promotion</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/times-square-book-announcement">Times Square Book Promotion</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/become-amazon-bestselling-author">Amazon Bestseller Campaign</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white rounded-b-xl" style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}>
                <Link to="/become-barnes-noble-bestselling-author">Barnes & Noble Bestseller Campaign</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>

      {/* <li>
        <Link
          to="/contact"
          className="px-3 rounded font-bold text-[18px] font-[Lora] font-serif transition hover:bg-gradient-to-br hover:from-[#3b6635] hover:to-[#2d6588] hover:bg-clip-text hover:text-transparent"
          style={{ fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: 700 }}
        >
          Contact
        </Link>
      </li> */}
    </ul>
  );
};

export default Nav;