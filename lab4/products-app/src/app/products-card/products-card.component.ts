import { Component ,Input } from '@angular/core';
import { Product} from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {
  constructor(private cartService: CartService){}

  @Input() product!: Product;
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
