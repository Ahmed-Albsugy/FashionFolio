import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


interface CartItem {
  price: number;
  quantity: number;}

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  imports: [
    CommonModule, MatFormFieldModule,MatButtonModule, MatDividerModule, MatIconModule
  ],
  standalone : true
})
export class CartSummaryComponent {

  @Input() subtotal: number = 0;

shipping: number = 0;
total: number = 0;

ngOnChanges(): void {
  this.calculateShippingAndTotal();
}

calculateShippingAndTotal(): void {
  this.shipping = this.subtotal > 500 ? 0 : 20; 
  this.total = this.subtotal + this.shipping;
}

  
}


