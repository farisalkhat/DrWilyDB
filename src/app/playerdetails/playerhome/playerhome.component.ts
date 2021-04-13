import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peers, PlayerDetails, PlayersService } from 'src/app/players.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-playerhome',
  templateUrl: './playerhome.component.html',
  styleUrls: ['./playerhome.component.css']
})


export class PlayerhomeComponent implements OnInit {

  playerid:string;
  playerdetails:PlayerDetails;
  recentmatches:any[];
  duelsMatches: any[];
  DmMatches:any[];
  mostplayedrm5:any[];
  peers5:Peers[];


  constructor(private playersService: PlayersService,private route: ActivatedRoute) {     

}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
      this.playersService.getPeers5(this.playerid).subscribe(
        res=>{this.peers5 = res;
          
       }
      )
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


    })
    


    
    

  }
  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }

}
