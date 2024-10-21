import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { map, switchMap, take } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { Product } from '../app/models/product.model';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface CartItem extends Product {
  id: string;
  quantity: number;
  size: string;
}

interface CartData {
  [key: string]: CartItem;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private cartDoc: AngularFirestoreDocument<CartData> | null = null;
  isLoggedIn: boolean = false;
  totalPrice: number = 0;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.initializeCart();
  }

  private initializeCart() {
    this.authService.user$
      .pipe(
        switchMap((user) => {
          if (user) {
            this.cartDoc = this.firestore.doc<CartData>(
              `users/${user.uid}/cart/cartItems`
            );
            return this.cartDoc.valueChanges();
          } else {
            this.cartDoc = null;
            return [];
          }
        })
      )
      .subscribe((cartData: CartData | undefined) => {
        if (cartData) {
          this.cartItems = Object.values(cartData);
          this.cartSubject.next(this.cartItems);
        } else {
          this.cartItems = [];
          this.cartSubject.next([]);
        }
      });
  }

  updateCart() {
    this.cartSubject.next([...this.cartItems]);
    this.syncCartWithFirestore();
  }

  private syncCartWithFirestore() {
    if (this.cartDoc) {
      const cartData: CartData = {};
      this.cartItems.forEach((item) => {
        cartData[item.id] = item;
      });

      this.cartDoc
        .set(cartData)
        .then(() => console.log('Cart synced with Firestore'))
        .catch((error) => console.error('Error syncing cart:', error));
    } else {
      console.warn('User not authenticated, cart not synced');
    }
  }

  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({
        ...product,
        id: product.id ?? '',
        quantity: 1,
        size: '',
      });
    }
    this.updateCart();
  }
  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCart();
    }
    this.updateCart();
  }

  // Fetch cart items for the authenticated user
  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
    // return this.authService.user$.pipe(
    //   switchMap((user) => {
    //     if (!user) {
    //       throw new Error('User not authenticated');
    //     }
    //     return this.firestore
    //       .collection(`users/${user.uid}/cart`)
    //       .snapshotChanges()
    //       .pipe(
    //         map((actions) =>
    //           actions.map((a) => {
    //             const data = a.payload.doc.data();
    //             const id = a.payload.doc.id;
    //             return { id, ...(data as any) };
    //           })
    //         )
    //       );
    //   })
    // );
  }
  // getCartItems() {
  //   return this.cartSubject.asObservable();
  // }
  // Add to cart method
  // addToCart(productId: string, quantity: number) {
  //   return this.authService.user$.pipe(
  //     switchMap((user) => {
  //       if (!user) {
  //         throw new Error('User not authenticated');
  //       }
  //       const cartItem = { productId, quantity };
  //       return this.firestore
  //         .collection(`users/${user.uid}/cart`)
  //         .add(cartItem);
  //     })
  //   );
  // }

  // addToCart(product: Product) {
  //   const existingItem = this.cartItems.find((item) => item.id === product.id);
  //   if (existingItem) {
  //     existingItem.quantity += 1;
  //   } else {
  //     this.cartItems.push({ ...product, quantity: 1 });
  //   }
  //   this.updateCart();
  // }

  // private updateCart() {
  //   this.cartSubject.next([...this.cartItems]);
  //   this.syncCartWithFirestore();
  // }

  // private syncCartWithFirestore() {
  //   this.authService.user$
  //     .pipe(
  //       take(1),
  //       switchMap((user) => {
  //         if (!user) {
  //           throw new Error('User not authenticated');
  //         }
  //         return this.firestore
  //           .collection('users/${user.uid}/cart')
  //           .add(this.cartItems);
  //       })
  //     )
  //     .subscribe(
  //       () => console.log('Cart synced with Firestore'),
  //       (error) => console.error('Error syncing cart:', error)
  //     );
  // }

  private loadCartFromFirestore() {
    this.authService.user$
      .pipe(
        switchMap((user) => {
          if (!user) {
            return [];
          }
          return this.firestore
            .collection('users/${user.uid}/cart')
            .doc(user.uid)
            .valueChanges();
        })
      )
      .subscribe((cart: any) => {
        if (cart && cart.items) {
          this.cartItems = cart.items;
          this.cartSubject.next([...this.cartItems]);
        }
      });
  }
  // addToCart(item: CartItem) {
  //   const existingItem = this.cartItems.find((i) => i.id === item.id);
  //   if (existingItem) {
  //     existingItem.quantity += 1;
  //   } else {
  //     this.cartItems.push({ ...item, quantity: 1 });
  //   }
  //   this.cartSubject.next([...this.cartItems]);
  // }

  updateQuantity(id: string, quantity: number) {
    const item = this.cartItems.find((i) => i.id === id);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next([...this.cartItems]);
    }
  }

  // Remove from cart method

  // removeFromCart(id: number) {
  //   this.cartItems = this.cartItems.filter((item) => item.id !== id);
  //   this.cartSubject.next([...this.cartItems]);
  // }

  updateCartItemQuantity(cartItemId: string, newQuantity: number) {
    // Update the quantity in the Firestore collection
    return this.firestore
      .collection('cart')
      .doc(cartItemId)
      .update({ quantity: newQuantity });
  }
}
