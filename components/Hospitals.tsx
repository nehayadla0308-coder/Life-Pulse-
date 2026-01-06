
import React from 'react';
import { MOCK_HOSPITALS } from '../constants';

interface HospitalsProps {
  onSelect: (id: string) => void;
}

const Hospitals: React.FC<HospitalsProps> = ({ onSelect }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">Partner Hospitals</h2>
        <p className="text-gray-500 font-bold text-sm">Real-time blood stock availability from local centers in Kakinada.</p>
      </header>

      <div className="grid gap-6">
        {MOCK_HOSPITALS.map(h => (
          <div 
            key={h.id} 
            onClick={() => onSelect(h.id)}
            className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all cursor-pointer group active:scale-[0.98]"
          >
            <div className="flex justify-between items-start mb-4">
               <div>
                 <h3 className="text-2xl font-black text-[#111827] group-hover:text-[#B91C1C] transition-colors tracking-tight">{h.name}</h3>
                 <p className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-widest">{h.address}</p>
               </div>
               <div className="text-right">
                  <span className="text-[#B91C1C] font-black text-lg">{h.distance} km</span>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(h.stock).map(([bt, level]) => (
                <div key={bt} className={`flex items-center gap-2 px-4 py-1.5 rounded-2xl border ${level === 'Critical' ? 'bg-red-50 border-red-200 text-red-600' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                  <span className="font-black text-xs">{bt}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">{level}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{h.hours}</span>
               </div>
               <svg className="w-6 h-6 text-gray-300 group-hover:text-[#B91C1C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
