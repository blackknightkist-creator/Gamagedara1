export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  volumeOrWeight: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerReview {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  verified: boolean;
  avatarLetter: string;
}
