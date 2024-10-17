export interface Product {
  id?: string; // Optional because Firestore generates this automatically
  name: string;
  price: number;
  discountPrice: number;
  description: string;
  category: string;
  subcategory: string;
  subSubcategory: string;
  imageURL: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}
