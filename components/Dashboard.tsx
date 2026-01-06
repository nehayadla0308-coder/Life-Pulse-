
import React from 'react';
import { EmergencyRequest, UserProfile } from '../types';

interface DashboardProps {
  requests: EmergencyRequest[];
  user: UserProfile | null;
  onRespond: (id: string) => void;
  onDecline: (id: string) => void;
  setView?: (view: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ requests, user, onRespond, onDecline, setView }) => {
  const matches = requests.filter(req => req.bloodType === user?.bloodType);
  const others = requests.filter(req => req.bloodType !== user?.bloodType);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Command Center Status Header */}
      <div className="flex items-center justify-between bg-[#111827] p-6 rounded-[2rem] text-white shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">System Status</h2>
            <p className="text-sm font-black tracking-tight">LIVE & MONITORING</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">Kakinada Node</p>
          <p className="text-[10px] font-bold opacity-60">SENTINEL V4.0.2 ACTIVE</p>
        </div>
      </div>

      {/* Stock-at-a-Glance Table */}
      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Stock-at-a-Glance</h3>
          <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg uppercase">Synced 1m ago</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="pb-4 text-[9px] font-black text-gray-400 uppercase tracking-widest">Blood Type</th>
                <th className="pb-4 text-[9px] font-black text-gray-400 uppercase tracking-widest text-center">Inodaya</th>
                <th className="pb-4 text-[9px] font-black text-gray-400 uppercase tracking-widest text-center">Apollo</th>
                <th className="pb-4 text-[9px] font-black text-gray-400 uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="py-4 font-black text-gray-900">O+</td>
                <td className="py-4 text-sm font-bold text-gray-600 text-center">12 Units</td>
                <td className="py-4 text-sm font-bold text-gray-600 text-center">8 Units</td>
                <td className="py-4 text-right">
                  <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg">NORMAL</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 font-black text-gray-900">B-</td>
                <td className="py-4 text-sm font-bold text-gray-600 text-center">2 Units</td>
                <td className="py-4 text-sm font-bold text-gray-600 text-center">1 Unit</td>
                <td className="py-4 text-right">
                  <span className="text-[9px] font-black text-red-600 bg-red-50 px-2 py-1 rounded-lg">CRITICAL</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 font-black text-gray-900">A-</td>
                <td className="py-4 text-sm font-bold text-gray-600 text-center">4 Units</td>
                <td className="py-4 text-sm font-bold text-gray-600 text-center">3 Units</td>
                <td className="py-4 text-right">
                  <span className="text-[9px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">LOW</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setView && setView('request')}
          className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-lg flex flex-col items-center gap-3 transition-transform active:scale-95 group"
        >
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">Emergency Terminal</span>
        </button>

        <button 
          onClick={() => setView && setView('assistant')}
          className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-lg flex flex-col items-center gap-3 transition-transform active:scale-95 group"
        >
          <div className="w-14 h-14 bg-[#111827] rounded-2xl flex items-center justify-center text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">AI Concierge</span>
        </button>
      </div>

      {/* Active Terminal Requests */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Active Terminal Broadcasts</h3>
          <span className="text-[9px] font-black text-[#B91C1C] animate-pulse">Scanning...</span>
        </div>

        {matches.concat(others).slice(0, 2).map(req => (
          <div key={req.id} className="bg-white border-l-4 border-[#B91C1C] rounded-r-[2rem] rounded-l-md p-6 shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-xl font-black text-[#B91C1C] border border-red-100 flex-shrink-0">
                  {req.bloodType}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 tracking-tight">{req.patientName}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{req.hospitalName}</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="text-sm font-black text-[#B91C1C]">{req.distance?.toFixed(1) || '1.2'} km</span>
                <span className={`text-[8px] font-black px-2 py-0.5 rounded-lg border mt-1 uppercase ${req.urgency === 'Critical' ? 'text-red-600 bg-red-50 border-red-100' : 'text-amber-600 bg-amber-50 border-amber-100'}`}>
                  {req.urgency}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => onRespond(req.id)}
                className="flex-1 bg-[#111827] text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#B91C1C] transition-all active:scale-[0.98]"
              >
                INTERCEPT
              </button>
              <button 
                onClick={() => onDecline(req.id)}
                className="flex-1 bg-gray-50 text-gray-400 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:text-gray-600 transition-all active:scale-[0.98]"
              >
                IGNORE
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
