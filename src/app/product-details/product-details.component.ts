import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  images: string[];
  reviews: Review[];
  rating: number;
  stockStatus: boolean;
}

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 1,
    name: 'Sample Product',
    price: 99.99,
    description:
      'This is a detailed product description that highlights all the key features and benefits of the product.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/api/placeholder/400/400',
      '/api/placeholder/400/400',
      '/api/placeholder/400/400',
    ],
    reviews: [
      {
        id: 1,
        userName: 'John Doe',
        rating: 5,
        comment: 'Great product! Highly recommended.',
        date: new Date(),
      },
    ],
    rating: 4.5,
    stockStatus: true,
  };

  selectedSize: string = '';
  quantity: number = 1;
  selectedImageIndex: number = 0;

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // In a real application, you would fetch the product details using the ID from the route
    const productId = this.route.snapshot.paramMap.get('id');
    // this.loadProductDetails(productId);
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (!this.selectedSize) {
      this.snackBar.open('Please select a size', 'Close', {
        duration: 3000,
      });
      return;
    }

    // Add to cart logic here
    this.snackBar.open('Product added to cart!', 'Close', {
      duration: 3000,
    });
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}
