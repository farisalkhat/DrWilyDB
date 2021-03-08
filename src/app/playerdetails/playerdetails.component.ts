import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  playername:string;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap)=>{
      this.playername = paramMap.get('playername');
    console.log(this.playername)})

  }

}