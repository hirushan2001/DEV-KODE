import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARDS = [
  {
    id: 'web-development',
    category: 'Service 01',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built for performance, usability and growth.',
    image: '/main/1/what-u-learn/master-of-funde.png',
    initial: 'W',
    href: '/#contact'
  },
  {
    id: 'custom-software',
    category: 'Service 02',
    title: 'Custom Software',
    description: 'Tailored software solutions designed around your business processes and requirements.',
    image: '/main/1/what-u-learn/master-of-color.png',
    initial: 'S',
    href: '/#contact'
  },
  {
    id: 'mobile-applications',
    category: 'Service 03',
    title: 'Mobile Applications',
    description: 'Modern mobile applications designed to provide seamless experiences across devices.',
    image: '/main/1/what-u-learn/power-of-sound.png',
    initial: 'M',
    href: '/#contact'
  },
  {
    id: 'ai-automation',
    category: 'Service 04',
    title: 'AI & Automation',
    description: 'Intelligent AI-powered features and automation solutions that help businesses work smarter.',
    image: '/main/1/what-u-learn/typo.png',
    initial: 'A',
    href: '/#contact'
  },
  {
    id: 'ui-ux-design',
    category: 'Service 05',
    title: 'UI/UX Design',
    description: 'Clean, intuitive and user-focused digital experiences designed to make products easier to use.',
    image: '/main/1/real-projects/motion.png',
    initial: 'D',
    href: '/#contact'
  },
  {
    id: 'cloud-devops',
    category: 'Service 06',
    title: 'Cloud & DevOps',
    description: 'Reliable deployment, APIs, infrastructure and cloud solutions for scalable applications.',
    image: '/main/1/real-projects/before-after.png',
    initial: 'C',
    href: '/#contact'
  }
];

