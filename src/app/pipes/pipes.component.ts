import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{
  name:string = "sudha";
  amount = 30;
  date:Date = new Date();
products$:Observable<Product[]>;

  constructor(private productservice:ProductService){}

  ngOnInit(): void {
    this.products$ = this.productservice.getProduct("Laptop");
    
  }

}
