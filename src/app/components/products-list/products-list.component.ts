import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../Services/products.service";
import {IProduct} from "../../ViewModels/iproduct";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsOfCategory:IProduct[];
  constructor(private productsService:ProductsService) {
    this.productsOfCategory = [];
  }

  ngOnInit(): void {
     this.productsService.getAllProducts().subscribe(products => {
      this.productsOfCategory = products;
    });
  }


}
