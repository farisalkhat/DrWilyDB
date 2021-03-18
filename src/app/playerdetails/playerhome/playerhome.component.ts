import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/players.service';

@Component({
  selector: 'app-playerhome',
  templateUrl: './playerhome.component.html',
  styleUrls: ['./playerhome.component.css']
})
export class PlayerhomeComponent implements OnInit {

  playerid:string;
  playerdetails:any[];
  recentmatches:any[];
  duelsMatches: any[];
  DmMatches:any[];
  mostplayedrm5:any[];

  constructor(private playersService: PlayersService,private route: ActivatedRoute,) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })

    this.playersService.getPlayer(this.playerid).subscribe(
      res=>{this.playerdetails = res;}
    )

    this.playersService.getRecentMatches(this.playerid).subscribe(
      res=>{this.recentmatches = res;}
    )

    this.playersService.getRecentDM(this.playerid).subscribe(
      res=>{this.DmMatches = res;}
    )

    this.playersService.getRecentDuels(this.playerid).subscribe(
      res=>{this.duelsMatches = res;
        console.log(this.duelsMatches)}
    )

    this.playersService.get5MostPlayedRM(this.playerid).subscribe(
      res=>{this.mostplayedrm5 = res;
        
     }
    )

    
    

  }

}
