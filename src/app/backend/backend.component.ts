import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.sass']
})
export class BackendComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  addProduct(form: NgForm){
    this.mainService.addProduct(form.value.name, form.value.price);
  }
}
