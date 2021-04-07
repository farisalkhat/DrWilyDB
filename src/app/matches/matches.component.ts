import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

import {MatchesService} from '../matches.service'
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any[];
  submitVerified = false

  constructor(public authGuard: AuthGuard,private matchesService: MatchesService, private _authService: AuthService,private _router:Router) {
    this.matchesService.getMatches().subscribe(
      data=>{
        this.matches=data;
      }
    )


   }

  ngOnInit() {
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

}
