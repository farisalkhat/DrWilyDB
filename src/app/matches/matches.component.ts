import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

import {Match, MatchesService} from '../matches.service'
import { PlayerDetails, PlayersService } from '../players.service';
import { RobotMaster, RobotmastersService } from '../robotmasters.service';
import { Stage, StagesService } from '../stages.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:Match[];
  submitVerified = false

  robotmasters:RobotMaster[];
  stages:Stage[];
  players:PlayerDetails[];

  filters = {
    'robotmaster':'None',
    'stage':'None',
    'player':'None',
    'gamemode':'None'
  }




  constructor(public robotmastersService:RobotmastersService,public stagesService: StagesService, public playersService:PlayersService,public authGuard: AuthGuard,private matchesService: MatchesService, private _authService: AuthService,private _router:Router) {



   }

  ngOnInit() {
    this.matchesService.getMatches().subscribe(
      data=>{
        if(data){
          this.hideloader();
        }
        this.matches=data;
      }
    )

    this.matchesService.getMatches().subscribe(data=>{this.matches=data;})
    this.robotmastersService.getRobotMasters().subscribe(data=>{this.robotmasters=data;})
    this.playersService.getPlayers().subscribe(data=>{this.players=data;})
    this.stagesService.getStages().subscribe(data=>{this.stages=data;})
  }


  updateFilter(){
    
    this.matchesService.getFilteredMatches(this.filters).subscribe(
      res=>{
        this.matches=res;
        console.log(res)
      },
        
      err=>{console.log(err)}
    )
  }

  deleteMatch(matchid:number){
    
    this._authService.getSubmitVerification().subscribe(
      res=>this.submitVerified = res,
      err=>{
        if (err instanceof HttpErrorResponse){
          if(err.status ===401){
            this._router.navigate(['/login'])
          }
        }
      }
    )

      this.matchesService.deleteMatch(matchid).subscribe(
        res=>{
          console.log(res);
          this._router.navigate(['/matches']);
        },
          
        err=>{console.log(err)}
      )

      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['/matches']);
    }

    hideloader() {
      var div = document.getElementById('Loading')
        div.style.display = "none"
        console.log(div)
    }
}
