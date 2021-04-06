import { Component, OnInit } from '@angular/core';

import {MatchesService} from '../matches.service'
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any[];

  constructor(private matchesService: MatchesService) {
    this.matchesService.getMatches().subscribe(
      data=>{
        this.matches=data;
      }
    )


   }

  ngOnInit() {
  }

}