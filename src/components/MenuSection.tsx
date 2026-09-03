import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Search, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { MenuDetailModal } from './MenuDetailModal';

interface MenuSectionProps {
  onReserveTable: () => void;
  onAddDishToReservation?: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onReserveTable,
  onAddDishToReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains & Biryani' },
    { id: 'curries', label: 'Curries & Gravies' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.cat === activeCategory;
      const matchVeg = !vegOnly || item.isVeg;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchVeg && matchSearch;
    });
  }, [activeCategory, vegOnly, searchQuery]);

  return (
    <section id="menu" className="py-20 md:py-28 px-6 md:px-12 bg-[#0a1a1a] relative overflow-hidden">
      {/* Background Image Layer perfectly sized to frame */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/menu-bg.jpg"
          alt="The Opal Room Culinary backdrop"
          className="w-full h-full object-cover object-center opacity-60 filter saturate-110 contrast-105 scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Soft tinted atmospheric gradient overlays for balanced visibility and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1a]/75 via-[#0a1a1a]/60 to-[#0a1a1a]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#0a1a1a_90%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
            Culinary Offerings
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            The Opal <span className="text-[#d4a853] italic font-normal">Menu</span>
          </h2>
          <p className="text-sm text-[#e0d8cc] max-w-lg mx-auto font-body drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Each recipe balances regional authenticity with delicate refinement. Handcrafted fresh to order.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#0a1a1a]/85 backdrop-blur-md border border-[#d4a853]/25 shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-accent text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#d4a853] text-[#0a1a1a] shadow-md font-semibold'
                    : 'text-[#e0d8cc] hover:text-[#e8c87a]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Veg toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center">
            {/* Veg Only Toggle */}
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs font-accent tracking-wider uppercase cursor-pointer backdrop-blur-md ${
                vegOnly
                  ? 'bg-emerald-950/90 border-emerald-500 text-emerald-300 shadow-sm'
                  : 'bg-[#0a1a1a]/80 border-[#d4a853]/25 text-[#e0d8cc] hover:text-[#f5f0e8]'
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  vegOnly ? 'bg-emerald-400 ring-2 ring-emerald-500/40' : 'bg-emerald-600'
                }`}
              />
              <span>Veg Only</span>
            </button>

            {/* Quick Search */}
            <div className="relative flex-1 sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a0a090]" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0a1a1a]/85 backdrop-blur-md border border-[#d4a853]/25 rounded-full pl-9 pr-4 py-2 text-xs text-[#f5f0e8] placeholder-[#a0a090]/60 focus:outline-none focus:border-[#d4a853] font-body shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#0a1a1a]/80 backdrop-blur-md rounded-2xl border border-[#d4a853]/20">
            <p className="font-display text-xl text-[#e8c87a] mb-2">No matching dishes found</p>
            <p className="text-xs text-[#a0a090] mb-4">
              Try adjusting your search query or reset the dietary filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setVegOnly(false);
                setActiveCategory('all');
              }}
              className="px-5 py-2 bg-[#d4a853] text-[#0a1a1a] rounded-full text-xs font-accent font-semibold uppercase tracking-wider"
            >
              Show Full Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="menu-item p-4 sm:p-5 rounded-2xl bg-[#0a1a1a]/80 backdrop-blur-md border border-[#d4a853]/20 hover:border-[#d4a853]/55 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex gap-4 group items-center"
              >
                {/* Thumbnail Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#d4a853]/20 relative bg-[#0a1a1a]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-1.5 left-1.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full inline-block border border-black/40 ${
                        item.isVeg ? 'bg-emerald-500' : 'bg-amber-600'
                      }`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display text-base sm:text-lg font-semibold text-[#f5f0e8] group-hover:text-[#e8c87a] transition-colors truncate">
                      {item.name}
                    </h3>
                    <span className="font-accent text-base sm:text-lg font-semibold text-[#e8c87a] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#a0a090] font-body line-clamp-2 leading-relaxed mb-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-accent uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#d4a853]/10 text-[#d4a853] border border-[#d4a853]/20">
                      {item.tag}
                    </span>
                    {item.isChefSpecial && (
                      <span className="text-[10px] font-accent uppercase tracking-wider px-2 py-0.5 rounded-sm bg-amber-500/20 text-amber-300">
                        Chef Special
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Menu Note & CTA */}
        <div className="mt-14 text-center p-8 rounded-2xl bg-[#0a1a1a]/80 backdrop-blur-md border border-[#d4a853]/25 shadow-xl">
          <p className="text-xs font-accent tracking-widest text-[#d4a853] uppercase mb-2">
            Looking for a custom experience?
          </p>
          <p className="text-sm text-[#e0d8cc] max-w-xl mx-auto mb-5 font-body">
            Our culinary team accommodates dietary preferences, allergies, and special banquet arrangements for private family celebrations.
          </p>
          <button
            onClick={onReserveTable}
            className="px-7 py-3 bg-[#d4a853] hover:bg-[#e8c87a] text-[#0a1a1a] font-accent font-bold text-xs tracking-wider uppercase rounded-full shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Reserve Your Dining Table
          </button>
        </div>
      </div>

      {/* Item Detail Lightbox Modal */}
      <MenuDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToReservationNotes={onAddDishToReservation}
      />

      {/* Decorative divider */}
      <div className="text-center mt-20 text-[#d4a853]/40 tracking-[2em] select-none text-xs">
        ◆ ◆ ◆
      </div>
    </section>
  );
};
