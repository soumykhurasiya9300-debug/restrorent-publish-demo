import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure autoplay triggers reliably even if browser has strict initial policy
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, video will play on first interaction
      });
    }
  }, []);

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1a1a] isolation-auto pt-20"
      aria-label="The Opal Room Hero"
    >
      {/* Background Video with layered gradient overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          id="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-85 scale-100 filter saturate-[1.1] contrast-[1.05] brightness-[0.95]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source
            src="https://v1.pinimg.com/videos/iht/expMp4/f2/77/ae/f277ae153ba7432810f7dee78a820f8e_720w.mp4"
            type="video/mp4"
          />
        </video>
        {/* Softened atmospheric overlay for maximum video visibility while preserving text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1a]/35 via-[#0a1a1a]/40 to-[#0a1a1a]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#0a1a1a_92%)] pointer-events-none" />

        {/* Ambient warm gold floor glow */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.16)_0%,transparent_70%)] pointer-events-none animate-pulse" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#d4a853]/25 bg-[#d4a853]/5 backdrop-blur-xs">
          <Sparkles className="w-3 h-3 text-[#e8c87a]" />
          <span className="font-accent text-[11px] md:text-xs tracking-[0.45em] uppercase text-[#e8c87a] font-medium">
            Fine Dining · Jabalpur
          </span>
          <Sparkles className="w-3 h-3 text-[#e8c87a]" />
        </div>

        {/* Main Title */}
        <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] uppercase text-[#f5f0e8] leading-[1.08] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          The <span className="animate-opal-shimmer italic font-normal">Opal</span> Room
        </h1>

        {/* Tagline */}
        <p className="text-sm md:text-base text-[#e5ded4] max-w-xl mx-auto leading-relaxed tracking-wide mb-10 font-body drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Where exquisite cuisine meets cozy ambience and warm hospitality. Perched on the 4th floor of SR Tower, Napier Town — an unforgettable dining experience awaits you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#d4a853] hover:bg-[#e8c87a] text-[#0a1a1a] font-accent font-semibold text-xs tracking-[0.14em] uppercase rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#d4a853]/35 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onReserveTable}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#d4a853]/60 hover:border-[#d4a853] hover:bg-[#d4a853]/10 text-[#f5f0e8] hover:text-[#e8c87a] font-accent font-medium text-xs tracking-[0.14em] uppercase rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#d4a853]" />
            <span>Reserve a Table</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none opacity-80">
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#a0a090] font-accent">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#d4a853] to-transparent animate-scroll-line" />
      </div>
    </header>
  );
};
