'use client';
import React, { useEffect, useRef } from 'react';

const services = [
  { num: '#01', name: 'Brand Identity' },
  { num: '#02', name: 'Packaging Design' },
  { num: '#03', name: 'Editorial Design' },
  { num: '#04', name: 'Art Direction' },
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 110% 110% at 60% 35%, #e8000a 0%, #9b0000 40%, #2a0000 75%, #080000 100%)',
      }}
    >
      {/* ── Person photo ── */}
      <div className="absolute inset-0 flex items-end justify-center z-[5]">
        <img
          src="/assets/images/yash_hero.jpg"
          alt="Yash Verma"
          className="h-full w-auto object-contain object-bottom"
          style={{ maxWidth: '60%', mixBlendMode: 'multiply', filter: 'contrast(1.05) brightness(0.88)' }}
        />
      </div>

      {/* Blend gradients */}
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(140,0,5,0.75) 0%, transparent 28%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(90,0,0,0.65) 0%, transparent 32%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(8,0,0,0.7) 0%, transparent 35%)' }} />

      {/* ── NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="text-white font-bold text-sm">Yash Verma</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {['Work', 'About', 'Contact'].map((l) => (
            <button
              key={l}
              onClick={() => document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 bg-white text-[#c0000a] font-bold text-xs px-5 py-2.5 rounded-full hover:bg-white/90 transition-all"
        >
          Hire Me ↗
        </button>
      </nav>

      {/* ── LEFT headline ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <p className="text-white/50 text-xs mb-3 tracking-wide">Hey, I&apos;m a</p>
        <h1
          ref={headlineRef}
          className="font-display font-black text-white leading-[0.87]"
          style={{ fontSize: 'clamp(52px, 8vw, 90px)', letterSpacing: '-3px', textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
        >
          Graphic<br />Designer.
        </h1>
      </div>

      {/* ── RIGHT tagline ── */}
      <div className="absolute right-8 top-1/2 z-20 max-w-[200px]"
        style={{ transform: 'translateY(-20%)' }}>
        <p className="text-white font-bold text-sm leading-snug mb-2">
          Bold design should feel unforgettable.
        </p>
        <p className="text-white/50 text-xs leading-relaxed">
          From brand identity to editorial — crafting visuals that connect and resonate.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#c0000a] font-bold text-xs px-5 py-2.5 rounded-full hover:bg-white/90 transition-all w-fit"
          >
            View My Work →
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/30 text-white text-xs px-5 py-2.5 rounded-full hover:bg-white/10 transition-all w-fit"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* ── SERVICES bottom bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex border-t border-white/10"
        style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(6px)' }}>
        {services.map((s, i) => (
          <div
            key={i}
            className="flex-1 px-6 py-4 flex flex-col gap-1 border-r border-white/8 last:border-r-0"
          >
            <span className="text-[10px] font-bold text-red-400">{s.num}</span>
            <span className="text-[11px] text-white/40">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
