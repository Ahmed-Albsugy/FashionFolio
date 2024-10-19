import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { FavoritesService } from '../../../services/favorites.service';
import { interval, Observable, of, Subscription, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { NgZone } from '@angular/core';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   rating: number;
//   reviews: number;
// }

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  visibleProducts$: Observable<Product[]> = of([]);
  totalProducts$: Observable<number> = of(0);
  currentIndex = 0;
  itemsPerSlide = 4;
  private resizeSubscription?: Subscription;
  private autoSlideSubscription?: Subscription;

  // products: Product[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private cartService: CartService,
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    // this.startAutoSlide();
    // this.products$ = this.productService.getProducts();
    // this.totalProducts$ = this.products$.pipe(
    //   map((products: Product[]) => products.length)
    // );
    // this.updateVisibleProducts();

    // this.adjustItemsPerSlide();
    // this.resizeSubscription = fromEvent(window, 'resize')
    //   .pipe(debounceTime(250))
    //   .subscribe(() => {
    //     this.adjustItemsPerSlide();
    //     this.updateVisibleProducts();
    //   });
  }
  // ngOnDestroy(): void {
  //   this.stopAutoSlide();
  //   if (this.resizeSubscription) {
  //     this.resizeSubscription.unsubscribe();
  //   }
  // }

  adjustItemsPerSlide(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.itemsPerSlide = 1;
    } else if (width < 1024) {
      this.itemsPerSlide = 2;
    } else if (width < 1200) {
      this.itemsPerSlide = 3;
    } else {
      this.itemsPerSlide = 4;
    }
    this.currentIndex = 0;
  }

  // handlePrev() {
  //   this.currentIndex =
  //     (this.currentIndex - 1 + this.products$.length) % this.products.length;
  // }

  // handleNext() {
  //   this.currentIndex = (this.currentIndex + 1) % this.products.length;
  // }
  // adjustItemsPerSlide() {
  //   if (window.innerWidth < 768) {
  //     this.itemsPerSlide = 1;
  //   } else if (window.innerWidth < 1024) {
  //     this.itemsPerSlide = 2;
  //   } else if (window.innerWidth < 1200) {
  //     this.itemsPerSlide = 3;
  //   } else {
  //     this.itemsPerSlide = 4;
  //   }
  //   this.currentIndex = 0;
  // }

  // nextSlide() {
  //   this.currentIndex =
  //     (this.currentIndex + 1) % (this.products.length - this.itemsPerSlide + 1);
  // }

  // prevSlide() {
  //   this.currentIndex =
  //     (this.currentIndex - 1 + this.products.length) %
  //     (this.products.length - this.itemsPerSlide + 1);
  // }

  nextSlide(): void {
    this.products$
      .pipe(map((products) => products.length))
      .subscribe((length) => {
        this.currentIndex = Math.min(
          this.currentIndex + 1,
          length - this.itemsPerSlide
        );
        this.updateVisibleProducts();
      });
  }

  prevSlide(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
    this.updateVisibleProducts();
  }

  // nextSlide() {
  //   this.products$
  //     .pipe(map((products) => products.length))
  //     .subscribe((length) => {
  //       this.currentIndex = Math.min(
  //         this.currentIndex + 1,
  //         length - this.itemsPerSlide
  //       );
  //       this.updateVisibleProducts();
  //     });
  // }

  // prevSlide() {
  //   this.currentIndex = Math.max(0, this.currentIndex - 1);
  //   this.updateVisibleProducts();
  // }

  updateVisibleProducts(): void {
    this.visibleProducts$ = this.products$.pipe(
      map((products) =>
        products.slice(
          this.currentIndex,
          this.currentIndex + this.itemsPerSlide
        )
      )
    );
  }
  // visibleProducts() {
  //   return this.products.slice(
  //     this.currentIndex,
  //     this.currentIndex + this.itemsPerSlide
  //   );
  // }

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
