import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  X,
  ArrowRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ACCORDION_SERVICES = [
  {
    id: "web-development",
    initial: "W",
    badge: "High Performance",
    title: "Web Applications",
    highlight: "& Platforms",
    description: "Modern, responsive React 19 & Next.js web applications engineered for sub-second speeds, top-tier SEO visibility, and seamless user experiences.",
    image: "/main/5/what/music-prof.png",
    deliverables: ["Next.js 15 & SSR", "TypeScript Security", "Sub-50ms TTFB", "PWA & Mobile Ready"]
  },
  {
    id: "custom-software",
    initial: "S",
    badge: "Tailored Architecture",
    title: "Custom Software",
    highlight: "& SaaS Systems",
    description: "Bespoke business platforms, management dashboards, internal CRM tools, and scalable SaaS solutions built around your exact operational workflows.",
    image: "/main/5/what/audio.png",
    deliverables: ["Role-Based Access (RBAC)", "PostgreSQL / MongoDB", "REST & GraphQL APIs", "Automated Workflows"]
  },
  {
    id: "mobile-apps",
    initial: "M",
    badge: "iOS & Android",
    title: "Mobile Apps",
    highlight: "& Cross-Platform",
    description: "Smooth, native-performing mobile applications built with React Native. Offline-first synchronization, push alerts, and biometric security built in.",
    image: "/main/5/what/volume.png",
    deliverables: ["Single Codebase for Both", "Biometric Authentication", "Offline-First Sync", "App Store Publishing"]
  },
  {
    id: "ai-automation",
    initial: "A",
    badge: "Intelligent Systems",
    title: "AI Integration",
    highlight: "& Automation",
    description: "Custom AI agents, LangChain workflows, OpenAI LLM integrations, and RAG vector search pipelines that automate tasks and elevate business intelligence.",
    image: "/main/5/what/feel.png",
    deliverables: ["Custom LLM Agents", "Vector Embeddings & RAG", "Automated Data Processing", "Predictive Analytics"]
  },
  {
    id: "cloud-devops",
    initial: "C",
    badge: "99.99% Availability",
    title: "Cloud & DevOps",
    highlight: "& Microservices",
    description: "Containerized Docker microservices, Kubernetes clusters, and automated CI/CD deployments on AWS and Cloudflare with zero-downtime rollouts.",
    image: "/main/5/what/quality.png",
    deliverables: ["Docker & Kubernetes", "Cloudflare Global Edge", "Automated CI/CD", "24/7 Monitoring & Alerting"]
  }
];

const IMPACT_CARDS = [
  {
    title: "Sub-Second",
    subtitle: "Blazing Speed & SEO",
    description: "Sub-50ms page load speeds and 99+ Core Web Vitals maximize organic search traffic and boost user conversion rates.",
    image: "/main/5/moods/happy.png",
    tag: "High Speed"
  },
  {
    title: "Zero Downtime",
    subtitle: "99.99% Availability",
    description: "Fault-tolerant microservice architecture with automated health checks, instant failover, and continuous monitoring.",
    image: "/main/5/moods/sad.png",
    tag: "Reliability"
  },
  {
    title: "Frictionless",
    subtitle: "High Conversion UX",
    description: "Engineered user flows, intuitive micro-animations, and responsive interactions that keep customers engaged.",
    image: "/main/5/moods/exiting.png",
    tag: "User Experience"
  },
  {
    title: "Hardened",
    subtitle: "Bank-Grade Security",
    description: "End-to-end encryption, strict OAuth2 authentication, CSRF shields, and rigorous vulnerability auditing.",
    image: "/main/5/moods/cinematic.png",
    tag: "Data Protection"
  },
  {
    title: "Autoscaling",
    subtitle: "Elastic Cloud Capacity",
    description: "Cloud-native containers that automatically expand during heavy traffic spikes without degrading latency.",
    image: "/main/5/moods/relaxing.jpg",
    tag: "Infinite Scale"
  },
  {
    title: "Autonomous",
    subtitle: "Intelligent AI Workflows",
    description: "Context-aware AI agents and background task automation that eliminate hundreds of repetitive operational hours.",
    image: "/main/5/moods/tension.png",
    tag: "AI Powered"
  }
];

