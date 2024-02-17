import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
myHeaders:any ={
  token: localStorage.getItem('_token')
}
baseUrl:string='http://localhost:3000'
  constructor(private _HttpClient:HttpClient) { }

  addAgentRepresentor(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +'/admin/representor/',userData,
    {
      headers:this.myHeaders
    }

    )
  }

  getAllAgents():Observable<any>{
    return this._HttpClient.get(this.baseUrl +'/admin/representor')
  }

  deleteAgent(id:string):Observable<any>{
   return this._HttpClient.delete(this.baseUrl + `/admin/representor/${id}`)
  }
}
