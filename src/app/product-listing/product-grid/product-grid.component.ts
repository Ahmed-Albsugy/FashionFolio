import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { FavoritesService } from '../../../services/favorites.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  viewType: 'grid' | 'list' = 'grid';
  sortOptions = [
    { value: 'Women', label: 'Women' },
    { value: 'price-desc', label: 'Men' },
    { value: 'rating-desc', label: 'Kids' },
  ];

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  // loadProducts() {
  //   const jsonFilePath = 'assets/products.json';
  //   this.productService.loadProductsFromJson(jsonFilePath).subscribe(
  //     (products: Product[]) => {
  //       products.forEach((product) => {
  //         this.productService
  //           .addProduct(product)
  //           .then(() => {
  //             console.log(`Product ${product.name} added successfully`);
  //           })
  //           .catch((error) => {
  //             console.error('Error adding product:', error);
  //           });
  //       });
  //     },
  //     (error) => {
  //       console.error('Error loading products from JSON file:', error);
  //     }
  //   );
  // }

  toggleView(view: 'grid' | 'list'): void {
    this.viewType = view;
  }

  addToCart(product: Product): void {
    // Implement add to cart functionality
    console.log(`Adding ${product.name} to cart`);
  }

  toggleFavorite(product: any) {
    if (this.favoritesService.isFavorite(product.id)) {
      this.favoritesService.removeFromFavorites(product.id);
    } else {
      this.favoritesService.addToFavorites(product);
    }
  }
  get favoriteProducts() {
    return this.favoritesService.getFavorites();
  }
  isFavorite(productId: number) {
    return this.favoritesService.isFavorite(productId);
  }
  addToWishlist(product: Product): void {
    // Implement wishlist functionality
    console.log(`Adding ${product.name} to wishlist`);
  }

  onSortChange(event: any): void {
    // Implement sorting logic
    console.log(`Sorting by: ${event.value}`);
  }

  // Helper method to generate star array for rating display
  getStarArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  // Calculate percentage of partial star
  getPartialStar(rating: number): number {
    return (rating % 1) * 100;
  }
}
