import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Utensils, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  return (
    <section id="visit" className="py-20 md:py-28 px-6 md:px-12 bg-[#0a1a1a] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
            Find Us in Jabalpur
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-4">
            Plan Your <span className="text-[#d4a853] italic font-normal">Visit</span>
          </h2>
          <p className="text-sm text-[#a0a090] max-w-lg mx-auto font-body">
            Located centrally at Napier Town's prominent SR Tower on the 4th floor, offering tranquil dining away from city noise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-[#0f2424] border border-[#d4a853]/25 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#d4a853]/15 border border-[#d4a853]/30 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#e8c87a] animate-bounce-pin" />
                </div>
                <div>
                  <h3 className="font-accent text-xs font-bold tracking-[0.2em] uppercase text-[#e8c87a] mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-[#f5f0e8] font-medium leading-relaxed mb-2 font-body">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-[#a0a090]">
                    Elevator access to 4th Floor · Valet &amp; Parking available
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Box */}
            <div className="p-6 rounded-2xl bg-[#0f2424] border border-[#d4a853]/25 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#d4a853]/15 border border-[#d4a853]/30 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-[#e8c87a]" />
                </div>
                <div>
                  <h3 className="font-accent text-xs font-bold tracking-[0.2em] uppercase text-[#e8c87a] mb-1">
                    Hours of Operation
                  </h3>
                  <p className="text-sm text-[#f5f0e8] font-medium leading-relaxed font-body">
                    {RESTAURANT_INFO.hours}
                  </p>
                  <p className="text-xs text-[#a0a090] mt-1">
                    Kitchen last order at 10:45 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Services Box */}
            <div className="p-6 rounded-2xl bg-[#0f2424] border border-[#d4a853]/25 shadow-xl">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#d4a853]/15 border border-[#d4a853]/30 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#e8c87a]" />
                </div>
                <div>
                  <h3 className="font-accent text-xs font-bold tracking-[0.2em] uppercase text-[#e8c87a] mb-1">
                    Reservations &amp; Enquiries
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-base text-[#d4a853] hover:text-[#e8c87a] font-semibold transition-colors"
                  >
                    {RESTAURANT_INFO.displayPhone}
                  </a>
                  <p className="text-xs text-[#a0a090] mt-1">
                    Call directly for table status or private parties
                  </p>
                </div>
              </div>

              {/* Service Badges */}
              <div className="pt-3 border-t border-[#d4a853]/15 flex items-center gap-2">
                {RESTAURANT_INFO.services.map((srv) => (
                  <span
                    key={srv}
                    className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-[#d4a853]/20 text-[10px] font-accent uppercase tracking-wider text-[#e0d8cc]"
                  >
                    ✓ {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Map Visual (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#d4a853]/25 shadow-2xl bg-[#0f2424] flex flex-col justify-between relative group min-h-[380px]">
            {/* Map Frame / Backdrop */}
            <div className="relative flex-1 w-full min-h-[300px] overflow-hidden bg-[#0a1a1a]">
              {/* Google Maps embed iframe */}
              <iframe
                title="The Opal Room Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0469085817293!2d79.928574!3d23.168541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981aeb6c4293e5b%3A0xe963dfd720b0800!2sSR%20Tower%2C%20Napier%20Town%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay location pin card */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#0a1a1a]/90 backdrop-blur-md border border-[#d4a853]/30 shadow-lg text-left max-w-xs pointer-events-none">
                <span className="font-display text-sm font-bold text-[#f5f0e8] block">
                  The Opal Room
                </span>
                <span className="text-[10px] text-[#d4a853] block font-accent uppercase tracking-wider">
                  SR Tower, Napier Town
                </span>
              </div>
            </div>

            {/* Bottom Map Toolbar */}
            <div className="p-4 bg-[#0a1a1a] border-t border-[#d4a853]/20 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleCopyCode}
                className="text-xs text-[#a0a090] hover:text-[#f5f0e8] flex items-center gap-1.5 font-accent cursor-pointer transition-colors"
                title="Click to copy Plus Code"
              >
                {copiedPlusCode ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Navigation className="w-3.5 h-3.5 text-[#d4a853]" />
                )}
                <span>Plus Code: <span className="text-[#f5f0e8]">{RESTAURANT_INFO.plusCode}</span></span>
                {copiedPlusCode && <span className="text-emerald-400 font-semibold">(Copied!)</span>}
              </button>

              <a
                href={RESTAURANT_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#d4a853] hover:bg-[#e8c87a] text-[#0a1a1a] font-accent text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
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
