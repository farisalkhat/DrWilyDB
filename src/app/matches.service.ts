import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { concat, forkJoin } from 'rxjs';
import { AuthGuard } from './auth.guard';

export interface Match extends Document{
  _id:string;
  gametitle:string;
  gamemode:string;
  totalplayers:number;
  matchdate:string;
  matchid:number;
  stage:string;
  fraglimit:number,
  timelimit:string,
  winlimit:number,
  stageid:number
}

export interface rmMatch extends Document{
  _id:string;
  gametitle:string;
  gamemode:string;
  totalplayers:number;
  matchdate:string;
  matchid:number;
  stage:string;
  fraglimit:number,
  timelimit:string,
  winlimit:number,
  stageid:number
  image:string,
}



@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  
  matchDetails:any[]
  stagesDetails:any[]
  playedMatchDetails:any[]

  private _matchesUrl = "https://mm8bitdm-v2.herokuapp.com/api/matches"
  constructor(private http:HttpClient,private _router:Router,private authGuard:AuthGuard) { }
  getMatches(){
    return this.http.get<any[]>(this._matchesUrl);
  }

  getRandomMatch(){
    return this.http.get<rmMatch>("https://mm8bitdm-v2.herokuapp.com/api/randommatch");
  }

  getMostRecentMatch(){
    return this.http.get<Match>("https://mm8bitdm-v2.herokuapp.com/api/recentmatch");
  }


  


  getFilteredMatches(data){
    console.log(data)
    return this.http.get<any[]>('http://127.0.0.1:8080/api/matches/filtered');
  }

  deleteMatch(matchid){
    if (this.authGuard.canActivate()){
      return this.http.post<any>('https://mm8bitdm-v2.herokuapp.com/api/deletematch',matchid)
    }
    
  }

  getMatchDetails(matchid:string){
 
    return this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/matches/${matchid}`).pipe(
      map(res=>{
        this.matchDetails = res
        return res
      }),
      mergeMap(res=>{
        const stageData = this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/stages/stageid/${res['stage']}`);
        const playedMatchData = this.http.get<any[]>(`https://mm8bitdm-v2.herokuapp.com/api/playedmatch/${res['matchid']}`);
        return forkJoin([stageData,playedMatchData])
      })

    ).subscribe(res=>{
      this.stagesDetails=res[0]
      this.playedMatchDetails = res[1]
    })


    




    







     
    //return this.http.get<any[]>(`https://mm8bitdm-api-nodejs.herokuapp.com/api/matches/${matchid}`)
    //.pipe((mergeMap(
      //matchDetails=>this.http.get<any[]>(`https://mm8bitdm-api-nodejs.herokuapp.com/api/stages/${matchDetails['stage']}`))  
    //));
  }

  getStageDetails(stage:string){
    return this.http.get<any[]>(`https://mm8bitdm-api-nodejs.herokuapp.com/api/stages/${stage}`);
  }
  getPlayedMatchDetails(matchid:string){
    return this.http.get<any[]>(`https://mm8bitdm-api-nodejs.herokuapp.com/api/playedmatch/${matchid}`);
  }

}
