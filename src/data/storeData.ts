import { StoreDetails, Service, Review } from '../types';

export const storeDetails: StoreDetails = {
  name: "Rajlaxmi Medical And General Stores",
  rating: 4.7,
  reviewCount: 15,
  category: "Pharmacy & General Store",
  address: "G-22, Siddhi Vinayak Residency, Sachin Station Rd, Mukti Nagar, Sachin, Surat, Gujarat 394230",
  timing: "Open · Closes 10:50 pm",
  closeTime: "10:50 PM",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Rajlaxmi+Medical+And+General+Stores+Sachin+Station+Rd+Surat"
};

export const services: Service[] = [
  {
    id: "prescription",
    title: "Prescription Medicines",
    description: "Wide range of genuine, high-quality prescription medications from major and certified manufacturers.",
    iconName: "FileText"
  },
  {
    id: "otc",
    title: "Over-the-Counter (OTC)",
    description: "Daily medicines, pain relievers, cold and cough formulations, first-aid, and seasonal health items.",
    iconName: "HeartPulse"
  },
  {
    id: "general_stores",
    title: "General Stores",
    description: "Personal care essentials, baby food & hygiene, organic cosmetics, toiletries, and daily wellness goods.",
    iconName: "Gift"
  },
  {
    id: "supplements",
    title: "Wellness & Nutrition",
    description: "Premium multivitamins, proteins, dietary supplements, minerals, and immunity boosters for all age groups.",
    iconName: "Sparkles"
  },
  {
    id: "home_devices",
    title: "Medical Equipment",
    description: "Essential home health monitoring devices including BP monitors, blood glucose meters, thermometers, and supports.",
    iconName: "Activity"
  },
  {
    id: "baby_care",
    title: "Baby & Infant Care",
    description: "Comprehensive baby formulations, clinical moisturizers, certified infant milk formulas, and diapers.",
    iconName: "Baby"
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    author: "Rahul Patel",
    rating: 5,
    relativeTime: "1 month ago",
    text: "Very polite staff and they always have all the prescribed medicines available. The location is very convenient right on Sachin Station Road. Highly recommended!",
    avatarColor: "bg-emerald-500"
  },
  {
    id: 2,
    author: "Sneha Sharma",
    rating: 5,
    relativeTime: "3 months ago",
    text: "Great experience. Needed baby products and pediatric medicines late in the evening. Staff prepared everything quickly and even explained the dosages. Opened till 10:50 PM which is really helpful.",
    avatarColor: "bg-teal-500"
  },
  {
    id: 3,
    author: "Vijay Parmar",
    rating: 4,
    relativeTime: "2 weeks ago",
    text: "Prompt service. They accept all kinds of online payments (UPI, Cards). The pharmacy is clean and well-stocked.",
    avatarColor: "bg-cyan-500"
  },
  {
    id: 4,
    author: "Anjali Gupta",
    rating: 5,
    relativeTime: "2 months ago",
    text: "Excellent service and trustworthy medicines. The owner behaves very professionally and answers all patient doubts clearly.",
    avatarColor: "bg-sky-500"
  },
  {
    id: 5,
    author: "Rakesh Jadav",
    rating: 4.7,
    relativeTime: "4 months ago",
    text: "One-stop store for all medical as well as general grocery requirements in Mukti Nagar. Fast service and authentic medicines.",
    avatarColor: "bg-violet-500"
  }
];
