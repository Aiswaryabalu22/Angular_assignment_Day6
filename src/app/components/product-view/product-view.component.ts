import { Component, OnInit } from '@angular/core';
import { Product }  from '../../models/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    this.product = JSON.parse(localStorage.getItem('products'));
  }

}
