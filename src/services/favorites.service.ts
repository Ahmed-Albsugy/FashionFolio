import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { map, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../app/models/product.model';

export interface FavItem extends Product {
  id: string;
  name: string;
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

  getFavoriteItems(): Observable<any[]> {
    return this.favSubject.asObservable();
  }

  toggleFavorite(product: Product) {
    this.isFavorite(product)
      .pipe(
        take(1) // Take only the first emission
      )
      .subscribe((isFav) => {
        if (isFav) {
          this.removeFavorite(product);
        } else {
          this.addToFavorites(product);
        }
      });
  }
  addToFavorites(product: Product) {
    if (!this.favItems.some((item) => item.id === product.id)) {
      this.favItems.push({ ...product, id: product.id ?? '' });
      this.updateFavorites();
    }
    this.updateFavorites();
  }

  removeFavorite(product: Product) {
    const index = this.favItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.favItems.splice(index, 1);
      this.updateFavorites();
    }
    this.updateFavorites();
  }

  isFavorite(product: Product): Observable<boolean> {
    return this.getFavoriteItems().pipe(
      map((favorites) => {
        return favorites.some((item) => item.id === product.id);
      })
    );
  }

  // Fetch favorite items for the authenticated user
}

// toggleFavorite(productId: string) {
//   const currentFavorites: FavItem[] = this.favSubject.value;
//   const updatedFavorites = currentFavorites.includes(product.id)
//     ? currentFavorites.filter((item) => item.id !== product.id)
//     : [...currentFavorites, product.id];

//   this.favSubject.next(updatedFavorites);
//   this.syncFavoritesWithFirestore(updatedFavorites);
// }

// private updateFavorites() {
//   this.favSubject.next([...this.favItems]);
//   this.syncFavoritesWithFirestore();
// }

// private syncFavoritesWithFirestore() {
//   if (this.favDoc) {
//     const favData: FavData = {};
//     this.favItems.forEach((item) => {
//       favData[item.id] = item;
//     });
//     this.favDoc
//       .set(favData)
//       .then(() => console.log('Favorites synced with Firestore'))
//       .catch((error) => console.error('Error syncing Favorites:', error));
//   } else {
//     console.warn('User not authenticated, favorites not synced');
//   }
// }

// Remove from favorites method
// removeFromFavorites(favItemId: string) {
//   return this.authService.user$.pipe(
//     map((user) => {
//       if (!user) {
//         throw new Error('User not authenticated');
//       }
//       return this.firestore
//         .doc(`users/${user.uid}/favorites/${favItemId}`)
//         .delete();
//     })
//   );
// }

// getFavorites(): Observable<FavItem[]> {
//   return this.favSubject.asObservable();
// }

// getFavoriteItems(): Observable<Product[]> {
//   // Assuming you have a user ID and a Firestore reference
//   const userId = this.getCurrentUserId(); // Implement this method to get the current user's ID
//   const favoritesRef = this.firestore.collection('users').doc(userId).collection('favorites');

//   return favoritesRef.snapshotChanges().pipe(
//     map(actions => actions.map(a => {
//       const data = a.payload.doc.data() as Product;
//       const id = a.payload.doc.id;
//       return { id, ...data };
//     }))
//   );
// }

// toggleFavorite(product: Product) {
//   if (this.isFavorite(product)) {
//     this.removeFavorite(product);
//   } else {
//     this.addToFavorites(product);
//   }
// }
