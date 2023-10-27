import { Component } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {email:'',password:''}
  constructor(private ds: DataService, private router:Router){}

  onSubmit(){
    //alert("submitted");
    alert(this.user.email + " " + this.user.password);
    this.ds.checkLogin(this.user).subscribe({
      next:data=>{alert(data.message);
        this.router.navigate(['./products-server']);

      },
      error: err=>alert(err.message)
    })

  }

}
