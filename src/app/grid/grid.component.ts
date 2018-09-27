import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  cities: String[] = ['Madrid', 'Paris', 'Berlin', 'Vancouver', 'Tokyo','Montréal', 'Toronto','Rome','New York'];

  constructor() {}

  ngOnInit() {
  }

  cl(city) {
    alert (city);
  }
}