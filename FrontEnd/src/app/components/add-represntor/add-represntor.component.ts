import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-represntor',
  templateUrl: './add-represntor.component.html',
  styleUrls: ['./add-represntor.component.scss']
})
export class AddRepresntorComponent {
  constructor(private _AdminService:AdminService,private _ToastrService: ToastrService,private _Router:Router){}
  errMessage:string=''
  addRepresntor:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required ,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required ,Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    association:new FormControl('',[Validators.required])
  
  })
  
  handelForm(){
    const userData= this.addRepresntor.value;
    if(this.addRepresntor.valid){
      this._AdminService.addAgentRepresentor(userData).subscribe({
        next:(res)=>{
      this._Router.navigate(['/MangeRepresntor'])
          this._ToastrService.success('The account has been added successfully');
          this.errMessage=''
          
        },error:(err)=>{
          console.log(err);
          this.errMessage=err.error.data
          
        }
      })
    }
  }

}
