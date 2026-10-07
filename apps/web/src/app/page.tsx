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
    <main className="min-h-screen bg-canvas text-gray-100 flex flex-col selection:bg-neon-pink/30 selection:text-neon-cyan">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section with Profile Card */}
      <Hero />

      {/* Core Tech Stack Ticker */}
      <TechTicker />

      {/* Core Capabilities & Architecture Grid */}
      <CapabilitiesGrid />

      {/* Proof of Execution - Featured Engineering Case Studies */}
      <CaseStudies />

      {/* Journey, Experience & Credentials Timeline */}
      <ExperienceTimeline />

      {/* Let's Connect & Interactive Contact Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
