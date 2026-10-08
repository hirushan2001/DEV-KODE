import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector('.about-content'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
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
    <section ref={sectionRef} id="about" className="w-full py-16 sm:py-24 bg-[#F2F6FC] text-neutral-900 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-content grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 inline-block">
              About DEV KODE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 leading-[1.12]">
              Technology Built Around Your Business.
            </h2>
            <p className="text-sm sm:text-lg text-neutral-600 font-normal leading-relaxed">
              DEV KODE is a software development company focused on building modern digital products that solve real business problems. We combine thoughtful design, reliable engineering and modern technologies to turn ideas into scalable digital experiences.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900">
              <img
                src="/main/1/real-projects/main.png"
                alt="DEV KODE Team & Architecture"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
