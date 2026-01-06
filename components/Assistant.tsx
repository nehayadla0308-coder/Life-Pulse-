
import React, { useState } from 'react';
import { getGeminiHealthAdvice } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am LifeSaver AI. Ask me anything about blood donation, health eligibility, or recovery.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botResponse = await getGeminiHealthAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || 'I am sorry, I am unable to answer right now.' }]);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto h-[70vh] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-50 pb-2">
      <div className="bg-[#B91C1C] p-6 text-white flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 className="font-black text-xl tracking-tight leading-none mb-1">Medical AI</h3>
          <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Eligibility Support Agent</p>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-[1.5rem] ${m.role === 'user' ? 'bg-[#B91C1C] text-white rounded-tr-none shadow-lg' : 'bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100'}`}>
              <p className="text-sm font-semibold leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-50 p-5 rounded-[1.5rem] rounded-tl-none border border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-[#B91C1C] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#B91C1C] rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-[#B91C1C] rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex gap-3 bg-gray-50 p-2 rounded-[2rem] border border-gray-100">
          <input 
            type="text" 
            className="flex-1 bg-transparent rounded-xl px-4 py-3 outline-none font-semibold text-sm placeholder:text-gray-400"
            placeholder="e.g. Can I donate if I have a cold?"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-[#B91C1C] text-white p-3.5 rounded-2xl hover:bg-red-800 disabled:opacity-50 shadow-md transition-all active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
