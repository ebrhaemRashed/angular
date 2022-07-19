import { Component, OnInit } from '@angular/core';
import {faCartShopping} from  '@fortawesome/free-solid-svg-icons'
import {CartService} from "../../Services/cart.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartShopping = faCartShopping;
  cartCount:number = 0
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItemsCountStatus().subscribe(count => {
      this.cartCount = count;
    })
  }

}
