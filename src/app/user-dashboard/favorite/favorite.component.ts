import { Component } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  showFavoriteList = false;

  constructor(private favoritesService: FavoritesService) {}

  onShowFavorites() {
    this.showFavoriteList = true;
  }

  get favoriteProducts() {
    return this.favoritesService.getFavorites(); // جلب المنتجات المفضلة من الخدمة
  }

  toggleFavorite(product: any) {
    if (this.favoritesService.isFavorite(product.id)) {
      this.favoritesService.removeFromFavorites(product.id); // إزالة من المفضلة
    } else {
      this.favoritesService.addToFavorites(product); // إضافة للمفضلة
    }
  }

  isFavorite(productId: number) {
    return this.favoritesService.isFavorite(productId); // تحقق إذا كان المنتج مضاف للمفضلة
  }

  showFavorites() {
    this.showFavoriteList = !this.showFavoriteList;
    console.log('Show Favorites Clicked:', this.showFavoriteList);
  }
}
