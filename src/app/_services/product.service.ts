import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/products1`);
  }
}