const TOOLS_LIST = [
  {
    title: "Next.js 15 & React 19",
    description: "Server components, streaming SSR, and edge hydration for lightning performance.",
    image: "/main/5/tools/volumne.png"
  },
  {
    title: "Node.js & Microservices",
    description: "High-throughput asynchronous event-driven services with sub-millisecond dispatching.",
    image: "/main/5/tools/fade.png"
  },
  {
    title: "TypeScript & GraphQL",
    description: "Strict end-to-end type safety, reliable schema validation, and flexible querying.",
    image: "/main/5/tools/split.png"
  },
  {
    title: "React Native Mobile",
    description: "Native 60fps performance across iOS and Android from one unified, scalable codebase.",
    image: "/main/5/tools/speed.png"
  },
  {
    title: "AI & LangChain Agents",
    description: "Autonomous LLM task execution, vector databases, and custom prompt workflows.",
    image: "/main/5/tools/audio duc.png"
  },
  {
    title: "Docker & Cloudflare Edge",
    description: "Containerized deployments, automated CI/CD pipelines, and global CDN caching.",
    image: "/main/5/tools/noise.png"
  }
];

const COMPARISON_ROWS = [
  {
    title: "Time to Kickoff",
    typical: "2 - 4 Weeks of Bureaucracy",
    devkode: "⚡ 48 Hours Rapid Kickoff",
    badge: "10x Faster"
  },
  {
    title: "Developer Talent",
    typical: "Junior Outsourced Devs",
    devkode: "100% Senior Software Engineers",
    badge: "Top 1% Talent"
  },
  {
    title: "Code Ownership & IP",
    typical: "Vendor Lock-in & Licenses",
    devkode: "100% Full IP & Code Ownership",
    badge: "Zero Lock-in"
  },
  {
    title: "AI Integration",
    typical: "Costly Afterthought Add-on",
    devkode: "Built-in AI & LLM Automation",
    badge: "Native AI"
  },
  {
    title: "Performance Standards",
    typical: "Standard Shared Hosting",
    devkode: "Sub-50ms Global Edge TTFB",
    badge: "Global Edge"
  },
  {
    title: "Client Communication",
    typical: "Slow Support Ticket Queues",
    devkode: "Direct Slack & WhatsApp Channel",
    badge: "Dedicated Channel"
  }
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-main-title, .hero-capcut-text, .hero-desc-block",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-person-wrapper",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.9, delay: 0.2, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      
      {/* Sticky Parallax Hero Section */}
      <div id="home" className="sticky top-0 z-10 w-full">
        <section
          id="home"
          className="relative w-full h-[650px] lg:h-[820px] bg-black text-white flex flex-col items-center justify-between select-none overflow-visible pb-0"
        >
          {/* Background Images & Gradient Overlays */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              alt="DEV KODE Services Background"
              decoding="async"
              className="hero-bg-img-desktop hidden md:block object-cover object-center opacity-100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              src="/main/5/hero/bg.png"
            />
            <img
              alt="Mobile Hero Background"
              decoding="async"
              className="hero-bg-img-mobile block md:hidden object-cover opacity-100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
                transform: "translateY(120px) scale(1.3)",
                transformOrigin: "center center",
              }}
              src="/main/5/hero/mobile-hero.png"
            />
            <div
              className="absolute inset-0 z-10 pointer-events-none block md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.25) 55%, transparent 85%)",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10 pointer-events-none hidden md:block"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, #000000 35%, rgba(0,0,0,0.6) 65%, transparent 100%)",
              }}
            ></div>
          </div>

          {/* Hero Typography Container */}
          <div className="relative z-20 w-full max-w-7xl mx-auto pt-10 sm:pt-12 lg:pt-14 px-4 flex flex-col items-center">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center pt-15 md:pt-0">
              <h1 className="hero-main-title lg:absolute lg:top-[155px] lg:right-[180px] text-2xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
                Software &amp; Digital Services in
              </h1>
              <div className="relative w-full max-w-4xl mx-auto mt-1 sm:mt-2 min-h-0 lg:h-[320px]">
                <h2 className="hero-capcut-text text-3xl sm:text-7xl lg:text-8xl font-bold sm:font-black tracking-tight leading-none text-center lg:text-right lg:absolute lg:right-12 lg:top-[167px]">
                  <span className="text-white sm:text-transparent sm:bg-gradient-to-r sm:from-[#EA3A47] sm:to-[#FD6837] sm:bg-clip-text">
                    DEV KODE
                  </span>
                </h2>
                <div className="hero-desc-block lg:absolute lg:right-12 lg:top-[274px] text-center lg:text-left max-w-xs space-y-1.5 mt-3 lg:mt-0 mx-auto">
                  <h3 className="lg:absolute lg:right-[72px] lg:top-0 text-xs sm:text-base lg:text-lg sm:font-bold text-white tracking-wide leading-snug text-center lg:text-left">
                    From Concept to Production
                  </h3>
                  <p className="mt-4 sm:mt-7 mx-auto lg:ml-2.5 text-[9px] sm:text-sm text-[#D1D5DB] sm:text-[#EFEFEF] font-normal leading-relaxed opacity-75 text-center lg:text-left">
                    We engineer high-performance web applications, bespoke enterprise software, AI automation pipelines, and native mobile apps designed to scale seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Foreground 3D Person / Visual Specialist */}
          <div className="relative z-30 w-full flex justify-center pointer-events-none mt-auto">
            <div className="hero-person-wrapper relative w-[340px] sm:w-[500px] lg:w-[640px] h-[340px] sm:h-[480px] lg:h-[580px] translate-y-19 sm:-translate-y-6 lg:-translate-y-12 mb-6 sm:mb-10 lg:mb-16">
              <img
                alt="DEV KODE 3D Engineering Specialist"
                decoding="async"
                className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] scale-118 sm:scale-120 origin-bottom"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                }}
                src="/main/5/hero/person.png"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Floating White Overlay Container */}
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-4 sm:pb-8">
        
        {/* Section 1: "What You'll Learn" -> Services We Deliver */}
        <div id="features">
          <section className="relative w-full bg-white text-neutral-900 pt-16 sm:pt-24 pb-7 sm:pb-14 px-4 sm:px-6 lg:px-8 select-none overflow-visible lg:overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center mt-2">
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5533] bg-[#FFF2EE] px-4 py-1.5 rounded-full border border-[#FF5533]/30 inline-block">
                  Comprehensive Offerings
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                  Services We Deliver
                </h2>
                <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                  Everything you need to launch, scale, and automate your digital platforms.
                </p>
              </div>

              {/* Mobile Card Deck View */}
              <div className="block lg:hidden w-full max-w-[380px] sm:max-w-sm mx-auto mt-3">
                <div className="relative w-full h-[470px] sm:h-[450px] pt-4 overflow-visible">
                  {ACCORDION_SERVICES.map((srv, idx) => (
                    <div
                      key={srv.id}
                      style={{ zIndex: (idx + 1) * 10, transformOrigin: "top center" }}
                      className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-neutral-900 flex flex-col justify-between p-0 shadow-xl"
                    >
                      <div className="mobile-card-image relative w-full h-[58%] overflow-hidden rounded-t-3xl shrink-0 bg-neutral-950">
                        <img
                          alt={srv.title}
                          loading="lazy"
                          decoding="async"
                          className="object-cover object-center w-full h-full absolute inset-0"
                          src={srv.image}
                        />
                      </div>
                      <div className="mobile-card-text p-5 flex flex-col justify-start space-y-1.5 grow bg-black">
                        <h3 className="leading-tight text-white">
                          <span className="block text-base font-semibold">
                            {srv.title}
                          </span>
                          <span className="font-bold text-lg text-[#FF5533]">
                            {srv.highlight}
                          </span>
                        </h3>
                        <p className="text-xs text-neutral-300 font-normal leading-relaxed opacity-90 line-clamp-3">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Interactive Accordion View */}
              <div className="hidden lg:flex w-full gap-4 h-[470px] items-stretch">
                {ACCORDION_SERVICES.map((srv, idx) => {
                  const isActive = activeAccordion === idx;
                  return (
                    <div
                      key={srv.id}
                      onMouseEnter={() => setActiveAccordion(idx)}
                      onClick={() => setActiveAccordion(idx)}
                      style={{ flexGrow: isActive ? 2.5 : 1 }}
                      className={`learn-accordion-card min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 ease-out ${
                        isActive
                          ? "bg-black text-white shadow-2xl border border-neutral-800"
                          : "bg-[#F4F4F6] text-neutral-950 hover:bg-[#EBEBEF] shadow-sm border border-neutral-200/80"
                      }`}
                    >
                      <div className="relative w-full h-[56%] overflow-hidden rounded-t-2xl shrink-0 bg-neutral-900">
                        <img
                          alt={srv.title}
                          loading="lazy"
                          decoding="async"
                          className={`object-cover object-center w-full h-full absolute inset-0 transition-all duration-700 ${
                            isActive ? "scale-105 opacity-100" : "scale-100 opacity-80"
                          }`}
                          src={srv.image}
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/60 text-white border border-white/20">
                          {srv.badge}
                        </div>
                      </div>

                      <div className="p-5 flex flex-col justify-between grow space-y-2">
                        <div className="space-y-1">
                          <h3 className="tracking-tight leading-tight">
                            <span className={`block text-base sm:text-lg font-semibold ${isActive ? "text-white" : "text-neutral-900"}`}>
                              {srv.title}
                            </span>
                            <span className={`font-bold text-xl ${isActive ? "text-[#FF5533]" : "text-neutral-950"}`}>
                              {srv.highlight}
                            </span>
                          </h3>
                          <p className={`leading-relaxed transition-opacity duration-300 text-xs ${isActive ? "text-neutral-300 line-clamp-3" : "text-[#6B7280] line-clamp-2"}`}>
                            {srv.description}
                          </p>
                        </div>

                        {isActive && (
                          <div className="pt-2 flex items-center justify-between border-t border-white/10">
                            <span className="text-[11px] font-mono text-orange-400">
                              Production Ready
                            </span>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#EA3A47] to-[#FD6837] text-white text-xs font-bold hover:scale-105 transition-transform"
                            >
                              <span>Explore</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        </div>

        {/* Section 2: "How Music Changes the Feel" -> How High-End Engineering Elevates Your Business */}
        <section className="relative w-full bg-white text-neutral-900 pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            
            <div className="mood-header text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5533] bg-[#FFF2EE] px-4 py-1.5 rounded-full border border-[#FF5533]/30 inline-block">
                Measurable Impact
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                How Modern Engineering Elevates Your Business
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                The right technology stack creates real competitive advantage and lasting market leadership.
              </p>
            </div>

            <div className="mood-grid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {IMPACT_CARDS.map((item, idx) => (
                <div
                  key={idx}
                  className="mood-card bg-[#F4F4F6] rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-xl transition-all duration-300 cursor-default border border-neutral-200/50 group"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden order-first sm:order-last bg-neutral-900">
                    <img
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="mood-card-img object-cover object-center w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      src={item.image}
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-black/60 text-white backdrop-blur-md border border-white/10">
                      {item.tag}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5533] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-neutral-900">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: "CapCut Audio Tools" -> Engineering Tools & Frameworks We Master */}
        <section className="relative w-full bg-white text-neutral-900 pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            
            <div className="tools-header text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5533] bg-[#FFF2EE] px-4 py-1.5 rounded-full border border-[#FF5533]/30 inline-block">
                Industry-Proven Tech Stack
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                Tools &amp; Technologies We Master
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                Modern developer frameworks, databases, and infrastructure tools powering every release.
              </p>
            </div>

            <div className="tools-grid w-full grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {TOOLS_LIST.map((tool, idx) => (
                <div
                  key={idx}
                  className="tool-card flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-[#FAF9F9] hover:bg-white rounded-2xl p-4 sm:p-6 cursor-default transition-all duration-300 hover:shadow-lg text-center sm:text-left border border-neutral-200/60"
                >
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center p-3">
                    <img
                      alt={tool.title}
                      loading="lazy"
                      decoding="async"
                      className="object-contain w-full h-full"
                      src={tool.image}
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                      {tool.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: "Why Choose Our Course" -> Why Choose DEV KODE Comparison Table */}
        <section className="w-full py-16 sm:py-20 bg-transparent text-neutral-900 overflow-hidden select-none">
          <div className="comparison-parallax-container max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="inline-flex px-4 py-1.5 rounded-full border border-[#FF7A59] bg-white text-xs sm:text-sm font-semibold text-[#FF7A59] shadow-xs">
                Why Choose DEV KODE?
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191C1D] max-w-4xl mx-auto leading-[1.12]">
                See the Difference. <br className="sm:hidden" /> Choose What's Better for Your Business.
              </h2>
              <p className="text-[#717680] text-xs sm:text-sm md:text-base max-w-xs sm:max-w-xl mx-auto leading-relaxed">
                Compare traditional agency development with DEV KODE's dedicated, agile engineering sprint model.
              </p>
            </div>

            {/* 3-Column Comparison Table Card */}
            <div className="w-full max-w-6xl mx-auto rounded-[20px] sm:rounded-[15px] border border-[#FF7A59]/60 sm:border-[#FF5A1F] shadow-xl bg-white overflow-hidden">
              
              <div className="grid grid-cols-3 border-b border-[#FF7A59]/30">
                <div className="p-2.5 sm:p-6 text-xs sm:text-xl font-bold text-[#191C1D] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  Core Criteria
                </div>
                <div className="p-2.5 sm:p-6 text-xs sm:text-xl font-bold text-neutral-400 border-x border-neutral-100 bg-[#FAF9F9] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  Typical Agencies
                </div>
                <div className="p-2.5 sm:p-6 text-xs sm:text-xl font-bold text-[#FF5A1F] bg-[#FFF7F4] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  DEV KODE Engineering
                </div>
              </div>

              <div className="divide-y divide-neutral-100 relative z-20">
                {COMPARISON_ROWS.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 items-stretch min-h-20 sm:min-h-22">
                    
                    {/* Feature name */}
                    <div className="p-2.5 sm:p-5 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                      <div className="hidden sm:flex w-8 h-8 rounded-xl bg-[#FFF2EE] items-center justify-center shrink-0 border border-[#FF5B1F]/20 text-[#FF5B1F]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-base font-bold text-[#191C1D] leading-tight">
                        {row.title}
                      </span>
                    </div>

                    {/* Typical agency */}
                    <div className="p-2.5 sm:p-5 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FFEAEB] flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 text-[#FF3B30] stroke-[2.5]" />
                      </div>
                      <span className="text-[10px] sm:text-sm font-medium text-[#8B95A5] leading-tight">
                        {row.typical}
                      </span>
                    </div>

                    {/* DEV KODE */}
                    <div className="p-2.5 sm:p-5 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#22C55E] stroke-[3]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-sm font-bold text-white leading-tight">
                          {row.devkode}
                        </span>
                        <span className="text-[9px] sm:text-[11px] text-white/80 font-medium hidden sm:inline">
                          ({row.badge})
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Call-to-Action Bar */}
            <div className="text-center space-y-4 pt-6">
              <p className="text-[#717680] text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto leading-relaxed font-normal">
                Ready to transform your ideas into scalable, production-ready software? Talk to our engineering leads today.
              </p>
              <div className="flex justify-center">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white text-base md:text-lg font-bold transition-all duration-300 shadow-xl shadow-red-500/30 hover:scale-105 cursor-pointer select-none px-8 py-3.5"
                  to="/contact"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 5: "Explore More Modules" -> Explore Projects & About */}
        <section className="relative w-full bg-white text-neutral-900 py-12 px-4 sm:px-6 lg:px-8 select-none border-t border-neutral-100">
          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
            
            <div className="text-center space-y-2.5 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Explore What We've Built
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-xs sm:max-w-none mx-auto">
                See real client case studies and discover the team behind DEV KODE's engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              
              <Link
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-[#FFF6F3] border-[#FF5B1F] shadow-orange-500/10 hover:shadow-orange-500/20"
                to="/projects"
              >
                <div className="w-[60%] p-4 sm:p-7 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                  <div className="flex items-center gap-1 text-[11px] sm:text-sm font-semibold">
                    <span className="text-[#FF5B1F]">Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-[#FF5B1F]" />
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 bg-[#FF5B1F] text-white">
                      01
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight leading-tight">
                      Featured Projects
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Explore live enterprise SaaS dashboards, e-commerce stores, and tourism platforms engineered by DEV KODE.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="Featured Projects"
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-center w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    src="/main/5/course-click/editing-fundementals.png"
                  />
                </div>
              </Link>

              <Link
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-white border-neutral-200/80 hover:border-neutral-300 shadow-neutral-200/50"
                to="/about"
              >
                <div className="w-[60%] p-4 sm:p-7 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                  <div className="flex items-center gap-1 text-[11px] sm:text-sm font-semibold">
                    <span className="text-gray-500">Agency &amp; Culture</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-gray-500" />
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 bg-neutral-300 text-neutral-600">
                      02
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight leading-tight">
                      About DEV KODE
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Learn about our engineering philosophy, architectural standards, and dedicated core team of developers.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="About DEV KODE"
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-center w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    src="/main/5/course-click/color-2'.png"
                  />
                </div>
              </Link>

            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
