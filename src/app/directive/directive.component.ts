import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  
  titre : string = "mon premier type de data binding par string intepolation";
  date: string = "date";
  color: string = "red";

  status: boolean = true;


  texts: string[] = ['un','deux','trois']

  changeColor(color: string):void{
  	this.color = color;
  }

  constructor() { }

  ngOnInit() {
  }

}
