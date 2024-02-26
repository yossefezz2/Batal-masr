import { Component } from '@angular/core';
import { RepresntorService } from 'src/app/core/services/represntor.service';

@Component({
  selector: 'app-mange-player',
  templateUrl: './mange-player.component.html',
  styleUrls: ['./mange-player.component.scss']
})
export class MangePlayerComponent {
  allPlayers:any={}
constructor(private _RepresntorService:RepresntorService){}

ngOnInit(): void {
  this._RepresntorService.getAllPlayers().subscribe({
    next:(res)=>{      
      this.allPlayers = res.data;
      
    },error:(err)=>{
      console.log(err);
    }
  })
  
}

deletePlayer(id:string){
  this._RepresntorService.deletePlayer(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._RepresntorService.getAllPlayers().subscribe({
        next:(res)=>{
          this.allPlayers =res.data
        }
      })
  
    }
  
  })
  }
}
