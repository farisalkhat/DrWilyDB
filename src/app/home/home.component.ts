import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval,Subscription  } from 'rxjs';
import { Match, MatchesService, rmMatch } from '../matches.service';
import { RobotMaster, RobotmastersService } from '../robotmasters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private robotmasterService: RobotmastersService, private matchesService: MatchesService) { }
  subscription: Subscription;
  dailyRM: RobotMaster;
  randomMatch: rmMatch;
  recentMatch: Match;

  today= new Date();
  jstoday = '';

  ngOnInit() {
      this.robotmasterService.getDailyRM().subscribe(
        res=>{
          if(res){
            this.hideloader();
          }
          this.dailyRM = res;
          
      })

      this.matchesService.getRandomMatch().subscribe(
        res=>{
          if(res){
            this.hideloader1();
          }
          this.randomMatch = res;
      })

      this.matchesService.getMostRecentMatch().subscribe(
        res=>{
          this.recentMatch = res;
      })


  }


  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }
  hideloader1() {
    var div = document.getElementById('Loading1')
      div.style.display = "none"
      console.log(div)
  }


  
}
