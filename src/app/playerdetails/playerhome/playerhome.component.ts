import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playerhome',
  templateUrl: './playerhome.component.html',
  styleUrls: ['./playerhome.component.css']
})
export class PlayerhomeComponent implements OnInit {

  playername:string;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap)=>{
      this.playername = paramMap.get('playername');
    console.log(this.playername)})

  }

}
