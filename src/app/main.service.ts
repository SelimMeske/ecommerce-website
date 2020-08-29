import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private productsSubjects = new Subject<Object[]>();
  private products: Object[] = [];

  constructor() { }

  addProduct(name: string, price: string){
    
    let product = {name: name, price: price};
    this.products.push(product);
    this.productsSubjects.next(this.products);
  }

  getProducts(){
    return this.productsSubjects.asObservable();
  }
}
