import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  basePath = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  public login(username:String){
    return this.http.post(this.basePath+'login',{"username":username})
  }
}
