
import React, { useState } from 'react';
import { UserProfile, DonorStatus, BloodType } from '../types';
import { BLOOD_TYPES, ELIGIBILITY_RULES, COUNTRY_CODES } from '../constants';

interface ProfileFormProps {
  initialProfile: UserProfile | null;
  onSubmit: (profile: UserProfile) => void;
  onCancel: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ initialProfile, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Partial<UserProfile>>(initialProfile || {
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    bloodType: 'O+' as BloodType,
    age: 25,
    weight: 70,
    hbLevel: 11.5,
    hasDiabetes: false,
    hasHeartProblems: false,
    hasMajorSurgeries: false,
    donorStatus: DonorStatus.ACTIVE,
    lifePoints: 0
  });

  const checkEligibility = (data: Partial<UserProfile>): boolean => {
    return (data.age || 0) >= ELIGIBILITY_RULES.MIN_AGE && 
           (data.hbLevel || 0) >= ELIGIBILITY_RULES.HB_RANGE.MIN && 
           (data.hbLevel || 0) <= ELIGIBILITY_RULES.HB_RANGE.MAX && 
           !data.hasHeartProblems && 
           !data.hasDiabetes &&
           (data.weight || 0) >= 45;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eligible = checkEligibility(formData);
    
    onSubmit({
      ...formData as UserProfile,
      id: initialProfile?.id || Math.random().toString(36).substr(2, 9),
      isEligible: eligible,
      donorStatus: eligible ? DonorStatus.ACTIVE : DonorStatus.SUPPORTER,
      latitude: formData.latitude || 16.9890,
      longitude: formData.longitude || 82.2475
    });
  };

  return (
    <div className="max-w-2xl mx-auto pb-24 animate-in fade-in zoom-in duration-500">
      <div className="bg-white rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative">
        {/* Identity Header */}
        <div className="bg-[#111827] px-10 py-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B91C1C] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#B91C1C] rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500">Secure Protocol</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Identity<br/>Verification</h2>
            <p className="mt-4 text-gray-400 font-bold text-sm max-w-xs opacity-80">
              Establish your medical profile to join the Life Pulse emergency response network.
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-10 space-y-10">
          {/* Basic Info */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full"></span>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Contact Metadata</h3>
            </div>
            
            <div className="space-y-4">
              <div className="group">
                <label className="block text-xs font-black text-gray-900 mb-2 ml-1 uppercase tracking-widest">Full Legal Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 focus:bg-white focus:border-[#B91C1C] outline-none font-bold transition-all text-gray-800" 
                  placeholder="e.g. Arjun Mehra" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-xs font-black text-gray-900 mb-2 ml-1 uppercase tracking-widest">Email Access</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 focus:bg-white focus:border-[#B91C1C] outline-none font-bold transition-all text-gray-800" 
                    placeholder="email@secure.com" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-black text-gray-900 mb-2 ml-1 uppercase tracking-widest">Phone Terminal</label>
                  <div className="flex gap-2">
                    <select 
                      className="bg-gray-50 border-2 border-gray-50 rounded-2xl px-3 py-4 focus:border-[#B91C1C] outline-none font-black text-xs"
                      value={formData.countryCode}
                      onChange={e => setFormData({...formData, countryCode: e.target.value})}
                    >
                      {COUNTRY_CODES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                    </select>
                    <input 
                      required 
                      type="tel" 
                      className="flex-1 bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 focus:bg-white focus:border-[#B91C1C] outline-none font-bold transition-all text-gray-800" 
                      placeholder="98765 43210" 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medical Specs */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full"></span>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Medical Specifications</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-red-50 p-4 rounded-3xl border-2 border-red-100">
                <label className="block text-[8px] font-black text-[#B91C1C] mb-1 uppercase tracking-widest">Blood Group</label>
                <select 
                  className="w-full bg-transparent border-none outline-none font-black text-2xl text-[#B91C1C] appearance-none cursor-pointer"
                  value={formData.bloodType} 
                  onChange={e => setFormData({...formData, bloodType: e.target.value as BloodType})}
                >
                  {BLOOD_TYPES.map(bt => <option key={bt} value={bt}>{bt}</option>)}
                </select>
              </div>
              <div className="bg-gray-50 p-4 rounded-3xl border-2 border-gray-50">
                <label className="block text-[8px] font-black text-gray-400 mb-1 uppercase tracking-widest">Age</label>
                <input required type="number" className="w-full bg-transparent border-none outline-none font-black text-2xl text-gray-900" 
                  value={formData.age} onChange={e => setFormData({...formData, age: parseInt(e.target.value)})} />
              </div>
              <div className="bg-gray-50 p-4 rounded-3xl border-2 border-gray-50">
                <label className="block text-[8px] font-black text-gray-400 mb-1 uppercase tracking-widest">Weight (KG)</label>
                <input required type="number" className="w-full bg-transparent border-none outline-none font-black text-2xl text-gray-900" 
                  value={formData.weight} onChange={e => setFormData({...formData, weight: parseInt(e.target.value)})} />
              </div>
              <div className="bg-gray-50 p-4 rounded-3xl border-2 border-gray-50">
                <label className="block text-[8px] font-black text-gray-400 mb-1 uppercase tracking-widest">HB Level</label>
                <input required type="number" step="0.1" className="w-full bg-transparent border-none outline-none font-black text-2xl text-gray-900" 
                  value={formData.hbLevel} onChange={e => setFormData({...formData, hbLevel: parseFloat(e.target.value)})} />
              </div>
            </div>
          </section>

          {/* Eligibility Check */}
          <section className="bg-gray-900 p-8 rounded-[2.5rem] text-white">
            <h3 className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-6">Security & Health Screening</h3>
            <div className="space-y-4">
              {[
                { label: 'Diabetes Condition', key: 'hasDiabetes' },
                { label: 'Heart Pathologies', key: 'hasHeartProblems' },
                { label: 'Recent Surgeries', key: 'hasMajorSurgeries' }
              ].map(item => (
                <div key={item.key} className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{item.label}</span>
                  <div className="flex bg-white/10 p-1 rounded-xl">
                    <button type="button" 
                      onClick={() => setFormData({...formData, [item.key]: true})}
                      className={`px-4 py-1.5 rounded-lg text-[9px] font-black tracking-widest transition-all ${(formData as any)[item.key] ? 'bg-[#B91C1C] text-white' : 'text-gray-500 hover:text-white'}`}>
                      YES
                    </button>
                    <button type="button" 
                      onClick={() => setFormData({...formData, [item.key]: false})}
                      className={`px-4 py-1.5 rounded-lg text-[9px] font-black tracking-widest transition-all ${(formData as any)[item.key] === false ? 'bg-white text-gray-900' : 'text-gray-500 hover:text-white'}`}>
                      NO
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-4 flex flex-col gap-4">
            <button 
              type="submit" 
              className="w-full bg-[#B91C1C] text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-red-200 hover:bg-red-800 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-tighter"
            >
              Initialize Profile
            </button>
            <button 
              type="button" 
              onClick={onCancel} 
              className="w-full text-gray-400 py-2 font-black text-[10px] uppercase tracking-[0.4em] hover:text-[#B91C1C] transition-colors"
            >
              Cancel Transaction
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center opacity-30">
        <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.6em]">Biometric Verification Not Required for Level 1 Access</p>
      </div>
    </div>
  );
};

export default ProfileForm;
