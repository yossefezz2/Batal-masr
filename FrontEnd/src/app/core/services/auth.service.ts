import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseURL:string='http://localhost:3000/'
  constructor(private _HttpClient:HttpClient) { }
  login(userData:object):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/login`,userData)
  }
}
