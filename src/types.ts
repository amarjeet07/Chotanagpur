export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Route {
  from: string;
  to: string;
}

export interface TourPackage {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  specs: {
    ac: boolean;
    seats: number;
    luggage: string;
    driver: string;
  };
}

export interface Destination {
  id: string;
  name: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
