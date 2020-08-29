import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      
      link.addEventListener('mouseenter', (e) => {
        let parent = (e.target as HTMLDivElement).parentElement;
        let underline = parent.querySelector('.underline');
        (parent as HTMLDivElement).style.alignItems = 'flex-start';
        (underline as HTMLDivElement).style.width = '100%';
        
      });

      link.addEventListener('mouseleave', (e) => {
        let parent = (e.target as HTMLDivElement).parentElement;
        let underline = parent.querySelector('.underline');
        let underlineWidth = (e.target as HTMLDivElement).clientWidth;
        (parent as HTMLDivElement).style.alignItems = 'flex-end';
        (underline as HTMLDivElement).style.width = '0px';
      });
    });
  }

}
