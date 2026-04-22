'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
{ value: '3+', label: 'Years Designing' },
{ value: '40+', label: 'Projects Delivered' },
{ value: 'BFA', label: 'Applied Arts' }];


export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = headlineRef?.current?.querySelectorAll<HTMLSpanElement>('.hero-word');
    if (!words) return;
    words?.forEach((word, i) => {
      setTimeout(() => {
        word.style.animation = 'word-appear 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards';
      }, 200 + i * 120);
    });
  }, []);

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden noise-overlay">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_148090e41-1772420226753.png"
          alt="Dark artistic workspace with scattered design tools, warm moody studio lighting, deep shadows, black desk surface with paint and brushes"
          fill
          priority
          className="object-cover hero-pan"
          sizes="100vw" />
        
        {/* Multi-layer scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-36">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-10"
            style={{ animation: 'word-appear 0.8s 0.1s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}>
            
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.35em] text-white/80 font-medium">
              BFA Applied Arts · Graphic Designer
            </span>
          </div>

          {/* Main Headline */}
          <div ref={headlineRef} className="mb-8">
            <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] font-900 leading-[0.92] tracking-tight text-white">
              {['Crafting', 'Bold', 'Visual']?.map((w, i) =>
              <span
                key={i}
                className="hero-word inline-block mr-[0.15em]"
                style={{ opacity: 0 }}>
                
                  {w}
                </span>
              )}
              <br />
              {['Stories', 'That']?.map((w, i) =>
              <span
                key={i}
                className="hero-word inline-block mr-[0.15em]"
                style={{ opacity: 0 }}>
                
                  {w}
                </span>
              )}
              <span
                className="hero-word inline-block text-gradient-coral"
                style={{ opacity: 0 }}>
                
                Resonate.
              </span>
            </h1>
          </div>

          {/* Sub */}
          <p
            className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-12 font-light"
            style={{ animation: 'word-appear 0.9s 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}>
            
            I&apos;m Yash Verma — a graphic designer and applied arts student turning concepts
            into expressive, purposeful visuals.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20"
            style={{ animation: 'word-appear 0.9s 1.3s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}>
            
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 magnetic-btn shadow-lg shadow-primary/25">
              
              View My Work
              <Icon name="ArrowRightIcon" size={18} variant="outline" className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 px-8 py-4 border border-white/25 text-white rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300">
              
              Get in Touch
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-10 border-t border-white/10 pt-10"
            style={{ animation: 'word-appear 0.9s 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}>
            
            {stats?.map((s, i) =>
            <div key={i} className="flex flex-col gap-1">
                <span className="font-display text-3xl font-bold text-white">{s?.value}</span>
                <span className="text-xs uppercase tracking-widest text-white/50">{s?.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 writing-mode-vertical"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <div className="w-full h-6 bg-primary scroll-indicator-dot absolute top-0" />
        </div>
      </div>
    </section>);

}