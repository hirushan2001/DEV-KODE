import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  X as CloseIcon, 
  Play, 
  ChevronRight, 
  Sparkles, 
  Volume2, 
  Palette, 
  Type, 
  Sliders, 
  Scissors, 
  Layers, 
  Zap, 
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import { MODULE_PAGES_DATA } from '../data/modulePagesData';
import ComparisonSection from './ComparisonSection';
import CurriculumMontage from './CurriculumMontage';
import FooterSection from './FooterSection';
import LmsModal from './LmsModal';

export default function ModuleDetailPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const [activeCoverIdx, setActiveCoverIdx] = useState(0);
  const [activeAccordionCard, setActiveAccordionCard] = useState(0);
  const [activeMoodIdx, setActiveMoodIdx] = useState(0);
  const [activeTypoStyleIdx, setActiveTypoStyleIdx] = useState(0);
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [isLmsOpen, setIsLmsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Normalize key
  const key = moduleId || 'editing-fundamentals';
  const data = MODULE_PAGES_DATA[key] || MODULE_PAGES_DATA['editing-fundamentals'];

  // Scroll to top on page load / route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveCoverIdx(0);
    setActiveAccordionCard(0);
  }, [key]);

  const covers = data.heroCovers || [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans antialiased select-none">
      
      {/* Fixed Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto transition-all duration-500 w-full max-w-[1920px] mt-2 mx-2 h-15 px-4 sm:px-6 lg:px-8 rounded-[15px] bg-neutral-900/80 backdrop-blur-lg border border-white/10 text-white flex items-center justify-between shadow-2xl">
          <div className="shrink-0 flex items-center">
            <Link className="flex items-center gap-2" to="/">
              <span className="font-bold text-xl tracking-tight font-sans text-white">Editor.lk</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-4 grow">
            <Link className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors" to="/">Home</Link>
            <a className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors" href="#features">Course guide</a>
            <a className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors" href="#pricing">Pricing</a>
            <a className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors" href="#comparison">Benefits</a>
            <a className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors" href="#faq">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => setIsLmsOpen(true)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              LMS Demo
            </button>
            <a
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border bg-white border-white text-black hover:bg-neutral-100 shadow-md hover:scale-105 active:scale-95"
              href="https://lms.editor.lk/payment"
              target="_blank"
              rel="noreferrer"
            >
              Enroll now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-100 shadow-sm" href="https://lms.editor.lk/payment">Enroll now</a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-1.5 rounded-lg text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 px-6 flex flex-col space-y-4 md:hidden">
          <Link onClick={() => setMobileMenuOpen(false)} to="/" className="text-lg font-bold text-white py-2 border-b border-white/10">Home</Link>
          <Link onClick={() => setMobileMenuOpen(false)} to="/editing-fundamentals" className="text-base text-neutral-300 py-2">Editing Fundamentals</Link>
          <Link onClick={() => setMobileMenuOpen(false)} to="/color-grading" className="text-base text-neutral-300 py-2">Color Grading</Link>
          <Link onClick={() => setMobileMenuOpen(false)} to="/music-and-sound" className="text-base text-neutral-300 py-2">Music & Sound</Link>
          <Link onClick={() => setMobileMenuOpen(false)} to="/typography" className="text-base text-neutral-300 py-2">Typography</Link>
          <a onClick={() => setMobileMenuOpen(false)} href="https://lms.editor.lk/payment" className="w-full py-3 rounded-full bg-orange-500 text-white font-bold text-center mt-4">Enroll Now</a>
        </div>
      )}

      {/* Hero Section */}
      <div id="home" className="relative z-10 w-full min-h-[90vh] sm:min-h-screen bg-black">
        <section className="relative w-full min-h-screen bg-black text-white pt-20 sm:pt-24 pb-8 flex flex-col justify-between overflow-hidden">
          
          {/* Gradient Background Layer */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, #000000 0%, #000000 20%, #000000 45%, #3A3A3C 80%, #FFFFFF 100%)' }}
          ></div>

          {/* Hero Content Header */}
          <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grow flex flex-col items-center justify-center gap-3 sm:gap-6 pt-6 pb-4">
            
            <div className="w-full max-w-4xl text-center space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-orange-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                {data.heroSubtitle}
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] text-white">
                {data.heroTitle}
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#D1D5DB] max-w-xs sm:max-w-xl mx-auto font-normal leading-relaxed">
                {data.heroDesc}
              </p>
            </div>

            {/* 3D Perspective Card Carousel Deck */}
            <div className="relative w-full max-w-5xl mt-6 flex flex-col items-center justify-center">
              <div
                className="relative w-full h-[320px] xs:h-[350px] sm:h-[380px] md:h-[410px] flex items-center justify-center"
                style={{ perspective: '1200px' }}
              >
                {covers.map((cover, idx) => {
                  const offset = idx - activeCoverIdx;
                  const absOffset = Math.abs(offset);
                  const isCenter = offset === 0;

                  // 3D Transform values
                  const translateX = offset * (window.innerWidth < 640 ? 110 : 160);
                  const translateZ = -absOffset * 180;
                  const rotateY = offset * -25;
                  const opacity = absOffset > 3 ? 0 : 1 - absOffset * 0.25;

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveCoverIdx(idx)}
                      className="absolute cursor-pointer will-change-transform select-none transition-all duration-500 hover:brightness-110"
                      style={{
                        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                        opacity: opacity,
                        zIndex: 20 - absOffset,
                        transformStyle: 'preserve-3d'
                      }}
                      title={`Focus ${cover.title}`}
                    >
                      <div className={`relative w-[180px] xs:w-[200px] sm:w-[240px] md:w-[265px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border transition-all ${
                        isCenter ? 'border-orange-500/80 shadow-orange-500/20 scale-105' : 'border-white/15'
                      } bg-neutral-900`}>
                        <img
                          src={cover.src}
                          alt={cover.title}
                          className="w-full h-full object-cover pointer-events-none"
                        />
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-left">
                            <span className="text-xs font-bold text-white">{cover.title}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cover Carousel Dots */}
              <div className="flex items-center justify-center gap-2 pt-4 relative z-30">
                {covers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCoverIdx(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeCoverIdx === idx ? 'w-6 bg-orange-500' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Hero Footer Bar */}
          <div className="relative z-30 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 shrink-0 space-y-4">
            <div className="w-full h-px bg-white/40"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-2 text-xs sm:text-sm font-bold text-white">
              <div className="flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Step by step</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Beginner friendly</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Practical learning</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Professional workflow</div>
            </div>
          </div>

        </section>
      </div>

      {/* "What You'll Learn" Section (White Rounded Block) */}
      <div className="relative z-20 w-full bg-white text-neutral-900 rounded-t-4xl overflow-hidden pb-12 sm:pb-20">
        <div id="features">
          <section className="relative w-full bg-white text-neutral-900 pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 select-none">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
              
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">
                  {data.learnTitle}
                </h2>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-950 tracking-tight leading-none">
                  {data.learnHighlight}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-relaxed pt-2">
                  {data.learnSubtitle}
                </p>
              </div>

              {/* Mobile Card Stack */}
              <div className="block lg:hidden w-full max-w-md mx-auto space-y-4">
                {data.cards.map((card, idx) => (
                  <div
                    key={card.id}
                    className="p-5 rounded-3xl bg-neutral-950 text-white border border-white/10 space-y-3 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-orange-500 font-black text-white flex items-center justify-center text-sm">
                        {card.initial}
                      </div>
                      <h4 className="font-bold text-base text-white">{card.title}</h4>
                    </div>
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-neutral-900">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Desktop Accordion Grid */}
              <div className="hidden lg:flex w-full flex-row gap-5 h-[480px]">
                {data.cards.map((card, idx) => {
                  const isActive = activeAccordionCard === idx;
                  return (
                    <div
                      key={card.id}
                      onMouseEnter={() => setActiveAccordionCard(idx)}
                      onClick={() => setActiveAccordionCard(idx)}
                      className={`flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 ${
                        isActive
                          ? 'bg-neutral-950 text-white shadow-2xl border border-neutral-800 scale-102'
                          : 'bg-[#F3F3F5] text-neutral-900 border border-neutral-200/80 hover:bg-[#E8E8EC]'
                      }`}
                      style={{ flexGrow: isActive ? 2.5 : 1 }}
                    >
                      <div className="z-10 px-6 pt-6 pb-2">
                        <h3 className={`font-bold text-base sm:text-lg transition-colors ${isActive ? 'text-white' : 'text-neutral-900'}`}>
                          {card.title}
                        </h3>
                      </div>

                      <div className="relative w-full flex-1 min-h-[220px] overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      <div className={`z-10 p-6 space-y-1 ${isActive ? 'bg-gradient-to-t from-black via-black/90 to-transparent' : ''}`}>
                        <h4 className={`text-base font-bold ${isActive ? 'text-white' : 'text-neutral-900'}`}>{card.title}</h4>
                        <p className={`text-xs leading-relaxed line-clamp-2 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        </div>

        {/* SECTION SPECIFIC INTERACTIVE FEATURE SHOWCASES */}
        
        {/* Module 1: Core Editing Skills Step-by-Step */}
        {key === 'editing-fundamentals' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-900">{data.pillarsTitle}</h2>
              <p className="text-neutral-500 text-sm sm:text-base">{data.pillarsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.pillars.map((pil, i) => (
                <div key={i} className="p-6 rounded-3xl bg-[#F8F9FA] border border-neutral-200 space-y-3 hover:border-orange-500/40 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white font-black text-base flex items-center justify-center">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{pil.name}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{pil.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-neutral-950 text-white border border-white/10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
              <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-neutral-900 relative border border-white/10 group cursor-pointer" onClick={() => setIsLmsOpen(true)}>
                <img src={data.demoVideoSrc} alt="Edit preview" className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Practical Showcase</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{data.demoTitle}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Watch step-by-step how to construct tight edits, apply speed ramping curves, and render crisp 4K footage.
                </p>
                <button onClick={() => setIsLmsOpen(true)} className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-all shadow-lg cursor-pointer">
                  Watch Full Preview in LMS
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Module 2: Color Grading Pipeline & Before/After Slider */}
        {key === 'color-grading' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-900">{data.processTitle}</h2>
            </div>

            {/* Pipeline Step Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {data.processSteps.map((step, i) => (
                <div key={i} className="px-5 py-2.5 rounded-full bg-[#F3F4F6] border border-neutral-300 text-neutral-900 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-black flex items-center justify-center">{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Interactive Before & After Slider */}
            <div className="p-8 rounded-3xl bg-neutral-950 text-white border border-white/10 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-white">{data.demoTitle}</h3>
                <span className="text-xs text-orange-400 font-mono">Drag slider to compare grade</span>
              </div>

              <div className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden select-none cursor-ew-resize">
                {/* Graded Image (Background) */}
                <img
                  src="/main/1/real-projects/before-after.png"
                  alt="Color Graded"
                  className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-125"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                  COLOR GRADED
                </div>

                {/* Ungraded Flat Image (Foreground Clip) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${beforeAfterPos}%` }}
                >
                  <img
                    src="/main/1/real-projects/before-after.png"
                    alt="Ungraded Flat"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-90 contrast-80"
                    style={{ width: '100vw', maxWidth: 'none' }}
                  />
                  <div className="absolute top-4 left-4 bg-neutral-800/90 text-neutral-300 text-xs font-extrabold px-3 py-1 rounded-full border border-white/20">
                    RAW FLAT FOOTAGE
                  </div>
                </div>

                {/* Drag Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                  style={{ left: `${beforeAfterPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black font-black text-xs flex items-center justify-center shadow-xl border-2 border-orange-500">
                    ↔
                  </div>
                </div>

                {/* Hidden Input Controller */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterPos}
                  onChange={(e) => setBeforeAfterPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                />
              </div>
            </div>
          </section>
        )}

        {/* Module 3: Music Mood Selector & Audio Tools */}
        {key === 'music-and-sound' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-900">{data.moodTitle}</h2>
              <p className="text-neutral-500 text-sm">{data.moodSubtitle}</p>
            </div>

            {/* Interactive Audio Mood Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {data.moods.map((mood, idx) => {
                const isActive = activeMoodIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveMoodIdx(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-950 text-white border-orange-500 shadow-xl scale-105'
                        : 'bg-[#F3F4F6] text-neutral-800 border-neutral-300 hover:bg-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-base">{mood.name}</span>
                      <Volume2 className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-neutral-400'}`} />
                    </div>
                    <p className={`text-[11px] leading-tight ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {mood.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Audio Tools Grid */}
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-black text-neutral-900 text-center">{data.toolsTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.tools.map((tool, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-neutral-950 text-white border border-white/10 space-y-2 shadow-md">
                    <h4 className="font-bold text-lg text-orange-400">{tool.title}</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Module 4: Typography Style Identity & Master Tools */}
        {key === 'typography' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-900">{data.stylesTitle}</h2>
              <p className="text-neutral-500 text-sm">{data.stylesSubtitle}</p>
            </div>

            {/* Typography Styles Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {data.typoStyles.map((sty, idx) => {
                const isActive = activeTypoStyleIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTypoStyleIdx(idx)}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                      isActive
                        ? 'bg-neutral-950 text-white border-orange-500 shadow-xl scale-105'
                        : 'bg-[#F3F4F6] text-neutral-800 border-neutral-300 hover:bg-neutral-200'
                    }`}
                  >
                    <span className="text-xs font-bold text-orange-400 block uppercase tracking-wider">{sty.font}</span>
                    <h3 className="font-black text-xl tracking-tight">{sty.title}</h3>
                    <p className={`text-xs ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>{sty.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Master Tools */}
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-black text-neutral-900 text-center">{data.masterToolsTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.masterTools.map((tool, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-neutral-950 text-white border border-white/10 space-y-2 shadow-md">
                    <h4 className="font-bold text-lg text-orange-400">{tool.title}</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>

      {/* Comparison Section ("See the Difference. Choose What's Better for You.") */}
      <div className="relative z-30 w-full bg-white text-neutral-900 border-t border-neutral-200">
        <ComparisonSection />
      </div>

      {/* "Explore More Course Modules" Section */}
      <section className="relative z-30 w-full bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Keep Learning</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Explore More Course Modules</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.otherModules.map((mod, i) => (
              <Link
                key={i}
                to={mod.slug}
                className="p-6 rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-orange-500/50 transition-all flex items-center justify-between gap-4 group cursor-pointer shadow-xl hover:scale-102"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                    <img src={mod.image} alt={mod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block">Course Module</span>
                    <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors">{mod.name}</h3>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Montage Grid */}
      <div className="relative z-20 w-full bg-[#08080A]">
        <CurriculumMontage />
      </div>

      {/* Footer Section */}
      <FooterSection />

      {/* LMS Video Stream Modal */}
      <LmsModal isOpen={isLmsOpen} onClose={() => setIsLmsOpen(false)} />

    </div>
  );
}
