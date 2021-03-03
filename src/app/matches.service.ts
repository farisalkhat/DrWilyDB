import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

export interface Match extends Document{
  _id:string;
  gametitle:string;
  gamemode:string;
  totalplayers:number;
  matchdate:string;
  matchid:number;
  stage:string;
}

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private _matchesUrl = "http://localhost:3000/api/matches/"
  constructor(private http:HttpClient,private _router:Router) { }
  getMatches(){
    return this.http.get<any[]>(this._matchesUrl);
  }
  getMatchDetails(matchid:string){
    return this.http.get<any[]>(`http://localhost:3000/api/matches/${matchid}`);
  }

  getStageDetails(stage:string){
    return this.http.get<any[]>(`http://localhost:3000/api/stages/${stage}`);
  }
  getPlayedMatchDetails(matchid:string){
    return this.http.get<any[]>(`http://localhost:3000/api/playedmatch/${matchid}`);
  }

}
