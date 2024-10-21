import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from '../shopping-cart/cart-summary/cart-summary.component';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../models/product.model';

/**
  @title Basic buttons
 **/
@Component({
  selector: 'button-overview-example',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    CartSummaryComponent,
    NgFor,
    CommonModule,
  ],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  // cartItems$!: Observable<CartItemData[]>;
  totalPrice: number = 0;
  loading: boolean = false; // Loading state

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true; // Start loading state
    this.cartService.getCartItems().subscribe(
      (items) => {
        this.cartItems = items;
        this.calculateTotalPrice();
        this.loading = false; // Set loading state to false when done
      },
      (error) => {
        console.error('Error fetching cart items:', error);
        this.loading = false; // Set loading state to false when done
      }
    );
    this.calculateTotalPrice();
  }
  updateQuantity(index: number, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newQuantity = Number(inputElement.value);
    if (newQuantity > 0) {
      const cartItemId = this.cartItems[index].id;

      // Set loading state to true
      this.loading = true;
      // Update the local cart item
      this.cartItems[index].quantity = newQuantity;

      // Update the cart item in Firestore using the cart service
      this.calculateTotalPrice();
      this.cartService
        .updateCartItemQuantity(cartItemId, newQuantity)
        .then(() => {
          console.log('Cart item updated successfully in Firebase');
          this.loading = false; // Set loading state to false when done
        })
        .catch((error) => {
          console.error('Error updating cart item in Firebase:', error);
          this.loading = false; // Set loading state to false when done
        });
    } else {
      alert('Quantity must be at least 1');
    }
  }

  // updateQuantity(index: number, event: Event): void {
  //   const inputElement = event.target as HTMLInputElement;
  //   if (inputElement && inputElement.value) {
  //     const quantity = Number(inputElement.value);
  //     if (quantity > 0) {
  //       this.cartService.updateQuantity(this.cartItems[index].id, quantity);
  //     } else {
  //       alert('Quantity must be at least 1');
  //     }
  //   }
  //   // this.cartService.updateQuantity(id, quantity);
  //   this.cartService.updateCart();
  // }
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  returnToShop() {
    // Implement navigation back to the shop/product listing
    this.router.navigate(['/products']);
  }

  // calculateTotalPrice(): void {
  //   this.totalPrice = 0;
  //   this.cartItems.forEach((item) => {
  //     this.totalPrice += item.price * item.quantity;
  //   });
  // }
  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
