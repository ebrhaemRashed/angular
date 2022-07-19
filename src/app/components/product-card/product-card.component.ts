import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IProduct} from "../../ViewModels/iproduct";
import {CartService} from "../../Services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!:IProduct;
  constructor(private cartService:CartService) {
  }

  ngOnInit(): void {

  }

  addItemToCart() {
    this.cartService.addItem(this.product);
  }
}
