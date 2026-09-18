import React from 'react';
import { Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import heroTapperImg from '../assets/images/gamagedara_hero_tapper_1789746189741.jpg';

export const StorySection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-950 relative overflow-hidden border-t border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Heritage Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 glow-border shadow-2xl bg-stone-900">
              <img
                src={heroTapperImg}
                alt="ගමගෙදර පාරම්පරික කිතුල් කැට කිරීමේ උරුමය"
                className="w-full h-[460px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Top 100% Quality Badge Seal (Placed at top so it never covers the text below) */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 glass-panel px-4 py-2 rounded-2xl border border-amber-500/50 bg-stone-950/85 backdrop-blur-md shadow-xl flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-sans">100%</span>
                <div className="border-l border-amber-500/30 pl-2.5">
                  <span className="text-xs text-amber-200 font-bold block font-sinhala leading-tight">
                    ස්වාභාවික දේශීයත්වය
                  </span>
                  <span className="text-[10px] text-gray-300 font-sinhala block">
                    හොරණ කුළුපන අපේ උරුමය
                  </span>
                </div>
              </div>

              {/* Bottom Quote Overlay - Full Width & Clean High-Contrast Background */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1 font-sinhala">
                  දේශීයත්වය රැකගත් හොරණ ගම්පියස
                </span>
                <p className="text-white text-sm sm:text-base font-sinhala font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  "පාරම්පරික කිතුල් ගසින් නෙලාගත් නොමුසු තෙලිජ්ජ මැටි මුට්ටියේ මද ගින්නේ උකු කරනා රහස පරම්පරා ගණනාවක අපේ උරුමයයි."
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>අපේ කතාව (Our Story)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sinhala leading-snug">
              හොරණින් ඇරඹි <span className="text-amber-400">ගමගෙදර</span> අභිමානවත් දේශීය උරුමය
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sinhala font-light">
              අපගේ එකම අරමුණ වන්නේ ශ්‍රී ලාංකේය පාරම්පරික රසය, සුවඳ සහ නොඉඳුල් පිරිසිදුකම කිසිදු වෙනසක් නොකර ඔබ අතට පත්කිරීමයි. වෙළඳපොලේ බහුලව ඇති කෘතිම සීනි, මොලෑසස් හෝ රසායනික කල්තබා ගැනීමේ ද්‍රව්‍ය සතයක්වත් නොකලවම් කර, හොරණ කුළුපන සුන්දර පරිසරයේ ස්වාභාවිකව වැඩෙන කිතුල් ගස් වලින් ලබාගන්නා තෙලිජ්ජ පාරම්පරික දැනුමින් යුතුව සකස් කරනු ලබයි.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-200 font-sinhala">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>සීනි හෝ ජලය කලවම් නොකළ 100% ඝන උකු කිතුල් පැණි</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200 font-sinhala">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>පාරම්පරික මැටි මුට්ටි වල දර ලිපේ මද ගින්නේ පිසීම</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200 font-sinhala">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>නැවුම් බව හා ගුණාත්මක බව සුරැකෙන ආරක්ෂිත ඇසුරුම්</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-amber-400" />
                  <h4 className="text-amber-400 text-2xl font-black font-sans">5,000+</h4>
                </div>
                <p className="text-xs text-gray-400 font-sinhala">තෘප්තිමත් පාරිභෝගිකයින්</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h4 className="text-amber-400 text-2xl font-black font-sans">100%</h4>
                </div>
                <p className="text-xs text-gray-400 font-sinhala">පිරිසිදු ස්වාභාවිකත්වය</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 col-span-2 sm:col-span-1">
                <h4 className="text-amber-400 text-2xl font-black font-sans">24h</h4>
                <p className="text-xs text-gray-400 font-sinhala">කඩිනම් ඩිලිවරි සේවාව</p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/94711650300?text=%E0%B7%84%E0%B6%BD%E0%B7%9D%20%E0%B6%9C%E0%B6%B8%E0%B6%9C%E0%B7%89%E0%B6%AF%E0%B6%BB%2C%20%E0%B6%85%E0%B6%B4%E0%B7%8A%E0%B7%83%E0%B7%8F%20%E0%B6%8B%E0%B6%BB%E0%B7%84%E0%B6%B8%E0%B6%BA%20%E0%B6%9C%E0%B7%90%E0%B6%B1%20%E0%B6%AD%E0%B7%80%20%E0%B7%80%E0%B7%92%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B6%BB%20%E0%B6%AF%E0%B7%90%E0%B6%B1%E0%B6%9C%E0%B6%B1%E0%B7%8A%E0%B6%B1%20%E0%B6%9A%E0%B7%90%E0%B6%B8%E0%B6%AD%E0%B7%92%E0%B6%BA%E0%B7%92."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full glow-btn text-black font-extrabold text-xs sm:text-sm font-sinhala uppercase tracking-wider"
              >
                <span>අපේ ගමගෙදර ගැන වැඩිදුර තොරතුරු</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
