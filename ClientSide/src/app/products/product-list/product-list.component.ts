import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array;

  constructor() { }

  ngOnInit() {
  }

}
