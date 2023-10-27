import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';
import { DataService } from '../_services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-server',
  templateUrl: './product-server.component.html',
  styleUrls: ['./product-server.component.css']
})
export class ProductServerComponent implements OnInit{

  products:Product[];
  
  constructor(private productService:ProductService,
    private ds:DataService, private router:Router,
    private route:ActivatedRoute){}
category:string;

  ngOnInit(): void {
    this.getdata();
    
  }

  getdata(){
    this.route.queryParams.subscribe(params =>
      this.category = params['category']);
      alert(this.category);

    this.productService.getProduct(this.category).subscribe({
      next:data=> this.products = data,
      error:err=>alert(err),
      complete:()=>console.log("complete")
    });

  }

  
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
