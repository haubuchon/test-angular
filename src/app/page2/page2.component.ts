import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  sv: number = 25;
  startDate = new Date(2018, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}