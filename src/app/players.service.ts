import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  getPlayerTotals(player: String) {
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/totals`)
  }


  private _playersUrl = "http://127.0.0.1:8080/api/players"
  constructor(private http:HttpClient,private _router:Router) { }
  getPlayers(){
    return this.http.get<any[]>(this._playersUrl);
  }
  getPlayer(player:string){
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}`)
  }

  getRecentMatches(player:string){
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/recentmatches/${player}`)
  }

  getRecentDM(player:string){
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/recentmatches/dm/${player}`)
  }

  getRecentDuels(player:string){
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/recentmatches/duels/${player}`)
  }

  getMatchesTotals(player:string){
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/matchtotals`)
  }

  getMostPlayedRM(player: string) {
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/mostplayedrm`)
  }

  get5MostPlayedRM(player: string) {
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/5mostplayedrm`)
  }

  getPlayerMatches(player: string) {
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/matches`)
  }

  getPlayerRM(player: string) {
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/robotmasters`)
  }


  getPeers(player: string) {
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/peers`)
  }

  getPeers5(player: string) {
    return this.http.get<any[]>(`http://127.0.0.1:8080/api/players/${player}/peers5`)
  }


}

