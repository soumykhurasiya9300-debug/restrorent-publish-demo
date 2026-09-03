import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { AboutSection } from './components/AboutSection';
import { SignatureCreations } from './components/SignatureCreations';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [reservationNotes, setReservationNotes] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddDishToReservation = (dishName: string) => {
    setReservationNotes(dishName);
    scrollToSection('reserve');
  };

  return (
    <div className="relative min-h-screen bg-[#0a1a1a] text-[#f5f0e8] selection:bg-[#d4a853] selection:text-[#0a1a1a]">
      {/* Luxury Loading Experience */}
      <Preloader />

      {/* Gold Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Elegant Custom Cursor for Non-Touch Devices */}
      <CustomCursor />

      {/* Sticky Translucent Luxury Navbar */}
      <Navbar onOpenReserveModal={() => scrollToSection('reserve')} />

      <main>
        {/* Hero Banner with Shimmer & Parallax Backdrop */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onReserveTable={() => scrollToSection('reserve')}
        />

        {/* Moving Gold Ribbon Ticker */}
        <Marquee />

        {/* Highlights: Family, Fresh Handcrafted, Cozy, Warm Staff */}
        <ExperienceHighlights />

        {/* About: The Opal Story & 4.7★ 188-Review Hallmark */}
        <AboutSection onExploreMenu={() => scrollToSection('menu')} />

        {/* Signature Dishes with Hover Reveal */}
        <SignatureCreations onSelectItem={handleAddDishToReservation} />

        {/* Full Interactive Menu with Search, Veg Filters & Details Modal */}
        <MenuSection
          onReserveTable={() => scrollToSection('reserve')}
          onAddDishToReservation={handleAddDishToReservation}
        />

        {/* Gallery: Moments & Ambience with Lightbox */}
        <GallerySection />

        {/* Verified Patron Testimonials & Reviews */}
        <ReviewsSection />

        {/* Location & Directions: SR Tower 4th Floor Napier Town */}
        <LocationSection />

        {/* Table Booking & Reservation Form */}
        <ReservationSection
          initialSpecialNotes={reservationNotes}
          onClearNotes={() => setReservationNotes('')}
        />
      </main>

      {/* Refined Footer & Quick Links */}
      <Footer />

      {/* Smooth Scroll-To-Top Floating Button */}
      <BackToTop />
    </div>
  );
}
