import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {Match,MatchesService} from '../matches.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
}) 
export class MatchdetailsComponent implements OnInit {
  matchid: string;
  stage:string;

  lol = true;

  matchDetails: Match[];
  stageDetails: any[];
  playedMatchDetails: any[];

  constructor(private http: HttpClient, private matchesService: MatchesService, private route: ActivatedRoute) {
    this.getMatchDetails() 
  }

  ngOnInit() {
  }

  getMatchDetails(){
    this.route.paramMap.subscribe((paramMap)=>{
      this.matchid = paramMap.get('matchid');

      this.http.get<any[]>(`http://localhost:3000/api/matches/${this.matchid}`).pipe(
      map(res=>{
        this.matchDetails = res
        return res
      }),
      mergeMap(res=>{
        const stageData = this.http.get<any[]>(`http://localhost:3000/api/stages/${res['stage']}`);
        const playedMatchData = this.http.get<any[]>(`http://localhost:3000/api/playedmatch/${res['matchid']}`);
        return forkJoin([stageData,playedMatchData])
      })

    ).subscribe(res=>{
      this.stageDetails=res[0]
      this.playedMatchDetails = res[1]

    })




      
    })
  }

  getStageDetails(){
    this.matchesService.getStageDetails(this.stage).subscribe(
      data=>{
        this.stageDetails = data; 
        console.log(this.stageDetails)
      }
    )
  }

  getPlayedMatchDetails(){
    this.matchesService.getPlayedMatchDetails(this.matchid).subscribe(
      data=>{
        this.playedMatchDetails = data;
      }
    )
  }

}
