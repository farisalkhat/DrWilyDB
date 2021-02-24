import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

import {RobotMaster, RobotmastersService} from '../robotmasters.service'

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  robotmasters: RobotMaster[];
  public totalPlayers = 2
  public gameMode
  submitVerified = false
  constructor(private _authSerice:AuthService, private _router:Router,private robotmasterService: RobotmastersService) { }
 
  player1 = {}
  player2 = {}
  player3 = {}
  player4 = {}
  player5 = {}
  player6 = {}
  player7 = {}
  player8 = {}
  player9 = {}
  player10 = {}

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
  }




}
