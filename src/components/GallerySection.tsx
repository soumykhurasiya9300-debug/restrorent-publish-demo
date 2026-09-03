import React, { useRef, useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0a1a1a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
            Visual Journey
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase">
            Moments &amp; <span className="text-[#d4a853] italic font-normal">Ambience</span>
          </h2>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full border border-[#d4a853]/30 hover:border-[#d4a853] hover:bg-[#d4a853]/10 text-[#f5f0e8] hover:text-[#e8c87a] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full border border-[#d4a853]/30 hover:border-[#d4a853] hover:bg-[#d4a853]/10 text-[#f5f0e8] hover:text-[#e8c87a] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Gallery Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scrollbar-none px-6 md:px-12 pb-6 pt-2 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="gallery-item shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl overflow-hidden aspect-[4/5] relative border border-[#d4a853]/20 shadow-xl cursor-pointer group"
            data-cursor-view="true"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 filter brightness-85 group-hover:brightness-100 transition-all duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1a]/90 via-transparent to-transparent flex flex-col justify-end p-6 transition-opacity">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#d4a853] font-semibold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#f5f0e8] group-hover:text-[#e8c87a] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0a1a1a]/80 border border-[#d4a853]/40 flex items-center justify-center text-[#e8c87a] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[12000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0a1a1a] rounded-2xl overflow-hidden border border-[#d4a853]/40 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:text-[#d4a853] flex items-center justify-center border border-white/20"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center">
              <img
                src={activeItem.img}
                alt={activeItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-5 bg-[#0f2424] border-t border-[#d4a853]/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-accent uppercase tracking-widest text-[#d4a853]">
                  {activeItem.subtitle}
                </p>
                <h4 className="font-display text-2xl font-bold text-[#f5f0e8]">
                  {activeItem.title}
                </h4>
              </div>
              <span className="text-xs text-[#a0a090] font-accent uppercase tracking-wider">
                The Opal Room · Jabalpur
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Decorative divider */}
      <div className="text-center mt-20 text-[#d4a853]/40 tracking-[2em] select-none text-xs">
        ◆ ◆ ◆
      </div>
    </section>
  );
};
