import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollWidth(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2.5px] z-[9999] bg-gradient-to-r from-[#b8860b] via-[#d4a853] to-[#e8c87a] pointer-events-none transition-[width] duration-75 ease-linear"
      style={{ width: `${scrollWidth}%` }}
      aria-hidden="true"
    />
  );
};
