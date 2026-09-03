import React from 'react';
import { MenuItem } from '../types';
import { X, Sparkles, Check, BookmarkPlus } from 'lucide-react';

interface MenuDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToReservationNotes?: (itemName: string) => void;
}

export const MenuDetailModal: React.FC<MenuDetailModalProps> = ({
  item,
  onClose,
  onAddToReservationNotes,
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[11000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0f2424] border border-[#d4a853]/30 rounded-2xl overflow-hidden shadow-2xl transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0a1a1a]/80 text-[#f5f0e8] hover:text-[#d4a853] flex items-center justify-center transition-colors border border-[#d4a853]/20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 w-full overflow-hidden bg-[#0a1a1a]">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2424] via-transparent to-black/30" />

          {/* Badge */}
          <div className="absolute bottom-3 left-4 flex gap-2">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-accent font-bold tracking-wider uppercase border ${
                item.isVeg
                  ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                  : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
              }`}
            >
              {item.isVeg ? '● Pure Vegetarian' : '▲ Non-Vegetarian'}
            </span>

            {item.isChefSpecial && (
              <span className="px-3 py-1 rounded-full text-[10px] font-accent font-bold tracking-wider uppercase bg-[#d4a853] text-[#0a1a1a] shadow-sm">
                Chef Special
              </span>
            )}

            {item.isBestseller && (
              <span className="px-3 py-1 rounded-full text-[10px] font-accent font-bold tracking-wider uppercase bg-[#e8c87a] text-[#0a1a1a] shadow-sm">
                Bestseller
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="font-display text-2xl font-bold text-[#f5f0e8]">
              {item.name}
            </h3>
            <span className="font-accent text-2xl font-semibold text-[#e8c87a]">
              {item.price}
            </span>
          </div>

          <p className="text-sm text-[#a0a090] font-body leading-relaxed mb-6">
            {item.desc}
          </p>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[#d4a853]/15 mb-6 text-xs text-[#e0d8cc] space-y-1">
            <div className="flex justify-between">
              <span className="text-[#a0a090]">Category:</span>
              <span className="capitalize font-medium">{item.cat}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a0a090]">Preparation:</span>
              <span className="font-medium">Freshly prepared to order</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#a0a090]">Service:</span>
              <span className="font-medium">Dine-in · Takeaway · Delivery</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onAddToReservationNotes ? (
              <button
                onClick={() => {
                  onAddToReservationNotes(item.name);
                  onClose();
                }}
                className="flex-1 py-3 bg-[#d4a853] hover:bg-[#e8c87a] text-[#0a1a1a] font-accent font-bold text-xs tracking-wider uppercase rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <BookmarkPlus className="w-4 h-4" />
                <span>Add to Reservation Request</span>
              </button>
            ) : null}

            <button
              onClick={onClose}
              className="px-6 py-3 border border-[#d4a853]/40 hover:bg-white/5 text-[#f5f0e8] font-accent text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
