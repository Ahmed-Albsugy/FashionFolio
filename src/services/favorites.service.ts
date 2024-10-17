import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../app/models/product.model';
import { BehaviorSubject } from 'rxjs';

export interface FavItem extends Product {
  id: string;
}

interface FavData {
  [key: string]: FavItem;
}
@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private localStorageKey = 'favoriteProducts'; // مفتاح الـ localStorage
  private favItems: FavItem[] = [];
  private favSubject = new BehaviorSubject<FavItem[]>([]);
  private favDoc: AngularFirestoreDocument<FavData> | null = null;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
    this.initializeFavorites();
  }

  private initializeFavorites() {
    this.authService.user$
      .pipe(
        switchMap((user) => {
          if (user) {
            this.favDoc = this.firestore.doc<FavData>(
              `users/${user.uid}/favorites/favItems`
            );
            return this.favDoc.valueChanges();
          } else {
            this.favDoc = null;
            return [];
          }
        })
      )
      .subscribe((favData: FavData | undefined) => {
        if (favData) {
          this.favItems = Object.values(favData);
          this.favSubject.next(this.favItems);
        } else {
          this.favItems = [];
          this.favSubject.next([]);
        }
      });
  }

  getFavorites(): Observable<FavItem[]> {
    return this.favSubject.asObservable();
  }

  addToFavorites(product: Product) {
    if (!this.favItems.some((item) => item.id === product.id)) {
      this.favItems.push({ ...product, id: product.id ?? '' });
      this.updateFavorites();
    }
    // this.updateFavorites();
  }

  private updateFavorites() {
    this.favSubject.next([...this.favItems]);
    this.syncFavoritesWithFirestore();
  }

  private syncFavoritesWithFirestore() {
    if (this.favDoc) {
      const favData: FavData = {};
      this.favItems.forEach((item) => {
        favData[item.id] = item;
      });

      this.favDoc
        .set(favData)
        .then(() => console.log('Favorites synced with Firestore'))
        .catch((error) => console.error('Error syncing Favorites:', error));
    } else {
      console.warn('User not authenticated, cart not synced');
    }
  }

  // Fetch favorite items for the authenticated user
  getFavoriteItems(): Observable<any[]> {
    return this.favSubject.asObservable();
    // return this.authService.user$.pipe(
    //   switchMap((user) => {
    //     if (!user) {
    //       throw new Error('User not authenticated');
    //     }
    //     return this.firestore
    //       .collection(`users/${user.uid}/favorites`)
    //       .snapshotChanges()
    //       .pipe(
    //         map((actions) =>
    //           actions.map((a) => {
    //             const data = a.payload.doc.data();
    //             const id = a.payload.doc.id;
    //             return { id, ...(data as any) };
    //           })
    //         )
    //       );
    //   })
    // );
  }
  // getFavorites(): any[] {
  //   // جلب المنتجات المفضلة من localStorage
  //   const favorites = localStorage.getItem(this.localStorageKey);
  //   return favorites ? JSON.parse(favorites) : [];
  // }
  // Add to favorites method
  // addToFavorites(productId: string) {
  //   return this.authService.user$.pipe(
  //     map((user) => {
  //       if (!user) {
  //         throw new Error('User not authenticated');
  //       }
  //       const favoriteItem = { productId };
  //       return this.firestore
  //         .collection(`users/${user.uid}/favorites`)
  //         .add(favoriteItem);
  //     })
  //   );
  // }
  // addToFavorites(product: any): void {
  //   const currentFavorites = this.getFavorites();
  //   if (!currentFavorites.some((p) => p.id === product.id)) {
  //     currentFavorites.push(product); // إضافة المنتج للمفضلة
  //     localStorage.setItem(
  //       this.localStorageKey,
  //       JSON.stringify(currentFavorites)
  //     ); // تخزين المفضلة في localStorage
  //   }
  // }

  // Remove from favorites method
  removeFromFavorites(favoriteItemId: string) {
    return this.authService.user$.pipe(
      map((user) => {
        if (!user) {
          throw new Error('User not authenticated');
        }
        return this.firestore
          .doc(`users/${user.uid}/favorites/${favoriteItemId}`)
          .delete();
      })
    );
  }
  // removeFromFavorites(id: number): void {
  //   let currentFavorites = this.getFavorites();
  //   currentFavorites = currentFavorites.filter((product) => product.id !== id);
  //   localStorage.setItem(
  //     this.localStorageKey,
  //     JSON.stringify(currentFavorites)
  //   ); // تحديث المفضلة في localStorage
  // }

  // isFavorite(id: number): boolean {
  //   const currentFavorites = this.getFavoriteItems();
  //   return currentFavorites.some((product) => product.id === id);
  // }
}
