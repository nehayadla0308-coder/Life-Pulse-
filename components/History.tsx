
import React from 'react';
import { HistoryEntry, ViewType } from '../types';

interface HistoryProps {
  history: HistoryEntry[];
  setView: (view: ViewType) => void;
}

const History: React.FC<HistoryProps> = ({ history, setView }) => {
  const hasHistory = history.length > 0;

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-500 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">The Vault</h2>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Interaction Logs</span>
      </div>

      {!hasHistory ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] shadow-xl border border-gray-100 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center text-gray-200 mb-6">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-2">Vault is Empty</h3>
          <p className="text-gray-400 font-medium text-center max-w-xs px-6">
            Your life-saving journey starts here. Once you donate or make a request, your records will be archived in the vault.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-[#111827] text-white p-6 rounded-[2rem] shadow-xl flex items-center justify-between">
             <div>
                <p className="text-[9px] font-black text-red-500 uppercase tracking-[0.3em] mb-1">Impact Level</p>
                <p className="text-lg font-black uppercase tracking-widest">ELITE RESPONDER</p>
             </div>
             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <span className="text-xl font-black">{history.length}</span>
             </div>
          </div>

          {history.map(entry => (
            <div 
              key={entry.id} 
              className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group hover:border-[#B91C1C]/20 transition-all"
            >
              <div className="absolute top-0 right-0 w-1.5 h-full bg-gray-50 group-hover:bg-[#B91C1C]/20 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg ${entry.type === 'donation' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-[#B91C1C] border border-red-100'}`}>
                    {entry.type === 'donation' ? 'D' : 'R'}
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">{entry.type} LOG entry</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{new Date(entry.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${entry.status === 'Completed' || entry.status === 'Fulfilled' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                  {entry.status}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-50">
                <p className="text-sm font-bold text-gray-700">{entry.location}</p>
                <p className="text-xs text-gray-500 font-medium leading-relaxed bg-gray-50 p-4 rounded-2xl italic border border-gray-100">
                  {entry.details || "Secured interaction log."}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center pt-8 opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Life Pulse Vault Terminal V4.0.2</p>
      </div>
    </div>
  );
};

export default History;
