import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  private readonly TOKEN_NAME = "auth_token";
  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(){
    return localStorage.getItem(this.TOKEN_NAME) as string
  }

  set token(token:string){
    localStorage.setItem(this.TOKEN_NAME,token)
  }

  constructor(private httpService:HttpService, private rotuer:Router) {
    this._isLoggedIn$.next(!!this.token);
   }

  public login(username:string){
    return this.httpService.login(username).pipe(
      tap((response:any)=>{
        this._isLoggedIn$.next(true)
        this.token = response.token
      })
    )
  }

  public logout(){
    localStorage.clear();
    this._isLoggedIn$.next(false);
    this.rotuer.navigate(['login'])
  }
}
