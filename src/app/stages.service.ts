import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
export interface Stage extends Document{
  _id:string;
  name:string;
  origin:string;
  image:string;
}
 
export interface StageDetails{
  best_fragger:{"name":1,"playerid":1,"total":1};
  best_loser:{"name":1,"playerid":1,"total":1};
  best_winner:{"name":1,"playerid":1,"total":1};
  favorite_player:{"name":1,"playerid":1,"total":1};
  favorite_players:[],
  last_match:{"gamemode": "",
      "gametitle": "",
      "matchdate": "",
      "matchid": 1,
      "stage": "",
      "stageid": 1,
      "totalplayers": 1},
  matches:[],
  most_popular_mode: {
    "gamemode": "",
    "total": 1
  },
  most_popular_rm: {
      "matchesplayed": 1,
      "rid": 1,
      "robotmaster": ""
  },
  most_popular_rms: [
      {
          "matchesplayed": 1,
          "robotmaster": ""
      }
  ],
  stage: {
      "id": 1,
      "image": "",
      "name": "",
      "origin": ""
  },
  top_fragger: {
      "frags": 1,
      "matchid": 1,
      "name": "",
      "playerid": 1,
      "robotmaster": ""
  },
  top_fraggers_ordered: [
      {
          "frags": 1,
          "icon": "",
          "id": 1,
          "matchid": 1,
          "name": "Faris",
          "playerid": 1,
          "robotmaster": ""
      }
  ],
total_frags: {
      "total": 1
  },
  total_matches: {
      "total": 1
  },
  worst_fragger: {
      "frags": 1,
      "matchid": 1,
      "name": "",
      "playerid": 1,
      "robotmaster": ""
  }

  

}


@Injectable({
  providedIn: 'root'
})
export class StagesService {
  private _stages = "https://mm8bitdm-v2.herokuapp.com/api/stages"

  constructor(private http:HttpClient,private _router:Router) { }
  getStages(){
    return this.http.get<any[]>(this._stages);
  }

  getStage(name:string){
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/stages/${name}`);
  }




}
