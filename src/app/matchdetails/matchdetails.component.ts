import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Match,MatchesService} from '../matches.service'
@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {
  matchid: string;
  matchDetails: Match[];
  stage:string


  playerDetails: any[];
  stageDetails: any[];
  playedMatchDetails: any[];

  constructor(private matchesService: MatchesService, private route: ActivatedRoute) {



   }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.matchid = paramMap.get('matchid');

      this.matchesService.getMatchDetails(this.matchid).subscribe(
        data=>{
          this.matchDetails = data;
          this.stage = this.matchDetails['stage']
        }
      )


      this.matchesService.getStageDetails(this.stage).subscribe(
        data=>{
          console.log(this.stage)
          this.stageDetails = data; 
          console.log(this.stageDetails)
        }
      )

      this.matchesService.getPlayedMatchDetails(this.matchid).subscribe(
        data=>{
          this.playedMatchDetails = data;
        }
      )







    })
  }

}
