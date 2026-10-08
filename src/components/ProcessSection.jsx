import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We understand your idea, business requirements and goals.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We create a clear and intuitive experience around your users and business.'
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'We build reliable, scalable and maintainable software.'
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'We deploy your product and help you continuously improve it.'
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.process-card');
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
            start: 'top 80%',
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="process" className="w-full py-16 sm:py-24 bg-white text-neutral-900 border-t border-neutral-100 select-none">
      <div className="max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 inline-block">
            Our Development Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#191C1D]">
            How We Build Software.
          </h2>
          <p className="text-[#575E70] text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            A transparent, agile workflow designed to take your idea from vision to production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="process-card p-6 sm:p-8 rounded-3xl bg-[#F8F9FA] border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-[#FF5A1F]/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#E93749] to-[#FE6936] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                {step.num}
              </div>
              <div className="space-y-2 pt-2">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
