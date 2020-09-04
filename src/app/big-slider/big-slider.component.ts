import { Component, OnInit } from '@angular/core';

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

    let nextButton = document.querySelector('.bs-next');
    let prevButton = document.querySelector('.bs-prev');
    let imageElements = document.querySelectorAll('.slider-image');
    let dotElements = document.querySelectorAll('.dot');

    setTimeout(() => {
      
      

      setInterval(() => {
        for(let i = 0; i < imageElements.length; i++) {
          if(imageElements[i].classList.contains('active-image')){
            if(i === imageElements.length-1){
              (imageElements[i] as HTMLDivElement).classList.add('zindex-image');
              imageElements[0].classList.add('active-image');
              dotElements[0].classList.add('active-dot');
              this.removeActiveClass((imageElements[i] as HTMLDivElement));
              this.removeDotActiveClass((dotElements[i] as HTMLDivElement));
              break;
            }else {
              (imageElements[i] as HTMLDivElement).classList.add('zindex-image');
              imageElements[i+1].classList.add('active-image');
              dotElements[i+1].classList.add('active-dot');
              this.removeActiveClass((imageElements[i] as HTMLDivElement));
              this.removeDotActiveClass((dotElements[i] as HTMLDivElement));
              break;
            }
          }
        }
      }, 4000);
    }, 100);

    
    (nextButton as HTMLDivElement).addEventListener('click', event => {
      this.back(imageElements);
      
    });
  }
  removeActiveClass(element: HTMLDivElement){
    setTimeout(() => {
      element.classList.remove('active-image');
      element.classList.remove('zindex-image');
    }, 800);
  }
  removeDotActiveClass(dotElement: HTMLDivElement){
    setTimeout(() => {
      dotElement.classList.remove('active-dot');
    }, 50);
  }

  back(imagesElements){
    for(let i = 0; i < imagesElements.length; i++) {
      if(imagesElements[i].classList.contains('active-image')){
        if(i === 0){
          imagesElements[imagesElements.length-1].classList.add('active-image');
          this.removeActiveClass(imagesElements[i]);
        }else {
          imagesElements[i-1].classList.add('active-image');
          this.removeActiveClass(imagesElements[i]);
        }
      }
    }
  }

  next(imagesElements){
    for(let i = 0; i < imagesElements.length; i++) {
      if(imagesElements[i].classList.contains('active-image')){
        if(i === imagesElements.length-1){
          imagesElements[0].classList.add('active-image');
          this.removeActiveClass(imagesElements[i]);
        }else {
          imagesElements[i+1].classList.add('active-image');
          this.removeActiveClass(imagesElements[i]);
        }
      }
    }
  }
}
