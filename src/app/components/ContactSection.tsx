'use client';
import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const EMAILJS_SERVICE_ID = 'service_64ymtuh';
const EMAILJS_TEMPLATE_ID = 'template_673lxs9';
const EMAILJS_PUBLIC_KEY = 'AnMXAKFdab53knCEZ';

const socials = [
  { name: 'Instagram', handle: '@impasto_design', icon: 'GlobeAltIcon', href: 'https://www.instagram.com/impasto_design?igsh=aWRmeHlya2xsajA=' },
  { name: 'Behance', handle: 'yashverma75O099', icon: 'LinkIcon', href: 'https://www.behance.net/yashverma75O099' },
  { name: 'LinkedIn', handle: 'Yash Verma', icon: 'BriefcaseIcon', href: '#' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });
      if (response.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">

      {/* Big red glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(237,28,36,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">Let&apos;s Talk</p>
          <div className="h-px w-12 bg-primary" />
        </div>

        {/* Big headline */}
        <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-foreground leading-[0.95] tracking-tight text-center mb-6">
          Let&apos;s make something<br />
          <span className="text-gradient-coral italic">extraordinary.</span>
        </h2>

        <p className="text-muted-foreground text-center text-lg max-w-xl mx-auto mb-16 leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just want to say hi —
          my inbox is always open.
        </p>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

          {/* Left: Info */}
          <div ref={leftRef} className="card-animate flex flex-col gap-8" style={{ animationDelay: '0ms' }}>

            {/* Email highlight */}
            <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
              <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3 font-semibold">Email Me</p>
              <a
                href="mailto:vermayash2511@gmail.com"
                className="font-display text-xl md:text-2xl text-foreground hover:text-primary transition-colors duration-300 block break-all"
              >
                vermayash2511@gmail.com
              </a>
              <p className="text-muted-foreground text-sm mt-2">Based in New Delhi · Available worldwide</p>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl border border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to freelance projects, internships, and full-time opportunities starting mid-2026.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Or find me</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-all duration-300">
                    <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} variant="outline" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.handle}</p>
                  </div>
                  <Icon name="ArrowUpRightIcon" size={14} variant="outline" className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className="card-animate" style={{ animationDelay: '150ms' }}>
            <div className="p-8 md:p-10 rounded-3xl border border-border bg-card/60 backdrop-blur-sm relative overflow-hidden shadow-2xl shadow-primary/10">

              {/* Top glow inside card */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #ed1c24, transparent)' }}
              />
              <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(237,28,36,0.12) 0%, transparent 70%)' }}
              />

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Icon name="CheckIcon" size={36} variant="outline" className="text-primary" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground">Message Sent! 🎉</h3>
                  <p className="text-muted-foreground max-w-sm">Thanks for reaching out! Yash will get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="text-sm text-primary hover:underline underline-offset-4">
                    Send another message
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                    <Icon name="ExclamationCircleIcon" size={36} variant="outline" className="text-red-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Something went wrong</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Email directly at{' '}
                    <a href="mailto:vermayash2511@gmail.com" className="text-primary hover:underline">vermayash2511@gmail.com</a>
                  </p>
                  <button onClick={() => setStatus('idle')} className="text-sm text-primary hover:underline underline-offset-4">Try again</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="mb-2">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">Send a Message</h3>
                    <p className="text-sm text-muted-foreground">I&apos;ll get back to you within 24 hours.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Name</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-5 py-4 rounded-xl border border-border bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Email</label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 rounded-xl border border-border bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Message</label>
                    <textarea
                      id="message" name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="w-full px-5 py-4 rounded-xl border border-border bg-white text-gray-900 placeholder:text-gray-400 text-sm resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="relative flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-primary text-white font-bold text-base hover:bg-primary/90 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {status === 'sending' ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon name="PaperAirplaneIcon" size={18} variant="outline" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    🔒 No spam. Your info stays private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
