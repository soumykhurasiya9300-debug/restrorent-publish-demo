import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[8000] w-11 h-11 rounded-full bg-[#0a1a1a]/90 hover:bg-[#d4a853] text-[#d4a853] hover:text-[#0a1a1a] border border-[#d4a853]/40 hover:border-[#d4a853] flex items-center justify-center shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer backdrop-blur-xs animate-in fade-in"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
