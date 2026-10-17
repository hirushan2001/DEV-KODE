import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComparisonMatrix from "../components/ComparisonMatrix";
import EngineeringPipeline from "../components/EngineeringPipeline";

gsap.registerPlugin(ScrollTrigger);

const BENTO_CARDS = [
  {
    title: "Full-Stack Web Engineering",
    tag: "High Performance",
    desc: "React 19, Next.js 15, and Node.js microservices designed for maximum speed, SEO optimization, and global scale.",
    badge: "SSR & Edge Ready",
    image: "/main/1/real-projects/motion.png",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    tag: "99.99% Availability",
    desc: "Docker containerization, AWS & Cloudflare edge deployments with automated CI/CD pipelines and zero-downtime rollouts.",
    badge: "Kubernetes & AWS",
    image: "/main/1/footer/realtime.png",
  },
  {
    title: "AI Integration & Automation",
    tag: "Next-Gen Intelligent",
    desc: "Custom LLM agents, RAG vector pipelines, and automated business workflows powered by OpenAI & PyTorch.",
    badge: "RAG & Agents",
    image: "/main/1/footer/protfolio.png",
  },
  {
    title: "Cross-Platform Mobile Apps",
    tag: "iOS & Android",
    desc: "Native-performing React Native mobile applications with offline-first synchronization and biometric security.",
    badge: "React Native",
    image: "/main/1/real-projects/effect.png",
  },
];

const INDUSTRY_CARDS = [
  {
    category: "FinTech & Enterprise SaaS",
    title: "Scalable Financial Dashboards",
    subtitle: "Bank-Grade Encryption & Real-time Analytics",
    image: "/main/2/hero/ae1f104c5bfee9025a9035f3a9d49447.jpg.jpeg",
    tag: "Security & Speed",
  },
  {
    category: "E-Commerce & Digital Stores",
    title: "High-Conversion Shopping Engines",
    subtitle: "Sub-Second Page Loads & Frictionless Checkout",
    image: "/main/1/footer/protfolio.png",
    tag: "Revenue Growth",
  },
  {
    category: "Healthcare & AgriTech",
    title: "Data-Driven SaaS Platforms",
    subtitle: "Real-time Telemetry & Cloud Storage",
    image: "/main/1/real-projects/effect.png",
    tag: "High Reliability",
  },
  {
    category: "Travel & Hospitality",
    title: "Interactive Booking Ecosystems",
    subtitle: "Global CDN & Multilingual Localization",
    image: "/main/1/real-projects/motion.png",
    tag: "Seamless UX",
  },
];

