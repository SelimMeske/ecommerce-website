import { Component, OnInit } from '@angular/core';
import { ImageObject } from '../interfaces/image-object';

@Component({
  selector: 'app-mini-slider',
  templateUrl: './mini-slider.component.html',
  styleUrls: ['./mini-slider.component.sass']
})
export class MiniSliderComponent implements OnInit {

  images: ImageObject[] = [
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr1.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr2.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr3.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr4.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr5.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr6.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr7.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr8.jpg'},
    {altText: 'mini-slider-image', source: 'assets/products for mini-slider/pr8.jpg'}

    ]

  constructor() { }

  ngOnInit(): void {
    //set slider width
    let slider = document.querySelector('.slider-wrap');
    (slider as HTMLDivElement).style.width = this.images.length * 287.5 + 'px';
  }

}
