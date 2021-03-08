import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private _playersUrl = "http://localhost:3000/api/players"
  constructor(private http:HttpClient,private _router:Router) { }
  getPlayers(){
    return this.http.get<any[]>(this._playersUrl);
  }
  getPlayer(player:string){
    return this.http.get<any[]>(`http://localhost:3000/api/players/${player}`)
  }
}
