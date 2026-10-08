import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Application',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector('.contact-box'),
        { y: 50, opacity: 0 },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Silent fallback
      }
    }, 1000);
  };

  return (
    <section ref={sectionRef} id="contact" className="w-full py-16 sm:py-24 bg-white text-neutral-900 border-t border-neutral-100 select-none">
      <div className="max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#191C1D]">
            Let's Build Something Great.
          </h2>
          <p className="text-[#575E70] text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Get in touch with DEV KODE and let's discuss how we can turn your idea into reality.
          </p>
        </div>

        <div className="contact-box max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-neutral-200/80 shadow-lg">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/30 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-900">Thank You, {formData.name || 'Friend'}!</h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                We received your message and will get back to you within 24 hours to discuss your project.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+94 77 123 4567"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Project Category</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs cursor-pointer"
                  >
                    <option value="Website">Website</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Project Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E93749] to-[#FE6936] text-white font-extrabold text-base shadow-lg shadow-orange-500/25 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <span>Start a Project</span>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
