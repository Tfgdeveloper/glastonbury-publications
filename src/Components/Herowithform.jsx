import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Popup from "./Popup";
import AuthorPopupBanner from "./AuthorPopupBanner";
import { Link } from "react-router";
import Animations from "./Animations";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "/src/assets/Confetti Burst.json";
import phoneAnimation from "/src/assets/button (2).json";
import Heroform2 from "./Heroform2";


// ─── Constants ────────────────────────────────────────────────────────────
const PHONE_NUMBER = "+14159186468";
const PHONE_DISPLAY = "(415) 918-6468";

const BADGE_ENTRANCE_DELAY_MS = 800;

const badgeMotionProps = {
  initial: { x: -120, opacity: 0, scale: 0.7 },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    y: [0, -10, 0],
  },
  exit: { x: -120, opacity: 0, scale: 0.7 },
  transition: {
    x: { type: "spring", stiffness: 200, damping: 18, duration: 0.7 },
    opacity: { duration: 0.5 },
    scale: { duration: 0.5 },
    y: {
      delay: 1.2,
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const shimmerMotionProps = {
  animate: { backgroundPosition: ["200% 0", "-200% 0"] },
  transition: { duration: 2.5, repeat: Infinity, repeatDelay: 1.5 },
};

// ─── Styles (hoisted so they aren't re-created on every render) ───────────
const styles = {
  welcomeText: {
    fontFamily: "Lora, sans-serif",
    fontSize: "18px",
    fontStyle: "italic",
    fontWeight: 600,
    color: "white",
  },
  title: {
    fontFamily: "Cormorant Garamond, sans-serif",
    fontSize: "56px",
    fontWeight: 700,
    color: "white",
    textTransform: "capitalize",
  },
  description: {
    fontFamily: "Lora, sans-serif",
    fontSize: "16px",
    color: "white",
  },
  badgeBody: {
    background: "linear-gradient(135deg, #0A2342 0%, #0e3460 60%, #0A2342 100%)",
    borderRadius: "18px 18px 4px 18px",
    border: "1.5px solid rgba(255, 200, 60, 0.6)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
    minWidth: "190px",
  },
  badgeShimmer: {
    background:
      "linear-gradient(105deg, transparent 35%, rgba(255,220,80,0.15) 50%, transparent 65%)",
    backgroundSize: "200% 100%",
  },
  badgePulseRing: {
    background: "rgba(255, 200, 60, 0.35)",
    animationDuration: "2s",
  },
  badgeIcon: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #FFC83D, #FF9A00)",
    boxShadow: "0 2px 10px rgba(255,180,0,0.5)",
    fontSize: 18,
  },
  badgeLabel: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "17px",
    fontWeight: 600,
    color: "#FFC83D",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  badgeSubLabel: {
    fontFamily: "Cormorant Garamond, serif",
    fontSize: "17px",
    fontWeight: 700,
    color: "#FFFFFF",
    letterSpacing: "0.5px",
  },
  badgeArrow: {
    marginLeft: "auto",
    color: "rgba(255,200,60,0.7)",
    fontSize: 14,
    fontWeight: 700,
  },
  badgeRibbon: {
    position: "absolute",
    bottom: -10,
    left: 12,
    background: "#FFC83D",
    color: "#0A2342",
    fontFamily: "Poppins, sans-serif",
    fontSize: "9px",
    fontWeight: 700,
    letterSpacing: "1px",
    padding: "2px 10px",
    borderRadius: "0 0 6px 6px",
    textTransform: "uppercase",
  },
  phoneText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "1px",
    border: "none",
  },
};

