export interface ScamDocument {
  name: string;
  url?: string;
  locked: boolean;
}

export interface Scammer {
  id: string;
  name: string;
  country: string;
  type: string;
  description: string;
  websites: string[];
  emails: string[];
  phones: string[];
  representatives: string[];
  generalInfo: string;
  additionalComments?: string;
  headerImage?: string;
  documents?: {
    scamDocs?: ScamDocument[];
    dueDiligence?: ScamDocument[];
  };
  category: string;
}

export interface ScammerCategory {
  id: string;
  name: string;
  count: number;
}
