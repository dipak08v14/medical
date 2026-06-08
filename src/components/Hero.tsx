import { motion } from 'motion/react';
import { Star, MapPin, Pill, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { storeDetails } from '../data/storeData';

interface HeroProps {
  onScrollToContact: () => void;
}

export function Hero({ onScrollToContact }: HeroProps) {
  // Determine if store is currently open based on local time (Closes exactly 10:50 PM, starts 8:00 AM)
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const isAfterOpening = currentHour >= 8; 
  const isBeforeClosing = currentHour < 22 || (currentHour === 22 && currentMinute < 50);
  const isOpen = isAfterOpening && isBeforeClosing;

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 border-b border-slate-200">
      
      {/* Visual Canvas Wrapper with Max Bounds */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        
        {/* Core Split Flexbox/Grid Structure matching the Geometric Balance Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] items-stretch overflow-hidden bg-white sm:rounded-3xl sm:border sm:border-slate-200 sm:shadow-lg sm:my-8 lg:my-12">
          
          {/* LEFT COMPARTMENT (3/5 Width - 7 Columns on lg responsive scale) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
            
            {/* Status Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {isOpen ? (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Open · Closes 10:50 PM
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  Closed · Opens 8:00 AM
                </div>
              )}
              
              <div className="inline-flex items-center gap-1 text-slate-400 text-xs font-semibold uppercase tracking-widest px-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Trusted Local Pharmacy
              </div>
            </div>

            {/* Extreme Bold Title Block */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6">
              Your Neighborhood <br />
              <span className="text-emerald-600">Health & Wellness</span> <br />
              Partner in Sachin.
            </h1>

            {/* Slogan Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-sans">
              High-quality pharmaceutical care, pediatric formulations, vitamins, medical equipments, and daily general essentials. Situated right at Mukti Nagar to provide certified services to the Sachin community.
            </p>

            {/* Action Buttons Pair */}
            <div className="flex flex-wrap gap-3.5 mb-10">
              <button 
                onClick={onScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] transition-all text-white font-bold rounded-full text-sm shadow-md shadow-emerald-200 cursor-pointer uppercase tracking-wider"
              >
                Find Store Location
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href={storeDetails.locationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-white hover:bg-slate-50 transition-all text-slate-700 font-bold rounded-full text-sm border border-slate-200 cursor-pointer uppercase tracking-wider"
              >
                Get Directions Map
              </a>
            </div>

            {/* Double Stats Grid Boxes with clean borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Rating Card */}
              <div className="p-5 bg-slate-50/50 border border-slate-200 rounded-2xl transition-all hover:bg-slate-50">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">4.7</span>
                  <div className="flex text-amber-400 gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4.5 h-4.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">
                  15 Verified Reviews on Google
                </div>
              </div>

              {/* Medicine Availability Card */}
              <div className="p-5 bg-slate-50/50 border border-slate-200 rounded-2xl transition-all hover:bg-slate-50">
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-emerald-600 text-xs font-bold mt-1 uppercase tracking-tight">
                  High Availability
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  Life-Saving & Daily Formulations
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COMPARTMENT (2/5 Width - 5 Columns on lg; Deep contrast bg-emerald-900) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-12 bg-emerald-950 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient Circle Pattern inside deep container */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-teal-800 rounded-full opacity-15 pointer-events-none"></div>

            {/* Header tag */}
            <div className="relative z-10 mb-8 sm:mb-12">
              <h3 className="text-emerald-400 text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
                Visit Our Store
              </h3>
              
              {/* Address detail with clear line breaks */}
              <div className="text-white text-lg font-medium leading-relaxed max-w-md">
                G-22, Siddhi Vinayak Residency, <br />
                Sachin Station Rd, Mukti Nagar, <br />
                Sachin, Surat, Gujarat 394230
              </div>
              
              <div className="mt-4">
                <a 
                  href={storeDetails.locationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-bold border-b-2 border-emerald-800 pb-0.5 transition-all"
                >
                  Configure Navigation Route →
                </a>
              </div>
            </div>

            {/* Small Timing Schedule grid inside Emerald column */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="bg-emerald-900/45 p-4 rounded-xl border border-emerald-800/80">
                <div className="text-emerald-400 text-[10px] font-black uppercase tracking-wider mb-1">
                  Monday - Sun Hours
                </div>
                <div className="text-white text-xs font-semibold">
                  8:00 AM - 10:50 PM
                </div>
              </div>

              <div className="bg-emerald-900/45 p-4 rounded-xl border border-emerald-800/80">
                <div className="text-emerald-400 text-[10px] font-black uppercase tracking-wider mb-1">
                  Local Delivery Service
                </div>
                <div className="text-white text-xs font-semibold">
                  Available in Sachin Area
                </div>
              </div>
            </div>

            {/* Embedded client testimonial bubble styled perfectly according to the rules */}
            <div className="relative z-10 bg-emerald-900 p-6 sm:p-8 rounded-3xl mt-auto border border-emerald-800">
              <div className="flex items-start gap-4 text-white">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-serif italic text-2xl shrink-0">
                  “
                </div>
                <div>
                  <p className="italic text-emerald-100 text-xs sm:text-sm leading-snug">
                    "The best pharmacy in Sachin. Always have stocks and the staff is very helpful with prescribing dosage instructions."
                  </p>
                  <span className="block text-[10px] text-emerald-400 font-extrabold uppercase tracking-wide mt-3">
                    - Vijay Parmar (Local Guide)
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
