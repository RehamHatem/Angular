import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product!:Product;
  constructor(private route: ActivatedRoute ,private productService: ProductServiceService) {}
  
  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.product = this.productService.getById(id)!;
}

}
