
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  setView: (view: ViewType) => void;
  activeView: ViewType;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, setView, activeView }) => {
  const menuItems: { id: ViewType; label: string; icon: string }[] = [
    { id: 'home', label: 'Command Center', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'request', label: 'Emergency Terminal', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'nearby', label: 'Facility Node', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { id: 'assistant', label: 'AI Concierge', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { id: 'history', label: 'Life Saver Vault', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'profile', label: 'Identity Gateway', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'about', label: 'Node Info', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <aside className={`fixed left-0 top-0 h-full w-72 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#111827]">
          <div className="flex items-center gap-2">
            <div className="w-10 h-8 bg-[#B91C1C] rounded-lg flex items-center justify-center text-white font-bold text-sm">LP</div>
            <span className="text-xl font-black text-white tracking-tighter">LIFE PULSE</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setView(item.id);
                onClose();
              }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all ${activeView === item.id ? 'bg-red-50 text-[#B91C1C]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              <svg className={`w-5 h-5 ${activeView === item.id ? 'text-[#B91C1C]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-xs uppercase tracking-widest font-black">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
          <div className="bg-[#111827] rounded-2xl p-4 text-white shadow-xl">
            <p className="text-[9px] uppercase font-black tracking-[0.3em] text-red-500 mb-1">Status Level</p>
            <p className="text-xs font-black uppercase tracking-widest">Life Saver Elite</p>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-3">
              <div className="bg-[#B91C1C] w-2/3 h-full rounded-full shadow-[0_0_10px_rgba(185,28,28,0.5)]"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
