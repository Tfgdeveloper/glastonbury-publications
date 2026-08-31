import React from "react";

/**
 * Reusable Pricing Card
 * - Pass any icon as `icon` (e.g. <FaLeaf />)
 * - Theme with colors: pass Tailwind classes (e.g. "green", "emerald", "yellow")
 * - If `popular` is true, it uses a gradient and inverts button style
 * - Use either `discount` or `badge` (string) for the top-right label
 * - CTA can be a link (ctaHref) or a button (onCtaClick)
 */
const PricingCard = ({
  name = "Plan",
  subtitle = "Short plan description goes here.",
  priceOld = "",
  priceNew = "",
  period = "/Month",
  features = [],
  icon = null,

  // badges
  discount = "",          // e.g. "5% off"
  badge = "",             // e.g. "Most popular"
  popular = false,        // toggles gradient & inverted styles

  // theming (Tailwind color names)
  color = "green",        // base accent color name
  gradientFrom = "green-600",
  gradientTo = "green-800",

  // CTA
  ctaText = "Select your plan",
  ctaHref = "",
  onCtaClick = null,

  className = "",
}) => {
  const isLink = !!ctaHref;
  const Check = ({ children }) => (
    <li className="flex items-center gap-2">
      <span className={`w-5 h-5 flex items-center justify-center rounded-full ${popular ? `bg-${color}-500 text-white` : `bg-${color}-100 text-${color}-600`}`}>
        ✓
      </span>
      <span>{children}</span>
    </li>
  );

  // container styles
  const baseCard = `relative w-[300px] rounded-2xl shadow-lg p-6 transition-transform duration-300 ${className}`;
  const popularCard = `bg-gradient-to-b from-${gradientFrom} to-${gradientTo} text-white scale-105`;
  const normalCard = "bg-white";

  // prices
  const oldPriceCls = popular ? "text-gray-200 line-through" : "text-gray-500 line-through";
  const subtitleCls = popular ? "text-gray-200" : "text-gray-500";

  // button styles
  const btnPopular = "bg-white text-black hover:bg-gray-100";
  const btnNormal = `bg-${color}-600 text-white hover:bg-${color}-700`;

  // badge styles
  const discountBadge = `absolute top-4 right-4 text-xs bg-${color}-100 text-${color}-700 px-3 py-1 rounded-full`;
  const popularBadge  = "absolute top-4 right-4 text-xs bg-white text-green-700 px-3 py-1 rounded-full";

  const CTA = isLink ? (
    <a href={ctaHref} className={`block w-full text-center py-3 rounded-full font-medium ${popular ? btnPopular : btnNormal}`}>
      {ctaText}
    </a>
  ) : (
    <button onClick={onCtaClick} className={`w-full py-3 rounded-full font-medium ${popular ? btnPopular : btnNormal}`}>
      {ctaText}
    </button>
  );

  return (
    <div className={`${baseCard} ${popular ? popularCard : normalCard}`}>
      {/* Badges */}
      {discount && !popular && <span className={discountBadge}>{discount}</span>}
      {badge && popular && <span className={popularBadge}>{badge}</span>}

      {/* Icon */}
      {icon && <div className={`${popular ? "text-white" : `text-${color}-600`} text-3xl mb-4`}>{icon}</div>}

      {/* Headings */}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className={`text-sm mb-4 ${subtitleCls}`}>{subtitle}</p>

      {/* Prices */}
      <div className="flex items-baseline gap-2 mb-4">
        {priceOld ? <span className={oldPriceCls}>{priceOld}</span> : null}
        <span className="text-2xl font-bold">{priceNew}</span>
        <span className="text-sm">{period}</span>
      </div>

      {/* CTA */}
      

      {/* Features */}
      {features?.length > 0 && (
        <ul className="mt-6 space-y-3 text-sm">
          {features.map((f, i) => (
            <Check key={i}>{f}</Check>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PricingCard;
