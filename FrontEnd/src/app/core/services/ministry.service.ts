import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinistryService {
  baseUrl: string = 'http://localhost:3000'
  constructor(private _HttpClient:HttpClient) { }

  getAllPlayersInAssos(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + '/agent/playerInfo/getAllPlayersInSingleInAllProject')
  }
  getAllAgentsOfMinistry(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + '/agent/associationInfo/getAllAssociation')
  }
  getPlayerDetails(playerID:string,AssosID:string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/agent/playerInfo/getAllPlayerDetails/${playerID}/${AssosID}`)
  }
  
}
