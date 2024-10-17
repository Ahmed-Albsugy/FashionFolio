import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private localStorageKey = 'favoriteProducts';  // مفتاح الـ localStorage

  constructor() {}

  getFavorites(): any[] {
    // جلب المنتجات المفضلة من localStorage
    const favorites = localStorage.getItem(this.localStorageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addToFavorites(product: any): void {
    const currentFavorites = this.getFavorites();
    if (!currentFavorites.some(p => p.id === product.id)) {
      currentFavorites.push(product);  // إضافة المنتج للمفضلة
      localStorage.setItem(this.localStorageKey, JSON.stringify(currentFavorites));  // تخزين المفضلة في localStorage
    }
  }

  removeFromFavorites(id: number): void {
    let currentFavorites = this.getFavorites();
    currentFavorites = currentFavorites.filter(product => product.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentFavorites));  // تحديث المفضلة في localStorage
  }

  isFavorite(id: number): boolean {
    const currentFavorites = this.getFavorites();
    return currentFavorites.some(product => product.id === id);
  }
}

