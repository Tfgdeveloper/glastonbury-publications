import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Footer = () => {
  // Container fade-in with faster stagger
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
    <motion.footer
      id="footer-section"
      className="text-white pt-20 border-0 bg-cover"
      style={{ backgroundImage: `url('/images/footer.webp')` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="max-w-full mx-auto px-4 lg:px-16 border-0" variants={itemVariants}>
        {/* Services Section */}
        <motion.div className="max-w-full mx-auto px-4 lg:px-16 border-0 mb-5" variants={containerVariants}>
          <motion.h3
            className="text-center mb-5"
            style={{ fontSize: "48px", fontFamily: "Lora, serif" }}
            variants={itemVariants}
          >
            Our Wide Variety of Services Includes:
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm leading-relaxed font-sans text-center"
            variants={containerVariants}
          >
            {[
              ["Book Publishing", "Amazon (KDP) Publishing", "Barnes & Noble Publishing", "Kobo Book Publishing", "Apple Book Publishing", "Draft2Digital Publishing"],
              ["Mystery Writing", "Historical Writing", "Fantasy Writing", "Sc-Fi Writing", "Non-Fiction Writing", "Script Writing"],
              ["Ghostwriting", "Fiction Writing", "Horror Writing", "Memoir Writing", "Children Book Writing", "Book Proofreading"],
              ["Book Formatting", "Book Editing", "Book Marketing", "Book Cover Design", "Book Printing", "Author Website Design"],
            ].map((column, colIdx) => (
              <motion.ul key={colIdx} variants={containerVariants}>
                {column.map((service, idx) => (
                  <motion.li
                    key={idx}
                    className=""
                    style={{
                      fontFamily: "Lora, sans-serif",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "white",
                    }}
                    variants={itemVariants}
                  >
                    {service}
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center  w-full pb-2 px-4 lg:px-16"
        variants={containerVariants}
      >
        {/* Left: Policies and Payment Icons */}
        <motion.div className="border-0 flex flex-col justify-top mt-5" variants={itemVariants}>
          <ul className="text-center lg:text-center border-0 flex flex-col md:flex-row gap-2  md:gap-28 mb-5 items-center">
            {/* Contact Info - Phone 1 */}
            <li className="border-0">

            </li>

            {/* Contact Info - Phone 2 */}
            <li className="border-0">
              <p
                className="font-sans text-white text-lg"
                style={{
                  fontFamily: "Lora, sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Contact us:<br />For Sales : <a href="tel:+14159186468" className="underline">(415) 918-6468</a>
              </p>
              <p
                className="hidden font-sans text-white text-lg"
                style={{
                  fontFamily: "Lora, sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                For Support : <a href="tel:+14154047157" className="underline">(415) 404 7157</a>
              </p>
            </li>

            {/* Contact Info - Email */}
            <li className="border-0">
              <p
                className="font-sans text-white text-lg"
                style={{
                  fontFamily: "Lora, sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Email:<br /> <a href="mailto:support@glastonburypublications.com" className="underline">support@glastonburypublications.com</a>
              </p>
            </li>

            {/* Contact Info - Address */}
            <li className="border-0">
              <p
                className="font-sans text-white text-lg"
                style={{
                  fontFamily: "Lora, sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Address: <br />447 Sutter St Ste 405,San Francisco <br /> CA 94108
              </p>
            </li>
          </ul>
        </motion.div>


      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center border-t border-[#FFFFFF90] w-full pb-5 px-4 lg:px-16"
        variants={containerVariants}
      >
        {/* Left: Policies and Payment Icons */}
        <motion.div className="border-0 flex flex-col justify-top mt-5" variants={itemVariants}>
          <ul className="text-center lg:text-left border-0 flex flex-row gap-5 mb-5">
            <li className="border-0">
              <Link
                to="/privacy-policy"
                className=""
                style={{
                  fontFamily: "Lora, sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="border-0">
              <Link
                to="/terms-and-conditions"
                className=""
                style={{
                  fontFamily: "Lora, sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Terms and Conditions
              </Link>

            </li>
            <li className="border-0">
              <Link
                to="/refund-policy"
                className=""
                style={{
                  fontFamily: "Lora, sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Refund Policy
              </Link>

            </li>
          </ul>
          <img
            src="/images/Payment-icons.webp"
            loading="lazy"
            alt="payment gateway"
            className="w-[275px] h-auto mt-10 lg:mt-0 md:mt-0 sm:mt-0"
          />
        </motion.div>

        {/* Right: Copyright */}
        <motion.div
          className="border-0 flex flex-col items-center justify-top"
          variants={itemVariants}
        >
          <p
            className=""
            style={{
              fontFamily: "Lora, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              color: "white",
            }}
          >
            &copy; 2026 - All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
