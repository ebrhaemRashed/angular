import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {CartComponent} from "./components/cart/cart.component";
import {AuthGuard} from "./Guards/auth.guard";

const routes: Routes = [
  {path: "", component: MainLayoutComponent, children: [
      {path: "products", component: ProductsListComponent},
      {path: "", redirectTo: "products", pathMatch: "full"},
      {path: "products/:id", component: ProductDetailsComponent},
      {path: "cart", component: CartComponent, canActivate: [AuthGuard]},
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
    ]},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
