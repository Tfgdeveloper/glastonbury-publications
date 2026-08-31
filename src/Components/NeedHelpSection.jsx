import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NeedHelpSection({
  faqs = [
    {
      question: "Lorem Ipsum is simply dummy text of the printing.",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing.",
      answer: "Answer for FAQ 2 goes here.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing.",
      answer: "Answer for FAQ 3 goes here.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing.",
      answer: "Answer for FAQ 4 goes here.",
    },
  ],
}) {
  const [openIdx, setOpenIdx] = useState(null);

  // Container variants with staggerChildren
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
        ease: "easeOut",
      },
    },
  };

  // Each FAQ item animates in with fade + slide up
  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <motion.section
      className="relative w-full py-16 px-4 lg:px-16 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/tabsection.webp')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: FAQs */}
        <div className="text-white">
          <motion.h2
            className="text-3xl font-bold mb-2 serif text-[32px] lg:text-[48px]"
            style={{
              fontFamily: "Cormorant Garamond, serif ",
              fontWeight: 700,
            }}
            variants={faqVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mb-8"
            style={{
              fontFamily: "Lora, serif",
              fontSize: "16px",
              fontWeight: 400,
            }}
            variants={faqVariants}
          >
            We understand that navigating the publishing process can feel overwhelming, but don't worry! Our team is here to guide you. Below are answers to some of the most common questions we receive.
          </motion.p>
          <motion.div className="space-y-4">
            {faqs.map((faq, idx) => {
              const expanded = openIdx === idx;
              return (
                <motion.div
                  key={idx}
                  className={`relative group cursor-pointer
                    ${
                      expanded
                        ? "bg-white/10 border-2 rounded-lg py-6"
                        : "bg-white/5 border border-white/30 rounded-[28px] py-4"
                    }
                    px-6 flex flex-col transition-all duration-300`}
                  onClick={() => setOpenIdx(expanded ? null : idx)}
                  variants={faqVariants}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="block font-semibold"
                      style={{
                        fontFamily: "Lora, serif",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-white ml-4 shrink-0 transform transition-transform duration-300 ${
                        expanded ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          className="text-sm text-white/80 mt-2"
                          style={{
                            fontFamily: "Lora, serif",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expanded && (
                    <div className="hidden lg:block absolute right-[-130px] top-1/2 transform -translate-y-1/2 z-10">
                      <svg width="140" height="4">
                        <line
                          x1="0"
                          y1="2"
                          x2="140"
                          y2="2"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeDasharray="6,6"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Book Images */}
        <motion.div
          className="flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/images/books3.webp" loading="lazy" alt="Principal's Matter" className="" />
        </motion.div>
      </div>
    </motion.section>
  );
}
