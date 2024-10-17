import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {}

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({...item, quantity: 1});
    }
    this.cartSubject.next([...this.cartItems]);
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.cartItems.find(i => i.id === id);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next([...this.cartItems]);
    }
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.cartSubject.next([...this.cartItems]);
  }
}