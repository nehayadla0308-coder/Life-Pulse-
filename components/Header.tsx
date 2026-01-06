
import React from 'react';
import { UserProfile, ViewType } from '../types';

interface HeaderProps {
  user: UserProfile | null;
  setView: (view: ViewType) => void;
  activeView: ViewType;
  toggleSidebar: () => void;
  unreadCount?: number;
}

const Header: React.FC<HeaderProps> = ({ user, setView, activeView, toggleSidebar, unreadCount = 0 }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {user ? (
            <button 
              onClick={() => setView('profile')}
              className="w-10 h-10 rounded-full bg-red-50 border-2 border-[#B91C1C] flex items-center justify-center overflow-hidden transition-transform active:scale-95"
            >
              <span className="text-[#B91C1C] font-black text-xs">{user.bloodType}</span>
            </button>
          ) : (
            <button 
              onClick={() => setView('profile')}
              className="px-4 py-2 bg-[#B91C1C] text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-md hover:bg-red-800 transition-all active:scale-95"
            >
              Sign In
            </button>
          )}
          
          {user && (
            <div className="flex flex-col hidden sm:flex">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Life Pulse Network</span>
              <span className="text-sm font-black text-gray-900">{user.name}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div 
            className="flex items-center gap-1 cursor-pointer group"
            onClick={() => setView('home')}
          >
            <span className="text-xl font-black text-[#B91C1C] tracking-tighter group-hover:scale-105 transition-transform">UBlood</span>
            <div className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full mt-1 group-hover:animate-ping"></div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Notification bell removed as requested */}
          <button 
            onClick={toggleSidebar}
            className="p-2.5 bg-gray-50 rounded-2xl text-gray-400 hover:text-[#B91C1C] transition-colors active:scale-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
