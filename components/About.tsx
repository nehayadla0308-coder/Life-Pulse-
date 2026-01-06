
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-700 pb-20">
      {/* Hero Section */}
      <div className="text-center">
        <div className="inline-block p-4 bg-red-50 rounded-3xl mb-6 shadow-sm border border-red-100">
          <svg className="w-12 h-12 text-[#B91C1C]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-4 uppercase">Life Pulse:<br/><span className="text-[#B91C1C]">The Smart Finder</span></h1>
      </div>

      {/* Mission Section (Professional Elevator Pitch Integration) */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 opacity-50"></div>
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-4">The Professional Vision</h2>
        <p className="text-gray-900 font-bold leading-relaxed text-xl mb-4">
          Our platform is a <span className="text-[#B91C1C]">Smart Blood Donation Finder</span> designed to bridge the gap between donors and patients with automated emergency alerts and health eligibility checks.
        </p>
        <p className="text-gray-600 font-medium leading-relaxed">
          Life Pulse leverages location-based algorithms and Gemini AI to ensure that when a life is on the line, the distance between the need and the solution is minimized. We aren't just a list; we are a real-time response network.
        </p>
      </div>

      {/* Permissions Section */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Built on Trust</h2>
        <div className="space-y-6">
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#B91C1C] border border-red-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Precision Geolocation</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                We use precise mapping to find matches within minutes of your location, optimizing the critical 'Golden Hour' of medical response.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-gray-400 border border-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">AI Health Screening</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Powered by Gemini, our assistant provides real-time eligibility checks, ensuring both donor safety and high-quality blood supply.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-gray-400 border border-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Security First</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Your medical data is encrypted and handled with the highest confidentiality. We prioritize your privacy as much as we do your health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="bg-[#111827] p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full -mr-8 -mb-8 pointer-events-none"></div>
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
          </svg>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] opacity-60">Global Standards</h2>
        </div>
        <p className="text-sm font-medium leading-relaxed opacity-90">
          Life Pulse follows international guidelines for blood donation and health data management. We are committed to transparency and community empowerment.
        </p>
      </div>

      {/* Footer Branding */}
      <div className="text-center pt-8 opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">End-to-End Encryption Enabled | Sentinel V4.0.2</p>
      </div>
    </div>
  );
};

export default About;