export default function WhatYouLearn() {
  const [activeCard, setActiveCard] = useState(0);
  const prevCardIndex = useRef(0);
  const sectionRef = useRef(null);
  const desktopContainerRef = useRef(null);
  const mobileContainerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop GSAP Animations
    mm.add("(min-width: 1024px)", () => {
      // Initialize flex-grow values for accordion cards and promote to GPU
      const cards = gsap.utils.toArray(".accordion-card");
      cards.forEach((card, idx) => {
        gsap.set(card, { flexGrow: idx === 0 ? 2.5 : 1, force3D: true });
      });

      // Entry animation on scroll
      if (desktopContainerRef.current) {
        gsap.fromTo(
          ".accordion-card",
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            force3D: true,
            clearProps: "transform",
            scrollTrigger: {
              trigger: desktopContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Mobile Card Stack Animation
    mm.add("(max-width: 1023px)", () => {
      if (!mobileContainerRef.current) return;
      const stackCards = gsap.utils.toArray(".mobile-stack-card");
      const bgColors = ["#000000", "#1C1C1E", "#2D2D30", "#58585E", "#717680", "#8E8E93"];
      const borderColors = [
        "rgba(255, 255, 255, 0.15)",
        "rgba(255, 255, 255, 0.22)",
        "rgba(255, 255, 255, 0.3)",
        "rgba(255, 255, 255, 0.4)",
        "rgba(255, 255, 255, 0.5)",
        "rgba(255, 255, 255, 0.6)"
      ];
      const viewportHeight = window.innerHeight;

      stackCards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { y: viewportHeight, scaleX: 1 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mobileContainerRef.current,
          start: "top 6%",
          end: "+=4000",
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          refreshPriority: 8
        }
      });

      for (let r = 1; r < stackCards.length; r++) {
        tl.to(stackCards[r], { y: 0, scaleX: 1, ease: "none", duration: 1 }, `step-${r}`);
        const header = stackCards[r].querySelector(".mobile-card-header");
        if (header) {
          tl.to(header, { opacity: 1, ease: "none", duration: 0.5 }, `step-${r}`);
        }
        for (let i = 0; i < r; i++) {
          const stepOffset = r - i;
          const colorIdx = Math.min(stepOffset, bgColors.length - 1);
          tl.to(
            stackCards[i],
            {
              y: -14 * stepOffset,
              scaleX: Math.max(0.76, 1 - 0.07 * stepOffset),
              backgroundColor: bgColors[colorIdx],
              borderColor: borderColors[colorIdx],
              ease: "none",
              duration: 1
            },
            `step-${r}`
          );
          const underHeader = stackCards[i].querySelector(".mobile-card-header");
          if (underHeader) {
            tl.to(underHeader, { opacity: 0, ease: "none", duration: 0.5 }, `step-${r}`);
          }
        }
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    });
  }, { scope: sectionRef });

  const handleSelectCard = (index) => {
    if (activeCard === index) return;
    const isLeft = index < prevCardIndex.current;
    prevCardIndex.current = index;
    setActiveCard(index);

    const cards = sectionRef.current?.querySelectorAll(".accordion-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.to(card, {
          flexGrow: i === index ? 2.5 : 1,
          duration: 0.65,
          ease: "power3.inOut",
          overwrite: "auto"
        });
      });
    }

    const activeContent = sectionRef.current?.querySelector(`.card-content-${index}`);
    if (activeContent) {
      gsap.killTweensOf(activeContent.children);
      gsap.fromTo(
        activeContent.children,
        { opacity: 0, x: isLeft ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.05,
          delay: 0.1,
          ease: "power3.out",
          clearProps: "transform"
        }
      );
    }
  };

  return (
    <div id="services">
      <div id="features">
        <section
          ref={sectionRef}
          className="relative w-full lg:min-h-screen pt-6 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 force-rounded-t rounded-t-[40px] sm:rounded-t-[56px] overflow-visible lg:overflow-hidden select-none"
        >
          <div className="max-w-[1440px] mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mt-2 md:mt-0 max-w-xl lg:max-w-4xl mx-auto mb-4 sm:mb-14">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]">
                Services We Provide
              </h2>
              <p className="mt-2 sm:mt-6 text-xs sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-7xl mx-auto px-2">
                DEV KODE delivers high-performance digital products engineered to solve business problems, engage users, and scale seamlessly.
              </p>
            </div>

            {/* Mobile Stack Cards Animation View */}
            <div className="block lg:hidden w-full max-w-96 sm:max-w-md md:max-w-lg mx-auto -mt-3">
              <div
                ref={mobileContainerRef}
                className="relative w-full h-[520px] sm:h-[560px] md:h-[620px] pt-12 overflow-visible"
              >
                {CARDS.map((card, index) => (
                  <div
                    key={card.id}
                    style={{ zIndex: (index + 1) * 10, transformOrigin: 'top center' }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between shadow-xl"
                  >
                    <Link
                      to={card.href}
                      className="mobile-card-header h-12.5 flex items-center gap-3 px-4 bg-black border-b border-white/10 shrink-0 transition-colors duration-300"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#FF5533] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-black text-sm leading-none">{card.initial}</span>
                      </div>
                      <h3 className="mobile-card-category font-bold text-sm tracking-tight text-white transition-opacity duration-300 flex-1">
                        {card.category}
                      </h3>
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </Link>

                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt={card.title}
                        src={card.image}
                        loading="eager"
                        decoding="async"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>

                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">{card.title}</h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Accordion Stack View */}
            <div
              ref={desktopContainerRef}
              className="hidden lg:flex w-full flex-col lg:flex-row gap-4 sm:gap-5 h-auto lg:h-[530px]"
            >
              {CARDS.map((card, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => handleSelectCard(index)}
                    onClick={() => handleSelectCard(index)}
                    className={`accordion-card transform-gpu will-change-transform flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-500 ${
                      isActive
                        ? 'bg-black text-white shadow-2xl shadow-black/50 border border-neutral-800'
                        : 'bg-[#F3F3F5] hover:bg-[#E8E8EC] text-neutral-900 border border-neutral-200/80'
                    }`}
                  >
                    {/* Header category title */}
                    <div className="z-10 px-6 pt-6 pb-4 flex items-center justify-between">
                      <h3
                        className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        {card.category}
                      </h3>
                      {!isActive && (
                        <div className="w-8 h-8 rounded-full bg-neutral-200/80 flex items-center justify-center text-neutral-700 font-bold text-sm">
                          →
                        </div>
                      )}
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full flex-1 min-h-[260px] overflow-hidden">
                      <img
                        alt={card.title}
                        src={card.image}
                        loading="eager"
                        decoding="async"
                        className={`object-cover w-full h-full transition-all duration-700 ${
                          isActive ? 'scale-105 opacity-100' : 'scale-100 opacity-90'
                        }`}
                      />
                    </div>

                    {/* Active Expanded Content Footer */}
                    <div
                      className={`card-content-${index} z-10 p-6 flex items-end justify-between gap-3 ${
                        isActive ? 'bg-gradient-to-t from-black via-black/90 to-transparent' : ''
                      }`}
                    >
                      <div className="space-y-1.5 max-w-md">
                        <h4
                          className={`text-base sm:text-lg font-bold tracking-tight ${
                            isActive ? 'text-white' : 'text-neutral-900'
                          }`}
                        >
                          {card.title}
                        </h4>
                        <p
                          className={`text-xs leading-relaxed line-clamp-2 ${
                            isActive ? 'text-neutral-300' : 'text-neutral-500'
                          }`}
                        >
                          {card.description}
                        </p>
                      </div>

                      {isActive && (
                        <div className="shrink-0 flex items-center gap-2">
                          <a
                            href={card.href}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-orange-500/30 hover:scale-105 px-5 py-3"
                          >
                            <span>Get Started</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </a>
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
    </div>
  );
}

