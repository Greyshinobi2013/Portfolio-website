import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechTicker from '@/components/TechTicker';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import CaseStudies from '@/components/CaseStudies';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-gray-100 flex flex-col selection:bg-agency-primary/30 selection:text-white">
      {/* Agency Sticky Header & Command Palette */}
      <Navbar />

      {/* Hero Section with Executive Developer Showcase */}
      <Hero />

      {/* High-Velocity Tech Ticker */}
      <TechTicker />

      {/* Technical Architecture & Capabilities Bento */}
      <CapabilitiesGrid />

      {/* Selected Work & Interactive Case Studies Theater */}
      <CaseStudies />

      {/* Academic Degrees & Professional Experience Timeline */}
      <ExperienceTimeline />

      {/* Direct Recruiter Contact & Ingress Hub */}
      <ContactSection />

      {/* Refined Agency Footer */}
      <Footer />
    </main>
  );
}
