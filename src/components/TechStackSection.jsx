import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TECH_CATEGORIES = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'ASP.NET Core']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server']
  },
  {
    category: 'Cloud / DevOps',
    items: ['AWS', 'Docker', 'Vercel', 'Azure DevOps', 'Redis', 'RabbitMQ']
  }
];

export default function TechStackSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.tech-card');
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="technologies" className="w-full py-14 sm:py-20 bg-white text-neutral-900 border-t border-neutral-100 select-none">
      <div className="max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 inline-block">
            Modern Tech Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#191C1D]">
            Technologies We Master.
          </h2>
          <p className="text-[#575E70] text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            We use modern and proven technologies to build fast, scalable, and maintainable software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="tech-card p-6 sm:p-7 rounded-3xl bg-[#F8F9FA] border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-[#FF5A1F]/40 transition-all flex flex-col justify-between space-y-4"
            >
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight border-b border-neutral-200/60 pb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.items.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white border border-neutral-200 text-neutral-800 font-semibold text-xs shadow-xs hover:border-[#FF5A1F] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
