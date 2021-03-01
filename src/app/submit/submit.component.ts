import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {RobotMaster, RobotmastersService} from '../robotmasters.service'
import {Stage, StagesService} from '../stages.service'
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  match = {}
  players = {
    player1:{},
    player2:{},
    player3:{},
    player4:{},
    player5:{},
    player6:{},
    player7:{},
    player8:{},
    player9:{},
    player10:{}
  }


  robotmasters: RobotMaster[];
  stages: Stage[];
  public totalPlayers = 2;
  public gameMode;

  today= new Date();
  jstoday = '';
  submitVerified = false
  constructor(private _authSerice:AuthService, private _router:Router,private robotmasterService: RobotmastersService,private stageService: StagesService) {
    
  }

  ngOnInit() {
    this._authSerice.getSubmitVerification().subscribe(
      res=>this.submitVerified = res,
      err=>{
        if (err instanceof HttpErrorResponse){
          if(err.status ===401){
            this._router.navigate(['/login'])
          }
        }
      }
    )


    this.robotmasterService.getRobotMasters().subscribe(

      res => {this.robotmasters = res;
      console.log(this.robotmasters[0])}
  )
  this.stageService.getStages().subscribe(
    res => {this.stages = res})
  }


  submitmatch(){
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.match['matchdate'] = this.jstoday
    this.match['matchid'] = 0



   let finaldata = {}
   finaldata['match'] = this.match
   finaldata['players'] = this.players

   this._authSerice.submitMatch(finaldata)
   .subscribe(
    res=>{console.log(res)},
    err=>console.log(err)
   )



  }








}
