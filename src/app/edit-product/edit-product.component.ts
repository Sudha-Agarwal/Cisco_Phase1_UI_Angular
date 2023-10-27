import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() product: Product;
  @Output() productChange:EventEmitter<Product> = new EventEmitter<Product>();

  update(){
    this.productChange.emit(this.product);
    alert("product updated");


  }
  

}