// ─── Floating Author Badge ─────────────────────────────────────────────────
function FloatingAuthorBadge({ onClick }) {
  const [visible, setVisible] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  // Entrance delay so the badge doesn't pop in before the hero has settled.
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), BADGE_ENTRANCE_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Show the badge while the hero is in view, or once the footer scrolls
  // into view (so it doesn't awkwardly hover over the middle sections).
  useEffect(() => {
    const handleScroll = () => {
      const HeroSectionwithform = document.getElementById("hero-section");
      if (!HeroSectionwithform) return;

      const heroBottom = HeroSectionwithform.getBoundingClientRect().bottom;
      const footerSection = document.getElementById("footer-section");
      const footerTop = footerSection?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setShowBadge(heroBottom > 0 || (footerTop != null && footerTop < windowHeight));
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  return (
    <AnimatePresence>
      {visible && showBadge && (
        <motion.div
          className="fixed top-[160px] left-6 z-[999] cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="Author of the month — tap to discover"
          onClick={onClick}
          onKeyDown={handleKeyDown}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          {...badgeMotionProps}
        >
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-[18px] animate-ping"
            style={styles.badgePulseRing}
            aria-hidden="true"
          />

          {/* Badge body */}
          <div
            className="relative overflow-hidden flex items-center gap-3 px-4 py-3 select-none"
            style={styles.badgeBody}
          >
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={styles.badgeShimmer}
              aria-hidden="true"
              {...shimmerMotionProps}
            />

            {/* Star icon */}
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={styles.badgeIcon}
              aria-hidden="true"
            >
              ⭐
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span style={styles.badgeLabel}>Author</span>
              <span style={styles.badgeSubLabel}>of the Month ✦</span>
            </div>

            {/* Arrow */}
            <div style={styles.badgeArrow} aria-hidden="true">
              →
            </div>
          </div>

          {/* Bottom ribbon tag */}
          <div style={styles.badgeRibbon}>Tap to discover</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

FloatingAuthorBadge.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// ─── Main HeroSectionwithform ───────────────────────────────────────────────────────
export default function HeroSectionwithform({
  welcomeText = "Welcome to Glastonbury Publications",
  title = "Book Publishing Services\nTo Build A Successful Brand",
  description1 = "",
  description2 = "",
  linkText = "Visit our website",
  linkUrl = "https://www.example.com",
  // eslint-disable-next-line no-unused-vars
  listItems = [],
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAuthorPopupOpen, setIsAuthorPopupOpen] = useState(false);

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);
  const openAuthorPopup = useCallback(() => setIsAuthorPopupOpen(true), []);
  const closeAuthorPopup = useCallback(() => setIsAuthorPopupOpen(false), []);

  const buttonHover = useMemo(() => ({ scale: 1.05 }), []);

  const titleLines = useMemo(() => title.split("\n"), [title]);

  const titleStyle = {
    fontFamily: "Cormorant Garamond, sans-serif",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 700,
    color: "black",
    textTransform: "capitalize",
  };

  return (
    <>
      {/* Floating badge */}
      <FloatingAuthorBadge onClick={openAuthorPopup} />

      <section
        id="hero-section"
        className="w-full h-auto lg:max-h-[100vh] md:max-h-[85vh] overflow-hidden flex flex-col md:flex-row items-center justify-between bg-[linear-gradient(145deg,#3b6635,#2d6588)] relative"
      >
        {/* Left Content */}
        <motion.div className="max-w-screen-2xl flex-1 box-border pl-4 md:pl-16 pr-10 pt-10 pb-8 md:pt-55 md:mb-40 min-w-0 text-white relative z-30 flex flex-col justify-center min-h-fit">
          <h1 className="mb-1" style={{ ...styles.welcomeText, fontSize: "16px" }}>
            {welcomeText}
          </h1>

          <h2 className="mb-3 leading-[1.1]" style={{ ...styles.title, fontSize: "clamp(30px, 4vw, 52px)" }}>
            {titleLines.map((line, i) => (
              <React.Fragment key={line + i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>

          <p className="mb-4 max-w-[550px] opacity-90" style={{ ...styles.description, fontSize: "15px" }}>
            {description1}{" "}
            <Link to={linkUrl} target="_blank" rel="noopener noreferrer" className="text-white underline">
              {linkText}
            </Link>{" "}
            {description2}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-0 mb-2">
            <div className="relative">
              <motion.button
                type="button"
                onClick={openPopup}
                className="relative px-8 py-2.5 font-medium z-50"
                style={{ borderRadius: "23.19px 23.19px 0px 23.19px", background: "#0A2342", color: "#FFF", fontSize: "18px" }}
                whileHover={buttonHover}
              >
                Get started
              </motion.button>
              <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
                <Lottie
                  animationData={animationData}
                  loop
                  style={{ height: 250, width: 250 }}
                  className="mt-[-100px] ml-[-50px] rotate-100"
                />
              </div>
            </div>

            <Link to={`tel:${PHONE_NUMBER}`} className="hidden md:flex" aria-hidden="true" tabIndex={-1}>
              <Lottie
                animationData={phoneAnimation}
                loop
                autoplay
                style={{ width: 225 }}
                className="mt-[10px] ml-[-10px] z-0"
              />
            </Link>
            <Link
              to={`tel:${PHONE_NUMBER}`}
              className="z-99 hidden md:flex"
              aria-label={`Call us at ${PHONE_DISPLAY}`}
            >
              <p className="ml-[-210px] z-99 mt-[10px]" style={styles.phoneText}>
                {PHONE_DISPLAY}
              </p>
            </Link>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="flex-1 min-w-0">
          
          
          <Animations/>
          <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto w-full max-w-md px-4 ml-200 py-10 px-6 rounded-2xl bg-[#EAE9E980] shadow-lg box-shadow: 0 4.16px 43.683px 0 rgba(0, 0, 0, 0.25)">
             <h2 className="mb-4 leading-none text-center " style={titleStyle}>
              Start Your Publishing Journey   
                </h2>
            <Heroform2/>
          </div>
        </div>
        </div>

        <Popup isOpen={isPopupOpen} closePopup={closePopup} />
        <AuthorPopupBanner
          isOpen={isAuthorPopupOpen}
          closePopup={closeAuthorPopup}
          authorImage="/images/image-banner.png"
        />
        
      </section>
    </>
  );
}

HeroSectionwithform.propTypes = {
  welcomeText: PropTypes.string,
  title: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  listItems: PropTypes.array,
};