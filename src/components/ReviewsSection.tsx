import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-950/80 relative border-t border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>පාරිභෝගික අදහස් (Customer Reviews)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sinhala leading-tight mb-4">
            අපේ රස බැලූ <span className="text-amber-400">ඔබගේම හිතවතුන්</span> කියන කතා
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sinhala font-light">
            දිවයින පුරා දහස් ගණනක් පාරිභෝගිකයින්ගේ නොමඳ විශ්වාසය දිනාගත් ගමගෙදර පිරිසිදු බව.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-amber-500/30 group-hover:text-amber-500/60 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-gray-200 text-sm sm:text-base font-sinhala leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-stone-800">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-black font-black text-base flex items-center justify-center font-sinhala shadow-md">
                  {review.avatarLetter}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-sinhala flex items-center gap-1.5">
                    <span>{review.name}</span>
                    {review.verified && (
                      <span title="තහවුරු කළ මිලදීගැනීමක්">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                      </span>
                    )}
                  </h4>
                  <span className="text-xs text-gray-400 font-sinhala">{review.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
