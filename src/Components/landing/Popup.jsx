import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import ChildForm from './ChildForm';


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

const Popupchild = ({ isOpen, closePopup }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-end md:items-center z-50 bg-black"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)", // light transparent overlay
            backdropFilter: "blur(5px)",                 // blur the background behind
            WebkitBackdropFilter: "blur(50px)",           // Safari support
          }}
        >
          <motion.div
            className="relative py-8 px-15 rounded-t-xl md:rounded-xl w-full md:w-[500px] h-[550px] relative bg-cover bg-no-repeat"
            style={{backgroundImage: `url('/Landing/childform.png')` }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img src="Landing/side11.png" className="w-20 absolute top-0 left-0" />
            <img src="Landing/side12.png" className="w-20 absolute bottom-0 right-0" />
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-10 right-10 text-4xl text-white hover:text-gray-300 transition"
              aria-label="Close popup"
            >
              &times;
            </button>

            {/* Header */}
            <h3 className="chewy text-[36px] font-bold text-white mb-2 text-center mt-10">
              Get Your Free Consultation
            </h3>

            {/* Form */}
            <ChildForm/>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popupchild;
