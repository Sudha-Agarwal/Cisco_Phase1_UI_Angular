import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  emailPattern = '^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$';

  RegisterationForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,
      Validators.pattern(this.emailPattern),emailDomainValidator]),
      password: new FormControl('', [Validators.required, 
        Validators.minLength(6)])
  });

  get f(){
    return this.RegisterationForm.controls;
  }

  submit(){
    console.table(this.RegisterationForm.value);    

  }
}


//custom validator
function emailDomainValidator(control:AbstractControl): ValidationErrors | null{
  let email = control.value;
  if(email && email.indexOf('@') !=-1){
    let[_,domain] = email.split("@");
    if(domain !== "gmail.com"){
      return{
        emailDomain:{
          parseDomain:domain
        }
      }
    }
  }
  return null;
}
