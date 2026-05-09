'use client';
import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [leftRef, rightRef, statsRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 180);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 120% at 55% 35%, #e8000a 0%, #9b0000 42%, #2a0000 75%, #080000 100%)',
      }}
    >
      {/* ── Full background photo ── */}
      <div className="absolute inset-0 z-[5]">
        <img
          src="/assets/images/yash_hero.jpg"
          alt="Yash Verma"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          style={{ filter: 'brightness(0.9) contrast(1.05)' }}
        />
      </div>

      {/* Gradient blends for text readability */}
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(100,0,3,0.92) 0%, rgba(80,0,3,0.5) 40%, transparent 65%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(60,0,0,0.88) 0%, rgba(40,0,0,0.4) 35%, transparent 60%)' }} />
      <div className="absolute inset-0 z-[6] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(8,0,0,0.7) 0%, transparent 30%)' }} />

      {/* ── 3-column content grid ── */}
      <div
        className="absolute z-20 grid"
        style={{
          top: '80px', bottom: 0, left: 0, right: 0,
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr auto',
          padding: '0 40px 40px',
        }}
      >
        {/* LEFT — headline */}
        <div
          ref={leftRef}
          style={{ gridColumn: '1', gridRow: '1/3', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <p className="text-white/70 font-sans font-medium mb-3" style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}>
            Hey, I&apos;m a
          </p>
          <h1
            className="font-display font-black text-white"
            style={{
              fontSize: 'clamp(60px, 8vw, 100px)',
              lineHeight: 0.88,
              letterSpacing: '-3px',
              textShadow: '0 4px 40px rgba(0,0,0,0.3)',
            }}
          >
            Graphic<br />Designer.
          </h1>
        </div>

        {/* CENTER — empty (photo lives here) */}
        <div style={{ gridColumn: '2' }} />

        {/* RIGHT — tagline + buttons */}
        <div
          ref={rightRef}
          style={{
            gridColumn: '3', gridRow: '1',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            paddingLeft: '16px',
          }}
        >
          <p className="text-white font-bold leading-snug mb-3" style={{ fontSize: 'clamp(15px, 1.6vw, 20px)' }}>
            Bold design should feel unforgettable.
          </p>
          <p className="text-white/55 leading-relaxed mb-6" style={{ fontSize: 'clamp(12px, 1.1vw, 14px)' }}>
            From brand identity to editorial — crafting visuals that connect and resonate with people.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#c0000a] font-bold rounded-full hover:bg-white/90 transition-all text-center"
              style={{ fontSize: '13px', padding: '13px 26px' }}
            >
              View My Work →
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/40 text-white rounded-full hover:bg-white/10 transition-all text-center"
              style={{ fontSize: '13px', padding: '13px 26px' }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* STATS — bottom left only, no overlap */}
        <div
          ref={statsRef}
          style={{ gridColumn: '1', gridRow: '2', display: 'flex', gap: '28px', alignItems: 'flex-end', paddingBottom: '4px' }}
        >
          {[['3+', 'Years Designing'], ['40+', 'Projects Delivered'], ['BFA', 'Applied Arts']].map(([val, label]) => (
            <div key={val}>
              <span className="block font-display font-black text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1 }}>{val}</span>
              <span className="text-white/40 uppercase tracking-widest" style={{ fontSize: '9px' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
