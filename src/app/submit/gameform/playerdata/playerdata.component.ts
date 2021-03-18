import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input,EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
import {AuthService} from '../../../auth.service'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {RobotMaster, RobotmastersService} from '../../../robotmasters.service'
import {Stage, StagesService} from '../../../stages.service'
import {formatDate } from '@angular/common';
import {PlayersService} from '../../../players.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-playerdata',
  templateUrl: './playerdata.component.html',
  styleUrls: ['./playerdata.component.css']
})
export class PlayerdataComponent implements OnInit {

  playerDict = {
    'name':'Swampus',
    'robotmaster':undefined,
    'wins':undefined,
    'loss':undefined,
    'frags':undefined,
    'placement':undefined
  }

  public player:string
  public wins:string
  public loss:string
  public frags:string
  public placement:string
  robotmaster:string
  robotmasters: RobotMaster[];
  stages: Stage[];

  playernames:any[];

  @Output() playerInfo = new EventEmitter<object>()
  @Input() gamemode:string = null;
  @Input() submitted:boolean


  ngOnChanges(changes: SimpleChanges){
    if(changes.gamemode && changes.gamemode.currentValue){
      this.playerData.controls['gamemode'].setValue(changes.gamemode.currentValue)
      this.setPlayerDataValidators()

    }








  }

getPlayerData(){
  this.submitted = true
  if(this.playerData.invalid){
    return undefined;
  }
  this.playerDict = {
    'name':undefined,
    'robotmaster':undefined,
    'wins':0,
    'loss':0,
    'frags':0,
    'placement':0
  }

  this.playerDict['name'] = this.playerData.get('player').value
  for(let i=0; i<this.playernames.length; i++){
    if(this.playernames[i]['name']==this.playerDict['name']){
      this.playerDict['id'] = this.playernames[i]['id']
      break
    }
}



  this.playerDict['robotmaster'] = this.playerData.get('robotmaster').value
  this.playerDict['wins'] = this.playerData.get('wins').value
  this.playerDict['loss'] = this.playerData.get('loss').value
  this.playerDict['frags'] = this.playerData.get('frags').value
  this.playerDict['placement'] = this.playerData.get('placement').value

  return this.playerDict;
}
  


  constructor(private _authSerice:AuthService, private playersService: PlayersService,private _router:Router,private robotmasterService: RobotmastersService,private stageService: StagesService) {
    
  }
  



  playerData: FormGroup;
  ngOnInit() {
    this.playerData = new FormGroup({
      player: new FormControl(undefined,[
        Validators.required,
      ]),
      robotmaster: new FormControl(undefined,[
        Validators.required,
      ]),
      wins: new FormControl(undefined),
      loss: new FormControl(undefined),
      frags: new FormControl(undefined,[
        Validators.required,
      ]),
      placement: new FormControl(undefined,[
        Validators.required,
      ]),
      gamemode:new FormControl('TDM')
    })

    



    this.robotmasterService.getRobotMasters().subscribe(

      res => {this.robotmasters = res;}
  )

  this.playersService.getPlayers().subscribe(
    res=>{this.playernames = res;
      console.log(this.playernames)}
  )
  this.stageService.getStages().subscribe(
    res => {this.stages = res})

    

  }


  setPlayerDataValidators(){
    console.log("inside setPlayer!")
    const frags = this.playerData.controls['frags']
    const placement = this.playerData.controls['placement']
    const wins = this.playerData.controls['wins']
    const loss = this.playerData.controls['loss']

      if(this.playerData.get('gamemode').value =='TDM' || this.playerData.get('gamemode').value=='DM'){
        frags.setValidators(Validators.required);
        placement.setValidators(Validators.required);

        wins.setValidators(null);
        loss.setValidators(null);

        frags.setErrors(null)
        placement.setErrors(null)
        wins.setErrors(null)
        loss.setErrors(null)
      }
      if(this.playerData.get('gamemode').value=='TLMS' || this.playerData.get('gamemode').value=='Duels'){
        wins.setValidators(Validators.required);
        loss.setValidators(Validators.required);

        frags.setValidators(null);
        placement.setValidators(null);

        frags.setErrors(null)
        placement.setErrors(null)
        wins.setErrors(null)
        loss.setErrors(null)
        
      }

      frags.updateValueAndValidity();
      placement.updateValueAndValidity();
      wins.updateValueAndValidity();
      loss.updateValueAndValidity();
      this.playerData.updateValueAndValidity();

  }

  get f(){return this.playerData.controls;}
  }









