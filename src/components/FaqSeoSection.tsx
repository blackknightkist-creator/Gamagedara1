import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, CheckCircle2, Truck, ShieldCheck, MapPin } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: 'තත්ත්ව සහතිකය',
    question: 'ගමගෙදර කිතුල් පැණි 100% නොමුසු පිරිසිදු බව සහතික කරන්නේ කෙසේද?',
    answer:
      'අපගේ කිතුල් පැණි නිපදවනු ලබන්නේ හොරණ කුළුපන අපේම පාරම්පරික කිතුල් ගස්වලින් උදෑසනින්ම නෙලාගත් නැවුම් තෙලිජ්ජෙනි. සාම්ප්‍රදායික මැටි මුට්ටි වල දර ලිපේ පැය ගණනාවක් මද ගින්නේ උකු කරන අතර, කිසිදු සුදු සීනි, මොලෑසස්, වතුර, කෘතිම පැණි හෝ කල්තබා ගැනීමේ රසායනික සතයක්වත් එකතු නොකෙරේ. දියවැඩියා රෝගීන්ටද බිය නැතිව භාවිත කළ හැකි ස්වාභාවික Low GI පැණි වේ.',
  },
  {
    category: 'හඳුනාගැනීම',
    question: 'සැබෑ පිරිසිදු කිතුල් පැණි සීනි මිශ්‍ර පැණි වලින් වෙන්කර හඳුනාගන්නේ කෙසේද?',
    answer:
      'සැබෑ කිතුල් පැණි වල සුවිශේෂී ප්‍රණීත කිතුල් සුවඳක් සහ දිව ගෑ විට උගුර නොදැවෙන මෘදු පැණි රසයක් ඇත. ශීතකරණයක තැබූ විට සීනි මෙන් මිදෙන්නේ හෝ කැට ගැසෙන්නේ නැත. ගමගෙදර කිතුල් පැණි බිංදුවක් ජල වීදුරුවකට දැමූ විට ක්ෂණිකව දිය නොවී වීදුරුවේ පතුලට ගමන් කරන්නේ එහි ඇති පිරිසිදු ඝන උකු බව නිසාය.',
  },
  {
    category: 'බෙදාහැරීම',
    question: 'දිවයින පුරා බෙදාහැරීම (Island-wide Delivery) සිදුකරන්නේ කෙසේද?',
    answer:
      'අපගේ WhatsApp අංකය (+94711650300) හෝ වෙබ් අඩවිය ඔස්සේ ඕනෑම මොහොතක ඇණවුම් කළ හැක. ආරක්ෂිත බුබුළු ඇසුරුම් (Bubble wrap) සහ තද පෙට්ටි වල අසුරා, විශ්වාසනීය සීඝ්‍රගාමී කුරියර් සේවාවන් මගින් කොළඹ, මහනුවර, ගාල්ල ඇතුළු දිවයිනේ ඕනෑම තැනකට දින 1-3 ක් ඇතුළත ඔබේ නිවසටම ගෙනවිත් භාරදෙනු ලැබේ.',
  },
  {
    category: 'ස්ථානය හා පැමිණීම',
    question: 'ගමගෙදර නිෂ්පාදන සෘජුවම පැමිණ ලබාගත හැකි ස්ථානය කුමක්ද?',
    answer:
      'අපගේ නිෂ්පාදනාගාරය සහ ප්‍රදර්ශනාගාරය පිහිටා ඇත්තේ කුළුපන, හොරණ 12400 (Kulupana, Horana 12400) ලිපිනයේය. සතියේ සෑම දිනකම පෙරවරු 8:00 සිට පස්වරු 7:00 දක්වා විවෘතව ඇති අතර, පැමිණීමට පෙර 071 1650 300 අමතා තහවුරු කරගත හැක.',
  },
  {
    category: 'ඇණවුම් සහ තොග',
    question: 'උත්සව, දානමය කටයුතු හෝ ආයතනික තිළිණ සඳහා තොග වශයෙන් ලබාගත හැකිද?',
    answer:
      'ඔව්, මංගල උත්සව, ආගමික පිංකම් සහ ආයතනික තිළිණ වෙනුවෙන් විශේෂ ඇසුරුම් සහිතව සාධාරණ මිල ගණන් යටතේ තොග ඇණවුම් සපයනු ලැබේ. ගමගෙදර රාජකීය කිතුල් තෑගි ඇසුරුම මේ සඳහා අතිශය ජනප්‍රිය තේරීමකි.',
  },
];

export const FaqSeoSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-[#0c0a07] border-t border-amber-500/15 relative overflow-hidden"
      aria-label="නිතර අසන ප්‍රශ්න සහ ගමගෙදර තොරතුරු"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>නිතර අසන ප්‍රශ්න (Frequently Asked Questions)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sinhala leading-tight mb-4">
            හොරණ කිතුල් පැණි සහ හකුරු ගැන{' '}
            <span className="text-amber-400">ඔබ දැනගත යුතු සියල්ල</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sinhala font-light">
            පිරිසිදු කිතුල් නිෂ්පාදන තෝරාගැනීම, බෙදාහැරීම සහ ගුණාත්මකභාවය පිළිබඳ පාරිභෝගිකයින් නිතර විමසන කරුණු.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-stone-900/90 border-amber-500/50 shadow-xl shadow-amber-950/20'
                    : 'bg-stone-900/40 border-stone-800 hover:border-amber-500/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 font-bold font-sinhala flex-shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-sinhala">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 font-sinhala leading-relaxed border-t border-stone-800/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO Micro Knowledge Highlights - Boosts Google Semantic Crawling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-stone-800/80">
          <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1 font-sinhala">100% නොමුසු තෙලිජ්ජ</h4>
              <p className="text-xs text-gray-400 font-sinhala leading-relaxed">
                කෘතිම රසකාරක, සීනි හෝ කල්තබා ගැනීමේ රසායනික කිසිවක් අඩංගු නොවේ.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1 font-sinhala">ආරක්ෂිත ඩිලිවරි</h4>
              <p className="text-xs text-gray-400 font-sinhala leading-relaxed">
                බිඳීම් ආරක්ෂක ඇසුරුම් සමග දින 1-3ක් ඇතුළත දිවයින පුරා ඔබේ නිවසටම.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1 font-sinhala">කුළුපන, හොරණ</h4>
              <p className="text-xs text-gray-400 font-sinhala leading-relaxed">
                දේශීය කිතුල් ගසින් සෘජුවම නිපදවන සැබෑ ගම්පියසේ පාරම්පරික රසය.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
