import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {Match,MatchesService} from '../matches.service'
import { HttpClient } from '@angular/common/http';
import { Stage } from '../stages.service';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
}) 
export class MatchdetailsComponent implements OnInit {
  matchid: string;
  stage:string;

  lol = true;

  matchDetails: Match;
  stageDetails: Stage;
  playedMatchDetails: any[];

  constructor(private http: HttpClient, private matchesService: MatchesService, private route: ActivatedRoute) {
    this.getMatchDetails() 
  }

  ngOnInit() {
  }

  getMatchDetails(){
    this.route.paramMap.subscribe((paramMap)=>{
      this.matchid = paramMap.get('matchid');

      this.http.get<Match>(`https://mm8bitdm.herokuapp.com/api/matches/${this.matchid}`).pipe(
      map(res=>{
        this.matchDetails = res
        return res
      }),
      mergeMap(res=>{
        const stageData = this.http.get<Stage>(`https://mm8bitdm.herokuapp.com/api/stages/stageid/${res['stage']}`);
        const playedMatchData = this.http.get<any[]>(`https://mm8bitdm.herokuapp.com/api/playedmatch/${res['matchid']}`);
        return forkJoin([stageData,playedMatchData])
      })

    ).subscribe(res=>{
      this.stageDetails=res[0]
      this.playedMatchDetails = res[1]
      console.log(this.matchDetails)
      console.log(this.playedMatchDetails)

    })




      
    })
  }

   hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }

}
