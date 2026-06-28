export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category?: string;
}

export interface Event {
  title: string;
  slug: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

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
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  image: string;
  caption: string;
  category?: string;
}

export interface LegalPage {
  title: string;
  slug: string;
  content: string;
  lastUpdated?: string;
}
