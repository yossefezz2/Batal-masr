import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-show-member',
  templateUrl: './show-member.component.html',
  styleUrl: './show-member.component.scss'
})
export class ShowMemberComponent {
  assosiationName:any=''
  Allmembers:any={}
  p:any
total :any
term:string=''
constructor(private _AdminService:AdminService,private _ActivatedRoute:ActivatedRoute ,private _ToastrService:ToastrService){}

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.assosiationName = params.get('id')
      
      
    }
  })
  this._AdminService.showMember(this.assosiationName).subscribe({
    next:(res)=>{
      this.Allmembers=res.data
      console.log(this.Allmembers);
      

    }
  })

  
}
pageChanged(eve: any) {
  console.log(eve);
  
  this.p=eve
}
deleteAgent(id:string){
  this._AdminService.deleteAgent(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._AdminService.getAllAgents().subscribe({
        next:(res)=>{
          this.Allmembers =res.data
          this._ToastrService.success('The Represntor has been deleted successfully');
  
        }
      })
  
    }
  
  })
  }

}
