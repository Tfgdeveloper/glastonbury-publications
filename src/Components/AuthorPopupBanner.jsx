import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthorPopupBanner({
    isOpen,
    closePopup,
    authorImage = "/images/image-banner.png",
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0"
                        style={{ background: "rgba(10, 25, 20, 0.82)", backdropFilter: "blur(14px)" }}
                        onClick={closePopup}
                    />

                    {/* Card */}
                    <motion.div
                        className="relative z-[9999] w-full md:max-w-[70%] overflow-hidden z-[10000]    "
                        style={{
                            borderRadius: "28px",

                            border: "1px solid rgba(255,255,255,0.1)",
                            boxShadow: "0 50px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
                        }}
                        initial={{ opacity: 0, scale: 0.88, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 40 }}
                        transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
                    >


                        {/* Close button */}
                        <motion.button
                            onClick={closePopup}
                            className="absolute top-4 right-4 z-50 flex items-center justify-center cursor-pointer border-none"
                            style={{
                                width: "50px", height: "50px", borderRadius: "50%",
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.12)",
                            }}
                            whileHover={{ background: "rgba(255,255,255,0.16)", scale: 1.08 }}
                            whileTap={{ scale: 0.93 }}
                            aria-label="Close popup"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </motion.button>
                        <a href="https://a.co/d/033d2jds" target="_blank" rel="noopener noreferrer" className="">
                            <img src="images/image-banner.png" />
                        </a>



                        <style>{`
                            @keyframes gspin {
                                from { transform: rotate(0deg); }
                                to { transform: rotate(360deg); }
                            }
                            @keyframes gpulse {
                                0%, 100% { opacity: 1; transform: scale(1); }
                                50% { opacity: 0.4; transform: scale(0.8); }
                            }
                        `}</style>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}