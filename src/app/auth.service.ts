import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://mm8bitdm-api-nodejs.herokuapp.com/api/register"
  private _loginUrl = "https://mm8bitdm-api-nodejs.herokuapp.com/api/login"
  private _submitUrl = "https://mm8bitdm-api-nodejs.herokuapp.com/api/submit"
  private _subtmitMatchUrl = "https://mm8bitdm.herokuapp.com/api/submitmatch"
  

  constructor(private http: HttpClient,private _router:Router) { }
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/matches'])
  }


  submitMatch(match){
    return this.http.post<any>(this._subtmitMatchUrl,match,
      {
        headers: new HttpHeaders({
             'Content-Type':  'application/json',
           })
      }
      
      
      )
  }

  getSubmitVerification(){
    return this.http.get<any>(this._submitUrl)
  }


}
