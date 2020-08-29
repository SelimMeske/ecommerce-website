import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products: Object[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getProducts().subscribe(products => {
      console.log('dobro')
      this.products = products;
    });
  }

}
