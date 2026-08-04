import { Service, Route, TourPackage, Vehicle, Destination, Review, FAQItem } from './types';

export const SERVICES: Service[] = [
  { id: 'airport', title: 'Airport Taxi', description: 'Ranchi Airport Pickup & Drop with Flight Tracking', icon: 'Plane' },
  { id: 'local', title: 'Local Taxi', description: 'City Tour, Office Pickup, Shopping, Family Trips', icon: 'MapPin' },
  { id: 'outstation', title: 'Outstation Taxi', description: 'Safe & Comfortable inter-city travel solutions', icon: 'Navigation' },
];

export const ROUTES: Route[] = [
  { from: 'Ranchi', to: 'Patna' },
  { from: 'Ranchi', to: 'Kolkata' },
  { from: 'Ranchi', to: 'Jamshedpur' },
  { from: 'Ranchi', to: 'Dhanbad' },
  { from: 'Ranchi', to: 'Hazaribagh' },
  { from: 'Ranchi', to: 'Bokaro' },
  { from: 'Ranchi', to: 'Deoghar' },
  { from: 'Ranchi', to: 'Varanasi' },
  { from: 'Ranchi', to: 'Bodhgaya' },
  { from: 'Ranchi', to: 'Netarhat' },
];

export const TOUR_PACKAGES: TourPackage[] = [
  { id: 'netarhat', name: 'Netarhat', image: './images/regenerated_image_1785784866417.webp' },
  { id: 'betla', name: 'Betla National Park', image: './images/regenerated_image_1785784617206.png' },
  { id: 'dassam', name: 'Dassam Falls', image: './images/regenerated_image_1785784878175.png' },
  { id: 'hundru', name: 'Hundru Falls', image: './images/regenerated_image_1785784885381.png' },
  { id: 'jonha', name: 'Jonha Falls', image: './images/regenerated_image_1785784628817.png' },
  { id: 'patratu', name: 'Patratu Valley', image: './images/regenerated_image_1785784627607.webp' },
];

export const FLEET: Vehicle[] = [
  { 
    id: 'dzire', name: 'Swift Dzire', image: './images/regenerated_image_1785785437136.avif', 
    specs: { ac: true, seats: 4, luggage: '2 Bags', driver: 'Professional' } 
  },
  { 
    id: 'ertiga', name: 'Maruti Ertiga', image: './images/regenerated_image_1785785746129.avif', 
    specs: { ac: true, seats: 6, luggage: '3 Bags', driver: 'Professional' } 
  },
  { 
    id: 'innova', name: 'Innova Crysta', image: './images/regenerated_image_1785785743811.webp', 
    specs: { ac: true, seats: 7, luggage: '4 Bags', driver: 'Professional' } 
  },
];

export const DESTINATIONS: Destination[] = [
  { id: 'ranchi', name: 'Ranchi', image: './images/regenerated_image_1785785742297.avif' },
  { id: 'patratu', name: 'Patratu Valley', image: './images/regenerated_image_1785785739407.jpg' },
  { id: 'netarhat', name: 'Netarhat', image: './images/regenerated_image_1785785725958.png' },
  { id: 'deoghar', name: 'Deoghar', image: './images/regenerated_image_1785785736682.jpg' },
];

export const REVIEWS: Review[] = [
  { id: '1', name: 'Rajesh Kumar', rating: 5, comment: 'Clean car and polite driver. Highly recommended!' },
  { id: '2', name: 'Priya Sharma', rating: 5, comment: 'Affordable fare and timely pickup. Best taxi service in Ranchi.' },
  { id: '3', name: 'Amit Singh', rating: 5, comment: 'Professional drivers and comfortable journey for my family.' },
];

export const FAQS: FAQItem[] = [
  { question: 'How to book taxi?', answer: 'You can book through our online form, call us at 8709917730, or message us on WhatsApp.' },
  { question: 'Do you provide airport pickup?', answer: 'Yes, we provide 24/7 airport pickup and drop services in Ranchi.' },
  { question: 'Do you provide outstation taxi?', answer: 'Yes, we provide inter-city cabs to Patna, Kolkata, Jamshedpur, and more.' },
  { question: 'Are drivers verified?', answer: 'All our drivers are professionally trained and background-verified for your safety.' },
  { question: 'Can I book through WhatsApp?', answer: 'Absolutely! Send us a message at 8709917730 for instant booking.' },
];
