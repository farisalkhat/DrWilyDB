import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patchnotes',
  templateUrl: './patchnotes.component.html',
  styleUrls: ['./patchnotes.component.css']
})
export class PatchnotesComponent implements OnInit {

  patchnotes = true;
  todo = false;

  constructor() { }

  ngOnInit() {
  }

  selectTODO(){
    this.todo=true;
    this.patchnotes=false;
  }

  selectPatchNotes(){
    this.todo=false;
    this.patchnotes=true;    
  }

  hideloader() {
    var div = document.getElementById('Loading')
      div.style.display = "none"
      console.log(div)
  }
}
