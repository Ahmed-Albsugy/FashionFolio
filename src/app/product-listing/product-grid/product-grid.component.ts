import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { FavItem, FavoritesService } from '../../../services/favorites.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private cartService: CartService,
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  goToDetails(productId: string) {
    this.router.navigate(['/product', productId]);
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

  // onAddToCart(productId: string) {
  //   this.cartService.addToCart(productId, 1).subscribe(
  //     () => {
  //       console.log('Product added to cart successfully');
  //     },
  //     (error) => {
  //       console.error('Error adding product to cart:', error);
  //     }
  //   );
  // }

  // addToCart(productId: string) {
  //   this.afAuth.currentUser.then((user) => {
  //     if (user) {
  //       const userId = user.uid;
  //       const cartItem = {
  //         productId: productId,
  //         quantity: 1,
  //       };

  //       this.firestore
  //         .collection(`users/${userId}/cart`)
  //         .add(cartItem)
  //         .then(() => {
  //           console.log('Product added to cart successfully');
  //         })
  //         .catch((error: Error) => {
  //           console.error('Error adding product to cart:', error);
  //         });
  //     } else {
  //       console.log('User is not authenticated');
  //     }
  //   });
  // }

  // Add to Favorites
  // onAddToFavorites(productId: string) {
  //   this.favoritesService.addToFavorites(productId).subscribe(
  //     () => {
  //       console.log('Product added to favorites successfully');
  //     },
  //     (error) => {
  //       console.error('Error adding product to favorites:', error);
  //     }
  //   );
  // }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  // addToCart(product: Product): void {
  //   // Implement add to cart functionality
  //   console.log(`Adding ${product.name} to cart`);
  // }

  // toggleFavorite(product: Product) {
  //   this.favoritesService.toggleFavorite(product.id ?? '');
  // }

  // isFavorite(product: Product): Observable<boolean> {
  //   return this.favoritesService.isFavorite(product);
  // }

  // toggleFavorite(product: Product) {
  //   if (this.isFavorite(product)) {
  //     this.removeFromFavorites(product);
  //   } else {
  //     this.addToFavorites(product);
  //   }
  // }

  // Update the toggleFavorite function

  // toggleFavorite(product: any) {
  //   if (this.favoritesService.isFavorite(product)) {
  //     this.favoritesService.removeFromFavorites(product.id);
  //   } else {
  //     this.favoritesService.addToFavorites(product);
  //   }
  // }
  // isFavorite(productId: string) {
  //   return this.favoritesService.isFavorite(productId); // تحقق إذا كان المنتج مضاف للمفضلة
  // }

  // removeFromFavorites(favItem: FavItem): void {
  //   this.favoritesService.removeFromFavorites(favItems).subscribe(
  //     () => {
  //       console.log('Item removed from favorites successfully');
  //       this.favItems = this.favItems.filter((favItem) => favitem !== favItem);
  //     },
  //     (error) => {
  //       console.error('Error removing item from favorites:', error);
  //     }
  //   );
  // }
  get favoriteProducts() {
    return this.favoritesService.getFavoriteItems();
  }
  // isFavorite(productId: number) {
  //   return this.favoritesService.isFavorite(productId);
  // }

  toggleFavorite(product: Product) {
    this.favoritesService.toggleFavorite(product);
    console.log(`toggling ${product.name} to wishlist`);
  }
  addToFavorites(product: Product): void {
    this.favoritesService.addToFavorites(product);
    // Implement wishlist functionality
    console.log(`Adding ${product.name} to wishlist`);
  }

  removeFavorite(product: Product) {
    // Remove the product from the local array
    this.favoritesService.removeFavorite(product);
  }

  // Update the isFavorite function
  isFavorite(product: Product): Observable<boolean> {
    return this.favoritesService.isFavorite(product);
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
