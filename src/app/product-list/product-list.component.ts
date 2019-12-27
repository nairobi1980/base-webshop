import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  filteredProducts: [];

  type = 'all';

  public options = [
    {value: 'all', id: 'All  '},
    {value: 'red', id: 'Red'},
    {value: 'white', id: 'White'},
    {value: 'rose', id: 'Rose'}
  ];

  constructor(private productService: ProductService){

  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/