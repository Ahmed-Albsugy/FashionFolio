import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  favoriteItems: any[] = [];

  showFavoriteList = false;

  constructor(private favoritesService: FavoritesService) {}

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
  onShowFavorites() {
    this.showFavoriteList = true;
  }

  get favoriteProducts() {
    return this.favoritesService.getFavoriteItems(); // جلب المنتجات المفضلة من الخدمة
  }

  removeFromFavorites(favoriteItemId: string) {
    this.favoritesService.removeFromFavorites(favoriteItemId).subscribe(
      () => {
        console.log('Item removed from favorites successfully');
        this.favoriteItems = this.favoriteItems.filter(
          (item) => item.id !== favoriteItemId
        );
      },
      (error) => {
        console.error('Error removing item from favorites:', error);
      }
    );
  }
  // toggleFavorite(product: any) {
  //   if (this.favoritesService.isFavorite(product.id)) {
  //     this.favoritesService.removeFromFavorites(product.id); // إزالة من المفضلة
  //   } else {
  //     this.favoritesService.addToFavorites(product); // إضافة للمفضلة
  //   }
  // }

  // isFavorite(productId: number) {
  //   return this.favoritesService.isFavorite(productId); // تحقق إذا كان المنتج مضاف للمفضلة
  // }

  // showFavorites() {
  //   this.showFavoriteList = !this.showFavoriteList;
  //   console.log('Show Favorites Clicked:', this.showFavoriteList);
  // }
}
