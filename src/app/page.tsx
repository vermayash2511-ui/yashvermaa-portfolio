import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import WorkSection from '@/app/components/WorkSection';
import AboutSection from '@/app/components/AboutSection';
import ContactSection from '@/app/components/ContactSection';
import CursorSpotlight from '@/app/components/CursorSpotlight';

export default function HomePage() {
  return (
    <>
      <CursorSpotlight />
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}