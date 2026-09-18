import React from 'react';
import { Leaf, ShieldCheck, Truck, Handshake } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% ස්වාභාවිකයි',
      desc: 'සීනි, පාටකාරක හෝ කල්තබා ගැනීමේ ද්‍රව්‍ය නොමැත',
    },
    {
      icon: ShieldCheck,
      title: 'උසස්ම තත්ත්වය',
      desc: 'හොරණ කුළුපන සාම්ප්‍රදායික ගෙවතු වලින් සෘජුවම',
    },
    {
      icon: Truck,
      title: 'දිවයින පුරා බෙදාහැරීම',
      desc: 'ආරක්ෂිතව ඔබේ නිවසටම පැමිණෙන Courier සේවාව',
    },
    {
      icon: Handshake,
      title: 'විශ්වාසනීය සේවාව',
      desc: 'සරල සහ කඩිනම් WhatsApp ඇණවුම් ක්‍රියාවලිය',
    },
  ];

  return (
    <section className="py-10 bg-stone-950/90 border-y border-amber-500/15 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-amber-500/50 hover:bg-stone-900/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:scale-110 group-hover:border-amber-400 transition-all shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base font-sinhala group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-sinhala mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
