import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  onOpenReserveModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReserveModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section tracking
      const sections = ['about', 'signature', 'menu', 'gallery', 'reviews', 'visit', 'reserve'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Signature', href: '#signature' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit', href: '#visit' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-[9000] transition-all duration-500 ease-in-out px-6 md:px-12 flex items-center justify-between ${
          scrolled
            ? 'h-16 bg-[#0a1a1a]/90 backdrop-blur-md shadow-2xl border-b border-[#d4a853]/20'
            : 'h-20 md:h-24 bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl md:text-3xl font-bold tracking-[0.24em] text-[#f5f0e8] uppercase transition-colors hover:text-[#e8c87a]"
        >
          Opal<span className="text-[#d4a853]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <ul className="flex items-center gap-7 xl:gap-9 list-none">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-accent text-[11.5px] font-medium tracking-[0.16em] uppercase transition-all duration-300 relative py-1 ${
                      isActive ? 'text-[#e8c87a]' : 'text-[#f5f0e8] hover:text-[#e8c87a]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#d4a853] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Reserve Table CTA */}
          <a
            href="#reserve"
            onClick={(e) => {
              if (onOpenReserveModal) {
                e.preventDefault();
                onOpenReserveModal();
              } else {
                handleLinkClick(e, '#reserve');
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d4a853] hover:bg-[#e8c87a] text-[#0a1a1a] font-accent font-semibold text-[11px] tracking-[0.14em] uppercase rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#d4a853]/30"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0a1a1a]" />
            <span>Reserve a Table</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#reserve"
            onClick={(e) => {
              if (onOpenReserveModal) {
                e.preventDefault();
                onOpenReserveModal();
              } else {
                handleLinkClick(e, '#reserve');
              }
            }}
            className="px-3.5 py-1.5 bg-[#d4a853] text-[#0a1a1a] font-accent font-semibold text-[10px] tracking-[0.1em] uppercase rounded-full"
          >
            Book
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f5f0e8] hover:text-[#d4a853] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[8999] lg:hidden bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-[#0a1a1a] border-l border-[#d4a853]/20 p-8 flex flex-col justify-between transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#d4a853]/15 mb-8">
              <span className="font-display text-2xl font-bold tracking-[0.2em] text-[#f5f0e8]">
                OPAL<span className="text-[#d4a853]">.</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#f5f0e8] hover:text-[#d4a853]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block font-accent text-base tracking-[0.18em] uppercase text-[#f5f0e8] hover:text-[#e8c87a] py-1 border-b border-[#2a5555]/30"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#d4a853]/15">
            <a
              href="#reserve"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onOpenReserveModal) {
                  e.preventDefault();
                  onOpenReserveModal();
                } else {
                  handleLinkClick(e, '#reserve');
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#d4a853] text-[#0a1a1a] font-accent font-bold text-xs tracking-[0.16em] uppercase rounded-full shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Reserve a Table
            </a>

            <a
              href="tel:09535042056"
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#d4a853]/40 text-[#f5f0e8] font-accent text-xs tracking-[0.12em] uppercase rounded-full hover:border-[#d4a853]"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4a853]" />
              095350 42056
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
