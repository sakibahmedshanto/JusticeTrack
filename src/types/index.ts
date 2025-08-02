export interface User {
  id: string;
  email: string;
  role: 'complainant' | 'police' | 'judge' | 'lawyer';
  name: string;
  badge?: string; // For police officers
  courtId?: string; // For judges
  barId?: string; // For lawyers
}

export interface Case {
  id: string;
  hash: string;
  title: string;
  description: string;
  status: CaseStatus;
  complainantId: string;
  assignedOfficerId?: string;
  judgeId?: string;
  lawyerId?: string;
  createdAt: string;
  updatedAt: string;
  documents: Document[];
  hearings: Hearing[];
}

export type CaseStatus = 
  | 'filed'
  | 'under_investigation'
  | 'charge_sheet_submitted'
  | 'case_accepted'
  | 'hearing_scheduled'
  | 'in_progress'
  | 'judgment_delivered'
  | 'dismissed'
  | 'appeal_filed';

export interface Document {
  id: string;
  name: string;
  type: 'fir' | 'evidence' | 'charge_sheet' | 'summons' | 'counter_argument' | 'judgment';
  url: string;
  hash: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface Hearing {
  id: string;
  caseId: string;
  date: string;
  time: string;
  courtroom: string;
  status: 'scheduled' | 'completed' | 'postponed';
  notes?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}