import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HeaderComponent } from './components/header/header.component';
import {StarRatingModule} from "angular-star-rating";
import { FractionPipe } from './Pipes/fraction.pipe';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { CartComponent } from './components/cart/cart.component';
import { CountPipe } from './Pipes/count.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    HeaderComponent,
    FractionPipe,
    RegisterComponent,
    LoginComponent,
    NotFoundPageComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    CartComponent,
    CountPipe
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
