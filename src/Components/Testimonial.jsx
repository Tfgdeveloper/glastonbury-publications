import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Eric Aguir",
    avatar: "images/EricAguir.webp",
    rating: 4,
    text: "They provided exceptional support and professionalism throughout the publishing of Only Daughter. Their dedication made the entire process smooth and rewarding. I highly recommend their services to any author."
  },
  {
    name: "Guaracyara Pimenta",
    avatar: "images/GuaracyaraPimenta.webp",
    rating: 5,
    text: "Working with this exceptional team on Fires of Changes was a fantastic experience. Their team was attentive, efficient, and committed to bringing my vision to life. I’m grateful for their excellent guidance and support."
  },
  {
    name: "Jorge A. Rivas",
    avatar: "images/JorgeARivas.webp",
    rating: 3.5,
    text: "They delivered outstanding service and expertise for Principl’s Matter. Their attention to detail and timely communication made publishing effortless. I fully endorse their professional approach and quality work."
  },
  {
    name: "Lisa Hardy",
    avatar: "images/LisaHardy.webp",
    rating: 4,
    text: "Publishing When Did My Parents Get Old with these leading professionals was a pleasure. Their team was supportive and knowledgeable, ensuring my book reached its fullest potential. I highly recommend them to fellow authors."
  },
  {
    name: "Jen Beckler",
    avatar: "images/JenBeckler.webp",
    rating: 5,
    text: "They were instrumental in bringing The Substitute Who Sparkled to readers. Their professional guidance and dedication exceeded my expectations. I strongly encourage authors to choose their services."
  },
  {
    name: "Janet Cadriel",
    avatar: "images/JanetCadriel.webp",
    rating: 5,
    text: "Choosing this highly capable team for my book 'From Broken to Redeemed' was one of the best decisions I made. Their expertise and caring approach made publishing seamless. I highly recommend their team to anyone seeking quality support."
  },
];

function StarRating({ value }) {
  return (
    <div className="flex items-center mb-2 justify-center">
      {[1,2,3,4,5].map((i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= value ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </div>
  );
}

// Responsive visible cards
function useVisibleCards() {
  const [visible, setVisible] = React.useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setVisible(3);
      else if (window.innerWidth >= 768) setVisible(2);
      else setVisible(1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return visible;
}

export default function TestimonialCarousel() {
  const visibleCards = useVisibleCards();
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  // Calculate which testimonials to show
  let cardsToShow = [];
  for (let i = 0; i < visibleCards; i++) {
    cardsToShow.push(testimonials[(start + i) % testimonials.length]);
  }

  // Animation variants for carousel slides
  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
      scale: 0.95,
      transition: { duration: 0.4 }
    }),
  };

  // Section entrance animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const nextTestimonial = () => {
    setDirection(1);
    setStart((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setStart((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <motion.section
      className="bg-[#EAE9E9] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-2 text-black text-[32px] lg:text-[48px]"
          style={{
            fontFamily: "Cormorant Garamond, serif ",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >What Our Clients Are Saying
        </h2>
        <p className="text-center text-[#555555] mb-20"
          style={{
            fontFamily: "Lora, serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Our authors’ satisfaction is our top priority. Here’s a glimpse into their experiences with us:
        </p>
        <div className="relative w-full  flex justify-center z-50">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={start}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex items-stretch gap-6 justify-center w-full"
            >
              {cardsToShow.map((t, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-white rounded-xl shadow items-center min-w-[320px] max-w-[320px] mx-auto relative"
                >
                  {/* Avatar */}
                  <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 z-10">
                    <img
                      src={t.avatar}
                      loading="lazy"
                      alt={t.name}
                      className="w-[100px] h-[100px] rounded-full border-4 border-white shadow"
                    />
                  </div>
                  {/* Card */}
                  <div className="pt-16 pb-6 px-6 flex flex-col items-center w-full">
                    <hr className="w-full border-[#AFAFAF] border-dotted mb-5" />
                    <StarRating value={t.rating} />
                    <p className="text-black text-center mb-4 px-2">
                      {t.text}
                    </p>
                    <hr className="w-full border-[#AFAFAF] border-dotted" />
                    <div
                      className="font-semibold text-gray-800 px-6 py-2 text-center"
                      style={{
                        background: 'linear-gradient(90deg, #234020 24.06%, #2D4C29 99.98%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'Lora, serif',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                      }}
                    >
                      {t.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-100"
          >
            <span>&larr;</span>
          </button>
          <button
            onClick={nextTestimonial}
            className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-100"
          >
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
