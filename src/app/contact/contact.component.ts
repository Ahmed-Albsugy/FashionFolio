import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Here you would typically send the form data to your backend
      console.log(this.contactForm.value);
      this.snackBar.open('Message sent successfully!', 'Close', {
        duration: 3000,
      });
      this.contactForm.reset();
    }
  }

  getErrorMessage(field: string): string {
    if (this.contactForm.get(field)?.hasError('required')) {
      return 'This field is required';
    }
    if (this.contactForm.get(field)?.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (this.contactForm.get(field)?.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    if (this.contactForm.get(field)?.hasError('minlength')) {
      return 'Message must be at least 10 characters long';
    }
    return '';
  }
}
