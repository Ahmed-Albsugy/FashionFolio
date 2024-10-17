import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Register method
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Login method
  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw error; // Rethrow the error to be handled by the calling function
      });
  }

  // Logout method
  logout() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
