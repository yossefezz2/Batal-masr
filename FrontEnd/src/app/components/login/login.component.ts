import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
errMessage:string='';
constructor(private _AuthService:AuthService,private _Router:Router){}
  login:FormGroup=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  handelForm(){
    const userData=this.login.value
   if(this.login.valid){
    this._AuthService.login(userData).subscribe({
      next:(res)=>{
        if(res.apiStatus==true)
        localStorage.setItem('_token' ,res.data.token)

        this._Router.navigate(['/home'])
      },
      error:(err)=>{
          this.errMessage=err.error.data;
      }
    })
   }
    
  }
}