export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  treatment: string;
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}