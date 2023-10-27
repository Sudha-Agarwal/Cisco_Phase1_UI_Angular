import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  title = 'Angular project';
  imgSrc = "../assets/download.png";
  isNotValid:boolean = false;
  externalLink = "https://example.com";
  displayText = "Property Binding";
  isActive:boolean = false;
  textColor = "green";
  fontSize = "20px";
  isHighlighted:boolean = true;
  hasError():boolean{
    return false;
  }
  buttonClicked(){
    alert("button clicked");
  }

  parentMessage = "Message from Parent";

  onMsgRcvd(event:string){
    alert(event);
  }

  //@ViewChild(HomeComponent) homeComponent!: HomeComponent;

  callChildMethod(){
    //this.homeComponent.childMethod();
  }

  products = [
    {id:1, description:'TV', stock:10},
    {id:2, description:'TV', stock:0},
    {id:3, description:'TV', stock:12},
    {id:4, description:'TV', stock:20}
  ];

  isInStock(product:any){
    return product.stock > 0;
    
  }

  condition = "A";
}
