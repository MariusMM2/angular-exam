import {Injectable} from '@angular/core';
import {Product} from '../entities/product';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];

  constructor() {
    this.products = this.debugProducts();
  }

  addProduct(product: Product): void {
    product._id = uuid();
    this.products.push(product);
    console.log(this.products);
  }

  getProduct(id: string): Product {
    return this.products.find(product => product._id === id);
  }

  getProducts(): Product[] {
    return this.products;
  }
  
  // removeProduct(id: string): Product {
  //   return this.products.
  // }

  updateProduct(product: Product) {
    const index: number = this.products.findIndex(thatProduct => thatProduct._id === product._id);
    if (index > -1) {
      this.products.splice(index, 1, product);
    } else {
      throw new RangeError("Index out of range: " + index);
    }
  }

  private debugProducts(): Product[] {
    return [
      {
        _id: uuid(),
        name: 'First Product',
        description: 'Descpription 1',
        price: 101
        // price: {
        //   value: 100,
        //   currency: 'DKK'
        // }
      },
      {
        _id: uuid(),
        name: 'Second Product',
        description: 'Descpription 1',
        price: 102
      },
      {
        _id: uuid(),
        name: 'Third Product',
        description: 'Descpription 1234',
        price: 103
      },
      {
        _id: uuid(),
        name: 'Third Product 123',
        description: 'Descpription 123412312 3123 1  f8fsdf sasdfsd gg dsg sdg sdawe gfrs8dfds ',
        price: 104
      },
    ];
  }
}
