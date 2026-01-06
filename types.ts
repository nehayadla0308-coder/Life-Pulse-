
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export enum DonorStatus {
  ACTIVE = 'Active',
  SUPPORTER = 'Supporter', 
  ON_BREAK = 'On Break'
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  bloodType: BloodType;
  isEligible: boolean;
  donorStatus: DonorStatus;
  lastDonationDate?: string;
  latitude: number;
  longitude: number;
  age: number;
  weight: number;
  hbLevel: number;
  hasDiabetes: boolean;
  hasHeartProblems: boolean;
  hasMajorSurgeries: boolean;
  lifePoints: number;
}

export interface EmergencyRequest {
  id: string;
  patientName: string;
  bloodType: BloodType;
  hospitalName: string;
  latitude: number;
  longitude: number;
  urgency: 'Critical' | 'Urgent' | 'Routine';
  timestamp: string;
  distance?: number;
  status?: 'Accepted' | 'Declined' | 'Pending';
}

export interface Notification {
  id: string;
  type: 'emergency' | 'update' | 'system';
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface HistoryEntry {
  id: string;
  type: 'donation' | 'request';
  date: string;
  location: string;
  status: 'Completed' | 'Pending' | 'Fulfilled';
  bloodType: BloodType;
  details?: string;
}

export type ViewType = 
  | 'home' 
  | 'assistant' 
  | 'nearby' 
  | 'profile'
  | 'profile_edit'
  | 'request'
  | 'donors'
  | 'hospitals'
  | 'hospital_detail'
  | 'history'
  | 'about'
  | 'notifications';
