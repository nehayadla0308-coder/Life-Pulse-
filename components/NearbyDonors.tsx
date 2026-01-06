
import React from 'react';
import { MOCK_DONORS } from '../constants';

const NearbyDonors: React.FC = () => {
  const handleContact = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Nearby Heroes</h2>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Found within 10km of Kakinada</p>
        </div>
        <div className="p-3 bg-red-50 rounded-2xl text-[#B91C1C] border border-red-100 shadow-sm">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
      </header>

      <div className="grid gap-4">
        {MOCK_DONORS.map(donor => (
          <div key={donor.id} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-xl transition-all flex items-center justify-between group">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-red-50 rounded-[1.5rem] flex items-center justify-center text-2xl font-black text-[#B91C1C] border-2 border-red-100 group-hover:bg-[#B91C1C] group-hover:text-white transition-colors duration-300">
                {donor.bloodType}
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 group-hover:text-[#B91C1C] transition-colors">{donor.name}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    {donor.distance} km away
                  </p>
                  <span className="hidden sm:block text-gray-200 text-xs">•</span>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Last: {donor.lastDonation}</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleContact(donor.phone)}
              className="bg-[#111827] text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#B91C1C] transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              CONTACT
            </button>
          </div>
        ))}
      </div>
      
      {/* Footer Hint */}
      <div className="text-center py-8 opacity-40">
        <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em]">Life Pulse Donor Network • Kakinada Node</p>
      </div>
    </div>
  );
};

export default NearbyDonors;
