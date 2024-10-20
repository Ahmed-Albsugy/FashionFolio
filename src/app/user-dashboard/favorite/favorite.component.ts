import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../../services/cart.service'; // import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  favoriteItems: any[] = [];

  showFavoriteList = false;

  constructor(
    private favoritesService: FavoritesService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.favoritesService.getFavoriteItems().subscribe(
      (items) => {
        this.favoriteItems = items;
      },
      (error) => {
        console.error('Error fetching favorite items:', error);
      }
    );
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.snackBar.open(`${product.name} added to cart`, 'Close', {
      duration: 2000,
    });
  }

  onShowFavorites() {
    this.showFavoriteList = true;
  }

  get favoriteProducts() {
    return this.favoritesService.getFavoriteItems(); // جلب المنتجات المفضلة من الخدمة
  }

  removeFromFavorites(product: Product): void {
    this.favoritesService.removeFavorite(product);
  }
  // toggleFavorite(product: any) {
  //   if (this.favoritesService.isFavorite(product.id)) {
  //     this.favoritesService.removeFromFavorites(product.id); // إزالة من المفضلة
  //   } else {
  //     this.favoritesService.addToFavorites(product); // إضافة للمفضلة
  //   }
  // }

  isFavorite(product: Product) {
    return this.favoritesService.isFavorite(product); // تحقق إذا كان المنتج مضاف للمفضلة
  }

  // showFavorites() {
  //   this.showFavoriteList = !this.showFavoriteList;
  //   console.log('Show Favorites Clicked:', this.showFavoriteList);
  // }
  getStarArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  // Calculate percentage of partial star
  getPartialStar(rating: number): number {
    return (rating % 1) * 100;
  }
}
