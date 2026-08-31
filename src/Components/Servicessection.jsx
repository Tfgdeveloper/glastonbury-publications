import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

// FeatureBox (no entrance animation, only hover)
const FeatureBox = ({
  title,
  description,
  icon,
  hoverIcon,
  readmore,
  redirect
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white shadow p-5 flex flex-col items-start transition-all duration-300 rounded-lg"
      style={{
        background: isHovered
          ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)'
          : '#f0f0f0',
        color: isHovered ? '#fff' : '#000',
        justifyContent: 'space-between'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          loading="lazy"
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
        className="text-sm mb-4"
        style={{
          fontFamily: "Lora, serif",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        {description}
      </div>
      <div
        style={{
          fontFamily: "Lora, serif",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 600,
          textDecorationLine: "underline",
        }}
      >
        <Link to={redirect}>{readmore}</Link>
      </div>
    </div>
  );
};

// Animation for the entire grid (all boxes animate together)
const gridVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Servicessection() {
  // List of features
  const features = [
    {
      title: "Book Publishing Services",
      description: "Our end-to-end book publishing services are crafted to make your publishing journey smooth and stress-free. As a professional book publishing company, we handle everything from editing to distribution—ensuring your book is market-ready and positioned for success.",
      icon: "/images/Publishing Solutions.webp",
      hoverIcon: "/images/Publishing Solutionsw.webp",
      readmore: "Read more",
      redirect: "/publishing-solutions"
    },
    {
      title: "Book Cover Design and Layout",
      description: "Your cover is your first impression—make it count. Our creative book publisher team designs covers that not only reflect your story but also stand strong in a competitive marketplace. Eye-catching. Strategic. Unforgettable.",
      icon: "/images/Cover Design & Layout.webp",
      hoverIcon: "/images/Cover Design & Layoutw.webp",
      readmore: "Read more",
      redirect: "/cover-design-and-layout"
    },
    {
      title: "Book Marketing Services",
      description: "We don’t just publish books—we launch author brands. Our proven marketing strategies help you grow your audience, drive sales, and get media attention. Perfect for any author, especially if you're looking for a book publisher for new authors.",
      icon: "/images/Marketing & Promotion.webp",
      hoverIcon: "/images/Marketing & Promotionw.webp",
      readmore: "Read more",
      redirect: "/marketing-and-promotion"
    },
    {
      title: "eBook & Audiobook Publishing",
      description: "From Kindle to Audible, we convert your manuscript into powerful digital formats. Our team manages everything from formatting to platform uploads, giving you full access to global audiences through eBook and audiobook distribution.",
      icon: "/images/E-book & Audiobook Publishing.webp",
      hoverIcon: "/images/E-book & Audiobook Publishingw.webp",
      readmore: "Read more",
      redirect: "/ebook-and-audiobook-publishing"
    },
    {
      title: "Book Design and Formatting",
      description: "Our professional formatting ensures your book doesn’t just read well—it looks incredible too. These self publishing services are built to meet industry standards, customized for your genre, and designed to make a lasting impression.",
      icon: "/images/Consultation & Author Coaching.webp",
      hoverIcon: "/images/Consultation & Author Coachingw.webp",
      readmore: "Read more",
      redirect: "/book-design-and-formatting"
    },
    {
      title: "Global Distribution",
      description: "Our wide-reaching distribution network connects your book with readers worldwide. As a modern book publisher, we place your work in online retailers, bookstores, and libraries—both locally and internationally.",
      icon: "/images/Global Distribution.webp",
      hoverIcon: "/images/Global Distributionw.webp",
      readmore: "Read more",
      redirect: "/global-distribution"
    },
    {
      title: "Ghostwriting Services",
      description: "Got a powerful story but no time to write it? Our skilled ghostwriters are here to help. Combined with our full book publishing services, we turn your ideas into polished, professionally published books—without the overwhelm.",
      icon: "/images/Ghost writing.webp",
      hoverIcon: "/images/Ghost writingw.webp",
      readmore: "Read more",
      redirect: "/ghost-writing"
    },
    {
      title: "Book Translation Services",
      description: "Ready to go global? Our book translation experts help you connect with readers in multiple languages. Whether you're self-publishing or working with a book publishing company, we make your message resonate beyond borders.",
      icon: "/images/Custom Services.webp",
      hoverIcon: "/images/Custom Servicesw.webp",
      readmore: "Read more",
      redirect: "/book-translation"
    }
  ];

  return (
    <section className="w-full bg-[#EAE9E9] py-10 md:py-32  px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center relative">
        <div className="flex-1 lg:px-16 mt-10 lg:mt-0">
          <h2
            className="font-bold mb-4 text-center text-[32px] lg:text-[42px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            Our Professional Book Publishing Services To Elevate Your Book
          </h2>
          <p
            className="text-[#555555] mb-8 text-center"
            style={{
              fontFamily: "Lora, serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            At Glastonbury Publications, we offer expert-led book publishing services that support your success at every stage. As a full-service book publishing company, our mission is to help you build a lasting brand and bring your story to life with impact.</p>
          {/* Features Row with group animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "0.1" }}
          >
            {features.map((feature) => (
              <FeatureBox key={feature.title} {...feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
