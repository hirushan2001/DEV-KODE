import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQS = [
  {
    num: "01",
    question: "What services does DEV KODE provide?",
    answer: "DEV KODE builds custom websites, web applications, custom software, mobile applications, AI & automation solutions, and clean UI/UX designs for businesses of all sizes."
  },
  {
    num: "02",
    question: "How do we get started on a project with DEV KODE?",
    answer: "Getting started is simple! Fill out our project inquiry form or reach out via WhatsApp/email. We will analyze your requirements and provide a detailed proposal and technical roadmap."
  },
  {
    num: "03",
    question: "What technologies and frameworks do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, Express, NestJS, ASP.NET Core, PostgreSQL, MongoDB, AWS, Docker, and Vercel."
  },
  {
    num: "04",
    question: "Do you offer ongoing support and maintenance after launch?",
    answer: "Yes! We provide post-launch maintenance, cloud deployment monitoring, security updates, feature enhancements, and continuous long-term technical partnerships."
  },
  {
    num: "05",
    question: "How long does a typical software project take?",
    answer: "Project timelines depend on complexity and scope. Typical websites take 1-3 weeks, while full-stack web applications and custom software range from 4-12 weeks delivered in agile sprints."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
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
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: 1
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="faq" className="w-full select-none py-12 sm:py-20 bg-white text-neutral-900 overflow-hidden force-rounded-b rounded-b-[40px] sm:rounded-b-[56px]">
      <div className="max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#191C1D] leading-[1.12]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#575E70] text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about working with DEV KODE to build your digital product.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className={`rounded-2xl sm:rounded-[20px] transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-[#FFF7F4] border border-[#FF5A1F] p-4 sm:p-7 shadow-sm"
                    : "bg-[#F8F9FA] border border-transparent hover:bg-[#F2F4F7] p-4 sm:p-6"
                }`}
              >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-base flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-[#E93749] to-[#FE6936] text-white shadow-md shadow-[#E93749]/20"
                          : "bg-[#D1D5DB] text-white"
                      }`}
                    >
                      {faq.num}
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold text-[#111111] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ${isOpen ? "text-[#FF5A1F] stroke-[2.5]" : "text-[#9CA3AF] stroke-2"}`} />
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2 sm:mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden pl-11 sm:pl-14 pr-2">
                    <p className="text-[#667085] text-xs sm:text-base leading-relaxed pb-1">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


