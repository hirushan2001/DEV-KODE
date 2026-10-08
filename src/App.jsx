import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatYouLearn from './components/WhatYouLearn';
import RealProjectsSection from './components/RealProjectsSection';
import TechStackSection from './components/TechStackSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import ComparisonSection from './components/ComparisonSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import CurriculumMontage from './components/CurriculumMontage';
import FooterSection from './components/FooterSection';
import EditingFundamentalsPage from './pages/EditingFundamentalsPage';
import ColorGradingPage from './pages/ColorGradingPage';
import MusicAndSoundPage from './pages/MusicAndSoundPage';
import TypographyPage from './pages/TypographyPage';
import ProjectsPage from './pages/ProjectsPage';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function PageLayout({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateGsapTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    // Scroll reveal observer
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      gsap.ticker.remove(updateGsapTicker);
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-full flex flex-col bg-neutral-950 text-white font-sans antialiased">
      {/* Header */}
      <Header />

      {/* Main Layout Container */}
      <div className="relative min-h-screen bg-neutral-950 font-sans text-white">
        {/* Route Page Content */}
        {children}

        {/* Final CTA Montage Grid */}
        <div className="relative z-20 w-full bg-[#08080A]">
          <CurriculumMontage />
        </div>

        {/* Footer & Signature Curtain */}
        <FooterSection />
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <>
      {/* Upper Hero & Services/Projects Block */}
      <div className="relative z-10 w-full bg-neutral-950">
        {/* Child 1: Sticky Hero Section */}
        <HeroSection />

        {/* Child 2: Services, Projects, TechStack, About & Process (White rounded card container) */}
        <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          <WhatYouLearn />
          <RealProjectsSection />
          <TechStackSection />
          <AboutSection />
          <ProcessSection />
        </div>
      </div>

      {/* Solution Offer Section */}
      <div id="pricing" className="relative z-10 w-full bg-neutral-950 pt-10 pb-8">
        <PricingSection />
      </div>

      {/* Comparison, Value Props, FAQ & Contact (White rounded card container) */}
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden">
        <ComparisonSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects-showcase" element={<ProjectsPage />} />
          <Route path="/editing-fundamentals" element={<EditingFundamentalsPage />} />
          <Route path="/color-grading" element={<ColorGradingPage />} />
          <Route path="/music-and-sound" element={<MusicAndSoundPage />} />
          <Route path="/typography" element={<TypographyPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

