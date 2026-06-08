import { Pill, MapPin, ExternalLink } from 'lucide-react';
import { storeDetails } from '../data/storeData';

interface NavbarProps {
  onScrollToContact: () => void;
}

export function Navbar({ onScrollToContact }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 transition-all" id="main-navbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand / Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm shrink-0">
              <Pill className="w-5.5 h-5.5 rotate-45" />
            </div>
            <div>
              <span className="font-display font-black text-base md:text-lg text-emerald-950 tracking-tight block">
                RAJLAXMI MEDICAL
              </span>
              <span className="text-[9px] text-slate-500 block uppercase font-bold tracking-widest leading-none mt-1">
                General Stores & Pharmacy
              </span>
            </div>
          </div>

          {/* Nav Items & Direct Contacts */}
          <div className="flex items-center gap-6">
            
            {/* Embedded maps fast links - sleek and uppercase */}
            <a 
              href={storeDetails.locationLink}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider hover:text-emerald-700 transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              Mukti Nagar, Sachin
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Jump button in pill rounded style with shadow-lg shadow-emerald-250 */}
            <button 
              onClick={onScrollToContact}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all text-white font-bold rounded-full text-xs cursor-pointer shadow-lg shadow-emerald-100 uppercase tracking-wider"
              id="nav-btn-contact"
            >
              Get Location
            </button>
            
          </div>

        </div>
      </div>
    </nav>
  );
}
