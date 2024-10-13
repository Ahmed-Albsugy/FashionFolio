import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            CustomValidators.patternValidator(/\d/, { hasNumber: true }),
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true,
            }),
            CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
            CustomValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
              hasSpecialCharacters: true,
            }),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: CustomValidators.passwordMatchValidator,
      }
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
      // Implement your signup logic here
    } else {
      this.markFormGroupTouched(this.signupForm);
    }
  }

  // Helper method to mark all fields as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Getter methods for form controls
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get phone() {
    return this.signupForm.get('phone');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
