
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import ProfileForm from './components/ProfileForm';
import ProfileView from './components/ProfileView';
import RequestForm from './components/RequestForm';
import Assistant from './components/Assistant';
import NearbyMap from './components/NearbyMap';
import NearbyDonors from './components/NearbyDonors';
import About from './components/About';
import Hospitals from './components/Hospitals';
import HospitalDetail from './components/HospitalDetail';
import Notifications from './components/Notifications';
import History from './components/History';
import { UserProfile, EmergencyRequest, ViewType, Notification, HistoryEntry } from './types';
import { MOCK_REQUESTS, MOCK_HOSPITALS, MOCK_NOTIFICATIONS, MOCK_HISTORY } from './constants';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [requests, setRequests] = useState<EmergencyRequest[]>(MOCK_REQUESTS.map(r => ({ ...r, status: 'Pending' })));
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [history, setHistory] = useState<HistoryEntry[]>(MOCK_HISTORY);
  const [view, setView] = useState<ViewType>('home');
  const [selectedHospitalId, setSelectedHospitalId] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.warn("Geolocation disabled", err)
      );
    }
  }, []);

  const handleRegister = (profile: UserProfile) => {
    console.log(`LIFE PULSE SECURITY: SMS OTP verification triggered for ${profile.countryCode}${profile.phone}`);
    setCurrentUser(profile);
    setView('home');
  };

  const handleAddRequest = (newRequest: EmergencyRequest) => {
    setRequests(prev => [{ ...newRequest, status: 'Pending' }, ...prev]);
    const historyEntry: HistoryEntry = {
      id: `h-${Date.now()}`,
      type: 'request',
      date: new Date().toISOString().split('T')[0],
      location: newRequest.hospitalName,
      status: 'Pending',
      bloodType: newRequest.bloodType,
      details: 'Emergency broadcast request initiated.'
    };
    setHistory(prev => [historyEntry, ...prev]);
    setView('home');
  };

  const handleAcceptRequest = (id: string) => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status: 'Accepted' } : req));
    const newNotif: Notification = {
      id: `n-${Date.now()}`,
      type: 'update',
      message: 'Request Accepted. Contact details are now available.',
      timestamp: new Date().toISOString(),
      isRead: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleDeclineRequest = (id: string) => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status: 'Declined' } : req));
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const augmentedRequests = requests
    .filter(req => req.status !== 'Declined')
    .map(req => ({
      ...req,
      distance: location ? calculateDistance(location.lat, location.lng, req.latitude, req.longitude) : undefined
    })).sort((a, b) => (a.distance || 0) - (b.distance || 0));

  const handleHospitalSelect = (id: string) => {
    setSelectedHospitalId(id);
    setView('hospital_detail');
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const renderView = () => {
    if (!currentUser && view !== 'profile' && view !== 'about' && view !== 'request') {
      return (
        <Landing 
          onJoin={() => setView('profile')} 
          onHelp={() => setView('request')} 
        />
      );
    }

    switch (view) {
      case 'home': return <Dashboard setView={setView} requests={augmentedRequests} user={currentUser} onRespond={handleAcceptRequest} onDecline={handleDeclineRequest} />;
      case 'profile': return currentUser ? <ProfileView user={currentUser} onEdit={() => setView('profile_edit')} /> : <ProfileForm initialProfile={null} onSubmit={handleRegister} onCancel={() => setView('home')} />;
      case 'profile_edit': return <ProfileForm initialProfile={currentUser} onSubmit={handleRegister} onCancel={() => setView('profile')} />;
      case 'assistant': return <Assistant />;
      case 'nearby': return <NearbyMap />;
      case 'request': return <RequestForm onSubmit={handleAddRequest} onCancel={() => setView('home')} />;
      case 'donors': return <NearbyDonors />;
      case 'about': return <About />;
      case 'hospitals': return <Hospitals onSelect={handleHospitalSelect} />;
      case 'hospital_detail': 
        const hosp = MOCK_HOSPITALS.find(h => h.id === selectedHospitalId);
        return hosp ? <HospitalDetail hospital={hosp} onBack={() => setView('hospitals')} /> : <Hospitals onSelect={handleHospitalSelect} />;
      case 'notifications': return <Notifications notifications={notifications} onMarkAsRead={markAsRead} onMarkAllAsRead={markAllAsRead} onBack={() => setView('home')} />;
      case 'history': return <History history={history} setView={setView} />;
      default: return <Dashboard setView={setView} requests={augmentedRequests} user={currentUser} onRespond={handleAcceptRequest} onDecline={handleDeclineRequest} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header 
        user={currentUser} 
        setView={setView} 
        activeView={view} 
        toggleSidebar={() => setSidebarOpen(true)}
        unreadCount={unreadCount}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        setView={setView} 
        activeView={view} 
      />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 pt-12 pb-32">
        {renderView()}
      </main>

      {currentUser && (
        <BottomNav activeTab={view} setActiveTab={setView} />
      )}
    </div>
  );
};

export default App;
