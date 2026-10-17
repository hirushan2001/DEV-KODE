import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Send,
  ChevronDown,
  Calculator,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import ComparisonMatrix from "../components/ComparisonMatrix";

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: "How quickly can DEV KODE start on a new project?",
    a: "We can typically kick off discovery and system architecture planning within 48 to 72 hours of project alignment. Development sprints usually begin immediately after requirements freeze.",
  },
  {
    q: "Do you sign an NDA (Non-Disclosure Agreement) before we share project ideas?",
    a: "Yes, absolutely. We prioritize full intellectual property protection and confidentiality. We can sign your standard NDA or provide our enterprise mutual NDA prior to initial discussions.",
  },
  {
    q: "What engagement models do you offer (Fixed Price vs. Dedicated Team)?",
    a: "We offer both Fixed Scope & Fixed Cost models (ideal for well-defined deliverables) and Dedicated Agile Sprint models (ideal for evolving products, SaaS startups, and continuous feature updates).",
  },
  {
    q: "What happens after the product is launched to production?",
    a: "We provide 30 to 90 days of complimentary post-launch support and bug warranties. Beyond that, we offer flexible maintenance and cloud infrastructure SLA retainers.",
  },
  {
    q: "What stacks and frameworks do you specialize in?",
    a: "Our primary stack includes React 19, Next.js, TypeScript, Node.js, Python/FastAPI, React Native, PostgreSQL, MongoDB, Docker, and AWS/Cloudflare infrastructure.",
  },
];

const ESTIMATOR_FEATURES = [
  { id: "auth", name: "User Auth & Role Management", cost: 400, days: 3 },
  { id: "payment", name: "Stripe / Payment Gateway", cost: 500, days: 4 },
  { id: "admin", name: "Custom Admin Dashboard", cost: 700, days: 6 },
  { id: "chat", name: "Real-time Chat / WebSockets", cost: 600, days: 5 },
  { id: "ai", name: "AI & LLM Integration (OpenAI/RAG)", cost: 900, days: 7 },
  { id: "mobile", name: "Cross-Platform Mobile App (iOS & Android)", cost: 1200, days: 10 },
  { id: "analytics", name: "Custom Analytics & Reports", cost: 450, days: 3 },
  { id: "multilingual", name: "Multi-language i18n Support", cost: 350, days: 2 },
];

