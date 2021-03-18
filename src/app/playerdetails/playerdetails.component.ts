import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PlayersService} from '../players.service'
@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  playerdetails:any[];
  playerid:string;
  recentmatches:any[];

  mostplayedrm:any[];
  mostplayedrm5:any[];

  matchestotals:any[];

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

    this.playersService.getMatchesTotals(this.playerid).subscribe(
      res=>{this.matchestotals = res;
      }
    )

    this.playersService.getMostPlayedRM(this.playerid).subscribe(
      res=>{this.mostplayedrm = res;
        console.log(this.mostplayedrm)
     }
    )



  }

}
