import { Pill, Shield } from 'lucide-react';
import { storeDetails } from '../data/storeData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-500 py-12 border-t border-slate-200" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Core Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 border-b border-slate-200">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center shrink-0">
              <Pill className="w-5.5 h-5.5 rotate-45" />
            </div>
            <div>
              <span className="font-display font-extrabold text-slate-900 text-base block uppercase tracking-tight">
                Rajlaxmi Medical & General Stores
              </span>
              <p className="text-xs text-slate-400 font-sans mt-0.5 font-medium">
                Authentic Medicine & Healthcare Essentials next to Sachin Station Road.
              </p>
            </div>
          </div>

          {/* Quick legal/disclaimer banner details */}
          <div className="flex items-start gap-2.5 bg-slate-50/50 p-4 rounded-xl border border-slate-200">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-500 leading-normal font-sans font-medium">
              <strong>Professional Notice:</strong> All prescription pharmaceutical dispenses at our pharmacy counter strictly require an authorized medical prescription.
            </p>
          </div>

        </div>

        {/* Lower copyright bar with geometric style alignment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="space-y-1 block sm:text-left text-center">
            <p>© {currentYear} RAJLAXMI MEDICAL AND GENERAL STORES</p>
            <p className="text-[9px] text-slate-400 font-sans font-semibold tracking-normal normal-case">{storeDetails.address}</p>
          </div>
          
          <div className="flex gap-4 font-extrabold">
            <a 
              href={storeDetails.locationLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              Google Maps Location
            </a>
            <span className="text-slate-350">·</span>
            <span className="text-slate-400">SURAT, GUJARAT • LICENSE: 394230-RX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
