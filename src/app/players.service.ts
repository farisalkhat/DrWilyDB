import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


export interface MostPlayedRM{
icon:"",
id:1,
rmname:"",
total:1
}

export interface PlayerDetails{
  id:1,
  name:""
}

export interface MatchesTotal{
  DM:1,
  Duels:1,
  Matches:1,
  Series:1,
  TDM:1,
  TLMS:1
}



export interface PlayerTotals{
  avgPlacement:{"total":1},
  bestFrags:{"frags": 1,
  "icon": "",
  "id": 1,
  "matchid": 1},
  bestWins:{"icon": "",
  "id": 1,
  "matchid": 1,
  "wins": 1},
  favoriteMode:{"gamemode": "",
  "total": 1},
  favoriteRM:{"icon": "",
  "id": 1,
  "rmname": "",
  "total": 1},
  favoriteStage:{"id":1,"name":"","total",1},
  matches:{ "total": 1},
  totalFrags:{ "total": 1},
  totalLoss:{ "total": 1},
  totalWins:{ "total": 1},
  wlRatio:{"total": 1},
  worstFrags:{"frags": 1,
  "icon": "",
  "id": 1,
  "matchid": 1},


}

export interface Peers{
  LM:1,
  id,1,
  name:"",
  total:1
}

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  getPlayerTotals(player: String) {
    return this.http.get<PlayerTotals>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/totals`)
  }

  private _playersUrl = "https://mm8bitdm-ygo.herokuapp.com/api/players"
  constructor(private http:HttpClient,private _router:Router) { }
  getPlayers(){
    return this.http.get<any[]>(this._playersUrl);
  }
  getPlayer(player:string){
    return this.http.get<PlayerDetails>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}`)
  }

  getRecentMatches(player:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/recentmatches/${player}`)
  }

  getRecentDM(player:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/recentmatches/dm/${player}`)
  }

  getRecentDuels(player:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/recentmatches/duels/${player}`)
  }

  getMatchesTotals(player:string){
    return this.http.get<MatchesTotal>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/matchtotals`)
  }

  getMostPlayedRM(player: string) {
    return this.http.get<MostPlayedRM>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/mostplayedrm`)
  }

  get5MostPlayedRM(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/5mostplayedrm`)
  }

  getPlayerMatches(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/matches`)
  }

  getPlayerRM(player: string) {
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/robotmasters`)
  }


  getPeers(player: string) {
    return this.http.get<Peers[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/peers`)
  }

  getPeers5(player: string) {
    return this.http.get<Peers[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/peers5`)
  }


  getFragsChart(player:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/frags`)
  }


  getFragsRMChart(player:string,rid:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/${rid}/rm-frags`)
  }

  getPlayerRMMatches(player:string,rid:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/${rid}/matches`)
  }

  getPlayerGMMatches(player:string,gm:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/${gm}/gamemode-matches`)
  }

  getPlayerRMGMMatches(player:string,rid:string,gm:string){
    return this.http.get<any[]>(`https://mm8bitdm-ygo.herokuapp.com/api/players/${player}/${rid}/${gm}/filtered-matches`)
  }



}

