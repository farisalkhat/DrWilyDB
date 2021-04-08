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
          this.dailyRM = res;
      })

      this.matchesService.getRandomMatch().subscribe(
        res=>{
          this.randomMatch = res;
      })

      this.matchesService.getMostRecentMatch().subscribe(
        res=>{
          this.recentMatch = res;
      })

  }


  
}
