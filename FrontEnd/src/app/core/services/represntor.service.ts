import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepresntorService {
  baseUrl: string = 'http://localhost:3000'
  constructor(private _HttpClient: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + '/representor/player')
  }
  addPlayer(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + '/representor/player', userData)
  }

  deletePlayer(id: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `/representor/player/${id}`)
  }

  getSinglePlayer(id: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/representor/player/${id}`)
  }

  updatePlayer(id: string, item: any): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `/representor/player/${id}`, item)
  }

  addChampion(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + '/representor/championship', userData)
  }

  getAllChampionships(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + '/representor/championship')
  }

  deleteChampionships(id: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `/representor/championship/${id}`)
  }
  
  getSingleChampionship(id: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/representor/championship/${id}`)
  }

  editChampionship(id: any,item: any): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `/representor/championship/${id}`, item)
  }
}
