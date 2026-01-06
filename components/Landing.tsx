
import React from 'react';
import { ViewType } from '../types';

interface LandingProps {
  onJoin: () => void;
  onHelp: () => void;
}

const Landing: React.FC<LandingProps> = ({ onJoin, onHelp }) => {
  return (
    <div className="flex flex-col items-center py-12 px-4 animate-in fade-in duration-1000 max-w-4xl mx-auto min-h-[80vh] justify-center">
      {/* Hero Icon */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative inline-block p-10 bg-white rounded-[3.5rem] shadow-2xl border-t-8 border-[#B91C1C] hover:scale-105 transition-transform duration-500">
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#B91C1C] rounded-full animate-ping opacity-75"></div>
          <svg className="w-24 h-24 text-[#B91C1C]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>

      {/* The Elevator Pitch */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-6xl font-black text-[#111827] tracking-tighter leading-[0.9] text-balance">
          Life Pulse.<br/>
          <span className="text-[#B91C1C] drop-shadow-sm italic">The Smart Blood Finder.</span>
        </h1>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-[0.3em] mt-10">Connecting Donors & Patients Instantly</p>
      </div>

      {/* Main CTA Group */}
      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-lg mb-12">
        <button 
          onClick={onJoin}
          className="flex-1 bg-[#B91C1C] text-white px-10 py-6 rounded-3xl font-black text-xl hover:bg-red-800 transition-all shadow-2xl shadow-red-200 hover:scale-[1.03] active:scale-[0.98] group flex items-center justify-center gap-3"
        >
          JOIN NETWORK
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <button 
          onClick={onHelp}
          className="flex-1 bg-white border border-gray-100 text-[#111827] px-10 py-6 rounded-3xl font-black text-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          I NEED HELP
        </button>
      </div>

      {/* Footer Hint */}
      <p className="mt-8 text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] animate-pulse">
        Secure & Encrypted • Kakinada Global Node
      </p>
    </div>
  );
};

export default Landing;
