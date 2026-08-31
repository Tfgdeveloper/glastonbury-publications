import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const ContactSection = () => (
  <motion.div
    className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] py-12 px-4 lg:px-20 md:px-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Main Heading Centered */}
    <motion.h2
      className="font-bold mb-4 text-center text-[32px] lg:text-[48px]"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        fontStyle: "normal",
        fontWeight: 700,
      }}
      variants={itemVariants}
    >
      Send Us a Message
    </motion.h2>

    <motion.p
      className="text-[#555555] mb-8 text-center max-w-3xl"
      style={{
        fontFamily: "Lora, serif",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
      }}
      variants={itemVariants}
    >
      We’d love to hear from you! Whether you have questions, comments, or are
      ready to start your publishing journey with us, feel free to reach out.
      Our team is here to assist you every step of the way.
      <br />
      Please fill out the form below, and we will get back to you as soon as
      possible.
    </motion.p>

    {/* Content Row */}
    <div className="flex flex-col md:flex-row items-start justify-center w-full gap-8 max-w-7xl">
      {/* Left: 3 Transparent Image Boxes */}
      <motion.div
        className="flex flex-col gap-6 flex-1 w-full mx-auto md:mx-0"
        variants={itemVariants}
      >
        {[ 
          // Sales Phone
          {
            img: "/images/phone.webp",
            title: "Sales",
            text: "(415) 918-6468",
            href: "tel:+14159186468",
            isExternal: true,
          },
          
          {
            img: "/images/location.webp",
            title: "Location",
            text: "447 Sutter St Ste 405, San Francisco CA 94108",
          },
          {
            img: "/images/mail.webp",
            title: "Email Address",
            text: "info@glastonburypublications.com",
            href: "mailto:info@glastonburypublications.com",
            isExternal: true,
          },
        ].map(({ img, title, text, href, isExternal }, idx) => {
          const content = (
            <motion.div
              className="flex items-start cursor-pointer"
              variants={itemVariants}
            >
              <img
                src={img}
                loading="lazy"
                alt={title}
                className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px] mr-2 lg:mr-5 md:mr-5"
              />
              <div>
                <h4
                  className="mb-1"
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h4>
                <p
                  className="text-[#000] text-sm"
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "18px",
                    fontStyle: "italic",
                    fontWeight: 700,
                  }}
                >
                  {text}
                </p>
              </div>
            </motion.div>
          );

          if (href) {
            if (isExternal) {
              // For tel: and mailto: use <a> wrapping the whole div
              return (
                <a
                  key={idx}
                  href={href}
                  className="block no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                >
                  {content}
                </a>
              );
            } else {
              // For internal links use react-router-dom Link
              return (
                <Link key={idx} to={href} className="block no-underline">
                  {content}
                </Link>
              );
            }
          }

          // No link, just return content
          return <React.Fragment key={idx}>{content}</React.Fragment>;
        })}
      </motion.div>

      {/* Right: Transparent Form Card */}
      <motion.div
        className="flex-1 w-full mx-auto md:mx-12 mt-10 md:mt-0"
        variants={itemVariants}
      >
        <h2
          className="mb-1 text-center"
          style={{
            fontFamily: "Lora, serif",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          Send Us A Message
        </h2>

        <ContactForm />
      </motion.div>
    </div>
  </motion.div>
);

export default ContactSection;