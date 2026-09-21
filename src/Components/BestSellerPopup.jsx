import React, { useEffect, useState } from "react";
import { BookOpen, Lightbulb, Globe, Star, X } from "lucide-react";

const features = [
  { icon: BookOpen, label: "Bizarre Stories" },
  { icon: Lightbulb, label: "Shocking Truths" },
  { icon: Globe, label: "Unbelievable Events" },
  { icon: Star, label: "A Must-Read Series" },
];

export default function BestSellerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open 3s after this component mounts.
  // Because it mounts fresh on every full page refresh AND on every
  // route/page change (as long as it's rendered per-route, e.g. inside
  // a layout that remounts, or you key it by location.pathname), it will
  // fire again each time.
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#f6f2ea] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-stone-700 shadow hover:bg-white"
        >
          <X size={18} />
        </button>

        <section className="relative overflow-hidden px-6 py-12 sm:px-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
            {/* book */}
            <div className="flex shrink-0 justify-center lg:justify-start">
              <img
                src="images/johnfb.png"
                alt="The Weirdest Tales in History III cover"
                className="h-56 w-auto object-contain sm:h-64"
              />
            </div>

            {/* badge */}
            <div className="flex shrink-0 justify-center">
              <img
                src="images/Amazon 3rd.png"
                alt="#3 Amazon Best Seller"
                className="h-32 w-32 object-contain sm:h-40 sm:w-40"
              />
            </div>

            {/* copy */}
            <div className="max-w-md text-center lg:text-left">
              <div className="mb-3 flex items-center justify-center gap-4 lg:justify-start">
                <span className="h-px w-10 bg-amber-400" />
                <p className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                  AMAZON BESTSELLER
                </p>
              </div>

              <h3 className="mb-3 font-serif text-xl md:text-2xl  font-bold leading-[1.15] text-[#1c2b3a]">
                Proud to Be an Amazon Top 3 Bestseller!
              </h3>
              <h3 className="mb-3 font-serif text-[16px] italic font-bold leading-[1.15] text-[#1c2b3a]/50 ">
                In the Shadow of the El — Images of a Brooklyn Childhood
              </h3>

              <p className="mb-6 text-[15px] text-stone-600 ">
                A heartfelt journey into the streets of Brooklyn, In the Shadow of the El captures the memories, friendships, and timeless moments that shape a lifetime. Discover the story that reached the #3 spot on Amazon's Best Seller list, celebrating the power of storytelling and the magic of childhood memories.
              </p>

              <a
                href="https://www.amazon.com/gp/bestsellers/digital-text/7006513011/ref=pd_zg_hrsr_digital-text"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#a88734] bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] px-3 py-2.5 text-[14px] font-medium text-[#111] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(0,0,0,0.3)] transition-colors hover:from-[#f5d78e] hover:to-[#eeb933] focus:outline-none focus:ring-2 focus:ring-[#e77600] focus:ring-offset-1 lg:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-amazon"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z" />
                  <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623" />
                </svg>
                Buy on Amazon
              </a>
            </div>
          </div>

          {/* feature row */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-4 border-t border-stone-200 pt-6">
            {features.map((f, i) => (
              <React.Fragment key={f.label}>
                <div className="flex items-center gap-2 px-0">
                  <f.icon size={18} className="text-amber-500" strokeWidth={1.8} />
                  <span className="text-sm text-stone-700">{f.label}</span>
                </div>
                {i < features.length - 1 && (
                  <span className="hidden h-5 w-px bg-stone-300 sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}