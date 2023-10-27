import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../_services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  dropdownItems1 = [
  {text: 'Mobiles', routerLink:'products', queryParams:{category:'Mobile'}},
  {text: 'Laptops', routerLink:'products', queryParams:{category:'Laptop'}},
  {text: 'Tablets', routerLink:'products', queryParams:{category:'Tablet'}},
  {text: 'PC', routerLink:'products', queryParams:{category:'PC'}}
  ];

  dropdownItems = [
    {text: 'Mobiles', routerLink:'products-server', queryParams:{category:'Mobile'}},
    {text: 'Laptops', routerLink:'products-server', queryParams:{category:'Laptop'}},
    {text: 'Tablets', routerLink:'products-server', queryParams:{category:'Tablet'}},
    {text: 'PC', routerLink:'products-server', queryParams:{category:'PC'}}
    ];

  constructor(private sharedService:SharedDataService,
    private router:Router){}
isLoggedIn:boolean = true;

  ngOnInit(): void {
    this.sharedService.isLoggedIn$.subscribe(data =>{      
      this.isLoggedIn = data;
    })
    
  }

  logout(){
    alert("You will be logged out");
    this.sharedService.loggedOut();
    this.router.navigate(['/login']);
  }


}
