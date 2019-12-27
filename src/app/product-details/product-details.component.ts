import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";
import { ProductService } from '../product.service';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.productService.getProduct(params.get('productId'))
        .subscribe(product => {
          this.product = product;
          console.log(this.product);
        });

    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }
}
