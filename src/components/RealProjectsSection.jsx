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
        <p className="text-xs sm:text-lg text-[#4B5563] tracking-normal sm:tracking-wide font-normal mb-1.5 sm:mb-0 uppercase font-semibold">
          Web • Software • AI
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
          Featured Projects.
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          Explore scalable web platforms, custom software, and digital products engineered by DEV KODE.
        </p>
      </div>

      {/* Main Showcase Image Container with clip-path animation */}
      <div ref={clipPathRef} className="w-full flex justify-center overflow-hidden px-6">
        <div className="real-projects-img relative w-full mx-auto aspect-video max-h-165 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
          <img
            src="/main/1/real-projects/main.png"
            alt="Featured Projects Showcase - DEV KODE"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="max-w-350 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-14 text-center sm:text-left">
        <p className="text-xs sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto sm:mx-0">
          From full-stack web applications to AI-powered automation, we combine <strong className="text-neutral-900 font-bold">thoughtful architecture and modern technologies</strong> to deliver reliable software solutions.
        </p>
      </div>

      {/* Project Grid */}
      <div ref={cardsRef} className="max-w-350 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Project 01 */}
        <div className="project-card flex flex-col gap-4 group cursor-pointer bg-neutral-50/50 p-5 rounded-3xl border border-neutral-200/80 hover:border-orange-500/40 transition-all">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/motion.png"
              alt="DayTours Sri Lanka"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">DayTours Sri Lanka</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              A modern tourism platform designed to showcase Sri Lankan tours, destinations and travel experiences.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                Next.js • Node.js • PostgreSQL • Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Project 02 */}
        <div className="project-card flex flex-col gap-4 group cursor-pointer bg-neutral-50/50 p-5 rounded-3xl border border-neutral-200/80 hover:border-orange-500/40 transition-all">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/before-after.png"
              alt="Serendib Adventures"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">Serendib Adventures</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              An adventure tourism website showcasing outdoor experiences, activities and destinations across Sri Lanka.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                Next.js • React • Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Project 03 */}
        <div className="project-card flex flex-col gap-4 group cursor-pointer bg-neutral-50/50 p-5 rounded-3xl border border-neutral-200/80 hover:border-orange-500/40 transition-all">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/effect.png"
              alt="FieldMaster"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">FieldMaster</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              A full-stack agriculture platform for land measurement, plantation management and agricultural calculations.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                React • Node.js • Express • MongoDB • React Native
              </span>
            </div>
          </div>
        </div>

        {/* Project 04 */}
        <div className="project-card flex flex-col gap-4 group cursor-pointer bg-neutral-50/50 p-5 rounded-3xl border border-neutral-200/80 hover:border-orange-500/40 transition-all">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/footer/protfolio.png"
              alt="HandFree"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">HandFree</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              A modern e-commerce platform built with a scalable MERN microservices architecture.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                React • Node.js • Express • MongoDB
              </span>
            </div>
          </div>
        </div>

        {/* Project 05 */}
        <div className="project-card flex flex-col gap-4 group cursor-pointer bg-neutral-50/50 p-5 rounded-3xl border border-neutral-200/80 hover:border-orange-500/40 transition-all">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/footer/realtime.png"
              alt="RooVerse"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">RooVerse</h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              An entertainment platform for discovering movies and television content through a modern digital experience.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                React • Node.js • MongoDB • REST APIs
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


