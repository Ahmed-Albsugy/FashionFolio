import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afAuth.user;
        } else {
          return of(null);
        }
      })
    );
  }

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
      this.router.navigate(['../log-in']);
    });
  }
  get isAuthenticated$(): boolean {
    return this.user$ !== null;
  }
}
