import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';
import { reviews, storeDetails } from '../data/storeData';

export function ReviewsSection() {
  // Distribution percentages of customer satisfaction
  const distribution = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            What Our Customers Say
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
            Loved by the Sachin Community
          </h2>
          <p className="text-slate-600 mt-3 font-sans text-sm max-w-xl">
            Serving with absolute trust, genuine pricing, and open timings are why we maintain an excellent record across verified Google Maps reviews.
          </p>
        </div>

        {/* Detailed rating grid layout matching "Geometric Balance" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Average Rating Big Block */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
            <span className="font-display font-black text-6xl text-slate-900 leading-none">4.7</span>
            
            <div className="flex text-amber-400 gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${
                    i < 4 
                      ? 'fill-amber-400 stroke-amber-400' 
                      : 'fill-amber-400/30 stroke-amber-400'
                  }`} 
                />
              ))}
            </div>

            <span className="block text-slate-400 font-bold text-[10px] uppercase tracking-wider mt-4">
              Based on {storeDetails.reviewCount} Verified Reviews
            </span>
            <div className="mt-6 px-4 py-2 bg-emerald-50 text-emerald-800 text-[10px] font-extrabold uppercase tracking-widest rounded-full border border-emerald-100 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Highest Rated Local Pharmacy
            </div>
          </div>

          {/* Progress Bars Distribution */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              Review Score Distribution
            </h3>
            {distribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-4 text-sm font-sans">
                <span className="w-12 text-slate-500 font-bold text-xs shrink-0 flex items-center justify-end gap-1">
                  {item.stars} <Star className="w-3.5 h-3.5 fill-slate-400 stroke-slate-400 shrink-0" />
                </span>
                
                <div className="flex-1 h-3 bg-slate-200/60 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="h-full bg-emerald-600 rounded-full"
                  />
                </div>

                <span className="w-10 text-slate-500 text-right text-xs font-bold shrink-0">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Reviews List styled in rigid clean border cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              id={`review-card-${review.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${review.avatarColor} text-white flex items-center justify-center font-bold text-xs uppercase shrink-0`}>
                      {review.author[0]}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900">{review.author}</h4>
                      <p className="text-[9px] text-slate-400 tracking-wider uppercase font-semibold">{review.relativeTime}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400 gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(review.rating) 
                            ? 'fill-amber-400 stroke-amber-400' 
                            : 'stroke-amber-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-xs font-sans leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-emerald-600 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Verified Local Customer Review
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
