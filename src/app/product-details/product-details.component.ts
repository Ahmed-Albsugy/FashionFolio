import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

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
  selectedSize: string | null = null;
  isLoggedIn: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.getProductDetails();
    const productId = this.route.snapshot.paramMap.get('id');
    this.authService.isUserLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
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
    if (this.isLoggedIn) {
      if (this.product && this.product.sizes && this.product.sizes.length > 0) {
        if (!this.selectedSize) {
          this.snackBar.open('Please select a size', 'Close', {
            duration: 3000,
          });
          return;
        } else {
          this.cartService.addToCart(this.product);
          this.snackBar.open('Product added to cart!', 'Close', {
            duration: 3000,
          });
        }
      } else {
        this.cartService.addToCart(this.product);
        this.snackBar.open('Product added to cart!', 'Close', {
          duration: 3000,
        });
      }
    } else {
      this.snackBar.open(
        'You must be logged in to add products to the cart',
        'Close',
        {
          duration: 3000,
        }
      );
      this.router.navigate(['/log-in']);
    }
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  onSizeSelect(size: string) {
    this.selectedSize = size;
    // console.log('Selected size:', this.selectedSize);
  }
}
