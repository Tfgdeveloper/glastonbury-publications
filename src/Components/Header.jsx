import { useState, useCallback, useId } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Popup from "./Popup";
import animationData from "/src/assets/Confetti Burst.json";

/* ------------------------------------------------------------------ */
/* Static config — hoisted so nothing here is recreated on re-render.  */
/* ------------------------------------------------------------------ */

const HEADER_GRADIENT = "linear-gradient(144deg,#3b6635,#2d6588)";

const loraStyle = {
  fontFamily: "Lora, sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "white",
  wordBreak: "break-all",
};

const linkStyle = {
  fontFamily: "Lora, serif",
  fontStyle: "normal",
  fontWeight: 700,
};

const lottieStyle = { height: 220, width: 220 };

const topLinkClass =
  "px-3 rounded font-bold text-[18px] font-serif transition hover:bg-gradient-to-br hover:from-[#3b6635] hover:to-[#2d6588] hover:bg-clip-text hover:text-transparent";

const mobileTopLinkClass =
  "block mb-3 rounded font-bold text-[18px] font-serif transition hover:bg-gradient-to-br hover:from-[#3b6635] hover:to-[#2d6588] hover:bg-clip-text hover:text-transparent";

const dropdownItemClass =
  "px-4 py-2 hover:bg-[linear-gradient(144deg,#3b6635,#2d6588)] hover:text-white transition-colors";

// Simple links with no dropdown.
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

// Links that open a dropdown, keyed so both desktop + mobile can render them.
const NAV_MENUS = [
  {
    key: "services",
    to: "/services",
    label: "Services",
    width: "w-60",
    items: [
      { to: "/publishing-solutions", label: "Publishing Solutions" },
      { to: "/cover-design-and-layout", label: "Cover Design And Layout" },
      { to: "/ebook-and-audiobook-publishing", label: "Ebook And Audiobook Publishing" },
      { to: "/book-design-and-formatting", label: "Book Design and Formatting" },
      { to: "/global-distribution", label: "Global Distribution" },
      { to: "/ghost-writing", label: "Ghost Writing" },
      { to: "/book-translation", label: "Book Translation" },
    ],
  },
  {
    key: "marketing",
    to: "/marketing-and-promotion",
    label: "Marketing And Promotion",
    width: "w-72",
    items: [
      { to: "/online-book-advertising-programs", label: "Book Advertising Campaigns" },
      { to: "/amazon-author-page", label: "Amazon Author Branding" },
      { to: "/podcast-booking-service", label: "Podcast Booking & PR" },
      { to: "/author-website-design", label: "Author Website Development" },
      { to: "/social-media-publicist", label: "Social Media Author Promotion" },
      { to: "/times-square-book-announcement", label: "Times Square Book Promotion" },
      { to: "/become-amazon-bestselling-author", label: "Amazon Bestseller Campaign" },
      { to: "/become-barnes-noble-bestselling-author", label: "Barnes & Noble Bestseller Campaign" },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.3 } },
};

const headerFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideLeftFade = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRightFade = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const lowerFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
};

/* ------------------------------------------------------------------ */
/* Dropdown menu — shared by desktop hover and mobile tap/accordion.   */
/* ------------------------------------------------------------------ */

