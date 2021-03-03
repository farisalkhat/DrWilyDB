import { Component, Input,ViewChild,ElementRef,AfterViewInit, ViewChildren } from '@angular/core';
import { PlayersComponent } from 'src/app/players/players.component';
import {PlayerdataComponent} from '../gameform/playerdata/playerdata.component'

import { HttpErrorResponse } from '@angular/common/http';
import {AuthService} from '../../auth.service'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-gameform',
  templateUrl: './gameform.component.html',
  styleUrls: ['./gameform.component.css'],
})
export class GameformComponent implements AfterViewInit {


  @ViewChild('player1',{static:false}) player1:PlayerdataComponent
  @ViewChild('player2',{static:false}) player2:PlayerdataComponent
  @ViewChild('player3',{static:false}) player3:PlayerdataComponent
  @ViewChild('player4',{static:false}) player4:PlayerdataComponent
  @ViewChild('player5',{static:false}) player5:PlayerdataComponent
  @ViewChild('player6',{static:false}) player6:PlayerdataComponent
  @ViewChild('player7',{static:false}) player7:PlayerdataComponent
  @ViewChild('player8',{static:false}) player8:PlayerdataComponent
  @ViewChild('player9',{static:false}) player9:PlayerdataComponent
  @ViewChild('player10',{static:false}) player10:PlayerdataComponent
  jstoday = '';
  today= new Date();
  @Input() gameMode: string;
  @Input() totalplayers:number;
  @Input() match:object;
  constructor(private _authSerice:AuthService, private _router:Router) { }

  public players = {} 


  ngAfterViewInit(): void {
    console.log(this.player1)
  }


  logData(){
    console.log(this.player2.sendPlayerInfo())
    console.log(this.player3.sendPlayerInfo())
    console.log(this.player4.sendPlayerInfo())
    console.log(this.player5.sendPlayerInfo())
    console.log(this.player6.sendPlayerInfo())
    console.log(this.player7.sendPlayerInfo())
    console.log(this.player8.sendPlayerInfo())
    console.log(this.player9.sendPlayerInfo())
    console.log(this.player10.sendPlayerInfo())
  }

  collectdata(){
    console.log(this.match['totalplayers'])
      if(this.match['totalplayers']==1){
        this.players['player1'] = this.player1.sendPlayerInfo()
      }
      else if(this.match['totalplayers']==2){
        this.players['player1'] = this.player1.sendPlayerInfo()
        this.players['player2'] = this.player2.sendPlayerInfo()
      }
      else if(this.match['totalplayers']==3){
        this.players['player1'] = this.player1.sendPlayerInfo()
      this.players['player2'] = this.player2.sendPlayerInfo()
      this.players['player3'] = this.player3.sendPlayerInfo()

      }
      else if(this.match['totalplayers']==4){
        this.players['player1'] = this.player1.sendPlayerInfo()
      this.players['player2'] = this.player2.sendPlayerInfo()
      this.players['player3'] = this.player3.sendPlayerInfo()
      this.players['player4'] = this.player4.sendPlayerInfo()
      
      }
      else if(this.match['totalplayers']==5){
        this.players['player1'] = this.player1.sendPlayerInfo()
      this.players['player2'] = this.player2.sendPlayerInfo()
      this.players['player3'] = this.player3.sendPlayerInfo()
      this.players['player4'] = this.player4.sendPlayerInfo()
      this.players['player5'] = this.player5.sendPlayerInfo()
      }
      else if(this.match['totalplayers']==6){
        this.players['player1'] = this.player1.sendPlayerInfo()
      this.players['player2'] = this.player2.sendPlayerInfo()
      this.players['player3'] = this.player3.sendPlayerInfo()
      this.players['player4'] = this.player4.sendPlayerInfo()
      this.players['player5'] = this.player5.sendPlayerInfo()
      this.players['player6'] = this.player6.sendPlayerInfo()
      
      }
      else if(this.match['totalplayers']==7){
        this.players['player1'] = this.player1.sendPlayerInfo()
      this.players['player2'] = this.player2.sendPlayerInfo()
      this.players['player3'] = this.player3.sendPlayerInfo()
      this.players['player4'] = this.player4.sendPlayerInfo()
      this.players['player5'] = this.player5.sendPlayerInfo()
      this.players['player6'] = this.player6.sendPlayerInfo()
      this.players['player7'] = this.player7.sendPlayerInfo()
      }
      else if(this.match['totalplayers']==8){
        this.players['player1'] = this.player1.sendPlayerInfo()
      this.players['player2'] = this.player2.sendPlayerInfo()
      this.players['player3'] = this.player3.sendPlayerInfo()
      this.players['player4'] = this.player4.sendPlayerInfo()
      this.players['player5'] = this.player5.sendPlayerInfo()
      this.players['player6'] = this.player6.sendPlayerInfo()
      this.players['player7'] = this.player7.sendPlayerInfo()
      this.players['player8'] = this.player8.sendPlayerInfo()
      }
      else if(this.match['totalplayers']==9){
        this.players['player1'] = this.player1.sendPlayerInfo()
        this.players['player2'] = this.player2.sendPlayerInfo()
        this.players['player3'] = this.player3.sendPlayerInfo()
        this.players['player4'] = this.player4.sendPlayerInfo()
        this.players['player5'] = this.player5.sendPlayerInfo()
        this.players['player6'] = this.player6.sendPlayerInfo()
        this.players['player7'] = this.player7.sendPlayerInfo()
        this.players['player8'] = this.player8.sendPlayerInfo()
        this.players['player9'] = this.player9.sendPlayerInfo()

      }
      else if(this.match['totalplayers']==10){
        this.players['player1'] = this.player1.sendPlayerInfo()
        this.players['player2'] = this.player2.sendPlayerInfo()
        this.players['player3'] = this.player3.sendPlayerInfo()
        this.players['player4'] = this.player4.sendPlayerInfo()
        this.players['player5'] = this.player5.sendPlayerInfo()
        this.players['player6'] = this.player6.sendPlayerInfo()
        this.players['player7'] = this.player7.sendPlayerInfo()
        this.players['player8'] = this.player8.sendPlayerInfo()
        this.players['player9'] = this.player9.sendPlayerInfo()
        this.players['player10'] = this.player10.sendPlayerInfo()
      }

      

    console.log(this.players)

    this.today = new Date()
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


   //this._router.navigate(['/matches'])
  }
}
