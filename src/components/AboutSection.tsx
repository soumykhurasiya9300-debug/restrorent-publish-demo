import React from 'react';
import { Star, Award, Compass, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onExploreMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreMenu }) => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 bg-[#0f2424] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image with floating badge */}
        <div className="relative about-image-wrapper">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#d4a853]/25 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
              alt="The Opal Room interior fine dining atmosphere"
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1a]/80 via-transparent to-transparent" />
          </div>

          {/* Floating Rating Badge */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 bg-[#d4a853] rounded-full p-2 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-[#0a1a1a] animate-pulse-badge z-20">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#0a1a1a] leading-none">
              {RESTAURANT_INFO.rating}
            </span>
            <div className="flex items-center gap-0.5 my-1 text-[#0a1a1a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#0a1a1a] stroke-none" />
              ))}
            </div>
            <span className="font-accent text-[9px] uppercase tracking-wider font-bold text-[#0a1a1a]/85">
              {RESTAURANT_INFO.reviewsCount} Reviews
            </span>
          </div>
        </div>

        {/* Right: Narrative Story */}
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-[#d4a853]" />
            <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853]">
              Our Story
            </p>
          </div>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-6 leading-tight">
            Where Elegance <span className="text-[#d4a853] italic font-normal">Lives</span>
          </h2>

          <div className="space-y-4 text-sm md:text-base text-[#a0a090] font-body leading-relaxed">
            <p>
              Perched on the <span className="text-[#f5f0e8] font-medium">4th floor of SR Tower, Napier Town</span>, The Opal Room was conceived as a sanctuary where culinary craftsmanship meets warm hospitality in Jabalpur.
            </p>
            <p>
              From the gentle warmth of our tailored lighting to the meticulous presentation of each plate, our kitchen honors the depth of heritage Awadhi and North Indian recipes while introducing contemporary continental flair.
            </p>
            <p>
              Whether it is a peaceful candlelight dinner, an intimate family celebration, or an evening gathering with dear friends, our dedicated team ensures every moment is memorable.
            </p>
          </div>

          {/* Highlights checklist */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#d4a853]/15">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
              <span className="font-accent text-xs tracking-wider uppercase text-[#e0d8cc]">
                4th Floor SR Tower
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
              <span className="font-accent text-xs tracking-wider uppercase text-[#e0d8cc]">
                Master Chef Recipes
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
              <span className="font-accent text-xs tracking-wider uppercase text-[#e0d8cc]">
                Private Seating Areas
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
              <span className="font-accent text-xs tracking-wider uppercase text-[#e0d8cc]">
                Handpicked Ingredients
              </span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a853]/15 hover:bg-[#d4a853] text-[#e8c87a] hover:text-[#0a1a1a] border border-[#d4a853]/50 font-accent font-semibold text-xs tracking-[0.16em] uppercase rounded-full transition-all duration-300 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Discover Our Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="text-center mt-20 text-[#d4a853]/40 tracking-[2em] select-none text-xs">
        ◆ ◆ ◆
      </div>
    </section>
  );
};
