import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }
}
