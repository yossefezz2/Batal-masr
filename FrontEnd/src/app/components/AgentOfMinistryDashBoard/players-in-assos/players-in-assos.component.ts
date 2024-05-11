import { Component } from '@angular/core';
import { MinistryService } from 'src/app/core/services/ministry.service';

@Component({
  selector: 'app-players-in-assos',
  templateUrl: './players-in-assos.component.html',
  styleUrls: ['./players-in-assos.component.scss']
})
export class PlayersInAssosComponent {
  allPlayers:any={}
  constructor(private _MinistryService:MinistryService){}
  ngOnInit(): void {
    this._MinistryService.getAllPlayersInAssos().subscribe({
      next:(res)=>{
        this.allPlayers = res.data;
        console.log(res);    
        }
    })



  }


}
