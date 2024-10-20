import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';
import { FavoritesService } from '../../../services/favorites.service';
import { interval, Observable, of, Subscription, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent implements OnInit {
  products: Product[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private cartService: CartService,
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    this.authService.isUserLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  addToCart(product: Product): void {
    if (this.isLoggedIn) {
      this.cartService.addToCart(product);
      this.snackBar.open(`${product.name} added to cart`, 'Close', {
        duration: 2000,
      });
    } else {
      this.snackBar.open(
        'You must be logged in to add products to the cart',
        'Close',
        {
          duration: 3000,
        }
      );
      this.router.navigate(['/log-in']);
    }
  }

  toggleFavorite(product: Product) {
    if (this.isLoggedIn) {
      this.favoritesService.toggleFavorite(product);
      // console.log(`toggling ${product.name} to Favorites`);
    } else {
      this.snackBar.open(
        'You must be logged in to add products to the Favorites',
        'Close',
        {
          duration: 3000,
        }
      );
      this.router.navigate(['/log-in']);
    }
  }
  isFavorite(product: Product): Observable<boolean> {
    return this.favoritesService.isFavorite(product);
  }
  // addToWishlist(product: Product): void {
  //   this.snackBar.open(`${product.name} added to Favorites`, 'Close', {
  //     duration: 2000,
  //   });
  // }
}
