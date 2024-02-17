import { Component } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
@Component({
  selector: 'app-mange-represntor',
  templateUrl: './mange-represntor.component.html',
  styleUrls: ['./mange-represntor.component.scss']
})
export class MangeRepresntorComponent {
constructor(private _AdminService:AdminService){}
allAgents:any={}


ngOnInit(): void {
this._AdminService.getAllAgents().subscribe({
  next:(res)=>{
    console.log(res);
    this.allAgents =res.data
  }
})
  
}

deleteAgent(id:string){
this._AdminService.deleteAgent(id).subscribe({
  next:(res)=>{
    console.log(res);
    this._AdminService.getAllAgents().subscribe({
      next:(res)=>{
        this.allAgents =res.data
      }
    })

  }

})
}
}
