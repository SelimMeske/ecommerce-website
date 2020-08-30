import { Component, OnInit } from '@angular/core';
import { ProductObject } from '../interfaces/product-object';

@Component({
  selector: 'app-trending-home-section',
  templateUrl: './trending-home-section.component.html',
  styleUrls: ['./trending-home-section.component.sass']
})
export class TrendingHomeSectionComponent implements OnInit {

  productsCatOne: ProductObject[] = [
    { name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr1.jpg', discount: false },
    { name: 'Product Name', rating: 3, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr2.jpg', discount: false },
    { name: 'Product Name', rating: 1, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr3.jpg', discount: false }
  ]
  productsCatTwo: ProductObject[] = [
    { name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr3.jpg', discount: false },
    { name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr4.jpg', discount: true },
    { name: 'Product Name', rating: 4, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr5.jpg', discount: false }
  ]
  productsCatThree: ProductObject[] = [
    { name: 'Product Name', rating: 3, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr6.jpg', discount: false },
    { name: 'Product Name', rating: 3, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr7.jpg', discount: false },
    { name: 'Product Name', rating: 2, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr1.jpg', discount: false }
  ]
  productsCatFour: ProductObject[] = [
    { name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr5.jpg', discount: true },
    { name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr3.jpg', discount: false },
    { name: 'Product Name', rating: 2, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr8.jpg', discount: false }
  ]

  currentCategoryTab: number = 1;
  constructor() { }

  ngOnInit(): void {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', event => {
        tabs.forEach(tab => {
          if (tab.classList.contains('active')) {
            tab.classList.remove('active');
          }
        });
        let currentTab = event.target;
        (currentTab as HTMLDivElement).classList.add('active');
        this.currentCategoryTab = +(currentTab as HTMLDivElement).id; 
      });
    });
  }

}
