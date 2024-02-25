import { Component } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-mange-assosiation',
  templateUrl: './mange-assosiation.component.html',
  styleUrls: ['./mange-assosiation.component.scss']
})
export class MangeAssosiationComponent {
constructor(private _AdminService:AdminService){}
allAgents:any={}


  ngOnInit(): void {
  this._AdminService.gatAssosiation().subscribe({
    next:(res)=>{
      console.log(res);
      this.allAgents =res.data
    }
  })
    
  }
  
  deleteAgent(id:string){
  this._AdminService.deleteAssosiation(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._AdminService.gatAssosiation().subscribe({
        next:(res)=>{
          this.allAgents =res.data
        }
      })
  
    }
  
  })
  }
}
