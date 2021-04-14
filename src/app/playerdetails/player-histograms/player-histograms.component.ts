import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/players.service';
import {Chart}  from 'node_modules/chart.js';
import {RobotMaster, RobotmastersService} from '../../robotmasters.service'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-player-histograms',
  templateUrl: './player-histograms.component.html',
  styleUrls: ['./player-histograms.component.css']
})
export class PlayerHistogramsComponent implements OnInit {

  constructor(private robotmastersService:RobotmastersService,private playersService: PlayersService,private route: ActivatedRoute) { }
  
  playerid:string;
  data:any[];
  times=[];
  frags=[];
  backgroundColor=[];
  robotmasters:RobotMaster[];
  robotmaster:number;
  totalGames:number;

  currentChart: Chart;

chartColors = {
    red: '#c73c2a',
    orange: '#ff8e14',
    green:'#81cf23',
    blue: '#2f74f5'
  };


  ngOnInit() {

    this.route.paramMap.subscribe((paramMap)=>{
      this.playerid= paramMap.get('playername');
    })
    this.playersService.getFragsChart(this.playerid).subscribe(
      res=>{this.data = res;
         this.totalGames = 0

    this.robotmastersService.getRobotMasters().subscribe(
        res=>{this.robotmasters = res;}
    )

      this.createChart()

    


      
      });


    







    }


    updateChart(value:string){
        console.log(value)
        
        this.playersService.getFragsRMChart(this.playerid,value).subscribe(
            res=>{this.data = res;
                console.log(this.data)


                this.times = []
                this.frags = []
                this.totalGames = 0
        
                this.data.forEach(value => {
                    this.times.push(value.frags);
                    this.frags.push(value.total);
                    this.backgroundColor.push(this.chartColors.blue)
                    this.totalGames = this.totalGames + value.total
                  })


                this.currentChart.data.labels =  this.times
                this.currentChart.data.datasets[0].data = this.frags;

                var highEnd = this.totalGames*.1
            var midEnd = this.totalGames*.05
            var lowEnd = 0
            console.log("lowEnd:"+lowEnd)
            console.log("midEnd:"+midEnd)
            console.log("highEnd:"+highEnd)
            var datalabels = this.currentChart.data.labels
            var dataset = this.currentChart.data.datasets[0];
    
            console.log(datalabels)
    
            for (var i = 0; i < datalabels.length; i++) {
                if (dataset.data[i] < midEnd) {
                    dataset.backgroundColor[i] = this.chartColors.red;
                }
                if (dataset.data[i] >= midEnd )  {
                    dataset.backgroundColor[i] = this.chartColors.orange;
                }
                if (dataset.data[i] >= highEnd) {
                    dataset.backgroundColor[i] = this.chartColors.green;
                }
    
            }
            this.currentChart.update();



            })
        


    }


    createChart(){
        this.times = []
        this.frags = []
        this.totalGames = 0

        this.data.forEach(value => {
            this.times.push(value.frags);
            this.frags.push(value.total);
            this.backgroundColor.push(this.chartColors.blue)
            this.totalGames = this.totalGames + value.total
          })
    
    
             this.currentChart = new Chart("myChart", {
                type: 'bar',
                data: {
                    labels: this.times,
                    datasets: [{
                        label: '# of Times Frags Achieved',
                        data: this.frags,
                        backgroundColor: this.backgroundColor,
                        barThickness: 20,
                        maxBarThickness: 20,
                        minBarLength: 15,
                        
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: '# of Times Achieved'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: '# of Frags Achieved',
                                color:'#ffffff'
                            },
                            ticks: {
                                fontSize:20,
                                beginAtZero: true,
                                scaleLabel: 20
                                
                            },
                            pointLabels: { fontSize:40 }
                        }]
                    },
                    plugins: {
                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                font: {
                                    size: 20
                                }
                            }
                        }
                    }
                }
            });
    
            console.log(this.totalGames)
            var highEnd = this.totalGames*.1
            var midEnd = this.totalGames*.05
            var lowEnd = 0
            console.log("lowEnd:"+lowEnd)
            console.log("midEnd:"+midEnd)
            console.log("highEnd:"+highEnd)
            var datalabels = this.currentChart.data.labels
            var dataset = this.currentChart.data.datasets[0];
    
            console.log(datalabels)
    
            for (var i = 0; i < datalabels.length; i++) {
                if (dataset.data[i] < midEnd) {
                    dataset.backgroundColor[i] = this.chartColors.red;
                }
                if (dataset.data[i] >= midEnd )  {
                    dataset.backgroundColor[i] = this.chartColors.orange;
                }
                if (dataset.data[i] >= highEnd) {
                    dataset.backgroundColor[i] = this.chartColors.green;
                }
    
            }
            this.currentChart.update();
    }


}



// var datalabels = myChart.data.labels
        // var dataset = myChart.data.datasets[0];

        // var highestKills = myChart.data.labels[myChart.data.labels.length-1]
        // var highEnd = highestKills*.6
        // var midEnd = highestKills*.3
        // var lowEnd = 0

        // for (var i = 0; i < datalabels.length; i++) {
        //     if (datalabels[i] < midEnd) {
        //         dataset.backgroundColor[i] = chartColors.red;
        //     }
        //     if (datalabels[i] >= midEnd && datalabels[i] < highEnd)  {
        //         dataset.backgroundColor[i] = chartColors.orange;
        //     }
        //     if (datalabels[i] >= highEnd) {
        //         dataset.backgroundColor[i] = chartColors.green;
        //     }

        // }
        // myChart.update();
    
    //   console.log(this.times);
    //   console.log(this.frags);



