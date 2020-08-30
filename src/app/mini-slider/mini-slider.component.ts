import { Component, OnInit } from '@angular/core';
import { ProductObject } from '../interfaces/product-object';

@Component({
  selector: 'app-mini-slider',
  templateUrl: './mini-slider.component.html',
  styleUrls: ['./mini-slider.component.sass']
})
export class MiniSliderComponent implements OnInit {

  products: ProductObject[] = [
    {name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr1.jpg'},
    {name: 'Product Name', rating: 3, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr2.jpg'},
    {name: 'Product Name', rating: 1, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr3.jpg'},
    {name: 'Product Name', rating: 1, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr4.jpg'},
    {name: 'Product Name', rating: 4, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr5.jpg'},
    {name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr6.jpg'},
    {name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr7.jpg'},
    {name: 'Product Name', rating: 3, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr8.jpg'},
    {name: 'Product Name', rating: 3, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr4.jpg'},
    {name: 'Product Name', rating: 2, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr2.jpg'},
    {name: 'Product Name', rating: 5, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr5.jpg'},
    {name: 'Product Name', rating: 4, price: '28.99', altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr6.jpg'},
    ]

  constructor() { }

  ngOnInit(): void {
    //set slider width
    let slider = document.querySelector('.slider-wrap');
    let sliderWidth = this.products.length * 287.5;
    (slider as HTMLDivElement).style.width = sliderWidth + 'px';

    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let currentSliderPosition = 0;

    nextButton.addEventListener('click', (e) => {
      if(currentSliderPosition === (sliderWidth - (287.5 * 4))){
        return;
      }
      (prevButton as HTMLDivElement).style.opacity = '1';
      currentSliderPosition += 287.5;
      (slider as HTMLDivElement).style.transform = 'translateX('+(-currentSliderPosition)+'px)';
      this.showHideArrows(currentSliderPosition, sliderWidth, prevButton, nextButton);
    });
    prevButton.addEventListener('click', (e) => {
      if(currentSliderPosition === 0){
        return;
      }
      currentSliderPosition -= 287.5;
      (slider as HTMLDivElement).style.transform = 'translateX('+(-currentSliderPosition)+'px)';
      this.showHideArrows(currentSliderPosition, sliderWidth, prevButton, nextButton);
    });
    
  }

  showHideArrows(currentSlidePosition, sliderWidth, prevButton, nextButton){
    console.log(currentSlidePosition);
    if(currentSlidePosition === (sliderWidth - (287.5 * 4))){
      (nextButton as HTMLDivElement).style.opacity = '0';
    }else{
      (nextButton as HTMLDivElement).style.opacity = '1';
    }
    if(currentSlidePosition === 0) {
      (prevButton as HTMLDivElement).style.opacity = '0';;
    }
  }

}
