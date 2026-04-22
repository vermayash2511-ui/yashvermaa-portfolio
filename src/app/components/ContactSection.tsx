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
      {/* Decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,87,42,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-6 text-center">
          Contact
        </p>

        {/* Big CTA headline */}
        <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-foreground leading-[0.95] tracking-tight text-center mb-6">
          Let&apos;s make something
          <br />
          <span className="text-gradient-coral italic">extraordinary.</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-xl mx-auto mb-20 leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just want to say hi —
          my inbox is always open.
        </p>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left: Info */}
          <div
            ref={leftRef}
            className="card-animate flex flex-col gap-10"
            style={{ animationDelay: '0ms' }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">Get in Touch</p>
              <a
                href="mailto:vermayash2511@gmail.com"
                className="font-display text-2xl md:text-3xl text-foreground hover:text-primary transition-colors duration-300 block mb-3"
              >
                vermayash2511@gmail.com
              </a>
              <p className="text-muted-foreground text-sm">Based in New Delhi, India · Available worldwide</p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border" />

            {/* Social links */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">Find Me</p>
              <div className="flex flex-col gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-all duration-300">
                      <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} variant="outline" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.handle}</p>
                    </div>
                    <Icon
                      name="ArrowUpRightIcon"
                      size={14}
                      variant="outline"
                      className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Currently available</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to freelance projects, internships, and full-time opportunities starting
                mid-2026.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            ref={rightRef}
            className="card-animate"
            style={{ animationDelay: '150ms' }}
          >
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center animate-float-y">
                  <Icon name="CheckIcon" size={28} variant="outline" className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Message Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thanks for reaching out, Yash will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-primary hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center">
                  <Icon name="ExclamationCircleIcon" size={28} variant="outline" className="text-red-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Something went wrong</h3>
                <p className="text-muted-foreground max-w-sm">
                  Could not send your message. Please try emailing directly at{' '}
                  <a href="mailto:vermayash2511@gmail.com" className="text-primary hover:underline">
                    vermayash2511@gmail.com
                  </a>
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-primary hover:underline underline-offset-4"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-input w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="form-input w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all duration-300 magnetic-btn shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
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
                  No spam. Typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}