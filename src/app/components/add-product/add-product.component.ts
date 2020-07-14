import { Component, OnInit } from '@angular/core';
import { Product }  from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  p:Product = {
    Pid: null,
    Pname: '',
    Price: null,
    Stock: ''
  }

  constructor() { 

  }

  ngOnInit(): void {

  }

  createProduct(id: number, name:string, price:number, stock:string){
    this.p.Pid = id; this.p.Pname=name; this.p.Price=price; this.p.Stock=stock;
    console.log(JSON.stringify(this.p));    
    localStorage.setItem(
      'products', 
      JSON.stringify(this.p));
  }

}
