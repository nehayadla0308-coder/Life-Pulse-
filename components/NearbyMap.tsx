
import React, { useState, useEffect } from 'react';
import { MOCK_HOSPITALS } from '../constants';

const NearbyMap: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.warn("Geolocation permission denied", err)
      );
    }
  }, []);

  const filters = ['All', 'Blood Banks', 'Hospitals', 'Emergency Care'];

  const filteredHospitals = MOCK_HOSPITALS.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          h.address.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'All') return matchesSearch;
    if (filter === 'Blood Banks') return matchesSearch && h.name.toLowerCase().includes('blood bank');
    if (filter === 'Hospitals') return matchesSearch && h.name.toLowerCase().includes('hospital');
    if (filter === 'Emergency Care') return matchesSearch && h.isEmergency;
    return matchesSearch;
  });

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] -mt-12 -mx-6 overflow-hidden bg-[#FAFAFA]">
      {/* Top Search Bar */}
      <div className="absolute top-20 left-0 right-0 z-30 px-6">
        <div className="max-w-md mx-auto relative group">
          <input 
            type="text" 
            placeholder="Search hospitals or clinics..." 
            className="w-full bg-white/90 backdrop-blur-xl border border-gray-200 pl-12 pr-4 py-4 rounded-3xl font-bold text-gray-800 outline-none focus:ring-2 focus:ring-[#B91C1C] transition-all shadow-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-[#B91C1C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Map Section (60%) */}
      <div className="relative flex-none h-[55%] bg-[#F1F5F9] overflow-hidden">
        {/* Placeholder for Interactive Map */}
        <div className="absolute inset-0 bg-[#E2E8F0]">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Simulated Markers */}
          {filteredHospitals.map((h, i) => (
            <div 
              key={h.id} 
              className="absolute group transition-all duration-700 ease-out animate-in fade-in zoom-in" 
              style={{ 
                left: `${20 + (i * 20)}%`, 
                top: `${35 + (i % 2 === 0 ? 15 : -10)}%` 
              }}
            >
              <div className="flex flex-col items-center">
                <div className="bg-[#B91C1C] text-white px-3 py-1 rounded-lg shadow-xl mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap -translate-y-2">
                   <span className="text-[10px] font-black uppercase tracking-wider">{h.name}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-[#B91C1C] cursor-pointer hover:scale-125 transition-transform pulse-red">
                  <svg className="w-6 h-6 text-[#B91C1C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* User Location */}
          {userLocation && (
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-40"></div>
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                </div>
             </div>
          )}
        </div>

        {/* Floating Filters */}
        <div className="absolute bottom-6 left-0 right-0 px-6 flex gap-2 overflow-x-auto no-scrollbar z-30">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-none px-6 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all ${filter === f ? 'bg-[#B91C1C] text-white shadow-lg shadow-red-200 translate-y-[-2px]' : 'bg-white/80 backdrop-blur-md text-gray-500 border border-gray-100'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Hospital List (40%) */}
      <div className="flex-1 bg-white rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.08)] z-30 overflow-y-auto px-6 pt-10 pb-20">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-1.5 bg-gray-100 rounded-full mx-auto mb-8"></div>
          
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tighter">Nearby Facilities</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Found {filteredHospitals.length} locations in Kakinada</p>
            </div>
          </div>

          <div className="space-y-4">
            {filteredHospitals.length > 0 ? (
              filteredHospitals.map(h => (
                <div key={h.id} className="bg-white border border-gray-100 rounded-[2.5rem] p-7 shadow-sm hover:shadow-xl hover:border-red-50 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="text-xl font-black text-gray-900 group-hover:text-[#B91C1C] transition-colors">{h.name}</h4>
                        {h.isEmergency && (
                          <span className="bg-red-50 text-[#B91C1C] text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-widest border border-red-100">24/7 Emergency</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(h.rating || 0) ? 'fill-current' : 'text-gray-100'}`} viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs font-black text-gray-900">{h.rating} <span className="text-gray-400 font-bold ml-1">({(Math.random()*100).toFixed(0)} reviews)</span></span>
                      </div>
                      <p className="text-sm font-bold text-gray-400 mt-2 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        {h.address}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${h.lat},${h.lng}`, '_blank')}
                      className="bg-gray-50 text-gray-900 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#111827] hover:text-white transition-all active:scale-[0.98]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.111a2 2 0 011.165-1.822L9 1m0 0l5.835 2.289a2 2 0 011.165 1.822v10.377a2 2 0 01-1.165 1.822L9 20zm0 0V1" /></svg>
                      Directions
                    </button>
                    <button 
                      onClick={() => handleCall(h.phone)}
                      className="bg-[#B91C1C] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-red-100 hover:bg-red-800 transition-all active:scale-[0.98]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      CALL NOW
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
                 <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                 </div>
                 <p className="text-gray-400 font-black uppercase tracking-widest text-xs">No matching facilities</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyMap;
