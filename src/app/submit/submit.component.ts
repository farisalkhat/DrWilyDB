import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input,EventEmitter, ViewChild } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {RobotMaster, RobotmastersService} from '../robotmasters.service'
import {Stage, StagesService} from '../stages.service'
import {formatDate } from '@angular/common';
import {PlayersService} from '../players.service'
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { GameformComponent } from './gameform/gameform.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  match = {}
  players = {}

  @ViewChild('gameForm',{static:false}) gameForm:GameformComponent
  robotmasters: RobotMaster[];
  stages: Stage[];
  playernames: any[];
  public totalPlayers = 10;
  gameMode:string;
  today= new Date();
  jstoday = '';
  submitVerified = false
  submitted = false


  constructor(private fb:FormBuilder,private playersService: PlayersService,private _authSerice:AuthService, private _router:Router,private robotmasterService: RobotmastersService,private stageService: StagesService) {
    
  }







  gameData: FormGroup;

 
  ngOnInit() {



    this.gameData = new FormGroup({
      gameTitle: new FormControl(undefined,[
        Validators.required,
        Validators.minLength(1)
      ]),
      gameMode: new FormControl(undefined,[
        Validators.required,
      ]),
      totalPlayers: new FormControl(1,[
        Validators.required,
      ]),
      stage: new FormControl(undefined,[
        Validators.required,
      ]),
    })



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

      res => {this.robotmasters = res;}
    )
    this.stageService.getStages().subscribe(
      res => {this.stages = res}
    )

  }

get f(){return this.gameData.controls;}

  onSubmit(){
    this.submitted = true
    if(this.gameData.invalid){
      console.log('Basic data not filled.')
      return;
    }
    this.players = this.gameForm.collectdata()
    if(this.players==undefined){
      console.log("gameForm failed.")
      return
    }

    this.match = {}
    this.match['gametitle'] = this.gameData.get('gameTitle').value
    this.match['gamemode'] = this.gameData.get('gameMode').value
    this.match['stage'] = this.gameData.get('stage').value
    this.match['totalplayers'] = this.gameData.get('totalPlayers').value


    this.today = new Date()
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.match['matchdate'] = this.jstoday
    this.match['matchid'] = 0

    let finaldata = {}
    finaldata['match'] = this.match
    finaldata['players'] = this.players

    this._authSerice.submitMatch(finaldata)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['/matches']);
      },
        
      err=>{console.log(err)}
    )
  }









}
