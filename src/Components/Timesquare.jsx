import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: "1",
    title: "Times Square Marketing OF Ellen Fortgang",
    videoUrl: "timesquare/Times Square Locations - Ellen.mp4",
  },
  {
    id: "2",
    title: "Times Square Marketing OF Mike Dimmer",
    videoUrl: "timesquare/Times Square Locations -mike.mp4",
  },
];

// Always show 1 video regardless of screen size
function useVisibleCards() {
  return 1;
}

export default function VideoCarousel() {
  const visibleCards = useVisibleCards(); // always 1 now
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const cardsToShow = [videos[start % videos.length]]; // just 1 video

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
      transition: { duration: 0.4 },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
      scale: 0.95,
      transition: { duration: 0.4 },
    }),
  };

  const nextVideo = () => {
    setDirection(1);
    setStart((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setDirection(-1);
    setStart((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  // Entrance animation variants for the entire section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
     className="relative bg-transparent py-16"
      
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
        <div className="absolute inset-0 overflow-hidden z-0">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
     <source src="/images/Reviews_compress.mp4" type="video/mp4" />
      
    </video>
    <video
      className="flex md:hidden w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
     <source src="/images/Mobile - Compress.mp4" type="video/mp4" />
      
    </video>
  </div>
    
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2
          className="text-center mb-6 text-white text-[32px] lg:text-[48px] z-50"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          From Pages to Pixels: Our Clients' Books Take Over Times Square
        </h2>
          

        <div className="relative w-full flex justify-center z-50">
         
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={start}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex items-stretch justify-center w-full"
            >
              {cardsToShow.map((video) => (
                <div
                  key={video.id}
                  className="flex flex-col bg-white rounded-xl shadow items-center w-full max-w-[900px] mx-auto relative"
                >
                  <div className="w-full aspect-[16/9] rounded-t-xl overflow-hidden">
                    <video
                      src={video.videoUrl}
                      autoPlay
                      muted
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center w-full">
                    <h3
                      className="text-center text-xl font-semibold text-gray-800 mt-4"
                      style={{
                        fontFamily: "Lora, serif",
                      }}
                    >
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevVideo}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-100"
            aria-label="Previous videos"
          >
            <span className="text-xl font-bold">&larr;</span>
          </button>
          <button
            onClick={nextVideo}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-100"
            aria-label="Next videos"
          >
            <span className="text-xl font-bold">&rarr;</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
