export interface User {
  uid: string;
  email: string;
  displayName: string;
  cart: CartItem[];
  favorites: string[]; // Array of product IDs
}

export interface CartItem {
  productId: string;
  quantity: number;
}
