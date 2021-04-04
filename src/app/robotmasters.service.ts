import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
export interface RobotMaster extends Document{
  _id:string;
  name:string;
  origin:string;
  primaryclass:string;
  secondaryclass:string;
  icon:string;
  image:string;
}



@Injectable({
  providedIn: 'root'
})
export class RobotmastersService {

  private _robotmastersUrl = "https://mm8bitdm-v2.herokuapp.com/api/robotmasters"
  constructor(private http:HttpClient,private _router:Router) { }
  getRobotMasters(){
    return this.http.get<any[]>(this._robotmastersUrl);
  }

  getRobotMaster(robotmaster:string){
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/robotmasters/${robotmaster}`)
  }


}
