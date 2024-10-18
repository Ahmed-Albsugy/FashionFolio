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
 * @title Basic buttons
 */
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

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(
      (items) => {
        this.cartItems = items;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
    // this.cartService.getCartItems().subscribe((cartItems) => {
    //   this.cartItems$ = of(cartItems);
    //   this.calculateTotalPrice();
    // });
  }

  // updateQuantity(id: number, event: Event) {
  //   const quantity = +(event.target as HTMLInputElement).value;
  //   this.cartService.updateQuantity(id, quantity);
  // }
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    // .subscribe(
    //   () => {
    //     console.log('Item removed from cart successfully');
    //     this.cartItems = this.cartItems.filter(
    //       (item) => item.id !== product.id
    //     );
    //   },
    //   (error) => {
    //     console.error('Error removing item from cart:', error);
    //   }
    // );
  }

  returnToShop() {
    // Implement navigation back to the shop/product listing
    this.router.navigate(['/products']);
  }

  // calculateTotalPrice(): void {
  //   this.totalPrice = 0;
  //   this.cartItems$.subscribe((cartItems) => {
  //     cartItems.forEach((item) => {
  //       this.totalPrice += item.price * item.quantity;
  //     });
  //   });
  // }
}
