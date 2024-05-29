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
AssosiationArray: any = [];
term:string=''
p:any
total :any
ngOnInit(): void {
this._AdminService.getAllAgents().subscribe({
  next:(res)=>{
    console.log(res);
    this.allAgents =res.data
    let nameArray: any = [];
    for (let i = 0; i < this.allAgents.length; i++) {
     nameArray.push(this.allAgents[i].associationName)
     
    }
    this.AssosiationArray=this.removeDuplicates(nameArray)
    console.log(this.AssosiationArray);
    console.log(this.term);
    
  },
  
  
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
        this.allAgents =res.data
      }
    })

  }

})
}
 removeDuplicates<T>(array: T[]): T[] {
  return array.filter((item, index) => array.indexOf(item) === index);
}


}
