import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  newsletterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubscribe() {
    if (this.newsletterForm.valid) {
      console.log('Subscribed with email:', this.newsletterForm.value.email);
      // newsletter subscription logic
      this.newsletterForm.reset();
    }
  }
}
