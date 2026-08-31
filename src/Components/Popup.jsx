import React from 'react';
import ContactForm from './ContactForm';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: "100vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};



const Popup = ({ isOpen, closePopup }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-end md:items-center z-999"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)", // light transparent overlay
            backdropFilter: "blur(5px)",                 // blur the background behind
            WebkitBackdropFilter: "blur(5px)",           // Safari support
          }}
        >
          <motion.div
            className="bg-[linear-gradient(144deg,#3b6635,#2d6588)] rounded-t-xl md:rounded-xl  overflow-hidden  shadow-lg w-full max-w-md md:w-[40%] relative p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-0 right-3 text-4xl text-white hover:text-gray-300 transition z-50"
              aria-label="Close popup"
            >
              &times;
            </button>
            
            {/* Header */}
           
           
            <h3 className="text-3xl font-bold text-white mt-4 text-center">
              Get 25% OFF on All Our Professional Services
            </h3>
            
            <div className='p-4'>
            {/* Form */}
            <ContactForm  />
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
