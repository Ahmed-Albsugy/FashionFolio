import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  productId: string = '';
  selectedImageIndex: number = 0;
  quantity: number = 1;
  selectedSize: string = '';
  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.getProductDetails();
    this.selectedSize = 's';
    // Fetch the product details using this.productId
    // In a real application, you would fetch the product details using the ID from the route
    const productId = this.route.snapshot.paramMap.get('id');
    // this.loadProductDetails(productId);
  }

  getProductDetails() {
    this.productService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
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
  }
  // Add to cart logic here
  //   this.snackBar.open('Product added to cart!', 'Close', {
  //     duration: 3000,
  //   });
  // }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}
