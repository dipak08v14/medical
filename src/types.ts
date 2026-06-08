export interface Review {
  id: number;
  author: string;
  rating: number;
  relativeTime: string;
  text: string;
  avatarColor: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StoreDetails {
  name: string;
  rating: number;
  reviewCount: number;
  category: string;
  address: string;
  timing: string;
  closeTime: string;
  locationLink: string;
}
