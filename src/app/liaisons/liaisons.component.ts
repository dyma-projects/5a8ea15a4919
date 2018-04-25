import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaisons',
  templateUrl: './liaisons.component.html',
  styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {

  displayConsole():void{
    console.log('click')
  }
  constructor() { }

  ngOnInit() {
  }

}
