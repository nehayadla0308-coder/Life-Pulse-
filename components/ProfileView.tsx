
import React from 'react';
import { UserProfile } from '../types';

interface ProfileViewProps {
  user: UserProfile;
  onEdit: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onEdit }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center bg-white text-gray-900 p-8 rounded-[3rem] shadow-2xl border border-gray-100 mb-20 overflow-hidden relative">
      {/* Background Accent Decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-50 rounded-bl-full -mr-20 -mt-20 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-50 rounded-tr-full -ml-16 -mb-16 opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="w-full mb-10 text-left relative z-10">
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-1 text-gray-900">Security Identity</h1>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#B91C1C] rounded-full animate-pulse"></div>
          <p className="text-xs font-black text-[#B91C1C] uppercase tracking-[0.2em] opacity-80">Authorized protocol parameters</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-md bg-white border-2 border-[#B91C1C] rounded-[3rem] p-8 shadow-[0_20px_40px_rgba(185,28,28,0.12)] mb-10 flex items-center gap-6 relative z-10">
        <div className="w-24 h-24 bg-red-50 rounded-[2rem] border-2 border-[#B91C1C]/20 flex items-center justify-center overflow-hidden flex-shrink-0">
          <svg className="w-12 h-12 text-[#B91C1C]/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div className="flex-1 overflow-hidden">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 truncate">{user.name}</h2>
          <p className="text-[#B91C1C] font-black text-lg mb-2">{user.countryCode} {user.phone}</p>
          <div className="inline-flex items-center gap-1.5 bg-[#111827] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
            <span className="w-1 h-1 bg-green-400 rounded-full"></span>
            CLEARANCE: LVL 4
          </div>
        </div>
      </div>

      {/* Information Fields */}
      <div className="w-full space-y-5 mb-12 relative z-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-4">Full Legal Name</label>
          <div className="bg-gray-50 border border-gray-100 px-6 py-5 rounded-2xl text-gray-800 font-bold shadow-sm">
            {user.name}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-4">Secure Email Address</label>
          <div className="bg-gray-50 border border-gray-100 px-6 py-5 rounded-2xl text-gray-800 font-bold truncate shadow-sm">
            {user.email || 'N/A'}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-4">Blood Type (Emergency)</label>
          <div className="bg-gray-50 border border-gray-100 px-6 py-5 rounded-2xl text-[#B91C1C] font-black flex justify-between items-center shadow-sm">
            <span className="text-2xl tracking-tighter">{user.bloodType}</span>
            <div className={`text-[10px] uppercase font-black px-3 py-1.5 rounded-xl border ${user.isEligible ? 'border-green-200 text-green-700 bg-green-50' : 'border-red-200 text-[#B91C1C] bg-red-50'}`}>
              {user.isEligible ? 'Verified Active' : 'Supporter Mode'}
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={onEdit}
        className="w-full bg-[#B91C1C] text-white py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(185,28,28,0.25)] transition-all active:scale-[0.97] mb-10 hover:bg-red-800 relative z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Modify Access Data
      </button>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-center border-t border-gray-100 w-full relative z-10">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">
          END-TO-END ENCRYPTION ENABLED | SENTINEL V4.0.2
        </p>
      </footer>
    </div>
  );
};

export default ProfileView;
