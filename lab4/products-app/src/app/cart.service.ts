import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
    console.log(`${product.name} added to cart`);
  }

  getItems(): Product[] {
    return this.items;
  }

  
}