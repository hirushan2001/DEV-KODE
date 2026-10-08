import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CAROUSEL_CARDS = [
  { id: 0, title: "DayTours Sri Lanka", category: "Travel & Tourism Platform", src: "/main/1/real-projects/motion.png" },
  { id: 1, title: "Serendib Adventures", category: "Outdoor Experience Hub", src: "/main/1/real-projects/before-after.png" },
  { id: 2, title: "FieldMaster", category: "AgriTech & Land SaaS", src: "/main/1/real-projects/effect.png" },
  { id: 3, title: "HandFree E-Commerce", category: "MERN Microservices Store", src: "/main/1/footer/protfolio.png" },
  { id: 4, title: "RooVerse Media", category: "Entertainment & Streaming", src: "/main/1/footer/realtime.png" },
  { id: 5, title: "DevFlow AI Engine", category: "Intelligent Workflow Automation", src: "/main/2/hero/434d852c4f47767d82a96a99e501c917.jpg.jpeg" },
  { id: 6, title: "Apex FinTech Portal", category: "Financial Analytics Dashboard", src: "/main/2/hero/ae1f104c5bfee9025a9035f3a9d49447.jpg.jpeg" },
  { id: 7, title: "Nova Cloud DevOps", category: "Cloud & Microservices Engine", src: "/main/2/hero/282f9ac0a1f1f98969da9a7613156af7.jpg.jpeg" },
  { id: 8, title: "Pulse Design System", category: "Interactive UI/UX Library", src: "/main/2/hero/fdccef552fe4a305d5aa734bdf3d1b27.jpg.jpeg" },
];

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [screenCategory, setScreenCategory] = useState("desktop");
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenCategory("mobile");
      else if (width < 1024) setScreenCategory("tablet");
      else setScreenCategory("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      // 1. Hero Load Entrance
      gsap.fromTo(
        ".hero-text-item",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-carousel-box",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.9, delay: 0.25, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-footer-item",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.55, ease: "power2.out" }
      );

      // 2. Hero Parallax Fade on Scroll
      gsap.to("#home-content", {
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -60,
        opacity: 0.35,
        scale: 0.95,
      });

      // 3. Feature Section Header & Desktop Feature Cards Reveal
      gsap.fromTo(
        ".feature-header-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#features",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-card-grid",
            start: "top 85%",
          },
        }
      );

      // 4. Core Skills Section Reveal
      gsap.fromTo(
        ".core-skills-img",
        { x: -40, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#core-skills",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".core-skill-item",
        { x: 35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".core-skill-list",
            start: "top 85%",
          },
        }
      );

      // 5. Project Engineering Pillars
      gsap.fromTo(
        ".pillar-card",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".pillar-grid",
            start: "top 85%",
          },
        }
      );

      // 6. Showcase Videos / Active Projects
      gsap.fromTo(
        ".showcase-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".showcase-grid",
            start: "top 80%",
          },
        }
      );

      // 7. Comparison Table Reveal
      gsap.fromTo(
        ".comparison-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".comparison-parallax-container",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".comparison-row",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".comparison-table-container",
            start: "top 85%",
          },
        }
      );

      // 8. Module Cards
      gsap.fromTo(
        ".module-card",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".module-grid",
            start: "top 85%",
          },
        }
      );
    }, heroRef);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  const getCardStyle = (index) => {
    const total = CAROUSEL_CARDS.length;
    let diff = index - activeIndex;

    // Circular wrap-around calculation so the arc is ALWAYS perfectly centered
    if (diff > Math.floor(total / 2)) {
      diff -= total;
    } else if (diff < -Math.floor(total / 2)) {
      diff += total;
    }

    const absDiff = Math.abs(diff);

    let spacing = 135;
    let maxVisible = 3;
    let baseScale = 1.15;
    let dropFactor = 22;

    if (screenCategory === "mobile") {
      spacing = 58;
      maxVisible = 2;
      baseScale = 0.95;
      dropFactor = 14;
    } else if (screenCategory === "tablet") {
      spacing = 95;
      maxVisible = 3;
      baseScale = 1.05;
      dropFactor = 18;
    }

    if (absDiff > maxVisible + 1) {
      return {
        opacity: 0,
        pointerEvents: "none",
        transform: `translate3d(${diff * spacing}px, 250px, -400px) scale(0.3)`,
        zIndex: 0,
      };
    }

    const translateX = diff * spacing;
    const translateY = Math.pow(absDiff, 1.62) * dropFactor;
    const translateZ = diff === 0 ? 140 : 100 - absDiff * 45;
    const rotateY = -diff * (screenCategory === "mobile" ? 12 : 15);
    const rotateZ = -diff * (screenCategory === "mobile" ? 4.5 : 7.2);
    const scale = diff === 0 ? baseScale : Math.max(0.6, (screenCategory === "mobile" ? 0.9 : 1.04) - absDiff * 0.08);
    const zIndex = diff === 0 ? 50 : 40 - absDiff * 5;
    const opacity = absDiff > maxVisible ? 0 : 1 - absDiff * 0.03;
    const brightness = diff === 0 ? 1.1 : Math.max(0.7, 1.0 - absDiff * 0.06);

    return {
      transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
      zIndex,
      opacity,
      filter: `brightness(${brightness}) ${diff === 0 ? "drop-shadow(0 30px 45px rgba(0,0,0,0.85))" : "drop-shadow(0 15px 25px rgba(0,0,0,0.65))"}`,
      transition: "transform 0.65s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.65s ease, filter 0.65s ease",
    };
  };

  return (
    <div ref={heroRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      <div id="home" className="sticky top-0 z-10 h-[100dvh] w-full">
        <section
          id="home"
          className="relative w-full h-screen bg-black text-white pt-16 sm:pt-24 pb-4 sm:pb-8 flex flex-col justify-between overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 65% at 50% 85%, #353539 0%, #121215 55%, #000000 100%)",
            }}
          ></div>
          <div id="home-content" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grow flex flex-col items-center justify-center gap-3 sm:gap-6 my-auto pt-0 sm:pt-2 pb-4">
            <div className="w-full max-w-4xl text-center space-y-2 sm:space-y-3">
              <h1 className="hero-text-item opacity-0 text-3xl sm:text-5xl md:text-6xl font-bold sm:font-semibold tracking-tight leading-[1.15] sm:leading-[1.1] text-white">
                Featured Projects <br className="block sm:hidden" /> & Digital Solutions.
              </h1>
              <h2 className="hero-text-item opacity-0 hidden sm:block text-sm sm:text-lg font-semibold text-white tracking-wide pt-0.5">
                Engineered by DEV KODE
              </h2>
              <p className="hero-text-item opacity-0 text-xs sm:text-sm text-[#D1D5DB] sm:text-[#6B7280] max-w-xs sm:max-w-xl mx-auto font-normal leading-relaxed">
                Explore our portfolio of scalable web applications, custom software platforms, AI automation systems, and high-performance digital products.
              </p>
            </div>
            <div className="relative w-full max-w-6xl mt-4 sm:mt-6 flex flex-col items-center justify-center shrink">
              <div
                className="hero-carousel-box opacity-0 relative w-full h-[320px] xs:h-[350px] sm:h-[390px] md:h-[420px] lg:h-[450px] flex items-center justify-center"
                style={{ perspective: "1200px" }}
              >
                {CAROUSEL_CARDS.map((card, index) => {
                  const style = getCardStyle(index);
                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveIndex(index)}
                      className="absolute cursor-pointer will-change-transform select-none hover:brightness-110"
                      style={{
                        transformStyle: "preserve-3d",
                        ...style,
                      }}
                      title={`Click to focus ${card.title}`}
                    >
                      <div className="relative w-[180px] xs:w-[200px] sm:w-[230px] md:w-[255px] lg:w-[275px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                        <img
                          alt={card.title}
                          decoding="async"
                          className="object-cover pointer-events-none w-full h-full absolute inset-0"
                          src={card.src}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                          <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                            {card.category}
                          </span>
                          <h4 className="text-sm font-bold text-white tracking-tight leading-tight">
                            {card.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hero-footer-item opacity-0 hidden sm:block relative z-30 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-px bg-white/60"></div>
          </div>
          <div className="hero-footer-item opacity-0 hidden sm:block relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                Production Ready
              </div>
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                Scalable Architecture
              </div>
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                Modern Tech Stack
              </div>
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                High Performance
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-4 sm:pb-8">
        <div id="features">
          <section className="relative w-full bg-white text-neutral-900 pt-0 sm:pt-20 pb-16 sm:pb-24 select-none overflow-visible lg:overflow-hidden">
            <div className="block sm:hidden w-full pt-5 mb-8">
              <div className="flex items-center justify-between text-[9px] font-medium text-gray-800 gap-1.5 whitespace-nowrap px-4 pb-3.5">
                <span>Production Ready</span>
                <span>Scalable Architecture</span>
                <span>Modern Tech Stack</span>
                <span>High Performance</span>
              </div>
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-px bg-gray-200"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-1.5 sm:space-y-2">
                <h2 className="feature-header-item opacity-0 text-2xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">
                  What we build in
                </h2>
                <h3 className="feature-header-item opacity-0 text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-950 tracking-tight leading-none">
                  Project engineering
                </h3>
                <p className="feature-header-item opacity-0 text-xs sm:text-sm md:text-base text-gray-400 font-medium leading-relaxed pt-1.5 max-w-md sm:max-w-none mx-auto">
                  Mastering modern full-stack development, mobile solutions, AI automation, and cloud infrastructure.
                </p>
              </div>

              {/* Mobile Card Stack */}
              <div className="block lg:hidden w-full max-w-90 sm:max-w-md md:max-w-lg mx-auto">
                <div className="relative w-full h-[460px] sm:h-[560px] md:h-[620px] pt-12 overflow-visible">
                  <div
                    style={{ zIndex: "10", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Full-Stack Web Systems
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Full-Stack Web Systems"
                        className="object-cover object-center w-full h-full absolute inset-0"
                        src="/main/1/real-projects/motion.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Full-Stack Web Systems
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Blazing fast Next.js & React web applications with robust backend APIs and microservices.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ zIndex: "20", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Custom Enterprise Software
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Custom Enterprise Software"
                        className="object-cover object-center w-full h-full absolute inset-0"
                        src="/main/1/real-projects/before-after.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Custom Enterprise Software
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Tailored business tools, SaaS platforms, CRM systems, and management dashboards.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ zIndex: "30", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Cross-Platform Mobile Apps
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Cross-Platform Mobile Apps"
                        className="object-cover object-center w-full h-full absolute inset-0"
                        src="/main/1/real-projects/effect.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Cross-Platform Mobile Apps
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Seamless iOS and Android applications built using React Native and modern native modules.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ zIndex: "40", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        AI Automation & LLMs
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="AI Automation & LLMs"
                        className="object-cover object-center w-full h-full absolute inset-0"
                        src="/main/1/footer/protfolio.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        AI Automation & LLMs
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Intelligent AI integration, automated pipelines, custom LLM bots, and predictive analytics.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ zIndex: "50", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Cloud & Microservices
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Cloud & Microservices"
                        className="object-cover object-center w-full h-full absolute inset-0"
                        src="/main/1/footer/realtime.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Cloud & Microservices
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Scalable cloud infrastructure, RESTful & GraphQL APIs, Docker containers, and CI/CD pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop 5-Card Grid */}
              <div className="feature-card-grid hidden lg:grid grid-cols-5 gap-5 sm:gap-6 w-full">
                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Full-Stack Web Systems"
                      className="object-cover object-center w-full h-full absolute inset-0"
                      src="/main/1/real-projects/motion.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Full-Stack Web Systems
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Blazing fast Next.js & React web applications with robust backend APIs.
                    </p>
                  </div>
                </div>

                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Custom Software"
                      className="object-cover object-center w-full h-full absolute inset-0"
                      src="/main/1/real-projects/before-after.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Custom Software
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Tailored business tools, SaaS platforms, CRM systems, and admin portals.
                    </p>
                  </div>
                </div>

                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Mobile Applications"
                      className="object-cover object-center w-full h-full absolute inset-0"
                      src="/main/1/real-projects/effect.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Mobile Applications
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Seamless iOS and Android applications built with React Native.
                    </p>
                  </div>
                </div>

                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="AI & Automation"
                      className="object-cover object-center w-full h-full absolute inset-0"
                      src="/main/1/footer/protfolio.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      AI & Automation
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Intelligent AI features, automated workflows, and custom LLM bots.
                    </p>
                  </div>
                </div>

                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Cloud & Microservices"
                      className="object-cover object-center w-full h-full absolute inset-0"
                      src="/main/1/footer/realtime.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Cloud & Microservices
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Reliable cloud deployments, Docker microservices, and CI/CD pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Core Engineering Standards Section */}
        <section id="core-skills" className="relative w-full bg-[#F2F6FC] text-neutral-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-10">
            <div className="block lg:hidden text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Core engineering standards <br />
                step by step
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-xs mx-auto pt-1">
                Delivering high performance software with <br />
                <strong className="text-gray-700 font-semibold">
                  modern architectural standards.
                </strong>
              </p>
            </div>
            <div className="hidden lg:block space-y-0.5">
              <h2 className="text-2xl sm:text-4xl font-medium text-neutral-900 tracking-tight">
                Core engineering standards
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black italic text-neutral-950 tracking-tight">
                step by step.
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="core-skills-img opacity-0 lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/50">
                <img
                  alt="DEV KODE Engineering Standards"
                  className="object-cover object-center w-full h-full absolute inset-0"
                  src="/main/1/real-projects/main.png"
                />
              </div>
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 pl-0 lg:pl-2">
                <h4 className="hidden lg:block text-base sm:text-xl font-semibold text-neutral-600 leading-snug tracking-tight">
                  Build your product with <br />
                  essential software engineering standards.
                </h4>
                <ul className="core-skill-list grid grid-cols-2 lg:grid-cols-1 gap-y-3.5 gap-x-2 sm:gap-3">
                  {[
                    "Responsive & Fast UI Performance",
                    "Secure API & Authentication Systems",
                    "Scalable Microservices Setup",
                    "Automated Testing & CI/CD Pipelines",
                    "Database Optimization & Caching",
                    "Intuitive UX & User Flows",
                    "Cross-Platform Mobile Compatibility",
                    "Cloud Infrastructure & Deployment"
                  ].map((item, idx) => (
                    <li key={idx} className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Pillars & Active Project Grid */}
        <section className="relative w-full bg-white text-neutral-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-neutral-950 tracking-tight">
                Our Engineering Pillars
              </h2>
              <div className="pillar-grid grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-8 pt-2">
                {[
                  { title: "Precision Code", desc: "Clean, modular, and maintainable codebase.", img: "/main/2/showcase/practice.png" },
                  { title: "Scalable Design", desc: "Systems built to grow with your user base.", img: "/main/2/showcase/observe.png" },
                  { title: "Security First", desc: "Best practices in data privacy & encryption.", img: "/main/2/showcase/experiment.png" },
                  { title: "Rapid Delivery", desc: "Agile iterations and quick time-to-market.", img: "/main/2/showcase/consistent.png" },
                ].map((pillar, idx) => (
                  <div key={idx} className="pillar-card opacity-0 flex flex-col md:flex-row items-center gap-3 md:gap-3.5 p-4 md:p-1 rounded-2xl md:rounded-none bg-[#F4F5F7] md:bg-transparent text-center md:text-left">
                    <div className="relative w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-[#1D1E22] flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                      <img
                        alt={pillar.title}
                        className="object-contain p-2.5 w-full h-full"
                        src={pillar.img}
                      />
                    </div>
                    <div className="space-y-1 md:space-y-0.5 min-w-0">
                      <h3 className="text-sm md:text-lg font-bold text-neutral-900 tracking-tight leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] md:text-xs text-neutral-500 font-normal md:italic leading-snug line-clamp-3">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 sm:space-y-10 text-center pt-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight max-w-xs sm:max-w-none mx-auto">
                Explore featured <br className="sm:hidden" /> active client projects!
              </h3>
              <div className="showcase-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-85 sm:max-w-none mx-auto">
                {[
                  { title: "DayTours Sri Lanka", tags: "Next.js • Node.js", img: "/main/1/real-projects/motion.png" },
                  { title: "Serendib Adventures", tags: "React • Tailwind CSS", img: "/main/1/real-projects/before-after.png" },
                  { title: "FieldMaster AgriTech", tags: "Full-Stack SaaS • Mobile", img: "/main/1/real-projects/effect.png" },
                  { title: "HandFree E-Commerce", tags: "MERN Microservices", img: "/main/1/footer/protfolio.png" }
                ].map((item, idx) => (
                  <div key={idx} className="showcase-card opacity-0 flex flex-col items-center group cursor-pointer bg-[#F4F5F7] sm:bg-transparent rounded-3xl p-2.5 sm:p-0">
                    <div className="relative w-full aspect-[3/3.8] sm:aspect-9/15 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md border border-neutral-200/40 transition-transform duration-300 group-hover:-translate-y-1.5">
                      <img
                        alt={item.title}
                        className="object-cover object-center w-full h-full absolute inset-0"
                        src={item.img}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-xs flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-external-link w-4 h-4 sm:w-5 sm:h-5 text-white"
                          >
                            <path d="M15 3h6v6" />
                            <path d="M10 14 21 3" />
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs sm:text-base font-bold text-neutral-900 tracking-tight pt-2.5 sm:pt-3 pb-0.5">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-orange-600 font-semibold">
                      {item.tags}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Comparison Table */}
        <section className="w-full py-16 sm:py-18 bg-transparent text-neutral-900 overflow-hidden select-none">
          <div className="comparison-parallax-container max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-3 sm:space-y-5">
              <div className="comparison-header opacity-0 inline-flex px-4 py-1.5 rounded-full border border-[#FF7A59] bg-white text-xs sm:text-sm font-semibold text-[#FF7A59]">
                Why Choose DEV KODE?
              </div>
              <h2 className="comparison-header opacity-0 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191C1D] max-w-4xl mx-auto leading-[1.12]">
                See the Difference. <br className="sm:hidden" /> Engineered Solutions <br className="sm:hidden" /> vs Basic Freelancing.
              </h2>
              <p className="comparison-header opacity-0 text-[#717680] text-xs sm:text-sm md:text-base max-w-xs sm:max-w-xl mx-auto leading-relaxed">
                Compare project deliverables and discover why our engineering produces higher performance, scale, and long-term security.
              </p>
            </div>

            <div className="comparison-table-container w-full max-w-6xl mx-auto rounded-[20px] sm:rounded-[15px] border border-[#FF7A59]/60 sm:border-[#FF5A1F] shadow-lg bg-white overflow-hidden">
              <div className="grid grid-cols-3 border-b border-[#FF7A59]/30">
                <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-[#191C1D] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  Key Criteria
                </div>
                <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-neutral-400 border-x border-neutral-100 bg-[#FAF9F9] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  Standard Freelancers
                </div>
                <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-[#FF5A1F] bg-[#FFF7F4] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  DEV KODE
                </div>
              </div>

              <div className="divide-y divide-neutral-100 relative z-20">
                {[
                  {
                    feature: "Architecture",
                    bad: "Generic template / bloatware",
                    good: "Custom modular architecture"
                  },
                  {
                    feature: "Speed & Performance",
                    bad: "Slow page load, low Lighthouse score",
                    good: "95+ Lighthouse score, ultra-fast"
                  },
                  {
                    feature: "Security Standards",
                    bad: "Basic setup, vulnerable plugins",
                    good: "Enterprise-grade SSL & API protection"
                  },
                  {
                    feature: "Mobile Optimization",
                    bad: "Unresponsive layouts on small screens",
                    good: "Pixel-perfect across all mobile devices"
                  },
                  {
                    feature: "Ongoing Support",
                    bad: "No support after delivery",
                    good: "Continuous monitoring & SLA support"
                  }
                ].map((row, idx) => (
                  <div key={idx} className="comparison-row opacity-0 grid grid-cols-3 items-stretch min-h-20 sm:min-h-24">
                    <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                      <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">
                        {row.feature}
                      </span>
                    </div>
                    <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FFEAEB] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF3B30] stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="m6 6 12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">
                        {row.bad}
                      </span>
                    </div>
                    <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#22C55E] stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight">
                        {row.good}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-5 pt-4">
              <p className="text-[#717680] text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto leading-relaxed font-normal">
                Ready to build a world-class digital product for your business? Get in touch with our engineering team today.
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 cursor-pointer select-none px-7 py-3 w-56 sm:w-64 h-14 sm:h-16 text-lg md:text-xl font-bold shadow-xl shadow-red-500/30"
                  href="/#contact"
                >
                  <span>Start a Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4 shrink-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Explore More Modules / Pages */}
        <section className="relative w-full bg-white text-neutral-900 py-12 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <div className="text-center space-y-2.5 sm:space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Explore More Showcase Modules
              </h2>
              <p className="text-xs sm:text-base text-gray-400 font-medium leading-relaxed max-w-xs sm:max-w-none mx-auto">
                Check out our other specialized course & engineering breakdown pages.
              </p>
            </div>
            <div className="module-grid grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              <Link
                className="module-card opacity-0 group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-[#FFF6F3] border-[#FF5B1F] shadow-orange-500/10 hover:shadow-orange-500/20"
                to="/editing-fundamentals"
              >
                <div className="w-[60%] p-4 sm:p-7 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                  <div className="flex items-center gap-1 text-[11px] sm:text-sm font-semibold">
                    <span className="text-[#FF5B1F]">Featured Page</span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-[#FF5B1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 bg-[#FF5B1F] text-white">
                      01
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight leading-tight">
                      Editing Fundamentals
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Master essential editing skills, timeline control, and video assembly in CapCut.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="Editing Fundamentals"
                    className="object-cover object-center w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    src="/main/2/hero/03d06ee7f7ebf4413bc6fc5b8c6aaf6e.jpg.jpeg"
                  />
                </div>
              </Link>

              <Link
                className="module-card opacity-0 group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-white border-neutral-200/80 hover:border-neutral-300 shadow-neutral-200/50"
                to="/color-grading"
              >
                <div className="w-[60%] p-4 sm:p-7 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                  <div className="flex items-center gap-1 text-[11px] sm:text-sm font-semibold">
                    <span className="text-gray-500">Explore Module</span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 bg-neutral-300 text-neutral-600">
                      02
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight leading-tight">
                      Color Grading
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Learn color correction, LUTs, and grading techniques to give videos cinematic mood.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="Color Grading"
                    className="object-cover object-center w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    src="/main/1/explore-modules/color-grading.png"
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
