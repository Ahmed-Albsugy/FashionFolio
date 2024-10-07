import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  image: string;
  category: string;
  inStock: boolean;
}

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  viewType: 'grid' | 'list' = 'grid';
  sortOptions = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      description: 'Essential cotton crew neck t-shirt in classic white',
      price: 29.99,
      discountPrice: 24.99,
      rating: 4.5,
      image: 'assets/images/products/tshirt.jpg',
      category: "Men's Fashion",
      inStock: true,
    },
    {
      id: 2,
      name: 'Slim Fit Denim Jeans',
      description: 'Contemporary slim fit jeans in dark wash',
      price: 79.99,
      rating: 4.8,
      image: 'assets/images/products/jeans.jpg',
      category: "Men's Fashion",
      inStock: true,
    },
    // Add more products as needed
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleView(view: 'grid' | 'list'): void {
    this.viewType = view;
  }

  addToCart(product: Product): void {
    // Implement add to cart functionality
    console.log(`Adding ${product.name} to cart`);
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
