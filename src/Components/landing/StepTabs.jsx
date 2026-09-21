// components/StepTabs.jsx
import { useState, useMemo } from "react";

/**
 * Reusable vertical step tabs
 * props:
 * - steps: [{ key, label, title, body }]
 * - initialKey?: string
 * - accentGradient?: string (Tailwind arbitrary bg class)
 * - onChange?: (key) => void
 * - className?: string
 */
export default function StepTabs({
  steps = [],
  initialKey,
  accentGradient = "bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)]",
  onChange,
  className = "",
}) {
  const safeKey = initialKey ?? steps[0]?.key;
  const [active, setActive] = useState(safeKey);

  const current = useMemo(
    () => steps.find((s) => s.key === active) ?? steps[0],
    [steps, active]
  );

  const handleSelect = (k) => {
    setActive(k);
    onChange?.(k);
  };

  return (
    <section className={`w-full px-4 py-8 md:px-8 ${className}`}>
      <div className="mx-auto max-w-5xl gap-8 md:grid md:grid-cols-[240px_1fr]">
        {/* Left: vertical tabs */}
        <div className="mb-6 md:mb-0">
          <ul className="space-y-3">
            {steps.map((s) => {
              const isActive = s.key === current?.key;
              return (
                <li key={s.key}>
                  <button
                    type="button"
                    onClick={() => handleSelect(s.key)}
                    aria-selected={isActive}
                    className={[
                      "w-full rounded-[15px] border px-4 py-3 text-left text-xs tracking-wider",
                      "flex items-center justify-between",
                      "transition-colors",
                      isActive
                        ? "bg-white border-neutral-400 shadow-sm"
                        : "bg-transparent border-neutral-300 hover:bg-white/70",
                    ].join(" ")}
                  >
                    <span className="font-medium text-neutral-700">
                      {s.label}
                    </span>
                    <span
                      className={[
                        "ml-3 inline-block h-2.5 w-2.5 rounded-full",
                        isActive ? "bg-black" : "bg-neutral-200",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: content panel */}
        <div>
          {current?.title && (
            <h3 className="heading-lp text-[28px] font-semibold leading-tight">
              <span className={`${accentGradient} bg-clip-text text-transparent`}>
                {current.title}
              </span>
            </h3>
          )}
          <div className="mt-2 h-[3px] w-12 rounded bg-[#121F28]" />
          {current?.body && (
            <p className="text-lp text-[18px] mt-4 max-w-prose text-sm leading-6 text-neutral-700">
              {current.body}
            </p>
          )}

          {/* Optional: custom React content per step */}
          {current?.content}
        </div>
      </div>
    </section>
  );
}
