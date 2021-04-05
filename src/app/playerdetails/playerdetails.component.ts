import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatchesTotal, MostPlayedRM, PlayerDetails, PlayersService} from '../players.service'
@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  playerdetails:PlayerDetails;
  playerid:string;
  recentmatches:any[];

  mostplayedrm:MostPlayedRM;
  mostplayedrm5:any[];

  matchestotals:MatchesTotal;

  constructor(private playersService: PlayersService,private route: ActivatedRoute,) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })

    this.playersService.getPlayer(this.playerid).subscribe(
      (data:any)=>{this.playerdetails = data;}
    )

    this.playersService.getRecentMatches(this.playerid).subscribe(
      (data:any)=>{this.recentmatches = data;}
    )

    this.playersService.getMatchesTotals(this.playerid).subscribe(
      (data:any)=>{this.matchestotals = data;
      }
    )

    this.playersService.getMostPlayedRM(this.playerid).subscribe(
      (data:any)=>{this.mostplayedrm = data;
        console.log(this.mostplayedrm)
     }
    )



  }

}
