import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatchesService} from '../matches.service'
@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {
  matchid: string;
  matchDetails: any[];


  constructor(private matchesService: MatchesService, private route: ActivatedRoute) {



   }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.matchid = paramMap.get('matchid');
      this.matchesService.getMatchDetails(this.matchid).subscribe(
        data=>{
          this.matchDetails = data;
          
        }
      )
    })
  }

}
