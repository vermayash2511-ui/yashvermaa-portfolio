'use client';
import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [leftRef, rightRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 120% at 55% 40%, #e8000a 0%, #9b0000 42%, #2a0000 75%, #080000 100%)',
      }}
    >
      {/* ── Person photo — full bleed center ── */}
      <div className="absolute inset-0 z-[5] flex items-end justify-center">
        <img
          src="/assets/images/yash_hero.jpg"
          alt="Yash Verma"
          className="h-full w-auto object-contain object-bottom select-none"
          style={{
            maxWidth: '58%',
            mixBlendMode: 'multiply',
            filter: 'contrast(1.08) brightness(0.85)',
          }}
        />
      </div>

      {/* Side gradients to blend photo edges */}
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(130,0,5,0.85) 0%, transparent 30%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(80,0,0,0.8) 0%, transparent 32%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(8,0,0,0.6) 0%, transparent 25%)' }} />

      {/* ── Content layer ── */}
      <div className="absolute inset-0 z-20 flex flex-col">

        {/* LEFT headline — vertically centered */}
        <div ref={leftRef} className="absolute left-10 top-1/2 -translate-y-1/2">
          <p className="text-white/60 font-sans mb-3" style={{ fontSize: '18px', letterSpacing: '0.02em' }}>
            Hey, I&apos;m a
          </p>
          <h1
            className="font-display font-black text-white leading-[0.88]"
            style={{
              fontSize: 'clamp(64px, 9vw, 110px)',
              letterSpacing: '-4px',
              textShadow: '0 4px 60px rgba(0,0,0,0.3)',
            }}
          >
            Graphic<br />Designer.
          </h1>
        </div>

        {/* RIGHT content — vertically centered */}
        <div ref={rightRef} className="absolute right-10 top-1/2 -translate-y-1/2" style={{ maxWidth: '240px' }}>
          <p className="text-white font-bold leading-snug mb-3" style={{ fontSize: '18px' }}>
            Bold design should feel unforgettable.
          </p>
          <p className="text-white/55 leading-relaxed mb-8" style={{ fontSize: '13px' }}>
            From brand identity to editorial — crafting visuals that connect and resonate with people.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#c0000a] font-bold rounded-full hover:bg-white/90 transition-all text-center"
              style={{ fontSize: '13px', padding: '12px 28px' }}
            >
              View My Work →
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/35 text-white rounded-full hover:bg-white/10 transition-all text-center"
              style={{ fontSize: '13px', padding: '12px 28px' }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* BOTTOM stats */}
        <div className="absolute bottom-10 left-10 flex gap-10">
          {[['3+', 'Years Designing'], ['40+', 'Projects Delivered'], ['BFA', 'Applied Arts']].map(([val, label]) => (
            <div key={val}>
              <span className="block text-white font-black font-display" style={{ fontSize: '32px', lineHeight: 1 }}>{val}</span>
              <span className="text-white/40 uppercase tracking-widest" style={{ fontSize: '9px' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
