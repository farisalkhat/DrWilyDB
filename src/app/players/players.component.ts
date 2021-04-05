import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../players.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

  playernames:any[];
  constructor(private playersService:PlayersService) { }

  ngOnInit() {
    this.playersService.getPlayers().subscribe(
      res=>{this.playernames = res;}
    )
  }

}
 