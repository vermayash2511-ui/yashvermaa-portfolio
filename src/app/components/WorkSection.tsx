'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const categories = ['All', 'Branding', 'Editorial', 'Packaging', 'Illustration'];

// Gallery definitions
const galleries: Record<string, { src: string; alt: string }[]> = {
  amul: [
    { src: '/assets/images/amul_1.jpg', alt: 'Amul Campaign - Things Are Starting To Melt' },
    { src: '/assets/images/amul_2.jpg', alt: 'Amul Campaign - Some Flavours Don\'t Come Home' },
    { src: '/assets/images/amul_3.jpg', alt: 'Amul Campaign - Not Everything Is Packed' },
    { src: '/assets/images/amul_4.jpg', alt: 'Amul Campaign - So We Let Them In' },
    { src: '/assets/images/amul_5.jpg', alt: 'Amul Campaign - Parlour Flavours Now At Home' },
  ],
  jenix: [
    { src: '/assets/images/jenix_1.jpg', alt: 'Jenix Brand Identity - Cover' },
    { src: '/assets/images/jenix_2.jpg', alt: 'Jenix Brand Overview' },
    { src: '/assets/images/jenix_3.jpg', alt: 'Jenix Moodboard' },
    { src: '/assets/images/jenix_4.jpg', alt: 'Jenix Color Palette' },
    { src: '/assets/images/jenix_5.jpg', alt: 'Jenix Logo Variations' },
    { src: '/assets/images/jenix_6.jpg', alt: 'Jenix Flyer Mockup' },
    { src: '/assets/images/jenix_7.jpg', alt: 'Jenix Brand Ad' },
    { src: '/assets/images/jenix_8.jpg', alt: 'Jenix Stationery Mockup' },
    { src: '/assets/images/jenix_9.jpg', alt: 'Jenix Billboard Mockup' },
  ],
};

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  imgSrc: string;
  imgAlt: string;
  colSpan: string;
  aspectClass: string;
  galleryKey?: string;
  imageCount?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Amul Ice Cream Campaign',
    category: 'Branding',
    tags: ['Ad Campaign', 'Art Direction', 'Visual Design'],
    year: '2026',
    imgSrc: '/assets/images/amul_1.jpg',
    imgAlt: 'Amul Ice Cream Ad Campaign',
    colSpan: 'md:col-span-2',
    aspectClass: 'aspect-[16/9]',
    galleryKey: 'amul',
    imageCount: 5,
  },
  {
    id: 2,
    title: 'Jenix Brand Identity',
    category: 'Branding',
    tags: ['Brand Identity', 'Logo Design', 'Visual System'],
    year: '2026',
    imgSrc: '/assets/images/jenix_1.jpg',
    imgAlt: 'Jenix Brand Identity',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
    galleryKey: 'jenix',
    imageCount: 9,
  },
  {
    id: 3,
    title: 'Vogue Editorial Layout',
    category: 'Editorial',
    tags: ['Print', 'Layout Design', 'Typography'],
    year: '2025',
    imgSrc: 'https://img.rocket.new/generatedImages/rocket_gen_img_116b7d463-1772140686489.png',
    imgAlt: 'Editorial magazine spread with high-contrast black and white photography',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 5,
    title: 'Type Experiment No. 7',
    category: 'Editorial',
    tags: ['Typography', 'Experimental'],
    year: '2025',
    imgSrc: 'https://img.rocket.new/generatedImages/rocket_gen_img_178a4c7ba-1772113782799.png',
    imgAlt: 'Experimental typography poster',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 11,
    title: 'Ivory Baby Soap',
    category: 'Packaging',
    tags: ['Packaging', 'Product Design'],
    year: '2025',
    imgSrc: '/assets/images/Baby_Soap_Mockup_4_-_Wooden_Surface-1776554125179.png',
    imgAlt: 'Ivory baby soap packaging mockup',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 12,
    title: 'King Pizza Box',
    category: 'Packaging',
    tags: ['Packaging', 'Product Design'],
    year: '2025',
    imgSrc: '/assets/images/WhatsApp_Image_2025-10-07_at_18.38.33_0c712c87-1776554348703.jpg',
    imgAlt: 'King Pizza box packaging design',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 13,
    title: 'Kiwi Burst Can',
    category: 'Packaging',
    tags: ['Packaging', 'Product Design'],
    year: '2025',
    imgSrc: '/assets/images/Matt_Can_Mockup-1776554473071.jpg',
    imgAlt: 'Kiwi Burst beverage can packaging mockup',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 7,
    title: 'Personal Illustrations',
    category: 'Illustration',
    tags: ['Illustration', 'Art'],
    year: '2025',
    imgSrc: '/assets/images/yash_1_-1776553187287.jpg',
    imgAlt: 'Original illustration artwork by Yash Verma',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 8,
    title: 'Poem Illustration I',
    category: 'Illustration',
    tags: ['Illustration', 'Art'],
    year: '2025',
    imgSrc: '/assets/images/Poem_illus.1-1776553274997.jpg',
    imgAlt: 'Poem illustration artwork',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 9,
    title: 'Poem Illustration II',
    category: 'Illustration',
    tags: ['Illustration', 'Art'],
    year: '2025',
    imgSrc: '/assets/images/Poem_illus.-1776553338187.jpg',
    imgAlt: 'Poem illustration series artwork',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 10,
    title: 'Product Illustration',
    category: 'Illustration',
    tags: ['Illustration', 'Art'],
    year: '2025',
    imgSrc: '/assets/images/mid_illus_2_1_-1776553814564.jpg',
    imgAlt: 'Product illustration artwork',
    colSpan: 'md:col-span-1',
    aspectClass: 'aspect-[4/5]',
  },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGalleryKey, setActiveGalleryKey] = useState<string>('');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [filtered]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!galleryOpen) return;
      const imgs = galleries[activeGalleryKey] || [];
      if (e.key === 'Escape') setGalleryOpen(false);
      if (e.key === 'ArrowRight') setGalleryIndex((i) => (i + 1) % imgs.length);
      if (e.key === 'ArrowLeft') setGalleryIndex((i) => (i - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [galleryOpen, activeGalleryKey]);

  useEffect(() => {
    document.body.style.overflow = galleryOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [galleryOpen]);

  const openGallery = (key: string, index = 0) => {
    setActiveGalleryKey(key);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const handleGlowMove = (e: React.MouseEvent<HTMLDivElement>, el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
  };

  const activeGalleryImages = galleries[activeGalleryKey] || [];

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">Selected Work</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-foreground leading-[1.0] tracking-tight">
              Projects that<br />
              <span className="text-gradient-coral italic">speak louder.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-tab px-4 py-2 rounded-full border text-sm font-medium ${
                  activeFilter === cat ? 'active' : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={`card-animate portfolio-card glow-card group relative overflow-hidden rounded-2xl cursor-pointer ${project.colSpan}`}
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => project.galleryKey && openGallery(project.galleryKey, 0)}
              onMouseMove={(e) => handleGlowMove(e, e.currentTarget)}
            >
              <div className="glow-overlay" aria-hidden="true" />
              <div className={`relative w-full overflow-hidden ${project.aspectClass}`}>
                <AppImage
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  fill
                  className="object-cover card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Gallery badge */}
                {project.galleryKey && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 z-10">
                    <Icon name="PhotoIcon" size={14} variant="outline" className="text-white" />
                    <span className="text-[11px] text-white font-medium">{project.imageCount} images</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="card-overlay absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary mb-1">{project.category}</p>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight">{project.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-4">
                      <Icon name={project.galleryKey ? 'EyeIcon' : 'ArrowUpRightIcon'} size={18} variant="outline" className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Always-visible strip */}
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="font-display text-lg font-semibold text-white">{project.title}</p>
                  <p className="text-xs text-white/60 mt-0.5">{project.category} · {project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            Want to collaborate?
            <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Let&apos;s talk
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </span>
          </a>
        </div>
      </div>

      {/* Lightbox Gallery */}
      {galleryOpen && activeGalleryImages.length > 0 && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setGalleryOpen(false)}>

          {/* Close */}
          <button className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setGalleryOpen(false)}>
            <Icon name="XMarkIcon" size={20} variant="outline" className="text-white" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <span className="text-white text-sm font-medium">{galleryIndex + 1} / {activeGalleryImages.length}</span>
          </div>

          {/* Prev */}
          <button className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); setGalleryIndex((i) => (i - 1 + activeGalleryImages.length) % activeGalleryImages.length); }}>
            <Icon name="ChevronLeftIcon" size={22} variant="outline" className="text-white" />
          </button>

          {/* Image */}
          <div className="relative max-w-2xl w-full mx-20 max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeGalleryImages[galleryIndex].src}
              alt={activeGalleryImages[galleryIndex].alt}
              className="w-full h-full object-contain rounded-xl max-h-[80vh]"
            />
          </div>

          {/* Next */}
          <button className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); setGalleryIndex((i) => (i + 1) % activeGalleryImages.length); }}>
            <Icon name="ChevronRightIcon" size={22} variant="outline" className="text-white" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center px-4 max-w-lg"
            onClick={(e) => e.stopPropagation()}>
            {activeGalleryImages.map((img, i) => (
              <button key={i} onClick={() => setGalleryIndex(i)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === galleryIndex ? 'border-primary scale-110' : 'border-white/20 opacity-60 hover:opacity-100'}`}>
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
