import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

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

}
