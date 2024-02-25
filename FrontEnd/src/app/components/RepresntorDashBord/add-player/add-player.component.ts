import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RepresntorService } from 'src/app/core/services/represntor.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  constructor(private _RepresntorService:RepresntorService,private _ToastrService: ToastrService,private _Router:Router){}

  errMessage:string='';
  isLoading:boolean=false;
   nameArray:any=[];
  addPlayer:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required ,Validators.minLength(4)]),
    birthOfDate:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required ]),
    height:new FormControl('',[Validators.required]),
    weight:new FormControl('',[Validators.required]),
    club:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
  
  })

  handelForm(){
    console.log(this.addPlayer.value);
    
  }
}
