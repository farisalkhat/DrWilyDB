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
      res=>{
        if(res){
          this.hideloader();
        }
        this.playernames = res;}
    )
  }
  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }

}
 