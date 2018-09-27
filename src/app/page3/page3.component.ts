import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})


export class Page3Component implements OnInit {

  albums: Album[];
  columnsToDisplay: String[] = ['name', 'artist', 'year'];

  constructor(private albumservice: AlbumsService) {
  }

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.data = this.albumservice.getAlbums();
    this.dataSource.sort = this.sort;
  }

  cl(city) {
    alert(city);
  }

}