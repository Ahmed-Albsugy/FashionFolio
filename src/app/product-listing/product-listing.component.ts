import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent {
  constructor(
    private cartService: CartService,
    private favoritesService: FavoritesService
  ) {}

  // addToCart(product: any) {
  //   const cartItem: CartItemData = {
  //     id: product.id,
  //     name: product.title,
  //     price: product.price,
  //     quantity: 1,
  //     imageUrl: product.image,
  //   };
  //   this.cartService.addToCart(product.id, 1);
  // }
  // title = 'product-listing';
  products = [];

  filteredProducts = [...this.products];

  // onCategorySelected(event: {
  //   category: string;
  //   subcategory?: string;
  //   subSubcategory?: string;
  // }) {
  //   const { category, subcategory, subSubcategory } = event;

  //   this.filteredProducts = this.products.filter((product) => {
  //     const matchesCategory = category
  //       ? product.category.toLowerCase() === category.toLowerCase()
  //       : true;
  //     const matchesSubCategory = subcategory
  //       ? product.subcategory?.toLowerCase() === subcategory.toLowerCase()
  //       : true;
  //     const matchesSupSubCategory = subSubcategory
  //       ? product.subSubcategory?.toLowerCase() === subSubcategory.toLowerCase()
  //       : true;

  //     return matchesCategory || matchesSubCategory || matchesSubSubCategory;
  //   });
  // }
  searchText: string = '';

  showFavoriteList = false;

  onShowFavorites() {
    this.showFavoriteList = true;
  }

  get favoriteProducts() {
    return this.favoritesService.getFavoriteItems();
  }
  // toggleFavorite(product: any) {
  //   if (this.favoritesService.isFavorite(product.id)) {
  //     this.favoritesService.removeFromFavorites(product.id);
  //   } else {
  //     this.favoritesService.addToFavorites(product);
  //   }
  // }

  // isFavorite(productId: number) {
  //   return this.favoritesService.isFavorite(productId);
  // }

  showFavorites() {
    this.showFavoriteList = !this.showFavoriteList; // استخدام المتغير الجديد
    console.log('Show Favorites Clicked:', this.showFavoriteList); // تأكد من الطباعة في console
  }
}
