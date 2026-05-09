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

      {/* ── Background photo ── */}
      <div className="absolute inset-0 z-[5]">
        <img
          src="/assets/images/yash_hero.jpg"
          alt="Yash Verma"
          className="w-full h-full select-none pointer-events-none"
          style={{
            objectFit: 'cover',
            objectPosition: '70% center',
            filter: 'brightness(0.88) contrast(1.05)',
            display: 'block',
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(8,0,0,0.55) 0%, transparent 30%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(8,0,0,0.92) 0%, rgba(8,0,0,0.5) 30%, transparent 55%)' }} />
      {/* Desktop left/right gradients */}
      <div className="absolute inset-0 z-[6] pointer-events-none hidden md:block"
        style={{ background: 'linear-gradient(to right, rgba(100,0,3,0.95) 0%, rgba(80,0,3,0.5) 35%, transparent 60%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none hidden md:block"
        style={{ background: 'linear-gradient(to left, rgba(60,0,0,0.92) 0%, rgba(40,0,0,0.4) 30%, transparent 55%)' }} />
      {/* Mobile overlay — stronger so text is readable */}
      <div className="absolute inset-0 z-[6] pointer-events-none md:hidden"
        style={{ background: 'rgba(80,0,0,0.55)' }} />

      {/* ── DESKTOP layout (3 columns) ── */}
      <div
        ref={contentRef}
        className="hidden md:grid absolute z-20"
        style={{
          top: '80px', bottom: 0, left: 0, right: 0,
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr auto',
          padding: '0 40px 40px',
        }}
      >
        {/* LEFT headline */}
        <div style={{ gridColumn: '1', gridRow: '1/3', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="text-white/70 font-sans font-medium mb-3" style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}>
            Hey, I&apos;m a
          </p>
          <h1 className="font-display font-black text-white"
            style={{ fontSize: 'clamp(60px, 8vw, 100px)', lineHeight: 0.88, letterSpacing: '-3px', textShadow: '0 4px 40px rgba(0,0,0,0.3)' }}>
            Graphic<br />Designer.
          </h1>
        </div>

        {/* CENTER — photo space */}
        <div style={{ gridColumn: '2' }} />

        {/* RIGHT tagline + buttons */}
        <div style={{ gridColumn: '3', gridRow: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '16px' }}>
          <p className="text-white font-bold leading-snug mb-3" style={{ fontSize: 'clamp(15px, 1.6vw, 20px)' }}>
            Bold design should feel unforgettable.
          </p>
          <p className="text-white/55 leading-relaxed mb-6" style={{ fontSize: 'clamp(12px, 1.1vw, 14px)' }}>
            From brand identity to editorial — crafting visuals that connect and resonate with people.
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#c0000a] font-bold rounded-full hover:bg-white/90 transition-all text-center"
              style={{ fontSize: '13px', padding: '13px 26px' }}>
              View My Work →
            </button>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/40 text-white rounded-full hover:bg-white/10 transition-all text-center"
              style={{ fontSize: '13px', padding: '13px 26px' }}>
              Get in Touch
            </button>
          </div>
        </div>

        {/* STATS bottom left */}
        <div style={{ gridColumn: '1', gridRow: '2', display: 'flex', gap: '28px', alignItems: 'flex-end', paddingBottom: '4px' }}>
          {[['3+', 'Years Designing'], ['40+', 'Projects Delivered'], ['BFA', 'Applied Arts']].map(([val, label]) => (
            <div key={val}>
              <span className="block font-display font-black text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1 }}>{val}</span>
              <span className="text-white/40 uppercase tracking-widest" style={{ fontSize: '9px' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden relative z-20 flex flex-col min-h-[100svh] px-6 pt-24 pb-10">

        {/* Headline at top */}
        <div className="mt-4 mb-auto">
          <p className="text-white/70 text-base font-medium mb-2">Hey, I&apos;m a</p>
          <h1 className="font-display font-black text-white leading-[0.88]"
            style={{ fontSize: '62px', letterSpacing: '-2px' }}>
            Graphic<br />Designer.
          </h1>
        </div>

        {/* Bottom content */}
        <div className="mt-auto">
          <p className="text-white font-bold text-lg leading-snug mb-2">
            Bold design should feel unforgettable.
          </p>
          <p className="text-white/55 text-sm leading-relaxed mb-6">
            From brand identity to editorial — crafting visuals that connect and resonate.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <button onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#c0000a] font-bold rounded-full text-center py-4 text-sm">
              View My Work →
            </button>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/40 text-white rounded-full text-center py-4 text-sm">
              Get in Touch
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 border-t border-white/15 pt-6">
            {[['3+', 'Years'], ['40+', 'Projects'], ['BFA', 'Applied Arts']].map(([val, label]) => (
              <div key={val}>
                <span className="block font-display font-black text-white text-3xl leading-none">{val}</span>
                <span className="text-white/40 uppercase tracking-widest text-[9px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
