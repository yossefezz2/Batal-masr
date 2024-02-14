import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  login:FormGroup=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  handelForm(){

    console.log(this.login.value);
    
  }
}
