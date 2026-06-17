export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedDesc: string;
  iconName: string; // Lucide icon name dynamic key
  benefits: string[];
  badge?: string;
  temperatureControlled?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  text: string;
  rating: number;
}
