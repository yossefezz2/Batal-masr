import { Component } from '@angular/core';
import { MinistryService } from 'src/app/core/services/ministry.service';

@Component({
  selector: 'app-predicted-players',
  templateUrl: './predicted-players.component.html',
  styleUrl: './predicted-players.component.scss'
})
export class PredictedPlayersComponent {
  perdiction: any[] = [];
  players: any[] = [];
  sendallPlayersInfo: any[] = [];
  lastFiveYearsPlayerInfo: any[] = [];
  playerAge: any;

  constructor(private _MinistryService: MinistryService) {}

  ngOnInit() {
    this._MinistryService.perdiction$.subscribe(data => {
      this.perdiction = data;
      this.perdiction.sort((a, b) => b.prediction - a.prediction)
    });

    this._MinistryService.players$.subscribe(data => {
      if (data) {
        this.players = data;
        const predictionMap = new Map(this.perdiction.map((item, index) => [item.id, index]));
        this.players = this.players.sort((a, b) => {
          return (predictionMap.get(a.id) ?? 0) - (predictionMap.get(b.id) ?? 0);
        });

        
      }
      
    });


    this._MinistryService.sendallPlayersInfo$.subscribe(data => {
      this.sendallPlayersInfo = data;
    });

    this._MinistryService.lastFiveYearsPlayerInfo$.subscribe(data => {
      this.lastFiveYearsPlayerInfo = data;
    });
    console.log(this.perdiction);
    
    for (let i = 0; i < this.players.length; i++) {
      const birthDate = new Date(this.players[i].birthOfDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.players[i].birthOfDate = age;
    }

    console.log(this.perdiction,this.players);
    
  }
}
