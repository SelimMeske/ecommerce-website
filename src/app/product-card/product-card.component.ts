import { Component, OnInit, Input } from '@angular/core';
import { ProductObject } from '../interfaces/product-object';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductObject;

  constructor() { }

  ngOnInit(): void {
  }

  counter(number: number){
    return new Array(number);
  }

}
