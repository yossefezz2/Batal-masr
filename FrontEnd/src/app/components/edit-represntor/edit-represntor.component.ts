import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-represntor',
  templateUrl: './edit-represntor.component.html',
  styleUrls: ['./edit-represntor.component.scss']
})
export class EditRepresntorComponent {
  constructor(private _AdminService:AdminService,
    private _ToastrService: ToastrService,
    private _Router:Router,
    private _ActivatedRoute:ActivatedRoute,){}
  errMessage:string='';
  agentId:any;
  editRepresntor:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required ,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required ,Validators.email]),
  })
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.agentId = params.get('id');
        console.log(this.agentId);
        
      }
    })
  }
  handelForm(){
    console.log(this.editRepresntor.value);
    
  }
}
