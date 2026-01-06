
import React from 'react';

interface HospitalDetailProps {
  hospital: any;
  onBack: () => void;
}

const HospitalDetail: React.FC<HospitalDetailProps> = ({ hospital, onBack }) => {
  const handleCall = () => {
    window.location.href = `tel:${hospital.phone}`;
  };

  return (
    <div className="animate-in fade-in slide-in-from-right duration-500 pb-20">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 font-black text-xs uppercase tracking-widest mb-8 hover:text-[#B91C1C] transition-colors group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
        Back to List
      </button>

      <div className="bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
        {/* Cover Image Placeholder */}
        <div className="h-48 bg-gray-100 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-8 text-white">
            <h1 className="text-3xl font-black tracking-tighter">{hospital.name}</h1>
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest">{hospital.address}</p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Facility Information</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-[1.5rem] border border-gray-100">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#B91C1C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Emergency Line</p>
                  <p className="text-lg font-black text-gray-900">{hospital.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-[1.5rem] border border-gray-100">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Operating Hours</p>
                  <p className="text-lg font-black text-gray-900">{hospital.hours}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Current Blood Inventory</h2>
            <div className="grid grid-cols-2 gap-3">
              {(Object.entries(hospital.stock || {}) as [string, string][]).map(([bt, level]) => (
                <div key={bt} className="bg-white border-2 border-gray-50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="text-xl font-black text-gray-900">{bt}</span>
                  <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${level === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-4 space-y-4">
            <button 
              onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}`, '_blank')}
              className="w-full bg-[#B91C1C] text-white py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-2xl hover:bg-red-800 transition-all active:scale-[0.98] hover:scale-[1.01]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              NAVIGATE NOW
            </button>
            
            <button 
              onClick={handleCall}
              className="w-full bg-gray-900 text-white py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-[0.98]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              CALL NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;
