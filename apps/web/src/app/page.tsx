import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen relative">
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* 2. Hero 100vh Splash Section */}
      <Hero />

      {/* 3. Featured Projects (Inverted White Section) */}
      <CaseStudies />

      {/* 4. Engineering Capabilities Bento Grid (Dark Section) */}
      <CapabilitiesGrid />

      {/* 5. Career & Academic Timeline (Dark Section) */}
      <ExperienceTimeline />

      {/* 6. Recruiter Contact & Ingress Hub (Inverted White Section) */}
      <ContactSection />

      {/* 7. Refined Footer & Site Map */}
      <Footer />
    </main>
  );
}
