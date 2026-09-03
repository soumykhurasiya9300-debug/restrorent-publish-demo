import React, { useState, useEffect } from 'react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? REVIEWS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === REVIEWS.length - 1 ? 0 : prevIdx + 1));
  };

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIdx) => (prevIdx === REVIEWS.length - 1 ? 0 : prevIdx + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-20 md:py-28 px-6 md:px-12 bg-[#0f2424] relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#d4a853]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
          Guest Testimonials
        </p>

        <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-6">
          Words from Our <span className="text-[#d4a853] italic font-normal">Patrons</span>
        </h2>

        {/* Aggregate Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0a1a1a]/80 border border-[#d4a853]/25 mb-12 shadow-md">
          <div className="flex items-center text-[#d4a853]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#d4a853] stroke-none" />
            ))}
          </div>
          <span className="text-xs font-accent tracking-wider text-[#f5f0e8] font-medium">
            <span className="font-bold text-[#e8c87a]">{RESTAURANT_INFO.rating}</span> / 5.0 Rating · {RESTAURANT_INFO.reviewsCount} Google Reviews
          </span>
        </div>

        {/* Active Testimonial Card */}
        <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-[#0a1a1a]/75 border border-[#d4a853]/25 shadow-2xl backdrop-blur-sm min-h-[320px] flex flex-col justify-between">
          <Quote className="w-10 h-10 text-[#d4a853]/20 mx-auto mb-4" />

          <div>
            <div className="flex items-center justify-center gap-1 text-[#d4a853] mb-6">
              {[...Array(currentReview.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4a853] stroke-none" />
              ))}
            </div>

            <p className="font-display italic text-lg sm:text-2xl md:text-3xl text-[#f5f0e8] font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              "{currentReview.text}"
            </p>
          </div>

          <div>
            <h4 className="font-accent font-semibold text-sm tracking-[0.2em] uppercase text-[#e8c87a]">
              {currentReview.author}
            </h4>
            <p className="text-xs text-[#a0a090] mt-1 font-body">
              {currentReview.meta}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-3 right-3 sm:-left-6 sm:-right-6 pointer-events-none">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-[#0a1a1a] border border-[#d4a853]/40 text-[#f5f0e8] hover:text-[#d4a853] hover:border-[#d4a853] flex items-center justify-center pointer-events-auto transition-all shadow-xl cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-[#0a1a1a] border border-[#d4a853]/40 text-[#f5f0e8] hover:text-[#d4a853] hover:border-[#d4a853] flex items-center justify-center pointer-events-auto transition-all shadow-xl cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#d4a853]'
                  : 'w-2 bg-[#d4a853]/30 hover:bg-[#d4a853]/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="text-center mt-20 text-[#d4a853]/40 tracking-[2em] select-none text-xs">
        ◆ ◆ ◆
      </div>
    </section>
  );
};
