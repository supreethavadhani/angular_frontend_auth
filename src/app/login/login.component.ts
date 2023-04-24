import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService,private router:Router) { 
  }

  ngOnInit(): void {
    console.log(this.auth.isLoggedIn$)
  }

  submitClicked(){
    this.auth.login("User").subscribe(
      (data:any)=>{
        this.router.navigate(['dashboard'])
      }
    )
  }

}
