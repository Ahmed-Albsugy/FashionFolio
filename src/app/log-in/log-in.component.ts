import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this.authService
        .login(email, password)
        .then(() => {
          console.log('Login successful');
          // Show a success message
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000, // 3 seconds
          });
          // Determine where to navigate next
          // Example: Redirect to the homepage
          this.router.navigate(['/our-product']); // or use '/dashboard', '/products', etc.
        })
        .catch((error) => {
          console.error('Login error:', error);

          // Show error message
          let errorMessage = 'Login failed. Please try again.';
          if (error.code === 'auth/user-not-found') {
            errorMessage = 'User not found. Please check your email.';
          } else if (error.code === 'auth/wrong-password') {
            errorMessage = 'Incorrect password. Please try again.';
          }

          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
          });
        });
    }
  }
}
