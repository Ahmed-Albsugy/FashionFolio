import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';
import { FavoritesService } from '../../../services/favorites.service';
import { interval, Observable, of, Subscription, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

// interface Product {
//   name: string;
//   price: number;
//   imageURL: string;
//   rating: number;
//   reviews: number;
// }
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent implements OnInit {
  // products: Product[] = [];
  // isLoggedIn: boolean = false;
  // slideConfig = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   dots: true,
  //   infinite: true,
  //   arrows: true,
  // };

  constructor(
    private snackBar: MatSnackBar,
    private cartService: CartService,
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private authService: AuthService,
    private router: Router
  ) {}

  @ViewChild('tabGroup') tabGroup?: MatTabGroup;
  isLoggedIn: boolean = false;
  product: Product[] = [];
  productChunks: Product[][] = [];
  selectedIndex = 0;
  Chunk: any;
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.productChunks = this.chunkArray(products, 4);
    });
    this.autoChangeTab();
    // this.authService.isUserLoggedIn().subscribe((loggedIn) => {
    //   this.isLoggedIn = loggedIn;
    // });
    // this.productService.getProducts().subscribe((products) => {
    //   this.productChunks = products;
    // });
    // this.productChunks = this.chunkArray(this.products, 4);
    // this.autoChangeTab();
  }

  chunkArray(array: Product[], size: number) {
    const chunked: Product[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  }

  autoChangeTab() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
    // setInterval(() => {
    //   this.selectedIndex = (this.selectedIndex + 1) % this.products.length;
    // }, 5000); // Change tab every 5 seconds
  }

  onTabChange(index: number) {
    this.selectedIndex = index;
  }
  nextSlide() {
    this.selectedIndex = (this.selectedIndex + 1) % this.productChunks.length;
  }

  prevSlide() {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.productChunks.length) %
      this.productChunks.length;
  }
  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((products) => {
  //     this.products = products;
  //   });
  //   this.authService.isUserLoggedIn().subscribe((loggedIn) => {
  //     this.isLoggedIn = loggedIn;
  //   });
  // }

  addToCart(product: Product): void {
    if (this.isLoggedIn) {
      this.cartService.addToCart(product);
      this.snackBar.open(`${product.name} added to cart`, 'Close', {
        duration: 2000,
      });
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

  toggleFavorite(product: Product) {
    if (this.isLoggedIn) {
      this.favoritesService.toggleFavorite(product);
      // console.log(`toggling ${product.name} to Favorites`);
    } else {
      this.snackBar.open(
        'You must be logged in to add products to the Favorites',
        'Close',
        {
          duration: 3000,
        }
      );
      this.router.navigate(['/log-in']);
    }
  }
  isFavorite(product: Product): Observable<boolean> {
    return this.favoritesService.isFavorite(product);
  }
  // addToWishlist(product: Product): void {
  //   this.snackBar.open(`${product.name} added to Favorites`, 'Close', {
  //     duration: 2000,
  //   });
  // }
  // nextSlide() {
  //   this.selectedIndex = (this.selectedIndex + 1) % this.products.length;
  // }

  // prevSlide() {
  //   this.selectedIndex =
  //     (this.selectedIndex - 1 + this.products.length) % this.products.length;
  // }
}
