import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Breed Dry Dog Food',
      price: 100,
      image: 'assets/dog-food.jpg',
      rating: 3.5,
      reviews: 35,
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      image: 'assets/camera.jpg',
      rating: 4,
      reviews: 95,
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      image: 'assets/laptop.jpg',
      rating: 4.5,
      reviews: 325,
    },
    {
      id: 4,
      name: 'Curology Product Set',
      price: 500,
      image: 'assets/product-set.jpg',
      rating: 4,
      reviews: 145,
    },
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.snackBar.open(`${product.name} added to cart`, 'Close', {
      duration: 2000,
    });
  }

  addToWishlist(product: Product): void {
    this.snackBar.open(`${product.name} added to wishlist`, 'Close', {
      duration: 2000,
    });
  }
}
