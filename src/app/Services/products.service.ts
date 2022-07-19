import { Injectable } from '@angular/core';
import productsData from '/src/assets/products.json';
import {IProduct} from "../ViewModels/iproduct";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) {
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');
  }

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`https://fakestoreapi.com/products/` + id);
  }
}
