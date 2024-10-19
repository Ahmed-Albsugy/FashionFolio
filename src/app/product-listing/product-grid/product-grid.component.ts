import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { FavoritesService } from '../../../services/favorites.service';
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
    { value: 'All', label: 'All' },
    { value: 'Women', label: 'Women' },
    { value: 'Men', label: 'Men' },
    { value: 'Kids', label: 'Kids' },
  ];
  product: Product[] = [];
  selectedCategory: string = 'All';
  products: Observable<Product[]> = this.productService.getProducts();
  sortedProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.sortedProducts = data;
    });
    this.products.subscribe((products) => {
      this.sortedProducts = products; // Initialize with all products
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

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
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

  // onSortChange(event: any): void {
  //   // Implement sorting logic
  //   console.log(`Sorting by: ${event.value}`);
  // }
  onSortChange(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
    // this.products$.subscribe((products) => {
    //   if (selectedCategory === 'All') {
    //     this.sortedProducts = [...products]; // Show all products
    //   } else {
    //     this.sortedProducts = products.filter(
    //       (product) =>
    //         product.category.toLowerCase() === selectedCategory.toLowerCase()
    //     );
    //   }
    // });
    console.log(`Filtering by category: ${selectedCategory}`);
    this.applyFilters();
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    // Filter products based on the search term
    // this.products$.subscribe((products) => {
    //   this.sortedProducts = products.filter((product) =>
    //     product.name.toLowerCase().includes(this.searchTerm)
    //   );
    // });

    console.log('Search term:', this.searchTerm);
    console.log('Filtered Products:', this.sortedProducts);
    this.applyFilters();
  }

  applyFilters(): void {
    this.products.subscribe((products) => {
      this.sortedProducts = products.filter((product) => {
        const matchesCategory =
          this.selectedCategory === 'All' ||
          product.category.toLowerCase() ===
            this.selectedCategory.toLowerCase();
        const matchesSearchTerm = product.name
          .toLowerCase()
          .includes(this.searchTerm);

        return matchesCategory && matchesSearchTerm;
      });
    });
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
