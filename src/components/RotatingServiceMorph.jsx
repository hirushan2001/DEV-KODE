import React, { useState, useEffect } from 'react';

const SERVICES = [
  {
    title: "Web Applications & Microservices",
    desc: "Blazing fast React 19 & Next.js 15 platforms with robust backend APIs.",
  },
  {
    title: "Custom Enterprise SaaS Tools",
    desc: "Tailored business software, CRM platforms, and administrative dashboards.",
  },
  {
    title: "AI & Automated LLM Pipelines",
    desc: "Intelligent agent workflows, custom vector RAG search, and AI chatbots.",
  },
  {
    title: "Cross-Platform Mobile Apps",
    desc: "Seamless iOS and Android applications engineered with React Native.",
  },
  {
    title: "High-Performance E-Commerce",
    desc: "SEO-optimized product catalogs with sub-50ms page load speeds.",
  },
];

export default function RotatingServiceMorph() {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SERVICES.length);
        setFadeState('fade-in');
      }, 350);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  const activeService = SERVICES[index];

  return (
    <div className="w-full max-w-lg p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-left select-none space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/30">
          WHAT WE ENGINEER
        </span>
        <span className="text-[10px] font-mono text-neutral-400">
          0{index + 1} / 0{SERVICES.length}
        </span>
      </div>

      <div className="min-h-[55px] flex flex-col justify-center">
        <h3
          className={`text-lg sm:text-xl font-extrabold text-white tracking-tight leading-tight transition-all duration-300 ${
            fadeState === 'fade-out'
              ? 'opacity-0 -translate-y-2 blur-xs'
              : 'opacity-100 translate-y-0 blur-none'
          }`}
        >
          {activeService.title}
        </h3>
        <p
          className={`text-xs text-neutral-300 font-normal leading-relaxed pt-1 transition-all duration-300 ${
            fadeState === 'fade-out'
              ? 'opacity-0 translate-y-2 blur-xs'
              : 'opacity-100 translate-y-0 blur-none'
          }`}
        >
          {activeService.desc}
        </p>
      </div>
    </div>
  );
}
