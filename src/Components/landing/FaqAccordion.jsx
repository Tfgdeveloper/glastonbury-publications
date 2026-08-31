// components/FaqAccordion.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FaqAccordion({
  items,
  initialOpen = 0,
  gradient = "bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)]",
}) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="w-full space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        const qId = `faq-q-${i}`;
        const aId = `faq-a-${i}`;

        return (
          <div key={i} className="w-full md:px-16">
            {/* Header */}
            <button
              id={qId}
              aria-controls={aId}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={[
                "heading-lp w-full rounded-xl px-5 py-4 text-left text-[18px] font-medium text-white shadow",
                "ring-1 ring-black/5 transition hover:brightness-[1.03] focus:outline-none focus:ring-2 focus:ring-white/60",
                "flex items-center gap-3 min-h-[56px]", // consistent header height
                gradient,
              ].join(" ")}
            >
              <span className="opacity-90 shrink-0">Q {String(i + 1).padStart(2, "0")}.</span>
              <span className="flex-1">{it.question}</span>

              {/* + / – control (right side) */}
              <span
                className="text-lp ml-3 grid h-7 w-7 place-items-center rounded-full bg-white text-emerald-700 text-lg leading-none font-bold"
                aria-hidden="true"
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>

            {/* Answer (always full width, animated height) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={aId}
                  role="region"
                  aria-labelledby={qId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="w-full overflow-hidden"   // <- ensures full width
                >
                  <div className="text-lp w-full rounded-b-xl bg-white px-5 py-4 text-[18px] leading-6 text-neutral-700 shadow">
                    {it.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
