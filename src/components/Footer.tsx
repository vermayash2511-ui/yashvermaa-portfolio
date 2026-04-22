'use client';
import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const socials = [
  { name: 'Instagram', icon: 'GlobeAltIcon', href: 'https://www.instagram.com/impasto_design?igsh=aWRmeHlya2xsajA=' },
  { name: 'Behance', icon: 'LinkIcon', href: 'https://www.behance.net/yashverma75O099' },
  { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
];

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 spring-hover"
            >
              <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={18} variant="outline" />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          {year ? `© ${year} Yash Verma. All rights reserved.` : '© Yash Verma. All rights reserved.'}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}