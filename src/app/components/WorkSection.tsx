'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const categories = ['All', 'Branding', 'Editorial', 'Packaging', 'Illustration'];

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  imgSrc: string;
  imgAlt: string;
  colSpan: string;
  rowSpan?: string;
  aspectClass: string;
}

const projects: Project[] = [
{
  id: 1,
  title: 'Rasa Brand Identity',
  category: 'Branding',
  tags: ['Logo', 'Typography', 'Color System'],
  year: '2024',
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_199354d68-1776551497727.png",
  imgAlt: 'Bold geometric brand identity with warm coral tones on dark background, abstract logo mark',
  colSpan: 'md:col-span-2',
  aspectClass: 'aspect-[16/9]'
},
{
  id: 3,
  title: 'Vogue Editorial Layout',
  category: 'Editorial',
  tags: ['Print', 'Layout Design', 'Typography'],
  year: '2025',
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_116b7d463-1772140686489.png",
  imgAlt: 'Editorial magazine spread with high-contrast black and white photography and bold serif typography',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 4,
  title: 'Terroir Package Design',
  category: 'Branding',
  tags: ['Packaging', 'Illustration', 'Print'],
  year: '2025',
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_15aa5d1e8-1772247409643.png",
  imgAlt: 'Elegant product packaging with earthy tones, botanical illustration on cream paper texture',
  colSpan: 'md:col-span-2',
  aspectClass: 'aspect-[16/9]'
},
{
  id: 5,
  title: 'Type Experiment No. 7',
  category: 'Editorial',
  tags: ['Typography', 'Experimental'],
  year: '2025',
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_178a4c7ba-1772113782799.png",
  imgAlt: 'Experimental typography poster with layered letterforms in warm amber and charcoal',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 11,
  title: 'Ivory Baby Soap',
  category: 'Packaging',
  tags: ['Packaging', 'Product Design'],
  year: '2025',
  imgSrc: '/assets/images/Baby_Soap_Mockup_4_-_Wooden_Surface-1776554125179.png',
  imgAlt: 'Ivory baby soap packaging mockup displayed on a wooden surface with clean minimal design',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 12,
  title: 'King Pizza Box',
  category: 'Packaging',
  tags: ['Packaging', 'Product Design'],
  year: '2025',
  imgSrc: '/assets/images/WhatsApp_Image_2025-10-07_at_18.38.33_0c712c87-1776554348703.jpg',
  imgAlt: 'King Pizza box packaging design with bold branding and vibrant colors',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 13,
  title: 'Kiwi Burst Can',
  category: 'Packaging',
  tags: ['Packaging', 'Product Design'],
  year: '2025',
  imgSrc: '/assets/images/Matt_Can_Mockup-1776554473071.jpg',
  imgAlt: 'Kiwi Burst beverage can packaging mockup with vibrant green design and fresh kiwi branding',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 7,
  title: 'Personal Illustrations',
  category: 'Illustration',
  tags: ['Illustration', 'Art'],
  year: '2025',
  imgSrc: '/assets/images/yash_1_-1776553187287.jpg',
  imgAlt: 'Original illustration artwork by Yash Verma showcasing personal illustration style and creative expression',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 8,
  title: 'Poem Illustration',
  category: 'Illustration',
  tags: ['Illustration', 'Art'],
  year: '2025',
  imgSrc: '/assets/images/Poem_illus.1-1776553274997.jpg',
  imgAlt: 'Poem illustration artwork by Yash Verma featuring visual storytelling through poetic imagery',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 9,
  title: 'Poem Illustration',
  category: 'Illustration',
  tags: ['Illustration', 'Art'],
  year: '2025',
  imgSrc: '/assets/images/Poem_illus.-1776553338187.jpg',
  imgAlt: 'Poem illustration series artwork by Yash Verma with expressive visual poetry and artistic composition',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
},
{
  id: 10,
  title: 'Product Illustration',
  category: 'Illustration',
  tags: ['Illustration', 'Art'],
  year: '2025',
  imgSrc: '/assets/images/mid_illus_2_1_-1776553814564.jpg',
  imgAlt: 'Product illustration artwork by Yash Verma showcasing detailed product-focused illustration design',
  colSpan: 'md:col-span-1',
  aspectClass: 'aspect-[4/5]'
}];


export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = activeFilter === 'All' ?
  projects :
  projects.filter((p) => p.category === activeFilter);

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
      { threshold: 0.12 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filtered]);

  const handleGlowMove = (e: React.MouseEvent<HTMLDivElement>, el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-foreground leading-[1.0] tracking-tight">
              Projects that<br />
              <span className="text-gradient-coral italic">speak louder.</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab px-4 py-2 rounded-full border text-sm font-medium ${
              activeFilter === cat ?
              'active' : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'}`
              }>
              
                {cat}
              </button>
            )}
          </div>
        </div>

        {/* Bento Grid */}
        {/* BENTO AUDIT:
             Row 1: [col-1+2: BrandIdentity cs-2] [col-3: MotionGraphics cs-1]
             Row 2: [col-1: EditorialLayout cs-1] [col-2+3: PackageDesign cs-2]  (when All)
             Row 3: [col-1: TypeExperiment cs-1] [col-2: IllustrationSeries cs-1] [col-3: empty → cs-1 filler hidden]
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((project, idx) =>
          <div
            key={project.id}
            ref={(el) => {cardRefs.current[idx] = el;}}
            className={`card-animate portfolio-card glow-card group relative overflow-hidden rounded-2xl cursor-pointer ${project.colSpan}`}
            style={{ animationDelay: `${idx * 100}ms` }}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              handleGlowMove(e, el);
            }}>
            
              {/* Glow overlay */}
              <div className="glow-overlay" aria-hidden="true" />

              {/* Image */}
              <div className={`relative w-full overflow-hidden ${project.aspectClass}`}>
                <AppImage
                src={project.imgSrc}
                alt={project.imgAlt}
                fill
                className="object-cover card-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              
                {/* Dark overlay always present, stronger on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover overlay content */}
                <div className="card-overlay absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) =>
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
                    
                        {tag}
                      </span>
                  )}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary mb-1">{project.category}</p>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-4">
                      <Icon name="ArrowUpRightIcon" size={18} variant="outline" className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Always-visible bottom info strip */}
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="font-display text-lg font-semibold text-white">{project.title}</p>
                  <p className="text-xs text-white/60 mt-0.5">{project.category} · {project.year}</p>
                </div>
              </div>
            </div>
          )}

          {/* Fill last row if odd number in filtered view */}
          {filtered.length % 3 === 1 &&
          <div className="hidden md:block md:col-span-2 rounded-2xl border border-dashed border-border/40 flex items-center justify-center min-h-[200px]">
              <div className="text-center py-16">
                <p className="text-muted-foreground text-sm italic font-display">More coming soon.</p>
              </div>
            </div>
          }
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            
            Want to collaborate?
            <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Let&apos;s talk
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </span>
          </a>
        </div>
      </div>
    </section>);

}