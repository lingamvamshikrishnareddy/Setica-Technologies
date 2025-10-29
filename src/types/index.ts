// Waitlist Types
export interface WaitlistEntry {
  id?: string;
  name: string;
  email: string;
  company?: string;
  interest: 'products' | 'services' | 'both' | 'partnership';
  timestamp: Date;
  createdAt?: string;
}

// Product/Solution Types
export interface Solution {
  id?: string;
  title: string;
  icon: string;
  status: 'In Development' | 'Planned' | 'Research' | 'Live';
  statusClass: 'status-development' | 'status-planned' | 'status-research' | 'status-live';
  description: string;
  features: string[];
  category?: 'healthcare' | 'logistics' | 'fintech' | 'enterprise' | 'consumer' | 'other';
  launchDate?: Date;
}

// Service Types
export interface Service {
  id?: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  pricing?: {
    model: 'fixed' | 'hourly' | 'project' | 'custom';
    startingPrice?: number;
    currency?: string;
  };
}

// Testimonial Types
export interface Testimonial {
  id?: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
  featured?: boolean;
}

// Feature Types
export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'orange' | 'purple' | 'green';
}

// Team Member Types
export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Blog Post Types
export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  category: string;
  tags: string[];
  featuredImage?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  phone?: string;
}

// Newsletter Types
export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribedAt: Date;
  active: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Firebase Error Types
export interface FirebaseError {
  code: string;
  message: string;
}