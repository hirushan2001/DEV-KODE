import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TESTIMONIALS_ROW_1 = [
  {
    name: "Built For Real Business Needs",
    role: "Core Principle 01",
    text: "We focus on creating useful digital products that solve real problems.",
    initial: "B",
    bg: "bg-[#FF5A1F]"
  },
  {
    name: "Modern Technology",
    role: "Core Principle 02",
    text: "We use modern and proven technologies to build reliable software.",
    initial: "M",
    bg: "bg-[#3B82F6]"
  },
  {
    name: "Scalable Solutions",
    role: "Core Principle 03",
    text: "Our solutions are designed to grow as your business grows.",
    initial: "S",
    bg: "bg-[#EF4444]"
  },
  {
    name: "Long-Term Partnership",
    role: "Core Principle 04",
    text: "We can continue improving and supporting your product after launch.",
    initial: "L",
    bg: "bg-[#8B5CF6]"
  }
];

const TESTIMONIALS_ROW_2 = [
  {
    name: "Built For Real Business Needs",
    role: "Core Principle 01",
    text: "We focus on creating useful digital products that solve real problems.",
    initial: "B",
    bg: "bg-[#10B981]"
  },
  {
    name: "Modern Technology",
    role: "Core Principle 02",
    text: "We use modern and proven technologies to build reliable software.",
    initial: "M",
    bg: "bg-[#F59E0B]"
  },
  {
    name: "Scalable Solutions",
    role: "Core Principle 03",
    text: "Our solutions are designed to grow as your business grows.",
    initial: "S",
    bg: "bg-[#EC4899]"
  },
  {
    name: "Long-Term Partnership",
    role: "Core Principle 04",
    text: "We can continue improving and supporting your product after launch.",
    initial: "L",
    bg: "bg-[#6366F1]"
  }
];

export default function TestimonialsSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 0.3
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="testimonials" className="w-full py-12 sm:py-20 bg-white text-neutral-900 overflow-hidden select-none">
      <div className="max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-[1.12]">
          Built For Real Business Needs.
        </h2>
        <p className="mt-3 text-neutral-500 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
          Our core principles and commitments to every software project we undertake.
        </p>
      </div>

      {/* Mobile Horizontal Snap Scroll Slider */}
      <div className="block sm:hidden w-full">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
          {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_2].map((item, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[82vw] max-w-[320px]">
              <div className="w-full bg-[#F7F8F9] rounded-[22px] p-6 border border-neutral-200/60 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-[#FFB800] text-sm">★★★★★</div>
                  <p className="mt-4 text-neutral-600 text-xs italic leading-relaxed font-normal">
                    "{item.text}"
                  </p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-px bg-neutral-200/60 my-4"></div>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${item.bg} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                      {item.initial}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-neutral-900 leading-tight">{item.name}</h4>
                      <p className="text-[11px] text-neutral-400 font-medium mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Marquee Infinite Dual Rows */}
      <div className="hidden sm:block space-y-6 sm:space-y-8 relative w-full overflow-hidden">
        {/* Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Right Marquee */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 shrink-0 animate-[marqueeRight_35s_linear_infinite] hover:[animation-play-state:paused]">
            {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map((item, idx) => (
              <div key={idx} className="w-full sm:w-95 bg-[#F7F8F9] rounded-[22px] p-6 sm:p-7 border border-neutral-200/60 shadow-sm flex flex-col justify-between shrink-0 hover:border-[#FF5A1F]/30 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center gap-1 text-[#FFB800] text-sm sm:text-base">★★★★★</div>
                  <p className="mt-4 text-neutral-600 text-xs sm:text-sm italic leading-relaxed font-normal">
                    "{item.text}"
                  </p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-px bg-neutral-200/60 my-4"></div>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.bg} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                      {item.initial}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">{item.name}</h4>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-medium mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left Marquee */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 shrink-0 animate-[marqueeLeft_35s_linear_infinite] hover:[animation-play-state:paused]">
            {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map((item, idx) => (
              <div key={idx} className="w-full sm:w-95 bg-[#F7F8F9] rounded-[22px] p-6 sm:p-7 border border-neutral-200/60 shadow-sm flex flex-col justify-between shrink-0 hover:border-[#FF5A1F]/30 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center gap-1 text-[#FFB800] text-sm sm:text-base">★★★★★</div>
                  <p className="mt-4 text-neutral-600 text-xs sm:text-sm italic leading-relaxed font-normal">
                    "{item.text}"
                  </p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-px bg-neutral-200/60 my-4"></div>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.bg} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                      {item.initial}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">{item.name}</h4>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-medium mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}


