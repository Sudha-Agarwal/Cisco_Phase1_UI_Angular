import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:3000";

  constructor(private http:HttpClient) { }
  headers:HttpHeaders;

  getProduct(category:string):Observable<Product[]>{
    this.headers  = new HttpHeaders()
    .set('content-type','application/json')
    .set('Accept','application/json')
    .set('Authorization','asstyr')
    .set('Access-Control-Allow-Origin','*');
    const params = new HttpParams().set("category",category);
    return this.http.get<Product[]>(`${this.url}/products`,{'headers': this.headers, 'params':params});
  }
}
