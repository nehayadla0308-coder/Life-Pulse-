
import { BloodType, Notification, HistoryEntry } from './types';

export const COLORS = {
  PRIMARY: '#B91C1C', // Deep Crimson Red
  SECONDARY: '#FFFFFF',
  ACCENT: '#FEE2E2', // Light red for backgrounds
  DARK: '#111827',
};

export const BLOOD_TYPES: BloodType[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const COUNTRY_CODES = [
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+971', country: 'AE', flag: '🇦🇪' },
];

export const ELIGIBILITY_RULES = {
  MIN_AGE: 18,
  HB_RANGE: { MIN: 10, MAX: 12 },
};

export const MOCK_HOSPITALS = [
  { 
    id: 'h1', 
    name: 'Inodaya Hospitals', 
    address: 'Ramanayyapeta, Kakinada, AP', 
    stock: { 'O+': 'High', 'A-': 'Low' }, 
    distance: 1.2, 
    lat: 16.9935, 
    lng: 82.2598,
    rating: 4.6,
    isEmergency: true,
    phone: '0884-2391234',
    hours: 'Open 24 hours'
  },
  { 
    id: 'h2', 
    name: 'Apollo Hospitals', 
    address: 'Main Road, Surya Rao Peta, Kakinada, AP', 
    stock: { 'AB+': 'Critical', 'O-': 'Normal' }, 
    distance: 2.5, 
    lat: 16.9850, 
    lng: 82.2420,
    rating: 4.8,
    isEmergency: true,
    phone: '0884-2345000',
    hours: 'Open 24 hours'
  },
  { 
    id: 'h3', 
    name: 'City Multispeciality Hospital', 
    address: 'Ramanayyapeta, Kakinada, AP', 
    stock: { 'A+': 'Normal', 'B+': 'High' }, 
    distance: 1.8, 
    lat: 16.9945, 
    lng: 82.2612,
    rating: 4.5,
    isEmergency: true,
    phone: '0884-2375678',
    hours: 'Open 24 hours'
  },
  { 
    id: 'h4', 
    name: 'Medway Sanjivi Hospitals', 
    address: 'Rama Rao Peta, Kakinada, AP', 
    stock: { 'O-': 'Low', 'B+': 'High' }, 
    distance: 0.8, 
    lat: 16.9892, 
    lng: 82.2485,
    rating: 4.3,
    isEmergency: true,
    phone: '0884-2356789',
    hours: 'Open 24 hours'
  }
];

export const MOCK_DONORS = [
  { id: 'd1', name: 'Ananya Sharma', bloodType: 'O+' as BloodType, distance: 0.8, lastDonation: '2023-11-15', phone: '0884-2391111' },
  { id: 'd2', name: 'Arjun Mehra', bloodType: 'A-' as BloodType, distance: 2.1, lastDonation: '2024-01-10', phone: '0884-2392222' },
  { id: 'd3', name: 'Priya Iyer', bloodType: 'B+' as BloodType, distance: 4.3, lastDonation: '2023-12-01', phone: '0884-2393333' },
];

export const MOCK_REQUESTS = [
  {
    id: 'req-1',
    patientName: 'John Doe',
    bloodType: 'O+' as const,
    hospitalName: 'Inodaya Hospitals',
    latitude: 16.9935,
    longitude: 82.2598,
    urgency: 'Critical' as const,
    timestamp: new Date().toISOString()
  },
  {
    id: 'req-2',
    patientName: 'Jane Smith',
    bloodType: 'A-' as const,
    hospitalName: 'Apollo Hospitals',
    latitude: 16.9850,
    longitude: 82.2420,
    urgency: 'Urgent' as const,
    timestamp: new Date().toISOString()
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    type: 'emergency',
    message: 'CRITICAL: Emergency O+ request at Inodaya Hospitals. You are a match!',
    timestamp: new Date().toISOString(),
    isRead: false
  },
  {
    id: 'n2',
    type: 'update',
    message: 'Your profile has been successfully verified. You are now a USAVER!',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isRead: false
  }
];

export const MOCK_HISTORY: HistoryEntry[] = [
  {
    id: 'h-1',
    type: 'donation',
    date: '2024-01-05',
    location: 'City Multispeciality Hospital',
    status: 'Completed',
    bloodType: 'O+',
    details: 'Regular whole blood donation. 1 Unit donated.'
  },
  {
    id: 'h-2',
    type: 'request',
    date: '2023-12-20',
    location: 'Inodaya Hospitals',
    status: 'Fulfilled',
    bloodType: 'O+',
    details: 'Emergency request for family member.'
  }
];
