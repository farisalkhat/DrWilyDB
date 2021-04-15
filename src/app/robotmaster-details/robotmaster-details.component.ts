import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Chart}  from 'node_modules/chart.js';
import {RobotmasterDetails, RobotmastersService} from '../robotmasters.service'
@Component({
  selector: 'app-robotmaster-details',
  templateUrl: './robotmaster-details.component.html',
  styleUrls: ['./robotmaster-details.component.css']
})
export class RobotmasterDetailsComponent implements OnInit {


  constructor(private robotmastersService:RobotmastersService,private route: ActivatedRoute) { }
  robotmaster:string;
  robotmasterDetails:RobotmasterDetails;
  robotmasterRoles=['Damage','Durability','Mobility','Utility','Difficulty'];
  robotmasterLevels=[];
  currentChart: Chart;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      this.robotmaster = paramMap.get('robotmaster');
      this.robotmastersService.getRobotMaster(this.robotmaster).subscribe(
        (data:any)=>{
          this.robotmasterDetails = data;
           console.log(this.robotmasterDetails)
           this.createChart()
        } 
      )
    })


  }
  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }


  createChart(){
      Chart.defaults.global.defaultFontColor = 'white';
      Chart.defaults.global.defaultFontSize = 18;
      this.robotmasterLevels.push(this.robotmasterDetails['robotmaster']['damage'])
      this.robotmasterLevels.push(this.robotmasterDetails['robotmaster']['durability'])
      this.robotmasterLevels.push(this.robotmasterDetails['robotmaster']['mobility'])
      this.robotmasterLevels.push(this.robotmasterDetails['robotmaster']['utility'])
      this.robotmasterLevels.push(this.robotmasterDetails['robotmaster']['difficulty'])


         this.currentChart = new Chart('myChart', {
          type: 'horizontalBar',
          data: {
            labels: this.robotmasterRoles,
            datasets: [
              {
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: this.robotmasterLevels,
                barThickness: 20,
                maxBarThickness: 20,
                minBarLength: 15,
                borderColor:"rgba(0, 0, 0, 0)",
                borderSkipped:false,
                
              }
            ]
          },
          options: {
            scales:{
              xAxes: [{
                
                scaleLabel:{display:false},
                ticks:{min:0,max:5,display:false},
                gridLines: { display: false, drawBorder: false,offsetGridLines: false },
            },
          ],
              yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",offsetGridLines: false}}]
            },
            legend: {
              labels: {
              fontColor: "blue",
              fontSize: 18
          },
          display: false},
            title: {
              display: true,
              
              
            }
          }
      });

        
    }
}


