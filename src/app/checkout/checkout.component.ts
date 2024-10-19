import { Component, OnInit } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { MatStepperModule } from '@angular/material/stepper';
import { PaymentComponent } from './payment/payment.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [
    AddressComponent,
    PaymentComponent,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class CheckoutComponent implements OnInit {
  subtotal = 0;
  shipping = 0;
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // this.cartService.cartTotal$.subscribe(cartTotal => {
    //   this.subtotal = cartTotal.subtotal;
    //   this.shipping = cartTotal.shipping;
    //   this.total = cartTotal.total;
    // });
  }

  placeOrder() {
    // Implement order placement logic here
  }

  onSubmit() {
    // if (this.checkoutForm.valid) {
    //   console.log(this.checkoutForm.value);
    // Proceed with form submission
  }
}
