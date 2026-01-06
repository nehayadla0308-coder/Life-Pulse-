import React from 'react';
import { ViewType } from '../types';

interface BottomNavProps {
  activeTab: ViewType;
  setActiveTab: (view: ViewType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: ViewType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'assistant', label: 'Medical AI', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { id: 'nearby', label: 'Nearby', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    { id: 'profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center h-20 px-4 z-[50] pb-2 safe-area-bottom shadow-[0_-4px_30px_rgba(0,0,0,0.05)] rounded-t-[3rem]">
      {tabs.map((tab) => {
        const isActive = (tab.id === 'profile' && (activeTab === 'profile' || activeTab === 'profile_edit')) || activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex flex-col items-center justify-center flex-1 transition-all duration-300"
          >
            <div className={`p-2 rounded-2xl transition-all duration-300 ${isActive ? 'bg-red-50 text-[#B91C1C]' : 'text-gray-400 hover:text-gray-600'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 3 : 2} d={tab.icon} />
              </svg>
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest mt-1 transition-colors ${isActive ? 'text-[#B91C1C]' : 'text-gray-400'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;