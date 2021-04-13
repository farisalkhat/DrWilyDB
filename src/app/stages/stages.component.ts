import { Component, OnInit } from '@angular/core';
import {Stage, StagesService} from '../stages.service'
@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  stages: Stage[];
  constructor(private stageService: StagesService) { 
    
  }

  ngOnInit() {


    this.stageService.getStages().subscribe(
      res => {
        if(res){
          this.hideloader();
        }
        this.stages = res})

  } 
  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }

}
