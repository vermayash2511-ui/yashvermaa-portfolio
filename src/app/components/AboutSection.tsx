'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const skills = [
'Brand Identity', 'Typography', 'Editorial Design', 'Illustration',
'Motion Graphics', 'Packaging', 'Visual Storytelling', 'UI/UX'];


const tools = [
{ name: 'Illustrator', level: 95 },
{ name: 'Photoshop', level: 90 },
{ name: 'InDesign', level: 85 },
{ name: 'After Effects', level: 75 },
{ name: 'Figma', level: 80 }];


const highlights = [
{ icon: 'AcademicCapIcon', label: 'BFA Applied Arts', sub: 'Specialization in Graphic Design' },
{ icon: 'StarIcon', label: '40+ Projects', sub: 'Branding, Print & Digital' },
{ icon: 'SparklesIcon', label: 'Available for Hire', sub: 'Freelance & Internships' }];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#F5F0E8 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
        aria-hidden="true" />
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-16 text-center">
          About Me
        </p>

        {/* Main 60/40 split */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: Photo */}
          <div
            ref={(el) => {itemRefs.current[0] = el;}}
            className="card-animate relative group"
            style={{ animationDelay: '0ms' }}>
            
            {/* Photo wrapper — constrained size */}
            <div className="mx-auto max-w-[320px] sm:max-w-[360px]">
              {/* Decorative offset block */}
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl border-2 border-primary/30 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

              <div className="relative rounded-2xl overflow-hidden z-10 aspect-[3/4]">
                <AppImage
                  src="/assets/images/WhatsApp_Image_2026-03-12_at_7.18.29_AMs-1776552581092.jpeg"
                  alt="Yash Verma, graphic designer and BFA Applied Arts student"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 360px, 320px" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-background/80 backdrop-blur-md border border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Highlights below photo */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlights.map((h, i) =>
              <div
                key={i}
                className="flex flex-col gap-1.5 p-4 rounded-xl bg-card border border-border spring-hover">
                
                  <Icon name={h.icon as Parameters<typeof Icon>[0]['name']} size={20} variant="outline" className="text-primary" />
                  <p className="text-sm font-semibold text-foreground">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.sub}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Bio + Skills */}
          <div
            ref={(el) => {itemRefs.current[1] = el;}}
            className="card-animate flex flex-col justify-between"
            style={{ animationDelay: '150ms' }}>
            
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-foreground leading-[1.05] tracking-tight mb-6">
                Design is how I
                <span className="text-gradient-coral italic"> translate</span>
                <br />ideas into impact.
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                I&apos;m Yash Verma, a graphic designer pursuing a Bachelor of Fine Arts
                with a specialization in Applied Arts. My work lives at the intersection
                of concept and craft — where bold ideas meet disciplined execution.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                From brand identities that carve cultural niches, to editorial layouts
                that make readers pause — I design with intention and a hunger for
                visual surprise.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-10" />

              {/* Skills */}
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-5">Disciplines</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) =>
                  <span
                    key={s}
                    className="skill-pill px-4 py-2 rounded-full border border-border text-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-default">
                    
                      {s}
                    </span>
                  )}
                </div>
              </div>

              {/* Tools with bar indicators */}
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-5">Tools</p>
                <div className="flex flex-col gap-4">
                  {tools.map((tool) =>
                  <div key={tool.name} className="flex items-center gap-4">
                      <span className="text-sm text-foreground w-28 flex-shrink-0">{tool.name}</span>
                      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${tool.level}%`, transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)' }} />
                      
                      </div>
                      <span className="text-xs text-muted-foreground w-8 text-right">{tool.level}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex items-center gap-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 magnetic-btn shadow-lg shadow-primary/20">
                
                Work Together
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </a>
              <a
                href="/assets/Yash_Verma_CV.pdf"
                download="Yash_Verma_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                <Icon name="ArrowDownTrayIcon" size={16} variant="outline" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}