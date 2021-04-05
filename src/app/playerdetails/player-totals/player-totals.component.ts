import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService, PlayerTotals } from 'src/app/players.service';

@Component({
  selector: 'app-player-totals',
  templateUrl: './player-totals.component.html',
  styleUrls: ['./player-totals.component.css']
})
export class PlayerTotalsComponent implements OnInit {

  playerid:String
  playerTotals: PlayerTotals;
  constructor(private playersService: PlayersService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })


    this.playersService.getPlayerTotals(this.playerid).subscribe(
      (data:any)=>{this.playerTotals = data;}
    )
  }

}
