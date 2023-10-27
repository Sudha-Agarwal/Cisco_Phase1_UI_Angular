import { Component } from '@angular/core';
import { Product } from '../_model/product.model';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Product[] = [{id:1, name:'Product1',description:'Description1',category:'Mobile'},
  {id:2, name:'Product2',description:'Description2',category:'Mobile'},
  {id:3, name:'Product3',description:'Description3',category:'Mobile'},
  {id:4, name:'Product4',description:'Description4',category:'Mobile'},
  {id:5, name:'Product5',description:'Description5',category:'Mobile'},
  {id:6, name:'Product6',description:'Description6',category:'Mobile'},
  {id:7, name:'Product7',description:'Description7',category:'Mobile'},
];

   //dependency injection 
constructor(private router:Router, private ds:DataService){}

  title = "Products";
  toggle = true;

  toggleVisibility()
  {
    if(this.toggle){
      this.toggle = false;}
    else{
      this.toggle = true;
      
    }
  }

  backToHome(){
    this.ds.showData();
    this.router.navigate(['/home']);
  }

  selectedProduct:Product;
  showEditProduct:boolean = false;
  showEditForm(product:Product){
    this.selectedProduct = Object.assign({},product);
    this.showEditProduct = true
  }

  update(product:Product){
    var target = this.products.find(e => e.id === product.id);
    Object.assign(target,product);
    this.showEditProduct = false;

  }

}