const TECH_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend & UI",
    items: [
      { name: "React 19 & Next.js", desc: "Modern Server Components & SSR" },
      { name: "Tailwind CSS v4", desc: "Custom aesthetic design system" },
      { name: "GSAP & Lenis", desc: "Smooth scrolling & GPU animations" },
      { name: "TypeScript", desc: "Type-safe production reliability" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    items: [
      { name: "Node.js & Express", desc: "Asynchronous event-driven services" },
      { name: "Python & FastAPI", desc: "High-throughput data & AI processing" },
      { name: "GraphQL & REST", desc: "Structured & typed API layers" },
      { name: "WebSockets & WebRTC", desc: "Real-time bidirectional messaging" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Database",
    items: [
      { name: "PostgreSQL & MongoDB", desc: "Scalable relational & document stores" },
      { name: "Redis Caching", desc: "Ultra-fast in-memory data caching" },
      { name: "Docker & Kubernetes", desc: "Containerized microservice deployments" },
      { name: "AWS & Cloudflare", desc: "Global edge distribution & DDoS shielding" },
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    items: [
      { name: "OpenAI & LLM Integration", desc: "Custom fine-tuned AI workflows" },
      { name: "RAG & Vector DBs", desc: "Retrieval Augmented Generation with Pinecone" },
      { name: "PyTorch & Machine Learning", desc: "Predictive modeling & automation" },
      { name: "LangChain & Agentic AI", desc: "Autonomous multi-step task execution" },
    ],
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("frontend");

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
      );
      gsap.fromTo(
        "[class*='hero-asset-2-'], [class*='mobile-asset-2-']",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.25, stagger: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        ".bento-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bento-grid-section",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      
      {/* Hero Section */}
      <div id="home" className="sticky top-0 z-10 h-[100dvh] w-full">
        <section
          id="color-grading-hero"
          className="relative w-full h-screen bg-white sm:bg-white text-white flex flex-col overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, #000000 20%, #000000 36%, #888888 75%, #FFFFFF 100%)",
            }}
          ></div>
          <div className="relative z-30 w-full grow flex flex-col items-center justify-between min-h-0 pt-14 sm:pt-18 lg:pt-20 pb-4 sm:pb-6">
            <div className="w-full max-w-4xl text-center space-y-1 sm:space-y-1.5 shrink-0 px-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="hero-text-item opacity-0 font-normal block text-base sm:text-2xl md:text-3xl lg:text-4xl text-neutral-200">
                  About DEV KODE
                </span>
                <span className="hero-text-item opacity-0 font-extrabold block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Engineering from basic to pro
                </span>
              </h1>
              <p className="hero-text-item opacity-0 text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-xs sm:max-w-md lg:max-w-lg mx-auto font-normal leading-relaxed pt-0.5">
                Learn professional software engineering techniques to bring life, scalability, and modern web performance to your products.
              </p>
            </div>

            {/* Mobile Asset Composition */}
            <div className="relative w-full grow min-h-0 flex lg:hidden flex-col items-center justify-center px-4 max-w-[340px] sm:max-w-md mx-auto space-y-2 sm:space-y-3 my-auto pt-4 pb-3 select-none">
              <div className="mobile-asset-2-3 opacity-0 relative w-full aspect-[933/525] rounded-xl overflow-hidden shadow-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
                <img
                  alt="Engineering Architecture Preview"
                  decoding="async"
                  className="object-cover object-center absolute inset-0 w-full h-full text-transparent"
                  src="/main/3/hero/seprate/2.3.png"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                <div className="mobile-asset-2-1 opacity-0 relative w-full aspect-[367/423] rounded-xl overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Capcut Code Modules"
                    decoding="async"
                    className="object-contain object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/3/hero/seprate/2.1.png"
                  />
                </div>
                <div className="mobile-asset-2-2 opacity-0 relative w-full aspect-[358/484] rounded-xl overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Curves Modal"
                    decoding="async"
                    className="object-contain object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/3/hero/seprate/2.2.png"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Asset Composition */}
            <div className="relative w-full grow min-h-0 hidden lg:flex items-center justify-center px-4 xl:px-8 overflow-visible my-auto pt-2 pb-4 sm:pb-6">
              <div className="relative w-[720px] xl:w-[640px] 2xl:w-[760px] aspect-[933/525] mx-auto select-none">
                <div className="hero-asset-2-3 opacity-0 absolute inset-0 w-full h-full z-10 rounded-xl overflow-hidden drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:scale-[1.015]">
                  <img
                    alt="DEV KODE Engineering Preview"
                    decoding="async"
                    className="object-contain object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/3/hero/seprate/2.3.png"
                  />
                </div>
                <div className="hero-asset-2-6 opacity-0 absolute left-0 right-0 top-[102%] w-full aspect-[934/84] z-10 rounded-md overflow-hidden drop-shadow-[0_15px_30px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    alt="Timeline Sequencer"
                    decoding="async"
                    className="object-contain object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/3/hero/seprate/2.6.png"
                  />
                </div>
                <div className="hero-asset-2-1 opacity-0 absolute -left-[35%] -top-[2.5%] w-[33.33%] aspect-[367/423] z-20 rounded-2xl overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Filters Modal"
                    decoding="async"
                    className="object-contain object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/3/hero/seprate/2.1.png"
                  />
                </div>
                <div className="hero-asset-2-2 opacity-0 absolute -right-[41%] -top-[1%] w-[38.37%] aspect-[278/384] z-20 rounded-2xl overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Curves Modal"
                    decoding="async"
                    className="object-contain object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/3/hero/seprate/2.2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating White Overlay Container */}
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-12 sm:pb-20">
        
        {/* Bento Grid Section */}
        <div id="features" className="bento-grid-section">
          <section className="relative w-full bg-white text-neutral-900 pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
              
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 inline-block">
                  Core Engineering Capabilities
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                  What We Build in DEV KODE
                </h2>
                <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                  End-to-end software solutions designed for reliability and scale.
                </p>
              </div>

              {/* Bento Grid 12-Column Layout */}
              <div className="hidden lg:grid grid-cols-12 gap-5 w-full items-stretch">
                
                <div className="col-span-4 bento-card bg-black text-white rounded-3xl p-7 flex flex-col justify-between border border-neutral-900 shadow-xl overflow-hidden min-h-[580px]">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Architecture & Standards
                    </span>
                    <h3 className="text-3xl xl:text-4xl font-semibold tracking-tight leading-tight pt-2">
                      Engineering <br />
                      <span className="text-[#FF5A1F] font-bold text-5xl">
                        Excellence
                      </span>
                    </h3>
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm">
                      We construct clean, maintainable software architectures equipped for low latency, secure API endpoints, and automatic cloud scaling.
                    </p>
                  </div>

                  <div className="w-full grow mt-6 rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 relative p-4 flex flex-col justify-center space-y-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-300">Frontend SLA</span>
                      <span className="text-xs font-bold text-emerald-400">99.9% Score</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-300">API Response</span>
                      <span className="text-xs font-bold text-orange-400">&lt; 45ms</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-300">Security Audit</span>
                      <span className="text-xs font-bold text-blue-400">Passed ISO27001</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-8 grid grid-cols-2 gap-5">
                  {BENTO_CARDS.map((card, idx) => (
                    <div
                      key={idx}
                      className="bento-card bg-[#F4F4F4] text-neutral-900 rounded-3xl p-6 flex flex-col justify-between border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 min-h-[275px]"
                    >
                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase text-orange-600 tracking-wider">
                            {card.tag}
                          </span>
                          <span className="text-[10px] font-semibold bg-white px-2.5 py-0.5 rounded-full border border-neutral-200 text-neutral-600">
                            {card.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-950 tracking-tight leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-[11px] text-[#6B7280] font-normal leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      <div className="w-full h-32 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-950 relative group">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Mobile Bento Stack */}
              <div className="block lg:hidden w-full space-y-4">
                {BENTO_CARDS.map((card, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-[#F4F4F4] border border-neutral-200 space-y-3">
                    <span className="text-xs font-bold uppercase text-orange-600">{card.tag}</span>
                    <h3 className="text-xl font-bold text-neutral-950">{card.title}</h3>
                    <p className="text-xs text-neutral-600">{card.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </div>

        {/* Interactive Web Development Pipeline */}
        <EngineeringPipeline />

        {/* Industry Impact Cards Section */}
        <section className="relative w-full bg-white text-neutral-900 pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 select-none border-t border-neutral-100">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                How DEV KODE Transforms Digital Products
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                Tailored architectural approaches for every industry sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {INDUSTRY_CARDS.map((item, idx) => (
                <div key={idx} className="bg-[#F4F4F6] rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-lg transition-all">
                  <div className="relative w-full h-64 overflow-hidden rounded-t-3xl bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-xs font-bold uppercase text-orange-400 tracking-wider block mb-1">
                        {item.tag}
                      </span>
                      <h4 className="text-white font-bold text-lg leading-tight">
                        {item.category}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6 text-center space-y-1 bg-[#F4F4F6] grow flex flex-col justify-between">
                    <div>
                      <h5 className="text-base font-extrabold text-neutral-950">{item.title}</h5>
                      <p className="text-xs text-neutral-500 pt-1 font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Competitive Advantage Comparison Matrix */}
        <ComparisonMatrix />

        {/* Tech Stack Category Grid */}
        <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] select-none border-t border-neutral-200/80">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 inline-block">
                Technology Stack
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight">
                Modern Tools. Zero Compromises.
              </h2>
              <p className="text-xs sm:text-base text-neutral-500 font-normal leading-relaxed">
                We utilize industry-proven frameworks, databases, and infrastructure tools to ensure maximum performance.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {TECH_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-neutral-950 text-white shadow-md"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tech Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {TECH_CATEGORIES.find((c) => c.id === activeTab)?.items.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:border-orange-500/40 hover:shadow-md transition-all space-y-2 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-extrabold text-neutral-950 tracking-tight">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 select-none">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 text-white border border-neutral-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Ready to transform your idea into scalable software?
              </h3>
              <p className="text-xs sm:text-base text-neutral-400 font-normal">
                Talk to our engineering team today. We provide free architecture consultations and scope estimates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E93749] to-[#FE6936] text-white font-extrabold text-sm shadow-lg hover:scale-105 transition-all active:scale-95 text-center"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all text-center"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
