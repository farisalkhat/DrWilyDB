import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
export interface Stage extends Document{
  _id:string;
  name:string;
  origin:string;
  image:string;
}

@Injectable({
  providedIn: 'root'
})
export class StagesService {
  private _stages = "http://localhost:3000/api/stages"

  constructor(private http:HttpClient,private _router:Router) { }
  getStages(){
    return this.http.get<any[]>(this._stages);
  }

  getStage(name:string){
    return this.http.get<any[]>(`http://localhost:3000/api/stages/${name}`);
  }


}