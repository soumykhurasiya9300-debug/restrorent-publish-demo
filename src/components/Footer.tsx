import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, Star, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050e0e] border-t border-[#d4a853]/20 text-[#f5f0e8] pt-16 pb-12 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Brand info */}
        <div className="space-y-4">
          <a href="#" className="font-display text-3xl font-bold tracking-[0.24em] text-[#f5f0e8] uppercase block">
            Opal<span className="text-[#d4a853]">.</span>
          </a>
          <p className="text-xs text-[#a0a090] font-body leading-relaxed">
            Jabalpur's premier fine dining destination. Exquisite Indian and continental delicacies in an atmosphere of refined warmth.
          </p>
          <div className="flex items-center gap-1.5 pt-1 text-[#d4a853] text-xs font-accent">
            <Star className="w-3.5 h-3.5 fill-[#d4a853] stroke-none" />
            <span className="font-bold text-[#e8c87a]">{RESTAURANT_INFO.rating}</span>
            <span className="text-[#a0a090]">({RESTAURANT_INFO.reviewsCount} Google Reviews)</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-accent text-xs font-bold tracking-[0.25em] uppercase text-[#e8c87a] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-accent tracking-wider uppercase text-[#a0a090]">
            <li>
              <a href="#about" className="hover:text-[#d4a853] transition-colors">
                About The Opal Room
              </a>
            </li>
            <li>
              <a href="#signature" className="hover:text-[#d4a853] transition-colors">
                Signature Creations
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#d4a853] transition-colors">
                Culinary Menu
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#d4a853] transition-colors">
                Moments &amp; Ambience
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-[#d4a853] transition-colors">
                Guest Reviews
              </a>
            </li>
            <li>
              <a href="#reserve" className="hover:text-[#d4a853] transition-colors">
                Reserve Table
              </a>
            </li>
          </ul>
        </div>

        {/* Timings & Contact */}
        <div>
          <h4 className="font-accent text-xs font-bold tracking-[0.25em] uppercase text-[#e8c87a] mb-4">
            Hours &amp; Phone
          </h4>
          <div className="space-y-3 text-xs text-[#a0a090] font-body">
            <div className="flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 text-[#d4a853] mt-0.5 shrink-0" />
              <div>
                <p className="text-[#f5f0e8] font-medium">Daily Lunch &amp; Dinner</p>
                <p>12:00 PM – 11:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 text-[#d4a853] mt-0.5 shrink-0" />
              <div>
                <p className="text-[#f5f0e8] font-medium">Reservations Hotline</p>
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#d4a853] hover:underline">
                  {RESTAURANT_INFO.displayPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Address */}
        <div>
          <h4 className="font-accent text-xs font-bold tracking-[0.25em] uppercase text-[#e8c87a] mb-4">
            Location
          </h4>
          <div className="space-y-3 text-xs text-[#a0a090] font-body">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4a853] mt-0.5 shrink-0" />
              <p className="leading-relaxed">
                4th Floor, 1187, SR Tower, Napier Town, Jabalpur, MP 482001
              </p>
            </div>
            <p className="text-[11px] text-[#e0d8cc]/80 pt-1">
              Plus Code: <span className="text-[#d4a853] font-mono">{RESTAURANT_INFO.plusCode}</span>
            </p>
            <a
              href={RESTAURANT_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] text-[#e8c87a] hover:underline font-accent uppercase tracking-wider"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-[#d4a853]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#a0a090] font-accent">
        <p>
          © {new Date().getFullYear()} The Opal Room — All Rights Reserved. Fine Dining at Napier Town, Jabalpur.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-[#d4a853] transition-colors cursor-pointer uppercase tracking-widest text-[10px]"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#d4a853]" />
        </button>
      </div>
    </footer>
  );
};
