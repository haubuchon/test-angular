import { Component, OnInit } from '@angular/core';
import { OperService } from '../oper.service'
import { Observable, Subscription } from 'rxjs';
import { OperData } from '../oper-data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public tiles;

  constructor(private data: OperService) {}

  ngOnInit() {
    this.data.getOperData().subscribe(ops => this.tiles = ops.Operations)
  }

  cl(tile) {
    alert (tile);
  }
}