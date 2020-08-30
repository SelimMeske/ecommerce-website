import { Component, OnInit } from '@angular/core';
import { ProductObject } from '../interfaces/product-object';

@Component({
  selector: 'app-big-slider',
  templateUrl: './big-slider.component.html',
  styleUrls: ['./big-slider.component.sass']
})
export class BigSliderComponent implements OnInit {

  images = [
    { altText: 'slider-image', source: 'assets/p-1.jpg' },
    { altText: 'slider-image', source: 'assets/p-2.jpg' },
    { altText: 'slider-image', source: 'assets/p-3.jpg' }
  ]
  firstImage = false;
  constructor() { }

  ngOnInit(): void {
  
    setTimeout(() => {
      let imagesElements = document.querySelectorAll('.slider-image');
      
      setInterval(() => {
        for(let i = 0; i < imagesElements.length; i++) {
          if(imagesElements[i].classList.contains('active-image')){
            if(i === imagesElements.length-1){
              (imagesElements[i] as HTMLDivElement).classList.add('zindex-image');
              imagesElements[0].classList.add('active-image');
              this.removeActiveClass((imagesElements[i] as HTMLDivElement))
              break;
            }else {
              (imagesElements[i] as HTMLDivElement).classList.add('zindex-image');
              imagesElements[i+1].classList.add('active-image');
              this.removeActiveClass((imagesElements[i] as HTMLDivElement))
              break;
            }
          }
        }
      }, 4000);
    }, 100);



  }
  removeActiveClass(element: HTMLDivElement){
    setTimeout(() => {
      element.classList.remove('active-image');
      element.classList.remove('zindex-image');
    }, 1000);
  }
}
