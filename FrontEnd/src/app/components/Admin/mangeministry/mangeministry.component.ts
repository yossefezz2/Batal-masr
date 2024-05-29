import { Component } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-mangeministry',
  templateUrl: './mangeministry.component.html',
  styleUrls: ['./mangeministry.component.scss']
})
export class MangeministryComponent {
  constructor(private _AdminService:AdminService){}
  allAgents:any={}
  p:any
  total :any
  term:string=''

  ngOnInit(): void {
    this._AdminService.gatAgentsOfMinistry().subscribe({
      next:(res)=>{
        console.log(res);
        this.allAgents =res.data
      }
    })
      
    }
    pageChanged(eve: any) {
      console.log(eve);
      
      this.p=eve
    }
    deleteAgent(id:string){
    this._AdminService.deleteAgentOfMinistry(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._AdminService.gatAgentsOfMinistry().subscribe({
          next:(res)=>{
            this.allAgents =res.data
          }
        })
    
      }
    
    })
    }
}
