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
  private _stages = "http://127.0.0.1:8080/api/stages"

  constructor(private http:HttpClient,private _router:Router) { }
  getStages(){
    return this.http.get<any[]>(this._stages);
  }

  getStage(name:string){
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/stages/${name}`);
  }




}
