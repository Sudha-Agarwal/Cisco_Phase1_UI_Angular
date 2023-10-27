import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownItems = [
  {text: 'Mobiles', routerLink:'products', queryParams:{category:'Mobile'}},
  {text: 'Laptops', routerLink:'products', queryParams:{category:'Laptop'}},
  {text: 'Tablets', routerLink:'products', queryParams:{category:'Tablet'}},
  {text: 'PC', routerLink:'products', queryParams:{category:'PC'}}
  ]
}
