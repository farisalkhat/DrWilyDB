import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
export interface RobotMaster extends Document{
  id:string;
  name:string;
  origin:string;
  primaryclass:string;
  secondaryclass:string;
  icon:string;
  image:string;
  damage:string;
  durability:string;
  mobility:string;
  utility:string;
  difficulty:string;
}

export interface RobotmasterDetails{
      avg_placement: {
        "avgplacement": 1
    },
    best_performance: {
        "frags": 1,
        "matchid": 1,
        "name": "",
        "playerid": 1
    },
    favorite_player: {
        "id": 1,
        "name": "",
        "total": 1
    },
    matches: [
        {
            "gamemode": "",
            "gametitle": "!",
            "matchdate": "",
            "matchid": 1,
            "totalplayers": 1
        }
    ],
    most_popular_mode: {
        "gamemode": "",
        "total": 1
    },
    most_popular_stage: {
        "id": 1,
        "stage": "",
        "total": 1
    },
    mostfrags: [
        {
            "frags": 1,
            "matchid": 1,
            "name": ""
        }
    ],
    playersplayed: [
        {
            "id": 1,
            "name": "",
            "total": 1
        }
    ],
    robotmaster: {
        "icon": "",
        "id": 1,
        "image": "",
        "name": "",
        "origin": "",
        "primaryclass": "",
        "secondaryclass": ""
    },
    total_frags: {
        "totalfrags": 1
    },
    total_loss: {
        "totalloss": 1
    },
    total_matches: {
        "total": 1
    },
    total_wins: {
        "totalwins": 99
    },
    worst_performance: {
        "frags": 1,
        "matchid": 1,
        "name": "",
        "playerid": 1
    }
}


@Injectable({
  providedIn: 'root'
})
export class RobotmastersService {
  getDailyRM() {
    return this.http.get<RobotMaster>('https://mm8bitdm-v2.herokuapp.com/api/dailyrm')
  }

  private _robotmastersUrl = "https://mm8bitdm-v2.herokuapp.com/api/robotmasters"
  constructor(private http:HttpClient,private _router:Router) { }
  getRobotMasters(){
    return this.http.get<any[]>(this._robotmastersUrl);
  }

  getRobotMaster(robotmaster:string){
    return this.http.get<RobotmasterDetails>(`https://mm8bitdm-v2.herokuapp.com/api/robotmasters/${robotmaster}`)
  }


}
