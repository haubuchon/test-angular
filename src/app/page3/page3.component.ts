import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { BaqService } from '../baq.service'
import { Observable, Subscription } from 'rxjs';
import { FactOrderss } from '../baqdata';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})


export class Page3Component implements OnInit {

  private orders;

  columnsToDisplay: String[] = ['Month','AmountEol','AmountGen','ShippedEol','ShippedGen'];
    
  constructor(private data: BaqService) {
  }

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.data.getBaqData().subscribe(baq => this.dataSource.data = baq.Fact_Orderss)
    this.dataSource.sort = this.sort;
  }

}