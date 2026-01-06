
import React, { useState } from 'react';
import { EmergencyRequest, BloodType } from '../types';
import { BLOOD_TYPES } from '../constants';

interface RequestFormProps {
  onSubmit: (request: EmergencyRequest) => void;
  onCancel: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    attendeePhone: '',
    bloodType: 'O+' as BloodType,
    units: 1,
    requiredDate: new Date().toISOString().split('T')[0],
    hospitalName: '',
    urgency: 'Urgent' as const,
    notes: '',
    isCritical: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(36).substr(2, 9),
      patientName: formData.patientName,
      bloodType: formData.bloodType,
      hospitalName: formData.hospitalName,
      urgency: formData.isCritical ? 'Critical' : formData.urgency,
      latitude: 16.9890 + (Math.random() - 0.5) * 0.02,
      longitude: 82.2475 + (Math.random() - 0.5) * 0.02,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="max-w-xl mx-auto pb-24">
      <div className="mb-10 text-center animate-in fade-in slide-in-from-top duration-700">
        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-4">
          Request blood with <br/><span className="text-[#B91C1C]">ease & quick process.</span>
        </h1>
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">Bridging gaps when it matters most</p>
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden relative">
        <div className="bg-[#B91C1C] px-8 py-6 text-white flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black tracking-tight uppercase">Request for Blood</h2>
            <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Emergency Broadcast Terminal</p>
          </div>
          <svg className="w-10 h-10 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Patient Name</label>
              <input 
                required
                type="text" 
                placeholder="Enter patient name"
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#B91C1C] outline-none font-bold text-gray-800"
                value={formData.patientName}
                onChange={e => setFormData({...formData, patientName: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Attendee Mobile</label>
              <input 
                required
                type="tel" 
                placeholder="Attendee contact"
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#B91C1C] outline-none font-bold text-gray-800"
                value={formData.attendeePhone}
                onChange={e => setFormData({...formData, attendeePhone: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Blood Type</label>
              <select 
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#B91C1C] outline-none font-black text-[#B91C1C] text-lg appearance-none"
                value={formData.bloodType}
                onChange={e => setFormData({...formData, bloodType: e.target.value as BloodType})}
              >
                {BLOOD_TYPES.map(bt => <option key={bt} value={bt}>{bt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Units Needed</label>
              <input 
                required
                type="number" 
                min="1"
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#B91C1C] outline-none font-black text-gray-800"
                value={formData.units}
                onChange={e => setFormData({...formData, units: parseInt(e.target.value)})}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Required Date</label>
              <input 
                required
                type="date" 
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#B91C1C] outline-none font-bold text-gray-800 text-sm"
                value={formData.requiredDate}
                onChange={e => setFormData({...formData, requiredDate: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Location / Hospital</label>
            <div className="relative">
              <input 
                required
                type="text" 
                placeholder="Search medical center..."
                className="w-full bg-gray-50 border-none rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-[#B91C1C] outline-none font-bold text-gray-800"
                value={formData.hospitalName}
                onChange={e => setFormData({...formData, hospitalName: e.target.value})}
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B91C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-[2rem] border border-red-100 flex items-center justify-between">
            <div>
              <h4 className="font-black text-gray-900 uppercase tracking-tight">Critical Urgency</h4>
              <p className="text-[10px] font-bold text-gray-500 uppercase">Immediate broadcast to all donors</p>
            </div>
            <button 
              type="button"
              onClick={() => setFormData({...formData, isCritical: !formData.isCritical})}
              className={`w-14 h-8 rounded-full transition-all relative ${formData.isCritical ? 'bg-[#B91C1C]' : 'bg-gray-200'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${formData.isCritical ? 'right-1' : 'left-1'}`}></div>
            </button>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Additional Notes</label>
            <textarea 
              rows={3}
              placeholder="e.g. Major surgery scheduled, specific department..."
              className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#B91C1C] outline-none font-medium text-gray-800 resize-none"
              value={formData.notes}
              onChange={e => setFormData({...formData, notes: e.target.value})}
            />
          </div>

          <div className="pt-6 flex flex-col gap-4">
            <button 
              type="submit"
              className="w-full bg-[#B91C1C] text-white py-5 rounded-3xl font-black text-xl shadow-2xl hover:bg-red-800 transition-all active:scale-[0.98] hover:scale-[1.01]"
            >
              BROADCAST REQUEST
            </button>
            <button 
              type="button"
              onClick={onCancel}
              className="w-full text-gray-400 py-2 font-bold hover:text-gray-600 transition-colors uppercase text-xs tracking-widest"
            >
              Cancel Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
