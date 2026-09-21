import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { PhoneIcon } from 'lucide-react';

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
      className="w-full bg-black flex flex-row justify-center items-center shadow px-4 py-16 lg:px-20 py-4 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12" variants={itemVariants}>
        <div className="md:hidden flex w-full flex flex-row justify-center items-center">
          {/* Logo */}
          <div className="w-1/2 ">
           
              <img
                src="/Landing/logo.png"
                loading="lazy"
                alt="Glastonbury Publications"
                className="w-60 h-auto"
              />
           
          </div>
          
        </div>
        <div>
            <p className='text-lp text-white text-[14px] '>
                <span className="heading-lp font-bold">Disclaimer: </span>Glastonbury Publications retains sole trademark rights to its name, logo, and all associated graphics. All other company names, trade names, trademarks, and logos referenced on this website are the property of their respective owners. Use of these names does not imply any affiliation with, endorsement by, or sponsorship from Glastonbury Publications unless explicitly stated. Upon full payment for completed services, Glastonbury Publications grants clients full ownership of the work supplied. We reserve the right to rescind ownership claims in the event of non-payment or breach of contract.
            </p>
        </div>
        <div className="w-full parent flex justify-between items-center">
      {/* Logo */}
      <div className="w-1/2 hidden md:flex">
        <img
          src="/Landing/logo.png"
          loading="lazy"
          alt="Glastonbury Publications"
          className="w-60 h-auto"
        />
      </div>
      
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center  items-center md:items-end gap-2 text-white">
        <Link to="tel:+14159186468" className="flex flex-row gap-2">
          <span className="text-[18px] "> For Sales:</span>
          <PhoneIcon className="mt-[2px] w-5" />
          <span className="text-[16px]"> (415) 918-6468</span>
        </Link>
        
        
      </div>
</div>
        <div className="w-full flex md:flex-row flex-col justify-center items-center gap-12">
          <div className="md:hidden flex md:w-1/2 overflow-relative flex flex-row gap-6 justify-end text-white" >
            <Link to="/privacy-policy" >
            <span className='text-lp text-[16px]'>Privacy Policy</span>
            </Link>
            <span className='text-lp text-[16px]'>|</span>
             <Link to="/terms-and-conditions">
            <span className='text-lp text-[16px]'>Terms & Conditions</span>
            </Link>
            <span className='text-lp text-[16px]'>|</span>
            <Link to="/refund-policy">
            <span className='text-lp text-[16px]'>Refund Policy</span>
            </Link>
                          
          </div>
          <div className="md:w-1/2 ">
            <p className='text-lp text-white text-[14px] text-center md:text-left '>
                Copyright © 2026 Glastonbury Publications All Rights Reserved.
            </p>
              
           
          </div>
          <div className="hidden md:flex md:w-1/2 overflow-relative flex flex-row gap-6 justify-end text-white" >
            <Link to="/privacy-policy" >
            <span className='text-lp text-[16px]'>Privacy Policy</span>
            </Link>
            <span className='text-lp text-[16px]'>|</span>
             <Link to="/terms-and-conditions">
            <span className='text-lp text-[16px]'>Terms & Conditions</span>
            </Link>
            <span className='text-lp text-[16px]'>|</span>
            <Link to="/refund-policy">
            <span className='text-lp text-[16px]'>Refund Policy</span>
            </Link>
                          
          </div>
        </div>
      </motion.div>

    
     
    </motion.footer>
  );
};

export default Footer;
