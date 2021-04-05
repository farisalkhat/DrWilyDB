import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peers, PlayersService } from 'src/app/players.service';

@Component({
  selector: 'app-player-peers',
  templateUrl: './player-peers.component.html',
  styleUrls: ['./player-peers.component.css']
})
export class PlayerPeersComponent implements OnInit {
  playerid:string;
  constructor(private playersService: PlayersService,private route: ActivatedRoute,) { }
  peers:Peers[];
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })
    this.playersService.getPeers(this.playerid).subscribe(
      res=>{this.peers = res;}
    )


  }

}
