import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup } from '@angular/forms';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class PaymentComponent {
  @Input() subtotal: number = 0;
  @Input() shipping: string = '';
  @Input() total: number = 0;
  @Output() placeOrder = new EventEmitter<void>();

  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.paymentForm = this.fb.group({
      paymentMethod: ['cash', Validators.required],
      couponCode: [''],
    });
  }

  onPlaceOrder() {
    this.router.navigate(['/success']);
    // if (this.paymentForm.valid) {
    //   this.placeOrder.emit();
    // }
  }
}
