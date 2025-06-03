import { Component,  } from '@angular/core';
import { Product } from '../product';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductsCardComponent , CommonModule  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  products: Product[];
constructor(private productService: ProductServiceService){
  this.products = this.productService.getAll();
}

}
