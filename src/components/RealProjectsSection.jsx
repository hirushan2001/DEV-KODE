import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RealProjectsSection() {
  const sectionRef = useRef(null);
  const clipPathRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      if (!clipPathRef.current || !sectionRef.current) return;
      const { isMobile } = context.conditions;
      const startTrigger = isMobile ? "top 80%" : "top 50%";
      const endTrigger = isMobile ? "top 35%" : "top 20%";

      // 1. Inset clip-path expansion animation on container
      gsap.fromTo(
        clipPathRef.current,
        { clipPath: "inset(0px 0px round 0px)" },
        {
          clipPath: () => {
            if (isMobile) return "inset(0px 16px round 16px)";
            const vw = window.innerWidth;
            const padding = Math.max(24, Math.round((vw - (vw >= 1536 ? 1632 : 1400)) / 2 + 24));
            return `inset(0px ${padding}px round 24px)`;
          },
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: startTrigger,
            end: endTrigger,
            scrub: 0.3,
            invalidateOnRefresh: true
          }
        }
      );

      // 2. Scale un-zoom on .real-projects-img
      const img = sectionRef.current.querySelector(".real-projects-img");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.06 },
          {
            scale: 1,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: startTrigger,
              end: endTrigger,
              scrub: 0.3
            }
          }
        );
      }

      // 3. Staggered reveal of the 3 project cards
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".project-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 85%",
                end: "top 20%",
                scrub: 0.3
              }
            }
          );
        }
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="projects" className="relative w-full pt-6 sm:pt-10 pb-16 sm:pb-20 bg-white text-neutral-900 force-rounded-b rounded-b-[40px] sm:rounded-b-[56px] overflow-hidden">
      <div className="max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-14">
        <p className="text-xs sm:text-lg text-[#4B5563] tracking-normal sm:tracking-wide font-normal mb-1.5 sm:mb-0">
          The Ultimate Space to Perfect Your Editing Skills.
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
          Learn by building <br className="sm:hidden" /> real projects.
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          From cuts to masterpieces, practice makes you perfect!
        </p>
      </div>

      {/* Main Showcase Image Container with clip-path animation */}
      <div ref={clipPathRef} className="w-full flex justify-center overflow-hidden px-6">
        <div className="real-projects-img relative w-full mx-auto aspect-video max-h-165 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
          <img
            src="/main/1/real-projects/main.png"
            alt="Learn by building real projects - CapCut Masterclass"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="max-w-350 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-14 text-center sm:text-left">
        <p className="text-xs sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto sm:mx-0">
          With hands-on, real projects and a <strong className="text-neutral-900 font-bold">FREE 1-month CapCut account</strong>, you'll unlock creativity, sharpen skills, and craft cinematic results.
        </p>
      </div>

      {/* 3 Project Feature Cards with staggered GSAP scroll trigger */}
      <div ref={cardsRef} className="max-w-350 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Card 1 */}
        <div className="project-card flex flex-col gap-5 group cursor-pointer">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/motion.png"
              alt="Motion Graphics"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">Motion Graphics</h3>
            <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed line-clamp-3">
              Master the techniques behind engaging motion graphics, animated elements, and visual effects used in professional videos.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="project-card flex flex-col gap-5 group cursor-pointer">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/before-after.png"
              alt="Before & After"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">Before & After</h3>
            <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed line-clamp-3">
              Create stunning visuals by enhancing colors, lighting, and contrast with professional color grading techniques.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="project-card flex flex-col gap-5 group cursor-pointer">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/effect.png"
              alt="Effect & Transitions"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">Effect & Transitions</h3>
            <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed line-clamp-3">
              Learn how to use professional effects and seamless transitions to create smooth, engaging videos that capture your audience's attention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


