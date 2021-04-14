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

  constructor(private robotmastersService:RobotmastersService,private playersService: PlayersService,private route: ActivatedRoute,) { }
  robotmasters:RobotMaster[];
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
  
    filterByRM(value:string){
      this.playersService.getPlayerRMMatches(this.playerid,value).subscribe(
        res=>{this.matchDetails = res;}
      )
    }
}
