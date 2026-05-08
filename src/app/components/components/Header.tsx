'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Back to top"
            suppressHydrationWarning
          >
            <AppLogo size={38} />
            <span className={`font-display text-lg font-bold tracking-tight hidden sm:block transition-colors ${scrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`}>
              Yash Verma
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-base font-semibold transition-colors duration-300 relative group ${
                  scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white hover:text-white/75'
                }`}
                suppressHydrationWarning
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-white'}`} />
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 magnetic-btn ${
                scrolled
                  ? 'border border-primary text-primary hover:bg-primary hover:text-white'
                  : 'bg-white text-[#c0000a] hover:bg-white/90 shadow-lg'
              }`}
              suppressHydrationWarning
            >
              Hire Me
            </button>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              suppressHydrationWarning
            >
              <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-nav"
          className={`md:hidden bg-background/95 backdrop-blur-xl border-t border-border rounded-b-2xl ${menuOpen ? 'open' : ''}`}
        >
          <div className="flex flex-col py-6 px-4 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                suppressHydrationWarning
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-6 py-3 rounded-full bg-primary text-white font-bold text-base text-center"
              suppressHydrationWarning
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
