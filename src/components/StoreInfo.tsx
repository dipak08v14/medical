import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Heart, Share2, ExternalLink, Check, ShieldCheck } from 'lucide-react';
import { storeDetails } from '../data/storeData';

export function StoreInfo() {
  const [isSaved, setIsSaved] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  // Initialize saved state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('rajlaxmi_medical_saved');
    if (saved === 'true') {
      setIsSaved(true);
    }
  }, []);

  const handleSaveToggle = () => {
    const nextSavedState = !isSaved;
    setIsSaved(nextSavedState);
    localStorage.setItem('rajlaxmi_medical_saved', String(nextSavedState));
    
    if (nextSavedState) {
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3000);
    }
  };

  const handleShareClick = () => {
    const shareText = `🏥 ${storeDetails.name}\n⭐ Rating: ${storeDetails.rating}/5 (${storeDetails.reviewCount} Reviews)\n📍 Address: ${storeDetails.address}\n⏰ Timing: ${storeDetails.timing}\n🗺️ Directions: ${storeDetails.locationLink}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    }
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-white relative border-b border-slate-200">
      
      {/* Absolute Toasts Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm">
        <AnimatePresence>
          {showSavedToast && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-emerald-950 text-white rounded-lg px-4 py-3 shadow-2xl border border-emerald-800/20 flex items-center gap-2.5 text-xs font-semibold"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
              <span>Store details saved to browser local state!</span>
            </motion.div>
          )}

          {showShareToast && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-slate-900 text-white rounded-lg px-4 py-3 shadow-2xl border border-slate-800 flex items-center gap-2.5 text-xs font-semibold"
            >
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Copied store layout details to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Address details, maps guide, timings */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  Location & Timings
                </span>
                <h2 className="font-display font-extrabold text-3xl text-slate-950 tracking-tight leading-tight">
                  Where to Find Us 
                </h2>
                <p className="text-slate-500 text-sm font-sans max-w-xl">
                  Located right inside the prominent Siddhi Vinayak Residency block in Sachin. Drop by today or secure directions with our dynamic navigation tools.
                </p>
              </div>

              {/* Geo Cards - stylized in clean rounded-2xl geometry */}
              <div className="space-y-4">
                
                {/* TIMING CARD */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg shrink-0 mt-0.5 border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-slate-900 text-sm uppercase tracking-wider">Store Operational Hours</h4>
                    <p className="text-slate-600 text-sm mt-1 font-semibold">{storeDetails.timing}</p>
                    <p className="text-xs text-slate-400 mt-1">Open 7 days a week for immediate medication, wellness, & baby formulations.</p>
                  </div>
                </div>

                {/* POSTAL CARD */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg shrink-0 mt-0.5 border border-emerald-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-slate-900 text-sm uppercase tracking-wider">Address & Landmark</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-normal font-medium max-w-lg">
                      {storeDetails.address}
                    </p>
                    <p className="text-xs text-emerald-700 mt-2 font-bold uppercase tracking-wider">
                      Landmark: G-22 inside Siddhi Vinayak, Mukti Nagar, Sachin Rd
                    </p>
                  </div>
                </div>

                {/* CONVENIENCE BULLETS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>UPI & Online Payments Accepted</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Wheelchair Accessible Storefront</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Actions Panel styled as elegant pill badges */}
            <div className="pt-6 border-t border-slate-250 flex flex-wrap gap-3">
              <a 
                href={storeDetails.locationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-emerald-250"
              >
                Get Directions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleSaveToggle}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  isSaved 
                    ? 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 shrink-0 ${isSaved ? 'fill-rose-600 text-rose-600' : ''}`} />
                {isSaved ? 'Saved to Bookmarks' : 'Save Pharmacy'}
              </button>

              <button
                onClick={handleShareClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 shrink-0" />
                Share Details
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Direction / Map Information Card */}
          <div className="lg:col-span-5">
            <div className="h-full bg-emerald-950 text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[350px] border border-emerald-900">
              
              {/* Absolutes decorative grid lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-800 rounded-full opacity-10 pointer-events-none -mr-22 -mt-22" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-teal-400 font-extrabold tracking-widest uppercase">
                    Transport & Commute
                  </span>
                  <div className="px-2 py-1 bg-emerald-500/15 text-emerald-400 rounded-md border border-emerald-500/30 text-[9px] font-black uppercase tracking-wider">
                    Traffic: Normal
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display font-black text-2xl tracking-tight leading-tight">
                    How Busy Is It Now?
                  </h3>
                  <p className="text-emerald-100 text-xs leading-relaxed font-sans font-medium">
                    Rajlaxmi Medical & General Stores maintains quick counter service. Visitors late in the evening between 8:00 PM and 10:50 PM can access fast billing easily.
                  </p>
                </div>
              </div>

              {/* Map/Travel assistance info */}
              <div className="relative z-10 pt-8 border-t border-emerald-900 space-y-4">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-300">
                  Estimated Travel Times
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/80">
                    <span className="block text-[9px] text-emerald-400 font-bold uppercase tracking-wider">From Sachin Station</span>
                    <span className="block text-sm font-bold text-white mt-1">~2 Mins Drive</span>
                  </div>
                  <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/80">
                    <span className="block text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Walking Distance</span>
                    <span className="block text-sm font-bold text-white mt-1">~5 Mins Walk</span>
                  </div>
                </div>
                
                <a 
                  href={storeDetails.locationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer border border-emerald-500/10 shadow-lg shadow-emerald-950/40"
                >
                  Open Live Maps Route
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
