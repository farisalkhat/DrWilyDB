import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import {AuthService} from '../../../auth.service'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {RobotMaster, RobotmastersService} from '../../../robotmasters.service'
import {Stage, StagesService} from '../../../stages.service'
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-playerdata',
  templateUrl: './playerdata.component.html',
  styleUrls: ['./playerdata.component.css']
})
export class PlayerdataComponent implements OnInit {

  playerDict = {
    'name':undefined,
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

  @Output() playerInfo = new EventEmitter<object>()
  @Input() gamemode:string;


sendPlayerInfo(){
  this.playerDict = {
    'name':undefined,
    'robotmaster':undefined,
    'wins':undefined,
    'loss':undefined,
    'frags':undefined,
    'placement':undefined
  }
  
    this.playerDict['name'] = this.player
    this.playerDict['robotmaster'] = this.robotmaster

    if(this.gamemode=="Duels" || this.gamemode == "TLMS"){
      this.playerDict['wins'] = this.wins
      this.playerDict['loss'] = this.loss
    }

    if(this.gamemode=="DM" || this.gamemode == "TDM"){
      this.playerDict['frags'] = this.frags
      this.playerDict['placement'] = this.placement
    }
    
    return this.playerDict;
    
  }

  constructor(private _authSerice:AuthService, private _router:Router,private robotmasterService: RobotmastersService,private stageService: StagesService) {
    
  }
  



  ngOnInit() {



    this.robotmasterService.getRobotMasters().subscribe(

      res => {this.robotmasters = res;}
  )
  this.stageService.getStages().subscribe(
    res => {this.stages = res})
  }
  }