function DropdownMenu({ id, open, width, items, onItemClick, variant }) {
  const isDesktop = variant === "desktop";

  // Desktop: floats over the page, anchored to the trigger.
  // Mobile: rendered in normal flow so it pushes content down instead of
  // overlaying it — an `absolute` dropdown here would get clipped by the
  // mobile menu's `overflow-hidden` slide animation and disappear behind
  // whatever section sits below the header.
  const className = isDesktop
    ? `absolute top-full left-0 ${width} bg-[#EAE9E9] rounded-xl shadow-lg text-black font-normal font-sans z-50`
    : "ml-4 mt-1 border-l-2 border-[#2d6588]/30 bg-black/5 rounded-lg text-black font-normal font-sans";

  return (
    <AnimatePresence>
      {open && (
        <motion.ul
          id={id}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          className={className}
        >
          {items.map((item, i) => (
            <li
              key={item.to}
              className={
                isDesktop
                  ? `${dropdownItemClass} ${i === 0 ? "rounded-t-xl" : ""} ${
                      i === items.length - 1 ? "rounded-b-xl" : ""
                    }`
                  : "px-3 py-2 active:bg-black/10 rounded"
              }
              style={linkStyle}
            >
              <Link to={item.to} onClick={onItemClick}>
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Nav links — one component, two responsive variants.                 */
/* Desktop opens dropdowns on hover; mobile opens them on tap          */
/* (hover doesn't exist on touch devices, so this is the more usable   */
/* behaviour rather than a straight port of the old hover-only menu).  */
/* ------------------------------------------------------------------ */

function NavLinks({ variant, onNavigate }) {
  const [openMenu, setOpenMenu] = useState(null);
  const isDesktop = variant === "desktop";
  const baseId = useId();

  const toggleMenu = useCallback((key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  }, []);

  const closeMenu = useCallback(() => setOpenMenu(null), []);

  const handleLinkClick = useCallback(() => {
    closeMenu();
    onNavigate?.();
  }, [closeMenu, onNavigate]);

  return (
    <ul
      className={
        isDesktop
          ? "hidden md:flex items-center space-x-10 relative z-40"
          : "relative z-40 space-y-1"
      }
    >
      {NAV_LINKS.map((link) => (
        <li key={link.to} className={isDesktop ? undefined : "mb-1"}>
          <Link
            to={link.to}
            onClick={handleLinkClick}
            className={isDesktop ? topLinkClass : mobileTopLinkClass}
            style={linkStyle}
          >
            {link.label}
          </Link>
        </li>
      ))}

      {NAV_MENUS.map((menu) => {
        const open = openMenu === menu.key;
        const dropdownId = `${baseId}-${menu.key}`;
        return (
          <li
            key={menu.key}
            className="relative"
            onMouseEnter={isDesktop ? () => setOpenMenu(menu.key) : undefined}
            onMouseLeave={isDesktop ? closeMenu : undefined}
          >
            {isDesktop ? (
              <span className={topLinkClass} style={linkStyle}>
                <Link to={menu.to} onClick={handleLinkClick}>
                  {menu.label}
                </Link>
              </span>
            ) : (
              <button
                type="button"
                className={`${mobileTopLinkClass} w-full flex items-center justify-between`}
                style={linkStyle}
                aria-expanded={open}
                aria-controls={dropdownId}
                onClick={() => toggleMenu(menu.key)}
              >
                {menu.label}
                <span className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
            )}

            <DropdownMenu
              id={dropdownId}
              open={open}
              width={menu.width}
              items={menu.items}
              onItemClick={handleLinkClick}
              variant={variant}
            />
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerFade}
      className="relative z-50"
    >
      {/* Top strip: contact info */}
      <div
        className="w-full px-4 py-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 lg:pl-16 lg:pr-16"
        style={{ background: HEADER_GRADIENT }}
      >
        <motion.div
          className="flex items-center space-x-2 justify-center sm:justify-start"
          variants={slideLeftFade}
        >
          <img
            src="/images/mailicon.webp"
            loading="lazy"
            width={20}
            height={16}
            alt="mail"
            className="w-5 h-4 shrink-0"
          />
          <Link
            to="mailto:support@glastonburypublications.com"
            className="font-sans break-all"
            style={loraStyle}
          >
            support@glastonburypublications.com
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2 justify-center sm:justify-end"
          variants={slideRightFade}
        >
          <img
            src="/images/phoneicon.webp"
            loading="lazy"
            width={20}
            height={20}
            alt="phone"
            className="w-5 h-5 shrink-0"
          />
          <Link to="tel:+14159186468" className="font-sans" style={loraStyle}>
            (415) 918-6468
          </Link>
        </motion.div>
      </div>

      {/* Discount banner (disabled — drop the `hidden` class to re-enable) */}
      <div className="hidden w-full px-4 py-3" style={{ background: HEADER_GRADIENT }}>
        <div className="max-w-[1600px] w-full mx-auto flex justify-center items-center">
          <p className="w-full text-[18px] text-white text-center">
            <span className="font-bold">Memorial Day Special</span>:{" "}
            <span className="mx-2 text-[#ff3b30]">50% OFF</span> All Publishing
            Services – Limited Time Offer!
          </p>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        className="w-full bg-[#EAE9E9] shadow px-4 py-4 lg:px-16 relative z-40"
        variants={lowerFade}
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0">
            <img
              src="/images/Logo1.webp"
              fetchPriority="high"
              alt="Glastonbury Publications"
              className="w-40 sm:w-52 lg:w-60 h-auto"
            />
          </Link>

          <NavLinks variant="desktop" />

          {/* CTA (desktop only) */}
          <div className="hidden md:flex relative items-center">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center scale-125">
              <Lottie animationData={animationData} loop autoplay style={lottieStyle} />
            </div>

            <motion.button
              type="button"
              onClick={openPopup}
              className="relative z-10 px-6 py-2 font-medium text-white cursor-pointer border-none"
              style={{
                borderRadius: "23.19px 23.19px 0px 23.19px",
                background: "#0A2342",
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "1px",
              }}
              whileHover={buttonHover}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get started
            </motion.button>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center gap-1 p-2 -mr-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-0.5" style={{ background: HEADER_GRADIENT }} />
            <span className="block w-6 h-0.5" style={{ background: HEADER_GRADIENT }} />
            <span className="block w-6 h-0.5" style={{ background: HEADER_GRADIENT }} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <NavLinks variant="mobile" onNavigate={closeMobileMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </motion.header>
  );
}