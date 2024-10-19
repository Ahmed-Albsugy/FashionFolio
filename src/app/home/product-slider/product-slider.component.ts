import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { FavoritesService } from '../../../services/favorites.service';
import { interval, Observable, of, Subscription, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private cartService: CartService,
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.snackBar.open(`${product.name} added to cart`, 'Close', {
      duration: 2000,
    });
  }

  toggleFavorite(product: Product) {
    this.favoritesService.toggleFavorite(product);
    console.log(`toggling ${product.name} to wishlist`);
  }
  isFavorite(product: Product): Observable<boolean> {
    return this.favoritesService.isFavorite(product);
  }
  addToWishlist(product: Product): void {
    this.snackBar.open(`${product.name} added to wishlist`, 'Close', {
      duration: 2000,
    });
  }
}
