import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
baseUrl:string='http://localhost:3000'
  constructor(private _HttpClient:HttpClient) { }

  addAgentRepresentor(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +'/admin/representor/',userData)
  }

  getAllAgents():Observable<any>{
    return this._HttpClient.get(this.baseUrl +'/admin/representor')
  }

  deleteAgent(id:string):Observable<any>{
   return this._HttpClient.delete(this.baseUrl + `/admin/representor/${id}`)
  }

  updateAgent(id:string,item:any):Observable<any>{
    return this._HttpClient.put(this.baseUrl+`/admin/representor/${id}`,{
      item:item
    })
  }

  gatAgentsOfMinistry():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'/admin/agent')
  }

  deleteAgentOfMinistry(id:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `/admin/agent/${id}`)
   }

   addAgentofMinistry(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +'/admin/agent/',userData)
  }
}
