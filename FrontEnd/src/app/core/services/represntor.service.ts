import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepresntorService {
  baseUrl:string='http://localhost:3000'
  constructor(private _HttpClient:HttpClient) { }

  getAllPlayers():Observable<any>{
    return this._HttpClient.get(this.baseUrl + '/representor/player')
  }
  addPlayer(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + '/representor/player',userData)
  }
}
