import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  private favoriteProducts: any[] = [];

  addToFavorites(product: any) {
    this.favoriteProducts.push(product);
  }

  removeFromFavorites(productId: number) {
    this.favoriteProducts = this.favoriteProducts.filter(p => p.id !== productId);
  }

  isFavorite(productId: number): boolean {
    return this.favoriteProducts.some(p => p.id === productId);
  }

  getFavorites() {
    return this.favoriteProducts;
  }
}
