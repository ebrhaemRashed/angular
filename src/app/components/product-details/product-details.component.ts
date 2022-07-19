import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../ViewModels/iproduct";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../Services/products.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:IProduct | undefined;

  constructor(private activatedRouteService:ActivatedRoute, private products:ProductsService) { }

  ngOnInit(): void {
      this.products.getProductById(Number(this.activatedRouteService.snapshot.paramMap.get('id'))).subscribe(product => {
        this.product = product;
      });
  }

}
