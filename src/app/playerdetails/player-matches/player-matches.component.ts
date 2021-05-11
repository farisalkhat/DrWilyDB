import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/matches.service';
import { PlayersService } from 'src/app/players.service';
import { RobotMaster, RobotmastersService } from 'src/app/robotmasters.service';
import { Stage, StagesService } from 'src/app/stages.service';

@Component({
  selector: 'app-player-matches',
  templateUrl: './player-matches.component.html',
  styleUrls: ['./player-matches.component.css']
})
export class PlayerMatchesComponent implements OnInit {

  playerid:string;
  matchDetails: any[];
  robotmasters:RobotMaster[];
  stages:Stage[];
  gamemodeFilter="None";
  robotmasterFilter="None";
  stageFilter ="None";


  filters = {
    'robotmaster':'None',
    'stage':'None',
    'player':'None',
    'gamemode':'None'
  }


  constructor(private matchesService:MatchesService,private stagesService:StagesService,private robotmastersService:RobotmastersService,private playersService: PlayersService,private route: ActivatedRoute,) { }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
      this.filters['player']=this.playerid
    })
    this.playersService.getPlayerMatches(this.playerid).subscribe(
      res=>{this.matchDetails = res;}
    )
    this.robotmastersService.getRobotMasters().subscribe(
      res=>{this.robotmasters = res;}
    )

    this.stagesService.getStages().subscribe(
      res=>{this.stages = res;}
    )

}
    

    hideloader() {
      var div = document.getElementById('Loading')
        div.style.display = "none"
        console.log(div)
    }
  
    updateFilter(){
      this.matchesService.getFilteredPlayerMatches(this.filters).subscribe(
        res=>{
          this.matchDetails=res;
          console.log(res)
        },
          
        err=>{console.log(err)}
      )
    }


    filterByRM(){
      this.playersService.getPlayerRMMatches(this.playerid,this.robotmasterFilter).subscribe(
        res=>{this.matchDetails = res;}
      )
    }

    filterByGM(){
      this.playersService.getPlayerGMMatches(this.playerid,this.gamemodeFilter).subscribe(
        res=>{this.matchDetails = res;}
      )
    }

    filterByRMGM(){
      this.playersService.getPlayerRMGMMatches(this.playerid,this.robotmasterFilter,this.gamemodeFilter).subscribe(
        res=>{this.matchDetails = res;}
      )
    }
}
