import React from 'react';
import { SIGNATURE_ITEMS } from '../data/restaurantData';
import { Sparkles, BookmarkPlus } from 'lucide-react';

interface SignatureCreationsProps {
  onSelectItem?: (title: string) => void;
}

export const SignatureCreations: React.FC<SignatureCreationsProps> = ({ onSelectItem }) => {
  return (
    <section id="signature" className="py-20 md:py-28 px-6 md:px-12 bg-[#0a1a1a] relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
          Chef's Recommendations
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-4">
          Signature <span className="text-[#d4a853] italic font-normal">Creations</span>
        </h2>
        <p className="text-sm text-[#a0a090] max-w-lg mx-auto font-body">
          Meticulously crafted dishes that define the Opal Room experience — blending authentic heritage with modern culinary art.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SIGNATURE_ITEMS.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSelectItem && onSelectItem(item.title)}
            className="signature-card group relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#d4a853]/20 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,168,83,0.18)]"
            data-cursor-view="true"
          >
            {/* Dish Image with zoom on hover */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover filter brightness-[0.78] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1a] via-[#0a1a1a]/50 to-transparent p-6 flex flex-col justify-end transition-all duration-300">
              {/* Badge */}
              <span className="absolute top-5 left-5 bg-[#d4a853] text-[#0a1a1a] px-3.5 py-1 rounded-full font-accent text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#0a1a1a]" />
                {item.badge}
              </span>

              {/* Title & Price */}
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#f5f0e8] group-hover:text-[#e8c87a] transition-colors">
                  {item.title}
                </h3>
                <span className="font-accent font-semibold text-lg text-[#e8c87a] shrink-0">
                  {item.price}
                </span>
              </div>

              {/* Description - expanded on hover */}
              <p className="text-xs sm:text-sm text-[#e0d8cc]/80 font-body leading-relaxed transform translate-y-1 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {item.desc}
              </p>

              {/* Subtle hint */}
              <div className="mt-3 flex items-center gap-1 text-[11px] font-accent text-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Click to view details</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="text-center mt-20 text-[#d4a853]/40 tracking-[2em] select-none text-xs">
        ◆ ◆ ◆
      </div>
    </section>
  );
};
