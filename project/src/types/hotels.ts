import {Host} from './host';

type Hotel = {
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  id: number;
};

type Hotels = Hotel[];

export type {Hotel, Hotels};

