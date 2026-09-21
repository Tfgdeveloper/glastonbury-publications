import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthorPopup({
    isOpen,
    closePopup,
    authorName = "Sarah J. Mitchell",
    authorImage = "https://picsum.photos/seed/author-portrait/200/200.jpg",
    bookName = "Whispers of the Forgotten Valley",
    bookImage = "https://picsum.photos/seed/book-cover-novel/160/240.jpg",
    buyUrl = "https://www.amazon.com/dp/B0XXXXX",
    tagline = "A mesmerizing tale of mystery and redemption",
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
                        className="relative z-[9999] w-full max-w-[480px] overflow-hidden"
                        style={{
                            borderRadius: "28px",
                            background: "linear-gradient(160deg, #1e4d2b 0%, #1a3d50 55%, #122d40 100%)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            boxShadow: "0 50px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
                        }}
                        initial={{ opacity: 0, scale: 0.88, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 40 }}
                        transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
                    >
                        {/* Top shimmer bar */}
                        <div style={{
                            height: "3px",
                            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)",
                        }} />

                        {/* Background glow orbs */}
                        <div style={{
                            position: "absolute", top: "-80px", right: "-80px",
                            width: "260px", height: "260px", borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(59,102,53,0.35) 0%, transparent 70%)",
                            pointerEvents: "none",
                        }} />
                        <div style={{
                            position: "absolute", bottom: "-60px", left: "-60px",
                            width: "220px", height: "220px", borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(45,101,136,0.3) 0%, transparent 70%)",
                            pointerEvents: "none",
                        }} />

                        {/* Close button */}
                        <motion.button
                            onClick={closePopup}
                            className="absolute top-4 right-4 z-50 flex items-center justify-center cursor-pointer border-none"
                            style={{
                                width: "34px", height: "34px", borderRadius: "50%",
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.12)",
                            }}
                            whileHover={{ background: "rgba(255,255,255,0.16)", scale: 1.08 }}
                            whileTap={{ scale: 0.93 }}
                            aria-label="Close popup"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </motion.button>

                        <div className="px-7 pt-6 pb-7">

                            {/* Badge */}
                            <motion.div
                                className="mb-5"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.4 }}
                            >
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: "8px",
                                    padding: "5px 14px 5px 9px",
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    borderRadius: "100px",
                                    backdropFilter: "blur(8px)",
                                }}>
                                    <span style={{
                                        width: "7px", height: "7px", borderRadius: "50%",
                                        background: "#7dd9a0",
                                        boxShadow: "0 0 8px rgba(125,217,160,0.9)",
                                        display: "inline-block",
                                        flexShrink: 0,
                                        animation: "gpulse 2s ease-in-out infinite",
                                    }} />
                                    <span style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "10px", fontWeight: 600,
                                        letterSpacing: "2.5px", textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.85)",
                                    }}>Author of the Month</span>
                                </div>
                            </motion.div>

                            {/* Author Row */}
                            <motion.div
                                className="flex items-center gap-4 mb-6"
                                initial={{ opacity: 0, x: -18 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.45 }}
                            >
                                {/* Avatar with spinning ring */}
                                <div style={{ position: "relative", flexShrink: 0 }}>
                                    <div style={{
                                        position: "absolute", inset: "-3px",
                                        borderRadius: "50%",
                                        background: "conic-gradient(from 0deg, #3b6635, #7dd9a0, #2d6588, #a8d8ea, #3b6635)",
                                        animation: "gspin 5s linear infinite",
                                    }} />
                                    <div style={{
                                        position: "relative",
                                        width: "72px", height: "72px",
                                        borderRadius: "50%", overflow: "hidden",
                                        border: "3px solid #1e4d2b",
                                    }}>
                                        <img src={authorImage} alt={authorName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                </div>

                                <div>
                                    <p style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "10px", fontWeight: 500,
                                        letterSpacing: "2px", textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.38)",
                                        marginBottom: "4px",
                                    }}>Featured Author</p>
                                    <h3 style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "26px", fontWeight: 700,
                                        color: "#fff", lineHeight: 1.1,
                                        marginBottom: "5px",
                                    }}>{authorName}</h3>
                                    <p style={{
                                        fontFamily: "'Lora', serif",
                                        fontSize: "12.5px", fontStyle: "italic",
                                        color: "rgba(168,216,234,0.8)",
                                    }}>"{tagline}"</p>
                                </div>
                            </motion.div>

                            {/* Divider */}
                            <div style={{
                                height: "1px",
                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent)",
                                marginBottom: "22px",
                            }} />

                            {/* Book Section */}
                            <motion.div
                                className="flex gap-5 items-start"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.45 }}
                            >
                                {/* Book Cover */}
                                <div style={{ flexShrink: 0, position: "relative" }}>
                                    <div style={{
                                        position: "absolute", bottom: "-12px", left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "75%", height: "18px",
                                        background: "rgba(0,0,0,0.45)",
                                        filter: "blur(10px)",
                                        borderRadius: "50%",
                                    }} />
                                    <div style={{
                                        width: "112px", height: "165px",
                                        borderRadius: "6px 10px 10px 6px",
                                        overflow: "hidden",
                                        boxShadow: "8px 8px 28px rgba(0,0,0,0.55), -2px 0 6px rgba(0,0,0,0.35)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        position: "relative",
                                    }}>
                                        <img src={bookImage} alt={bookName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        {/* Spine shine */}
                                        <div style={{
                                            position: "absolute", top: 0, left: 0, bottom: 0, width: "10px",
                                            background: "linear-gradient(90deg, rgba(255,255,255,0.18), transparent)",
                                        }} />
                                    </div>
                                </div>

                                {/* Book Info */}
                                <div style={{ flex: 1, paddingTop: "4px" }}>
                                    <p style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "9px", fontWeight: 600,
                                        letterSpacing: "2.5px", textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.3)",
                                        marginBottom: "8px",
                                    }}>Featured Book</p>

                                    <h4 style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "20px", fontWeight: 600,
                                        color: "#fff", lineHeight: 1.25,
                                        marginBottom: "14px",
                                    }}>{bookName}</h4>

                                    {/* Stars */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "20px" }}>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="12" height="12" viewBox="0 0 24 24"
                                                fill={i < 4 ? "#7dd9a0" : "rgba(125,217,160,0.25)"}>
                                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                                            </svg>
                                        ))}
                                        <span style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "10px", color: "rgba(255,255,255,0.35)", marginLeft: "5px",
                                        }}>4.8</span>
                                    </div>

                                    {/* CTA Button — same style as website */}
                                    <motion.a
                                        href={buyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            padding: "10px 22px",
                                            background: "#0A2342",
                                            borderRadius: "23.19px 23.19px 0px 23.19px",
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "13px", fontWeight: 500,
                                            color: "#fff",
                                            textDecoration: "none",
                                            letterSpacing: "0.5px",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            boxShadow: "0 4px 18px rgba(10,35,66,0.5)",
                                        }}
                                        whileHover={{ scale: 1.04, boxShadow: "0 6px 26px rgba(10,35,66,0.7)" }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Buy Now →
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom shimmer */}
                        <div style={{
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                        }} />

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