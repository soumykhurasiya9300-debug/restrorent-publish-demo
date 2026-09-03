import React from 'react';
import { Users, Utensils, Sparkles, HeartHandshake } from 'lucide-react';

export const ExperienceHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-[#d4a853]" />,
      emoji: '👨‍👩‍👧‍👦',
      title: 'Family Friendly',
      desc: 'Comfortable seating arrangements ideal for family gatherings, milestones & celebrations.',
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#d4a853]" />,
      emoji: '🍝',
      title: 'Handcrafted Cuisine',
      desc: 'Fresh handmade pasta, royal tandoor kebabs, and aromatic biryanis crafted with passion.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#d4a853]" />,
      emoji: '🏛️',
      title: 'Cozy Ambience',
      desc: 'Warm ambient lighting, gold accents, and a tranquil haven above the bustling city.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#d4a853]" />,
      emoji: '🤝',
      title: 'Warm Staff',
      desc: 'Heartfelt hospitality, attentive dining care, and personal recommendations by our team.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#0a1a1a] relative">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
          What Diners Love
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase">
          The Opal <span className="text-[#d4a853] italic font-normal">Experience</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-6 md:p-7 rounded-xl bg-white/[0.02] border border-[#d4a853]/15 hover:border-[#d4a853]/45 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(212,168,83,0.12)] group text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#d4a853]/20 transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="font-accent text-xs font-semibold tracking-[0.16em] uppercase text-[#e8c87a] mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-[#a0a090] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="text-center mt-16 text-[#d4a853]/40 tracking-[2em] select-none text-xs">
        ◆ ◆ ◆
      </div>
    </section>
  );
};
