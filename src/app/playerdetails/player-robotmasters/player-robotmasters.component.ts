import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/players.service';
@Component({
  selector: 'app-player-robotmasters',
  templateUrl: './player-robotmasters.component.html',
  styleUrls: ['./player-robotmasters.component.css']
})
export class PlayerRobotmastersComponent implements OnInit {

  playerid:string;
  rmDetails: any[];

  constructor(private playersService: PlayersService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })
    this.playersService.getPlayerRM(this.playerid).subscribe(
      res=>{this.rmDetails = res;}
    )


  }
  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }

}
