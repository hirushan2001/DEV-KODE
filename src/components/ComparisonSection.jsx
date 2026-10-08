import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ComparisonSection() {
  const sectionRef = useRef(null);
  const tableRef = useRef(null);

  useGSAP(() => {
    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current,
        { y: 100, scale: 0.95, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 94%",
            end: "top 15%",
            scrub: 0.3
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} id="comparison" className="w-full py-16 sm:py-18 bg-transparent text-neutral-900 overflow-hidden select-none force-rounded-t rounded-t-[40px] sm:rounded-t-[56px]">
      <div className="comparison-parallax-container max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center space-y-3 sm:space-y-5">
          <div className="inline-flex px-4 py-1.5 rounded-full border border-[#FF7A59] bg-white text-xs sm:text-sm font-semibold text-[#FF7A59]">
            Why Choose Our Course?
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191C1D] max-w-4xl mx-auto leading-[1.12]">
            See the Difference. <br className="sm:hidden" /> Choose What's Better <br className="sm:hidden" /> for You.
          </h2>
          <p className="text-[#717680] text-xs sm:text-sm md:text-base max-w-xs sm:max-w-xl mx-auto leading-relaxed">
            Compare the learning experience and discover why our course is more practical, supportive, and results-focused.
          </p>
        </div>

        {/* Table */}
        <div ref={tableRef} className="w-full max-w-6xl mx-auto rounded-[20px] sm:rounded-[15px] border border-[#FF7A59]/60 sm:border-[#FF5A1F] shadow-lg bg-white overflow-hidden">
          <div className="grid grid-cols-3 border-b border-[#FF7A59]/30">
            <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-[#191C1D] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">Key Features</div>
            <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-neutral-400 border-x border-neutral-100 bg-[#FAF9F9] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">Typical <br className="sm:hidden" /> Courses</div>
            <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-[#FF5A1F] bg-[#FFF7F4] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">Our Course</div>
          </div>

          <div className="divide-y divide-neutral-100 relative z-20">
            
            {/* Row 1 */}
            <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">Verified <br className="sm:hidden" /> Certificate</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">Generic or No Certificate</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">Verified Certificate <br className="sm:hidden" /> of Completion</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">Portfolio <br className="sm:hidden" /> Creation</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">Basic Practice Exercises</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">Create Client- <br className="sm:hidden" /> Ready Portfolio <br className="sm:hidden" /> Projects</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">Modern <br className="sm:hidden" /> Content</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">Outdated or Generic Lessons</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">Updated Practical <br className="sm:hidden" /> CapCut Training</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">CapCut Pro <br className="sm:hidden" /> Access</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">Not Included</span>
              </div>
              <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">01 Month CapCut <br className="sm:hidden" /> Pro Access <br className="sm:hidden" /> Included</span>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center space-y-5 pt-4">
          <p className="text-[#717680] text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto leading-relaxed font-normal">Start learning practical CapCut skills with the course designed to help you grow faster than ever before.</p>
          <div className="flex justify-center">
            <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 cursor-pointer select-none px-7 py-3 w-56 sm:w-62 h-14 sm:h-17 text-lg md:text-xl font-bold shadow-xl shadow-red-500/30" href="https://lms.editor.lk/payment" target="_blank" rel="noreferrer">
              <span>Enroll Now</span>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

