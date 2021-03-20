import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RobotmastersService} from '../robotmasters.service'
@Component({
  selector: 'app-robotmaster-details',
  templateUrl: './robotmaster-details.component.html',
  styleUrls: ['./robotmaster-details.component.css']
})
export class RobotmasterDetailsComponent implements OnInit {


  constructor(private robotmastersService:RobotmastersService,private route: ActivatedRoute) { }
  robotmaster:string;
  robotmasterDetails:any[];
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.robotmaster = paramMap.get('robotmaster');
      this.robotmastersService.getRobotMaster(this.robotmaster).subscribe(
        data=>{
          this.robotmasterDetails = data;
           console.log(this.robotmasterDetails)
        } 
      )
    })


  }

}
