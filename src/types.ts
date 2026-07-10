export interface Business {
  id: string;
  imageSrc: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  category: string;
  rating: number;
  reviewCount: number;
  phoneNumber: string;
}

export type SortByOption = 'best_match' | 'rating' | 'review_count';
