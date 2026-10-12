import React from 'react';
import { Terminal, Cpu, ShieldCheck, Cloud, ArrowRight } from 'lucide-react';

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "System Discovery & UX Blueprinting",
    desc: "Domain modeling, user flow mapping, database schema design, and interactive Figma UI prototypes.",
    icon: Terminal,
    tag: "Phase 1: Architecture",
    image: "/main/1/real-projects/motion.png",
  },
  {
    step: "02",
    title: "Full-Stack Microservices & APIs",
    desc: "Blazing fast React 19 / Next.js frontend, Node.js & Python backend microservices with strict TypeScript typesafety.",
    icon: Cpu,
    tag: "Phase 2: Development",
    image: "/main/1/footer/realtime.png",
  },
  {
    step: "03",
    title: "Automated Security & Performance QA",
    desc: "OWASP vulnerability audits, automated unit/integration tests, sub-50ms API response tuning, and load stress testing.",
    icon: ShieldCheck,
    tag: "Phase 3: Benchmarking",
    image: "/main/1/real-projects/before-after.png",
  },
  {
    step: "04",
    title: "Global Edge Deployment & 24/7 SLAs",
    desc: "Zero-downtime CI/CD deployment on AWS and Cloudflare edge networks with automated failovers and live monitoring.",
    icon: Cloud,
    tag: "Phase 4: Launch & Scale",
    image: "/main/1/real-projects/effect.png",
  },
];

export default function EngineeringPipeline() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#0A0A0C] text-white border-y border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/30">
            Engineered For Scale
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Our Web Development Pipeline.
          </h2>
          <p className="text-xs sm:text-base text-neutral-400 font-normal leading-relaxed">
            A structured 4-step engineering workflow engineered to deliver high-performance digital infrastructure with zero compromises.
          </p>
        </div>

        {/* 4 Pipeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIPELINE_STEPS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl flex flex-col justify-between p-6 group hover:border-orange-500/50 transition-all duration-500 min-h-[360px]"
              >
                {/* Full-bleed subtle background image overlay */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-orange-400 font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/15 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 inline-block">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
                  <span>Phase Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
