'use client';
import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: '#8b0000', minHeight: '100svh' }}>

      {/* Background photo */}
      <div className="absolute inset-0 z-[5]">
        <img
          src="/assets/images/yash_hero.jpg"
          alt="Yash Verma"
          className="w-full h-full select-none pointer-events-none"
          style={{ objectFit: 'cover', objectPosition: '70% center', filter: 'brightness(0.88) contrast(1.05)', display: 'block' }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[6] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(8,0,0,0.55) 0%, transparent 30%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,0,0,0.92) 0%, rgba(8,0,0,0.5) 30%, transparent 55%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none hidden md:block" style={{ background: 'linear-gradient(to right, rgba(100,0,3,0.95) 0%, rgba(80,0,3,0.5) 35%, transparent 60%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none hidden md:block" style={{ background: 'linear-gradient(to left, rgba(60,0,0,0.92) 0%, rgba(40,0,0,0.4) 30%, transparent 55%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none md:hidden" style={{ background: 'rgba(80,0,0,0.55)' }} />

      {/* ── DESKTOP layout ── */}
      {/* FIX #5: Moved tagline/CTA closer to headline in left column */}
      <div
        ref={contentRef}
        className="hidden md:grid absolute z-20"
        style={{ top: '80px', bottom: 0, left: 0, right: 0, gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr auto', padding: '0 40px 40px' }}
      >
        {/* LEFT — headline + tagline + CTA together */}
        <div style={{ gridColumn: '1', gridRow: '1/3', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
          {/* FIX #3: Reduced all-caps stat labels to normal case */}
          <p className="text-white/70 font-sans font-medium mb-3" style={{ fontSize: '18px' }}>
            Hey, I&apos;m a
          </p>
          <h1
            className="font-display font-black text-white"
            style={{ fontSize: 'clamp(60px, 8vw, 100px)', lineHeight: 0.88, letterSpacing: '-3px', textShadow: '0 4px 40px rgba(0,0,0,0.3)', marginBottom: '24px' }}
          >
            Graphic<br />Designer.
          </h1>
          {/* Tagline moved next to headline (fix #5) */}
          <p className="text-white font-bold leading-snug mb-2" style={{ fontSize: '18px', maxWidth: '280px' }}>
            Bold design should feel unforgettable.
          </p>
          <p className="text-white/55 leading-relaxed mb-6" style={{ fontSize: '14px', maxWidth: '280px' }}>
            From brand identity to editorial — crafting visuals that connect and resonate with people.
          </p>
          {/* FIX #8: Unified button styles — primary red-filled, secondary outline */}
          <div className="flex flex-col gap-3" style={{ maxWidth: '240px' }}>
            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work →
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* CENTER — photo space */}
        <div style={{ gridColumn: '2' }} />

        {/* RIGHT — empty on desktop now that content moved left */}
        <div style={{ gridColumn: '3', gridRow: '1' }} />

        {/* STATS bottom left — FIX #3: normal case labels */}
        <div style={{ gridColumn: '1', gridRow: '2', display: 'flex', gap: '28px', alignItems: 'flex-end', paddingBottom: '4px' }}>
          {[['3+', 'Years designing'], ['40+', 'Projects delivered'], ['BFA', 'Applied Arts']].map(([val, label]) => (
            <div key={val}>
              <span className="block font-display font-black text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1 }}>{val}</span>
              {/* FIX #3 & #4: Normal case, 12px minimum */}
              <span className="text-white/50 tracking-wide" style={{ fontSize: '12px', textTransform: 'none' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden relative z-20 flex flex-col min-h-[100svh] px-6 pt-24 pb-10">
        <div className="mt-4 mb-auto">
          <p className="text-white/70 text-base font-medium mb-2">Hey, I&apos;m a</p>
          <h1 className="font-display font-black text-white leading-[0.88] mb-4" style={{ fontSize: '62px', letterSpacing: '-2px' }}>
            Graphic<br />Designer.
          </h1>
          <p className="text-white font-bold text-base leading-snug mb-2">Bold design should feel unforgettable.</p>
          <p className="text-white/55 text-sm leading-relaxed">From brand identity to editorial — crafting visuals that connect and resonate.</p>
        </div>
        <div className="mt-auto">
          {/* FIX #8: Unified button styles on mobile */}
          <div className="flex flex-col gap-3 mb-8">
            <button onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary w-full">
              View My Work →
            </button>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary w-full">
              Get in Touch
            </button>
          </div>
          {/* FIX #3 & #4: Normal case, readable size */}
          <div className="flex gap-6 border-t border-white/15 pt-6">
            {[['3+', 'Years designing'], ['40+', 'Projects delivered'], ['BFA', 'Applied Arts']].map(([val, label]) => (
              <div key={val}>
                <span className="block font-display font-black text-white text-3xl leading-none">{val}</span>
                <span className="text-white/40 tracking-wide" style={{ fontSize: '12px' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
