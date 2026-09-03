import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Fine Dining Experience',
    'Cozy & Beautiful Ambience',
    'Warm Staff',
    'Fresh & Flavourful Food',
    'Family Friendly',
    'Dine-in · Takeaway · Delivery',
    'Rated 4.7 ★ · 188 Reviews',
    'Napier Town Jabalpur',
  ];

  return (
    <div
      className="bg-[#d4a853] py-3 overflow-hidden relative z-20 border-y border-[#b8860b]/40 shadow-inner select-none"
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center">
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 mx-4 text-[#0a1a1a] font-accent font-semibold text-[11px] md:text-xs tracking-[0.22em] uppercase whitespace-nowrap"
          >
            <span>{text}</span>
            <span className="text-[8px] text-[#0a1a1a]/70">❖</span>
          </div>
        ))}
      </div>
    </div>
  );
};
