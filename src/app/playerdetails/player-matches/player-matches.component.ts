import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/players.service';

@Component({
  selector: 'app-player-matches',
  templateUrl: './player-matches.component.html',
  styleUrls: ['./player-matches.component.css']
})
export class PlayerMatchesComponent implements OnInit {

  playerid:string;
  matchDetails: any[];

  constructor(private playersService: PlayersService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })
    this.playersService.getPlayerMatches(this.playerid).subscribe(
      res=>{this.matchDetails = res;}
    )}

}
