import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeatureBox = ({ title, description, icon, hoverIcon, custom }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 150, damping: 20, delay: custom * 0.2 },
    },
  };

  return (
    <motion.div
      className="bg-white shadow p-5 flex flex-col items-start cursor-pointer transition-colors duration-300"
      style={{
        background: isHovered
          ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)'
          : '#fff',
        color: isHovered ? '#fff' : '',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mb-3"
        animate={{
          y: isHovered ? 10 : 0,
          scale: isHovered ? 1.08 : 1,
          transition: { type: "spring", stiffness: 400, damping: 20 }
        }}
      >
        <img
          src={isHovered ? hoverIcon : icon}
          className="w-15"
          alt="Swappable icon"
        />
      </motion.div>

      <div
        className="font-semibold mb-1"
        style={{
          fontFamily: "Lora, serif",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <div
        className="text-sm"
        style={{
          fontFamily: "Lora, serif",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        {description}
      </div>
    </motion.div>
  );
};

export default function WhyChooseUsSection({
  whyChooseUsText = "Why Choose Us",
  mainHeading = "Covering Your Risks, And\nSecuring Your Future.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
  features = [
    {
      title: "Protect And Save Your Money",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/images/time.webp",
      hoverIcon: "/images/timew.webp",
    },
    {
      title: "Protect And Save Your Money",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/images/ROI.webp",
      hoverIcon: "/images/ROIw.webp",
    },
    {
      title: "Protect And Save Your Money",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/images/Comprehensive.webp",
      hoverIcon: "/images/Comprehensivew.webp",
    },
  ],
  leftImage = "/images/cover.png",
  leftGif = "/images/flipbook.gif",
  leftImageClass = "w-80",
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full bg-[#EAE9E9] py-16 px-4 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-stretch gap-8 relative">

        {/* Left: Image and optional GIF — fixed width, never shrinks */}
        <motion.div
          className="relative flex-shrink-0"
          style={{ width: "520px" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Image */}
          <img
            src={leftImage}
            alt="Books"
            className={`${leftImageClass} object-contain`}
          />

          {/* GIF — sirf tab show hoga jab leftGif pass kiya ho */}
          {leftGif && (
            <img
              src={leftGif}
              alt="Animation"
              className='w-full md:mt-[-250px] md:ml-[100px] mt-[-150px] ml-[40px]'
            />
          )}
        </motion.div>

        {/* Right: Content — flex-1 with min-w-0 */}
        <div className="flex-1 min-w-0 lg:pl-12 mt-10 lg:mt-0">
          <motion.p
            className="text-sm text-black mb-1"
            style={{
              fontFamily: "Lora, serif",
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {whyChooseUsText}
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[32px] lg:text-[48px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
              fontWeight: 700,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {mainHeading.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br className="hidden md:block" />
              </React.Fragment>
            ))}
          </motion.h2>

          <motion.p
            className="text-[#555555] mb-8"
            style={{
              fontFamily: "Lora, serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <FeatureBox
                key={idx}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                hoverIcon={feature.hoverIcon}
                custom={idx}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}