export interface Cause {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  fullDescription?: string;
}

export interface Volunteer {
  name: string;
  role: string;
  image: string;
  rank: "leadership" | "member";
  bio?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface LegalPage {
  title: string;
  slug: string;
  content: string;
  lastUpdated?: string;
}
