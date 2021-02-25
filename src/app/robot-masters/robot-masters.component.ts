import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {RobotMaster, RobotmastersService} from '../robotmasters.service'

@Component({
  selector: 'app-robot-masters',
  templateUrl: './robot-masters.component.html',
  styleUrls: ['./robot-masters.component.css']
})
export class RobotMastersComponent implements OnInit {
  robotmasters: RobotMaster[];
  constructor(private robotmasterService: RobotmastersService) { 
    
  }
 
  

  ngOnInit() {    
    this.robotmasterService.getRobotMasters().subscribe(

      res => {this.robotmasters = res;
      console.log(this.robotmasters[0])}

      
      
    
  )
  }

}
