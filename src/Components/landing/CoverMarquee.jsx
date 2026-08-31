import { useEffect, useState } from "react";

const imagesTop = [
  // ← replace with your cover URLs
  "books/2.webp",
  "books/3.webp",
  "books/4.webp",
  "books/5.webp",
  "books/6.webp",
  "books/7.webp",
  "books/8.webp",
  "books/9.webp",
  "books/10.webp",
  "books/11.webp",
  "books/12.webp",
  "books/27.webp",
  "books/30.webp",
  "books/15.webp",
];

const imagesBottom = [
  "books/16.webp",
  "books/17.webp",
  "books/18.webp",
  "books/19.webp",
  "books/29.webp",
  "books/21.webp",
  "books/22.webp",
  "books/13.webp",
  "books/14.webp",
  "books/20.webp",
  "books/23.webp",
  "books/24.webp",
  "books/25.webp",
  "books/28.webp",
];

// ------------ Lightbox ------------
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img
        src={src}
        alt={alt || "Cover large view"}
        className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-black shadow hover:bg-white"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

// ------------ One Marquee Row ------------
function MarqueeRow({ images = [], direction = "left", speed = 28, onPick }) {
  const animName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="group relative overflow-hidden">
      {/* mask fade on edges (optional, looks nice) */}
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
      <div
        // Duplicate the set once to make a seamless loop
        className="flex min-w-max items-center gap-4 will-change-transform group-hover:[animation-play-state:paused]"
        style={{ animation: `${animName} ${speed}s linear infinite` }}
      >
        {[...images, ...images].map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => onPick?.(src)}
            className="relative shrink-0 cursor-zoom-in rounded-xl bg-white shadow-md ring-1 ring-black/5 transition-transform hover:scale-[1.02]"
            style={{ width: 140, height: 210 }} // book-like ratio; adjust to taste
            aria-label="View larger cover"
          >
            <img
              src={src}
              alt="Book cover"
              className="h-full w-full rounded-xl object-cover"
              draggable="false"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ------------ Main Component ------------
export default function CoverMarquee() {
  const [activeSrc, setActiveSrc] = useState(null);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <MarqueeRow
          images={imagesTop}
          direction="left"   // top: right → left
          speed={48}         // seconds per loop
          onPick={setActiveSrc}
        />
        <MarqueeRow
          images={imagesBottom}
          direction="right"  // bottom: left → right
          speed={48}
          onPick={setActiveSrc}
        />
      </div>

      {/* Keyframes (scoped) */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <Lightbox src={activeSrc} onClose={() => setActiveSrc(null)} />
    </section>
  );
}
