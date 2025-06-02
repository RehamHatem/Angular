import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[];
   constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems();
  }

}
