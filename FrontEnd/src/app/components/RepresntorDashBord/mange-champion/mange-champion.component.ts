import { Component } from '@angular/core';
import { RepresntorService } from 'src/app/core/services/represntor.service';

@Component({
  selector: 'app-mange-champion',
  templateUrl: './mange-champion.component.html',
  styleUrls: ['./mange-champion.component.scss']
})
export class MangeChampionComponent {
  constructor(private _RepresntorService:RepresntorService){}
  allChampionships:any={}
  
  
    ngOnInit(): void {
    this._RepresntorService.getAllChampionships().subscribe({
      next:(res)=>{
        console.log(res);
        this.allChampionships =res.data
      }
    })
      
    }
    
    deletechampion(id:string){
    this._RepresntorService.deleteChampionships(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._RepresntorService.getAllChampionships().subscribe({
          next:(res)=>{
            this.allChampionships =res.data
          }
        })
    
      }
    
    })
    }
}