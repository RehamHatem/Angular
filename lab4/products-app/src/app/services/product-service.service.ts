import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Essence Mascara Lash Princess',
      price: 9.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
      inStock: true,
      rating: 4.94,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 2,
      name: 'Eyeshadow Palette with Mirror',
      price: 19.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
      inStock: true,
      rating: 3.28,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 3,
      name: 'Powder Canister',
      price: 14.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
      inStock: false,
      rating: 3.82,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 4,
      name: 'Red Lipstick',
      price: 12.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
      inStock: true,
      rating: 2.51,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 5,
      name: 'Red Nail Polish',
      price: 8.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png',
      inStock: true,
      rating: 3.91,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 6,
      name: 'Calvin Klein CK One',
      price: 49.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png',
      inStock: false,
      rating: 4.85,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 7,
      name: 'Chanel Coco Noir Eau De',
      price: 129.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png',
      inStock: true,
      rating: 2.76,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 8,
      name: "Dior J'adore",
      price: 89.99,
      imageUrl:
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
      inStock: false,
      rating: 3.31,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 9,
      name: 'Dolce Shine Eau de',
      price: 69.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png',
      inStock: true,
      rating: 2.68,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
    {
      id: 10,
      name: 'Gucci Bloom Eau de',
      price: 79.99,
      imageUrl:
        'https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png',
      inStock: true,
      rating: 2.69,
      description: 'ssssssssssssssss',
      oldPrice: 5,
    },
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
