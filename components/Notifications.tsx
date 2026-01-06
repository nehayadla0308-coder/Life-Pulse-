
import React from 'react';
import { Notification } from '../types';

interface NotificationsProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onBack: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ notifications, onMarkAsRead, onMarkAllAsRead, onBack }) => {
  const hasNotifications = notifications.length > 0;

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-500 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">Notifications</h2>
        {hasNotifications && (
          <button 
            onClick={onMarkAllAsRead}
            className="text-xs font-black text-[#B91C1C] uppercase tracking-widest hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>

      {!hasNotifications ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] shadow-xl border border-gray-100 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center text-gray-200 mb-6">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-2">All Clear!</h3>
          <p className="text-gray-400 font-medium text-center max-w-xs px-6">
            We'll notify you when there's an urgent blood request or an update on your profile.
          </p>
          <button 
            onClick={onBack}
            className="mt-8 bg-[#B91C1C] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-red-100 transition-all hover:bg-red-800 active:scale-95"
          >
            Return Home
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map(n => (
            <div 
              key={n.id} 
              className={`bg-white p-6 rounded-[2rem] border transition-all flex items-start gap-4 ${n.isRead ? 'opacity-60 border-gray-100' : 'border-[#B91C1C]/10 shadow-lg shadow-red-50/50'}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${n.type === 'emergency' ? 'bg-red-50 text-[#B91C1C]' : 'bg-gray-50 text-gray-400'}`}>
                {n.type === 'emergency' ? (
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                   </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className={`font-bold leading-relaxed ${n.isRead ? 'text-gray-500' : 'text-gray-900'}`}>{n.message}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {new Date(n.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {!n.isRead && (
                    <button 
                      onClick={() => onMarkAsRead(n.id)}
                      className="text-[10px] font-black text-[#B91C1C] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100"
                    >
                      Read
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Branding */}
      <div className="text-center pt-8 opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Life Pulse Real-time Alert System</p>
      </div>
    </div>
  );
};

export default Notifications;
