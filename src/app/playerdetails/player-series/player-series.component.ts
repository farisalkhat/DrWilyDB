import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-series',
  templateUrl: './player-series.component.html',
  styleUrls: ['./player-series.component.css']
})
export class PlayerSeriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }
}
