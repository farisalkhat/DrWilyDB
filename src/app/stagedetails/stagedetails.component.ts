import { Component, OnInit } from '@angular/core';
import {Stage,StageDetails,StagesService} from '../stages.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagedetails',
  templateUrl: './stagedetails.component.html',
  styleUrls: ['./stagedetails.component.css']
})
export class StagedetailsComponent implements OnInit {
  stage: string;
  stageDetails: StageDetails;
  constructor(private stagesServices:StagesService,private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.getStageDetails()
  }
  getStageDetails(){
    this.route.paramMap.subscribe((paramMap)=>{
      this.stage = paramMap.get('name');
      this.stagesServices.getStage(this.stage).subscribe(
        data=>{
          this.stageDetails = data;
           console.log(this.stageDetails)
        } 
      )
    })
  }

  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }


}
