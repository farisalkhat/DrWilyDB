import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/players.service';


@Component({
  selector: 'app-player-histograms',
  templateUrl: './player-histograms.component.html',
  styleUrls: ['./player-histograms.component.css']
})
export class PlayerHistogramsComponent implements OnInit {

  constructor(private playersService: PlayersService,private route: ActivatedRoute) { }

  playerid:string;
  data:any[];

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })
    this.playersService.getFragsChart(this.playerid).subscribe(
      res=>{this.data = res;}
    )}

    hideloader() {
      var div = document.getElementById('Loading')
        div.style.display = "none"
        console.log(div)
    }

}
