import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data/storeData';
import { FileText, HeartPulse, Gift, Sparkles, Activity, Baby } from 'lucide-react';

// Map icon name to Lucide component
const iconMap: Record<string, React.ComponentType<any>> = {
  FileText: FileText,
  HeartPulse: HeartPulse,
  Gift: Gift,
  Sparkles: Sparkles,
  Activity: Activity,
  Baby: Baby,
};

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Departments & Offerings
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
            Comprehensive Healthcare & General Products
          </h2>
          <p className="text-slate-600 mt-3 font-sans text-sm max-w-xl">
            Our well-trained pharmacy professionals stock everything from life-saving medicines to daily hygiene items under one clean, geometric layout.
          </p>
        </div>

        {/* Services Bento Grid with perfect borders & rounded edges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Activity;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-emerald-600 group flex flex-col justify-between"
                id={`department-${service.id}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  <span className="uppercase tracking-wider">Available In-Store</span>
                  <span className="ml-1.5">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Help Banner styled in immersive dark-emerald with floating elements */}
        <div className="mt-16 bg-emerald-950 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-900 relative overflow-hidden">
          
          {/* Subtle design helper graphics */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full opacity-10 pointer-events-none -mr-16 -mt-16" />
          
          <div className="max-w-xl relative z-10">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
              Looking for generic or specific medicines?
            </h3>
            <p className="text-emerald-200 text-sm mt-2 font-sans font-medium">
              Simply drop by with your valid physician prescription. We maintain a robust procurement cycle to source specialized therapeutic medications within hours if they are not directly available.
            </p>
          </div>
          
          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=Rajlaxmi+Medical+And+General+Stores+Sachin+Station+Rd+Surat`}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 hover:scale-[1.01] active:scale-[0.99] text-white px-6 py-3.5 font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg shadow-emerald-950/40 border border-emerald-500/20"
            >
              Directions To Pharmacy
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
