import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsCollection = this.firestore.collection<Product>('products');
  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  // Method to load products from JSON file and add them to Firestore
  loadProductsFromJson(jsonFilePath: string): Observable<any> {
    return this.http.get<Product[]>(jsonFilePath);
  }

  // Add product to Firestore
  addProduct(product: Product): Promise<any> {
    return this.productsCollection.add(product);
  }
  // Get all products
  getProducts(): Observable<Product[]> {
    return this.productsCollection.valueChanges({ idField: 'id' });
  }

  // Update an existing product
  updateProduct(id: string, product: Product): Promise<void> {
    return this.productsCollection.doc(id).update(product);
  }

  // Delete a product
  deleteProduct(id: string): Promise<void> {
    return this.productsCollection.doc(id).delete();
  }
}