export default function ContactPage() {
  const containerRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Web Application",
    budget: "$3k – $10k",
    timeline: "1-2 Months",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Estimator State
  const [estimatorPlatform, setEstimatorPlatform] = useState("Web Application");
  const [selectedFeatures, setSelectedFeatures] = useState(["auth", "admin"]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
      );
      gsap.fromTo(
        "[class*='hero-asset-1-'], [class*='mobile-asset-1-']",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.25, stagger: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        ".bento-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid-section",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 130,
          spread: 85,
          origin: { y: 0.6 },
        });
      } catch {
        // Silent fallback
      }
    }, 1000);
  };

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  // Estimator Calculations
  const baseCost = estimatorPlatform === "Mobile Application" ? 2500 : estimatorPlatform === "Full Stack SaaS" ? 3000 : 1800;
  const baseDays = estimatorPlatform === "Mobile Application" ? 14 : estimatorPlatform === "Full Stack SaaS" ? 18 : 10;

  const totalFeatureCost = selectedFeatures.reduce((sum, id) => {
    const item = ESTIMATOR_FEATURES.find((f) => f.id === id);
    return sum + (item ? item.cost : 0);
  }, 0);

  const totalFeatureDays = selectedFeatures.reduce((sum, id) => {
    const item = ESTIMATOR_FEATURES.find((f) => f.id === id);
    return sum + (item ? item.days : 0);
  }, 0);

  const estimatedCost = baseCost + totalFeatureCost;
  const estimatedDays = baseDays + totalFeatureDays;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      {/* Hero Section */}
      <div id="home" className="sticky top-0 z-10 h-[100dvh] w-full">
        <section
          id="typography-hero"
          className="relative w-full h-screen bg-white sm:bg-white text-white flex flex-col overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, #000000 20%, #000000 36%, #888888 75%, #FFFFFF 100%)",
            }}
          ></div>
          <div className="relative z-30 w-full grow flex flex-col items-center justify-between min-h-0 pt-18 sm:pt-18 lg:pt-20 pb-4 sm:pb-6">
            <div className="w-full max-w-4xl text-center space-y-1 sm:space-y-1.5 shrink-0 px-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="hero-text-item opacity-0 inline-block">
                  Contact{" "}
                </span>
                <span className="hero-text-item opacity-0 text-[#FF5533] inline-block font-bold">
                  DEV KODE
                </span>
              </h1>
              <h2 className="hero-text-item opacity-0 text-xs sm:text-base md:text-lg font-semibold text-white tracking-wide pt-0.5">
                From Basic to Professional
              </h2>
              <p className="hero-text-item opacity-0 text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-xs sm:max-w-md lg:max-w-xl mx-auto font-normal leading-relaxed pt-0.5">
                Reach out to our engineering leads to discuss your project requirements, get architectural consultations, and receive free scope estimates.
              </p>
            </div>
            <div className="relative w-full grow min-h-0 flex lg:hidden flex-col items-center justify-center px-4 max-w-[360px] sm:max-w-md mx-auto space-y-2 sm:space-y-3 my-auto pt-10 pb-3 select-none">
              <div className="mobile-asset-1-2 opacity-0 relative w-full aspect-[3146/2015] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
                <img
                  alt="Typography Canvas Preview"
                  decoding="async"
                  className="object-fill object-center absolute inset-0 w-full h-full text-transparent"
                  src="/main/4/hero/separate/1.2 new.png"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                <div className="mobile-asset-1-1 opacity-0 relative w-full aspect-[318/379] rounded-2xl overflow-hidden border border-white/20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Text Style Modal"
                    decoding="async"
                    className="object-fill object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/4/hero/separate/1.1.png"
                  />
                </div>
                <div className="mobile-asset-1-3 opacity-0 relative w-full aspect-[277/309] rounded-2xl overflow-hidden border border-white/20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Effects Modal"
                    decoding="async"
                    className="object-fill object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/4/hero/separate/1.3.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full grow min-h-0 hidden lg:flex items-center justify-center px-4 xl:px-8 overflow-visible my-auto -pt-1 pb-6 sm:pb-8">
              <div className="relative w-[720px] xl:w-[620px] 2xl:w-[700px] aspect-[3146/2015] mx-auto select-none rounded-sm">
                <div className="hero-asset-1-2 opacity-0 absolute inset-0 w-full h-full z-10 rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:scale-[1.015]">
                  <img
                    alt="Typography Canvas Preview"
                    decoding="async"
                    className="object-fill object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/4/hero/separate/1.2 new.png"
                  />
                </div>
                <div className="hero-asset-1-1 opacity-0 absolute -left-[14%] top-[7%] w-[30%] aspect-[318/379] z-20 rounded-2xl overflow-hidden border border-white/70 drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Text Styling Modal"
                    decoding="async"
                    className="object-fill object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/4/hero/separate/1.3.png"
                  />
                </div>
                <div className="hero-asset-1-3 opacity-0 absolute -right-[16%] top-[42%] w-[30%] aspect-[277/309] z-20 rounded-2xl overflow-hidden border border-white/70 drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Font Library Modal"
                    decoding="async"
                    className="object-fill object-center absolute inset-0 w-full h-full text-transparent"
                    src="/main/4/hero/separate/1.1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating White Overlay Container */}
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-12 sm:pb-20">
        
        {/* Main Form & Contact Section */}
        <div id="features" className="contact-grid-section">
          <section className="relative w-full bg-white text-neutral-900 pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none">
            <div className="max-w-7xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                
                {/* Left 5-Column Info & Channels */}
                <div className="bento-card lg:col-span-5 space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 mb-3">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Direct Channels
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-tight">
                      Get in touch with our engineering leads.
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-2">
                      We respond to all genuine project inquiries within 2 hours. NDA available upon request.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Phone */}
                    <a
                      href="tel:+94779503327"
                      className="p-5 rounded-3xl bg-[#F4F4F6] border border-neutral-200/90 shadow-xs hover:border-orange-500/40 hover:shadow-md transition-all flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Direct Phone Line</span>
                        <h4 className="text-base font-extrabold text-neutral-900 group-hover:text-orange-600 transition-colors">
                          +94 77 950 3327
                        </h4>
                        <span className="text-xs text-neutral-500">Mon – Sat, 8:00 AM – 7:00 PM IST</span>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/94779503327"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">WhatsApp Connect</span>
                        <h4 className="text-base font-extrabold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                          Instant Messaging
                        </h4>
                        <span className="text-xs text-neutral-500">Quick scope Q&A & direct consultations</span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:hello@devkode.lk"
                      className="p-5 rounded-3xl bg-[#F4F4F6] border border-neutral-200/90 shadow-xs hover:border-orange-500/40 hover:shadow-md transition-all flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Email Address</span>
                        <h4 className="text-base font-extrabold text-neutral-900 group-hover:text-blue-600 transition-colors">
                          hello@devkode.lk
                        </h4>
                        <span className="text-xs text-neutral-500">Send specs, RFPs, or project briefs</span>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="p-5 rounded-3xl bg-[#F4F4F6] border border-neutral-200/90 shadow-xs flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Engineering HQ</span>
                        <h4 className="text-base font-extrabold text-neutral-900">
                          Colombo, Sri Lanka
                        </h4>
                        <span className="text-xs text-neutral-500">Serving global clients across US, EU & Asia</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 7-Column Form */}
                <div className="bento-card lg:col-span-7">
                  <div className="p-6 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-neutral-200/90 shadow-xl">
                    {submitted ? (
                      <div className="text-center py-12 space-y-5">
                        <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/30 text-3xl font-bold">
                          ✓
                        </div>
                        <h3 className="text-3xl font-black text-neutral-950">Thank You, {formData.name || "Friend"}!</h3>
                        <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                          Your project request has been submitted to DEV KODE. One of our lead software architects will review your details and reach out within 2 hours.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-4 px-8 py-3 rounded-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-md active:scale-95 cursor-pointer"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="space-y-1">
                          <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                            Start a Project Consultation
                          </h3>
                          <p className="text-xs text-neutral-500">
                            Fill out the fields below and we’ll prepare an initial architecture proposal.
                          </p>
                        </div>

                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Your Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Email Address *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@company.com"
                              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Phone / WhatsApp Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+94 77 123 4567"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs"
                          />
                        </div>

                        {/* Category Pills */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Project Category</label>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Web Application",
                              "Mobile Application",
                              "Custom Enterprise SaaS",
                              "AI & Automation",
                              "UI/UX Design",
                              "Technical Audit",
                            ].map((cat) => (
                              <button
                                type="button"
                                key={cat}
                                onClick={() => setFormData({ ...formData, category: cat })}
                                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                  formData.category === cat
                                    ? "bg-[#FF5A1F] text-white shadow-xs"
                                    : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Budget Pills */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Estimated Budget</label>
                          <div className="flex flex-wrap gap-2">
                            {["$1k – $3k", "$3k – $10k", "$10k – $25k", "$25k+ Enterprise"].map((b) => (
                              <button
                                type="button"
                                key={b}
                                onClick={() => setFormData({ ...formData, budget: b })}
                                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                  formData.budget === b
                                    ? "bg-neutral-950 text-white shadow-xs"
                                    : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                                }`}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Project Description & Requirements *</label>
                          <textarea
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Describe your project goals, key features, target users, or timeline..."
                            className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#FF5A1F] shadow-xs resize-none"
                          ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E93749] to-[#FE6936] text-white font-extrabold text-base shadow-lg shadow-orange-500/25 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <span>Sending Request...</span>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Submit Project Request</span>
                            </>
                          )}
                        </button>

                      </form>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>

        {/* Scope & Cost Estimator */}
        <section className="relative w-full py-16 sm:py-20 bg-[#F4F6FB] border-y border-neutral-200/80 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-7xl mx-auto space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-white px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 shadow-xs inline-flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                Interactive Project Estimator
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight">
                Estimate Your Project Scope.
              </h2>
              <p className="text-xs sm:text-base text-neutral-500 font-normal leading-relaxed">
                Select your required platform and features to get an instant scope, cost, and delivery timeline range.
              </p>
            </div>

            <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-7 space-y-6">
                
                {/* Platform Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">1. Select Platform Type</label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {["Web Application", "Mobile Application", "Full Stack SaaS"].map((p) => (
                      <button
                        key={p}
                        onClick={() => setEstimatorPlatform(p)}
                        className={`p-3 rounded-2xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          estimatorPlatform === p
                            ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                            : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features Toggle */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">2. Choose Key Features</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ESTIMATOR_FEATURES.map((feat) => {
                      const isSelected = selectedFeatures.includes(feat.id);
                      return (
                        <button
                          key={feat.id}
                          onClick={() => toggleFeature(feat.id)}
                          className={`p-3 rounded-xl text-xs font-medium text-left flex items-center justify-between border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-orange-50 border-orange-500 text-neutral-950 shadow-xs"
                              : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                          }`}
                        >
                          <span>{feat.name}</span>
                          <div className={`w-4 h-4 rounded-md flex items-center justify-center text-white text-[10px] font-bold ${isSelected ? "bg-orange-600" : "border border-neutral-300"}`}>
                            {isSelected && "✓"}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Summary */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-950 text-white flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Estimated Summary</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 font-mono">LIVE CALC</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-neutral-400">Target Platform:</span>
                    <h4 className="text-lg font-extrabold text-white">{estimatorPlatform}</h4>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-neutral-400">Selected Features ({selectedFeatures.length}):</span>
                    <p className="text-xs text-neutral-300 line-clamp-2 font-mono">
                      {selectedFeatures.map((id) => ESTIMATOR_FEATURES.find((f) => f.id === id)?.name).join(", ")}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 space-y-3">
                    <div>
                      <span className="text-xs text-neutral-400">Estimated Cost Range:</span>
                      <div className="text-3xl font-black text-orange-400">
                        ${estimatedCost.toLocaleString()} – ${(estimatedCost * 1.35).toFixed(0).toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-neutral-400">Estimated Timeline:</span>
                      <div className="text-xl font-bold text-white">
                        ~{Math.ceil(estimatedDays / 7)} to {Math.ceil((estimatedDays * 1.25) / 7)} Weeks ({estimatedDays} Sprint Days)
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      category: estimatorPlatform,
                      message: `Project Estimate: ${estimatorPlatform} with features: ${selectedFeatures.map((id) => ESTIMATOR_FEATURES.find((f) => f.id === id)?.name).join(", ")}. Target budget range ~$${estimatedCost}.`,
                    }));
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-500 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Apply Estimate To Form
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Comparison Matrix */}
        <ComparisonMatrix />

        {/* FAQ Accordion */}
        <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-4xl mx-auto space-y-10">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] bg-[#FFF7F4] px-4 py-1.5 rounded-full border border-[#FF5A1F]/30 inline-flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight">
                Clear Answers to Common Questions.
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-neutral-200/90 overflow-hidden bg-white shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left font-bold text-sm sm:text-base text-neutral-950 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-orange-600" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                        {faq.a}
                      </div>
                    )}
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
