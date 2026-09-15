import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router'; // import this
import ContactForm from './ContactForm';
import { motion, AnimatePresence } from 'framer-motion';

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

const Autopopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // tracks current path

  // Open the popup on every route change
  useEffect(() => {
    setIsOpen(true);
  }, [location.pathname]); // run effect every time route changes

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
        <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-end md:items-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <motion.div
            className="bg-[linear-gradient(144deg,#3b6635,#2d6588)] p-8 rounded-t-xl md:rounded-xl shadow-lg w-full max-w-md md:w-[40%] relative"
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100vh" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-4xl text-white hover:text-gray-300 transition"
              aria-label="Close popup"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Get Your Free Consultation
            </h3>

            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Autopopup;