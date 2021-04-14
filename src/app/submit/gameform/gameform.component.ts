import { Component, Input,ViewChild,ElementRef,AfterViewInit, ViewChildren } from '@angular/core';
import { PlayersComponent } from 'src/app/players/players.component';
import {PlayerdataComponent} from '../gameform/playerdata/playerdata.component'

import { HttpErrorResponse } from '@angular/common/http';
import {AuthService} from '../../auth.service'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { unescapeIdentifier } from '@angular/compiler';
@Component({
  selector: 'app-gameform',
  templateUrl: './gameform.component.html',
  styleUrls: ['./gameform.component.css'],
})
export class GameformComponent implements AfterViewInit {


  @ViewChild('player1') player1:PlayerdataComponent
  @ViewChild('player2') player2:PlayerdataComponent
  @ViewChild('player3') player3:PlayerdataComponent
  @ViewChild('player4') player4:PlayerdataComponent
  @ViewChild('player5') player5:PlayerdataComponent
  @ViewChild('player6') player6:PlayerdataComponent
  @ViewChild('player7') player7:PlayerdataComponent
  @ViewChild('player8') player8:PlayerdataComponent
  @ViewChild('player9') player9:PlayerdataComponent
  @ViewChild('player10') player10:PlayerdataComponent
  jstoday = '';
  today= new Date();
  @Input() submitted:boolean;
  @Input() match:FormGroup;
  constructor(private _authSerice:AuthService, private _router:Router) { }

  public players = {} 


  ngAfterViewInit(): void {
    console.log(this.player1)
  }




  collectdata(){
    this.players = {}
      if(this.match.controls['totalPlayers'].value==1){
        this.players['player1'] = this.player1.getPlayerData()
      }
      else if(this.match.controls['totalPlayers'].value==2){
        this.players['player1'] = this.player1.getPlayerData()
        this.players['player2'] = this.player2.getPlayerData()
      }
      else if(this.match.controls['totalPlayers'].value==3){
        this.players['player1'] = this.player1.getPlayerData()
      this.players['player2'] = this.player2.getPlayerData()
      this.players['player3'] = this.player3.getPlayerData()

      }
      else if(this.match.controls['totalPlayers'].value==4){
        this.players['player1'] = this.player1.getPlayerData()
      this.players['player2'] = this.player2.getPlayerData()
      this.players['player3'] = this.player3.getPlayerData()
      this.players['player4'] = this.player4.getPlayerData()
      
      }
      else if(this.match.controls['totalPlayers'].value==5){
        this.players['player1'] = this.player1.getPlayerData()
      this.players['player2'] = this.player2.getPlayerData()
      this.players['player3'] = this.player3.getPlayerData()
      this.players['player4'] = this.player4.getPlayerData()
      this.players['player5'] = this.player5.getPlayerData()
      }
      else if(this.match.controls['totalPlayers'].value==6){
        this.players['player1'] = this.player1.getPlayerData()
      this.players['player2'] = this.player2.getPlayerData()
      this.players['player3'] = this.player3.getPlayerData()
      this.players['player4'] = this.player4.getPlayerData()
      this.players['player5'] = this.player5.getPlayerData()
      this.players['player6'] = this.player6.getPlayerData()
      
      }
      else if(this.match.controls['totalPlayers'].value==7){
        this.players['player1'] = this.player1.getPlayerData()
      this.players['player2'] = this.player2.getPlayerData()
      this.players['player3'] = this.player3.getPlayerData()
      this.players['player4'] = this.player4.getPlayerData()
      this.players['player5'] = this.player5.getPlayerData()
      this.players['player6'] = this.player6.getPlayerData()
      this.players['player7'] = this.player7.getPlayerData()
      }
      else if(this.match.controls['totalPlayers'].value==8){
        this.players['player1'] = this.player1.getPlayerData()
      this.players['player2'] = this.player2.getPlayerData()
      this.players['player3'] = this.player3.getPlayerData()
      this.players['player4'] = this.player4.getPlayerData()
      this.players['player5'] = this.player5.getPlayerData()
      this.players['player6'] = this.player6.getPlayerData()
      this.players['player7'] = this.player7.getPlayerData()
      this.players['player8'] = this.player8.getPlayerData()
      }
      else if(this.match.controls['totalPlayers'].value==9){
        this.players['player1'] = this.player1.getPlayerData()
        this.players['player2'] = this.player2.getPlayerData()
        this.players['player3'] = this.player3.getPlayerData()
        this.players['player4'] = this.player4.getPlayerData()
        this.players['player5'] = this.player5.getPlayerData()
        this.players['player6'] = this.player6.getPlayerData()
        this.players['player7'] = this.player7.getPlayerData()
        this.players['player8'] = this.player8.getPlayerData()
        this.players['player9'] = this.player9.getPlayerData()

      }
      else if(this.match.controls['totalPlayers'].value==10){
        this.players['player1'] = this.player1.getPlayerData()
        this.players['player2'] = this.player2.getPlayerData()
        this.players['player3'] = this.player3.getPlayerData()
        this.players['player4'] = this.player4.getPlayerData()
        this.players['player5'] = this.player5.getPlayerData()
        this.players['player6'] = this.player6.getPlayerData()
        this.players['player7'] = this.player7.getPlayerData()
        this.players['player8'] = this.player8.getPlayerData()
        this.players['player9'] = this.player9.getPlayerData()
        this.players['player10'] = this.player10.getPlayerData()
      }

      for(let player in this.players){
        if (this.players[player] == undefined){
          return undefined
        }
      }
      return this.players
      

    

    /*
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
      
    err=>{console.log(err)}
   )


   //this._router.navigate(['/matches'])
   */
  }

}



