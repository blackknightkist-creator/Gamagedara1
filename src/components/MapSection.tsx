import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, ShieldCheck, ExternalLink, MessageCircle, Copy, Check } from 'lucide-react';

export const MapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = 'කුළුපන, හොරණ 12400, ශ්‍රී ලංකාව';
  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Kulupana,+Horana+12400,+Sri+Lanka';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Kulupana, Horana 12400, Sri Lanka');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location-map" className="py-24 bg-[#0d0a07] relative border-t border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            <span>අපේ ගමගෙදර පිහිටීම (Location)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sinhala leading-tight mb-4">
            හොරණ කුළුපන <span className="text-amber-400">අපේ ගමගෙදරට</span> පැමිණෙන්න
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-sinhala font-light">
            අපගේ පාරම්පරික කිතුල් නිපැයුම් ගබඩාව හා කාර්යාලය කුළුපන, හොරණ ප්‍රදේශයේ පිහිටා ඇති අතර, ඔබට සෘජුවම පැමිණ හෝ ආරක්ෂිත කුරියර් සේවාව මගින් නිවසටම ගෙන්වා ගත හැක.
          </p>
        </div>

        {/* Professional Google Maps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sinhala">කුළුපන ප්‍රධාන මධ්‍යස්ථානය</h3>
                    <span className="text-xs text-amber-400 font-semibold font-sinhala">හොරණ 12400</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-gray-300 hover:text-amber-400 text-xs font-sinhala flex items-center gap-1.5 transition-colors border border-stone-800"
                  title="ලිපිනය Copy කරගන්න"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copy කළා!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[11px]">ලිපිනය</span>
                    </>
                  )}
                </button>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-sm font-sinhala">
                
                {/* Address */}
                <div className="flex items-start gap-3.5 text-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5 border border-stone-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-sans">ලිපිනය (Address):</span>
                    <span className="font-semibold text-white">{fullAddress}</span>
                    <span className="text-xs text-gray-400 block mt-0.5">Kulupana, Horana 12400, Sri Lanka</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5 text-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5 border border-stone-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-sans">ක්ෂණික දුරකථන ඇමතුම් (Hotline):</span>
                    <a
                      href="tel:+94711650300"
                      className="text-base font-bold text-amber-400 hover:underline tracking-wide"
                    >
                      +94 71 165 0300
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 text-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5 border border-stone-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-sans">විද්‍යුත් තැපෑල (Email):</span>
                    <a
                      href="mailto:gamagedara.horana@gmail.com"
                      className="text-sm font-medium text-gray-200 hover:text-amber-400 hover:underline"
                    >
                      gamagedara.horana@gmail.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5 text-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5 border border-stone-800">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-sans">විවෘත වේලාවන් (Hours):</span>
                    <span className="font-semibold text-white">සෑම දිනකම පෙ.ව. 8:00 - ප.ව. 7:00</span>
                    <span className="text-xs text-emerald-400 block mt-0.5">● අද විවෘතයි</span>
                  </div>
                </div>

              </div>

              {/* Delivery notice */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 font-sinhala leading-relaxed flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>
                  හොරණ නගර සීමාව තුළ පැය 2කින් නොමිලේ Delivery පහසුකම. දිවයින පුරා ඕනෑම ප්‍රදේශයකට දින 1-2ක් ඇතුළත ආරක්ෂිතව නිවසටම ගෙන්වා ගැනීමේ පහසුකම.
                </span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-stone-800">
              <a
                id="btn-get-google-directions"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl glow-btn text-black font-extrabold text-xs sm:text-sm font-sinhala flex items-center justify-center gap-2 shadow-xl"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps ඔස්සේ මග සොයාගන්න (Get Directions)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/94711650300?text=%E0%B7%84%E0%B6%BD%E0%B7%9D%20%E0%B6%9C%E0%B6%B8%E0%B6%9C%E0%B7%89%E0%B6%AF%E0%B6%BB%2C%20%E0%B6%9A%E0%B6%BB%E0%B7%94%E0%B6%AB%E0%B7%8F%E0%B6%9A%E0%B6%BB%20Live%20Location%20%E0%B6%91%E0%B6%9A%20WhatsApp%20%E0%B6%9A%E0%B6%BB%E0%B6%B1%E0%B7%8A%E0%B6%B1."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-sinhala flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Live Location</span>
                </a>

                <a
                  href="tel:+94711650300"
                  className="py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-gray-200 text-xs font-bold font-sinhala flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative min-h-[420px] lg:min-h-[540px] bg-stone-950 flex flex-col">
            
            {/* Top Bar for Map */}
            <div className="px-5 py-3 bg-stone-900/95 border-b border-amber-500/20 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-white font-sinhala">Google Maps සජීවී සිතියම (Live Map)</span>
              </div>
              <span className="text-[11px] text-amber-400 font-mono">Kulupana, Horana 12400</span>
            </div>

            {/* Embedded Iframe */}
            <div className="relative flex-1 w-full h-full min-h-[380px]">
              <iframe
                title="ගමගෙදර කුළුපන හොරණ පිහිටීම"
                src="https://maps.google.com/maps?q=Kulupana,+Horana+12400,+Sri+Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 filter contrast-105"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Bottom bar with directions button */}
            <div className="p-3.5 bg-stone-950/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-gray-400 font-sinhala">
                📍 කුළුපන හන්දියේ සිට මිනිත්තු 3ක දුරින්
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold font-sinhala inline-flex items-center gap-1"
              >
                <span>සම්පූර්ණ සිතියම විශාල කර බලන්න</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
