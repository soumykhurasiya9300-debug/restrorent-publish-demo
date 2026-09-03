export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  priceNum: number;
  tag: string;
  img: string;
  cat: 'starters' | 'mains' | 'curries' | 'desserts';
  isVeg: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
}

export interface Review {
  id: string;
  stars: number;
  text: string;
  author: string;
  meta: string;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  img: string;
}

export interface ReservationData {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  special?: string;
  seatingPreference?: string;
  createdAt: string;
}
