import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/players.service';
import { RobotMaster, RobotmastersService } from 'src/app/robotmasters.service';

@Component({
  selector: 'app-player-matches',
  templateUrl: './player-matches.component.html',
  styleUrls: ['./player-matches.component.css']
})
export class PlayerMatchesComponent implements OnInit {

  playerid:string;
  matchDetails: any[];
  robotmasters:RobotMaster[];
  gamemodeFilter="None";
  robotmasterFilter:"None";

  constructor(private robotmastersService:RobotmastersService,private playersService: PlayersService,private route: ActivatedRoute,) { }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })
    this.playersService.getPlayerMatches(this.playerid).subscribe(
      res=>{this.matchDetails = res;}
    )
    this.robotmastersService.getRobotMasters().subscribe(
      res=>{this.robotmasters = res;}
  )}
    

    hideloader() {
      var div = document.getElementById('Loading')
        div.style.display = "none"
        console.log(div)
    }
  
    selectFilter(){
      console.log(this.gamemodeFilter)
      console.log(this.robotmasterFilter)
      if(this.gamemodeFilter!="None" && this.robotmasterFilter!="None"){
        this.filterByRMGM()
      }
      else if(this.gamemodeFilter=="None" && this.robotmasterFilter!="None"){
        this.filterByRM()
      }
      else if(this.gamemodeFilter!="None" && this.robotmasterFilter=="None"){
        this.filterByGM()
      }
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
