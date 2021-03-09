import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { concat, forkJoin } from 'rxjs';

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
  
  matchDetails:any[]
  stagesDetails:any[]
  playedMatchDetails:any[]

  private _matchesUrl = "https://mm8bitdm-api-nodejs.herokuapp.com/api/matches/"
  constructor(private http:HttpClient,private _router:Router) { }
  getMatches(){
    return this.http.get<any[]>(this._matchesUrl);
  }



  getMatchDetails(matchid:string){

    return this.http.get<any[]>(`https://mm8bitdm-api-nodejs.herokuapp.com/api/matches/${matchid}`).pipe(
      map(res=>{
        this.matchDetails = res
        return res
      }),
      mergeMap(res=>{
        const stageData = this.http.get<any[]>(`https://mm8bitdm-api-nodejs.herokuapp.com/api/stages/${res['stage']}`);
        const playedMatchData = this.http.get<any[]>(`https://mm8bitdm-api-nodejs.herokuapp.com/api/playedmatch/${res['matchid']}`);
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
