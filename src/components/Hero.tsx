import React, { useState, useEffect } from 'react';
import { Award, ArrowDown, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data/products';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[60vh] sm:min-h-[72vh] flex items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* Background Slideshow Images (Zero Box Overlay - Smooth Seamless Ambient Blend) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            id={`hero-bg-slide-${index}`}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}

        {/* Subtle natural dark gradient for contrast without any box */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0a0806]" />
      </div>

      {/* Main Content Container - Compact & Seamless */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* User's Exact Authentic Logo */}
        <div className="flex justify-center mb-3">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 logo-ring bg-black border-2 border-amber-500/70 overflow-hidden shadow-2xl shadow-amber-950/70 hover:scale-105 transition-transform duration-300">
            <img
              src="/logo.jpg"
              alt="ගමගෙදර - අපේ උරුමය නිල ලාංඡනය"
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>
        </div>

        {/* Compact Verified Quality Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-3 float-anim shadow-lg shadow-amber-950/40">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-sinhala">100% ස්වාභාවික හොරණ පිරිසිදු කිතුල් පැණි සහ හකුරු</span>
          <Sparkles className="w-3 h-3 text-amber-300" />
        </div>

        {/* Dynamic Title - Balanced Font Size */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 font-sinhala drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          ගමගෙදර{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            අපේ උරුමය
          </span>
        </h1>

        {/* Tagline - Compact font & line height */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-stone-100 mb-5 sm:mb-6 leading-relaxed font-normal font-sinhala drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          කෘතිම සීනි, ජලය හෝ රසායනික ද්‍රව්‍ය සතයක්වත් නොමැති, හොරණ පාරම්පරික ක්‍රමවේදයට නෙලාගත් 100% නොමුසු පිරිසිදු දේශීය කිතුල් නිෂ්පාදන රසවිඳින්න.
        </p>

        {/* Hero CTA Action Buttons - Compact padding */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <a
            id="hero-explore-products-btn"
            href="#products"
            className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3 rounded-full glow-btn text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 transition-transform"
          >
            <span>නිෂ්පාදන නැරඹීමට</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
          
          <a
            id="hero-quick-whatsapp-order-btn"
            href="https://wa.me/94711650300?text=%E0%B7%84%E0%B6%BD%E0%B7%9D%20%E0%B6%9C%E0%B6%B8%E0%B6%9C%E0%B7%89%E0%B6%AF%E0%B6%BB%2C%20%E0%B6%B8%E0%B6%A7%20Quick%20Order%20%E0%B6%91%E0%B6%9A%E0%B6%9A%E0%B7%8A%20%E0%B6%AF%E0%B7%8F%E0%B6%B1%E0%B7%8A%E0%B6%B1%20%E0%B7%96%E0%B6%B1."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3 rounded-full bg-stone-900/90 hover:bg-stone-800 text-amber-300 hover:text-white font-bold text-sm sm:text-base border border-amber-500/60 transition-all flex items-center justify-center gap-2.5 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>වට්ස්ඇප් (WhatsApp) ඇණවුම්</span>
          </a>
        </div>

        {/* Interactive Slide Dots - Tighter margin */}
        <div className="flex justify-center items-center gap-2 mt-5 sm:mt-6" aria-label="Slideshow pagination">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              id={`hero-slide-dot-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                index === currentSlide
                  ? 'w-8 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/50'
                  : 'w-2 bg-stone-400/80 hover:bg-white'
              }`}
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
