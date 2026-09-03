import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Dismiss preloader smoothly after brief presentation
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => setRemoved(true), 700);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[20000] flex items-center justify-center bg-[#0a1a1a] transition-all duration-700 ease-out ${
        hidden ? 'opacity-0 pointer-events-none invisible' : 'opacity-100 visible'
      }`}
      aria-hidden="true"
    >
      <div className="text-center px-4">
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-[#d4a853] tracking-[0.28em] uppercase animate-preloader-pulse">
          The Opal Room
        </h1>
        <p className="text-xs tracking-[0.45em] text-[#a0a090] mt-3 uppercase font-accent">
          Fine Dining · Jabalpur
        </p>
        <div className="w-48 h-[1.5px] bg-[#d4a853]/20 mx-auto mt-7 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#b8860b] via-[#d4a853] to-[#e8c87a] rounded-full animate-[marqueeScroll_1.2s_ease_infinite]" />
        </div>
      </div>
    </div>
  );
};
