import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle, Sparkles, X, ShieldCheck } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  initialSpecialNotes?: string;
  onClearNotes?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialSpecialNotes = '',
  onClearNotes,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: todayStr,
    time: '08:00 PM',
    guests: '2 Guests',
    seatingPreference: 'Cozy Ambient Booth',
    special: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<ReservationData | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Update special notes if added from menu modal
  useEffect(() => {
    if (initialSpecialNotes) {
      setFormData((prev) => ({
        ...prev,
        special: prev.special
          ? `${prev.special}, ${initialSpecialNotes}`
          : `Interested in trying: ${initialSpecialNotes}`,
      }));
    }
  }, [initialSpecialNotes]);

  const timeSlots = [
    '12:30 PM',
    '01:15 PM',
    '02:00 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
    '09:30 PM',
    '10:00 PM',
  ];

  const guestOptions = [
    '1 Guest',
    '2 Guests',
    '3 Guests',
    '4 Guests',
    '5–6 Guests',
    '7–10 Guests',
    'Large Celebration (10+)',
  ];

  const seatingOptions = [
    'Cozy Ambient Booth',
    'Elevated Window View',
    'Central Dining Hall',
    'Private Family Area',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please provide a valid contact number.');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Please select a dining date.');
      return;
    }

    setSubmitting(true);

    // Simulate luxury reservation booking confirmation
    setTimeout(() => {
      const generatedId = `OPAL-${Math.floor(1000 + Math.random() * 9000)}`;
      const newBooking: ReservationData = {
        id: generatedId,
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        seatingPreference: formData.seatingPreference,
        special: formData.special,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setConfirmedBooking(newBooking);
      setSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        phone: '',
        date: todayStr,
        time: '08:00 PM',
        guests: '2 Guests',
        seatingPreference: 'Cozy Ambient Booth',
        special: '',
      });
      if (onClearNotes) onClearNotes();
    }, 900);
  };

  return (
    <section id="reserve" className="py-20 md:py-28 px-6 md:px-12 bg-[#0f2424] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a853]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a853]" />
            <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853]">
              Bespoke Hospitality
            </p>
            <Sparkles className="w-3.5 h-3.5 text-[#d4a853]" />
          </div>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-4">
            Reserve Your <span className="text-[#d4a853] italic font-normal">Table</span>
          </h2>
          <p className="text-sm text-[#a0a090] max-w-lg mx-auto font-body">
            Secure your preferred table at Jabalpur's premier dining destination. For large groups or immediate assistance, call <a href="tel:09535042056" className="text-[#e8c87a] underline decoration-[#d4a853]/40">095350 42056</a>.
          </p>
        </div>

        {/* Reservation Form Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0a1a1a]/85 border border-[#d4a853]/30 shadow-2xl backdrop-blur-md">
          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs text-center font-accent">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-accent tracking-wider uppercase text-[#e0d8cc] mb-2 font-medium flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#d4a853]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rohan Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f2424]/80 border border-[#d4a853]/25 text-sm text-[#f5f0e8] placeholder-[#a0a090]/50 focus:outline-none focus:border-[#d4a853] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-accent tracking-wider uppercase text-[#e0d8cc] mb-2 font-medium flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d4a853]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f2424]/80 border border-[#d4a853]/25 text-sm text-[#f5f0e8] placeholder-[#a0a090]/50 focus:outline-none focus:border-[#d4a853] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Date */}
              <div>
                <label className="block text-xs font-accent tracking-wider uppercase text-[#e0d8cc] mb-2 font-medium flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#d4a853]" />
                  Date *
                </label>
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f2424]/80 border border-[#d4a853]/25 text-sm text-[#f5f0e8] focus:outline-none focus:border-[#d4a853] transition-colors"
                />
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-xs font-accent tracking-wider uppercase text-[#e0d8cc] mb-2 font-medium flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#d4a853]" />
                  Preferred Time *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f2424]/80 border border-[#d4a853]/25 text-sm text-[#f5f0e8] focus:outline-none focus:border-[#d4a853] transition-colors"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#0a1a1a] text-[#f5f0e8]">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-accent tracking-wider uppercase text-[#e0d8cc] mb-2 font-medium flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#d4a853]" />
                  Guests *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f2424]/80 border border-[#d4a853]/25 text-sm text-[#f5f0e8] focus:outline-none focus:border-[#d4a853] transition-colors"
                >
                  {guestOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0a1a1a] text-[#f5f0e8]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="block text-xs font-accent tracking-wider uppercase text-[#e0d8cc] mb-2 font-medium">
                Seating Area
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {seatingOptions.map((seat) => (
                  <button
                    type="button"
                    key={seat}
                    onClick={() => setFormData({ ...formData, seatingPreference: seat })}
                    className={`py-2 px-3 rounded-xl border text-xs font-accent tracking-wider transition-all cursor-pointer text-center ${
                      formData.seatingPreference === seat
                        ? 'bg-[#d4a853]/20 border-[#d4a853] text-[#e8c87a] font-semibold shadow-sm'
                        : 'bg-[#0f2424]/50 border-[#d4a853]/15 text-[#a0a090] hover:text-[#f5f0e8]'
                    }`}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>

            {/* Special Notes / Food Preferences */}
            <div>
              <label className="block text-xs font-accent tracking-wider uppercase text-[#e0d8cc] mb-2 font-medium flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#d4a853]" />
                Special Requests or Dietary Requirements (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g., Anniversary candlelight table, vegetarian preferences, high chair for toddler..."
                value={formData.special}
                onChange={(e) => setFormData({ ...formData, special: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0f2424]/80 border border-[#d4a853]/25 text-sm text-[#f5f0e8] placeholder-[#a0a090]/50 focus:outline-none focus:border-[#d4a853] transition-colors resize-none font-body"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto min-w-[260px] px-10 py-4 bg-[#d4a853] hover:bg-[#e8c87a] text-[#0a1a1a] font-accent font-bold text-xs tracking-[0.2em] uppercase rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#d4a853]/40 cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Confirming Reservation...' : 'Confirm Table Reservation'}
              </button>
              <p className="text-[11px] text-[#a0a090] mt-3 font-body">
                Instant confirmation · No advance deposit required for standard tables
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Success Modal */}
      {confirmedBooking && (
        <div
          className="fixed inset-0 z-[13000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
          onClick={() => setConfirmedBooking(null)}
        >
          <div
            className="relative max-w-md w-full bg-[#0a1a1a] border border-[#d4a853]/45 rounded-3xl p-8 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setConfirmedBooking(null)}
              className="absolute top-4 right-4 text-[#a0a090] hover:text-[#f5f0e8]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#d4a853]/15 border border-[#d4a853] flex items-center justify-center mx-auto mb-4 text-[#d4a853]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-[10px] font-accent tracking-[0.3em] uppercase text-[#d4a853] block mb-1">
              Table Reserved
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f5f0e8] mb-2">
              We Look Forward To Welcoming You
            </h3>

            <div className="my-6 p-4 rounded-2xl bg-[#0f2424] border border-[#d4a853]/25 text-left text-xs space-y-2">
              <div className="flex justify-between pb-2 border-b border-[#d4a853]/15">
                <span className="text-[#a0a090]">Booking Reference:</span>
                <span className="font-bold text-[#e8c87a] font-accent">{confirmedBooking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a090]">Name:</span>
                <span className="text-[#f5f0e8] font-medium">{confirmedBooking.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a090]">Date &amp; Time:</span>
                <span className="text-[#f5f0e8] font-medium">
                  {confirmedBooking.date} at {confirmedBooking.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a090]">Party Size:</span>
                <span className="text-[#f5f0e8] font-medium">{confirmedBooking.guests}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a090]">Seating Area:</span>
                <span className="text-[#e8c87a] font-medium">{confirmedBooking.seatingPreference}</span>
              </div>
              {confirmedBooking.special && (
                <div className="pt-2 border-t border-[#d4a853]/15">
                  <span className="text-[#a0a090] block mb-1">Special Notes:</span>
                  <span className="text-[#f5f0e8] italic">{confirmedBooking.special}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-[#a0a090] font-body mb-6">
              A notification summary has been prepared. Our host at SR Tower, Napier Town will have your table ready.
            </p>

            <button
              onClick={() => setConfirmedBooking(null)}
              className="w-full py-3 bg-[#d4a853] hover:bg-[#e8c87a] text-[#0a1a1a] font-accent font-bold text-xs tracking-wider uppercase rounded-full shadow-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
