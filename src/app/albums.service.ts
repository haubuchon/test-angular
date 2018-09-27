import { Injectable } from '@angular/core';
import { Album } from './album';

@Injectable({
  providedIn: 'root',
})

export class AlbumsService {

  h : Album[];

  constructor() {

    this.h = [];
      
    var a = new Album();
    a.name = "The Wall";
    a.artist = "Pink Floyd";
    a.year = 1982;
    this.h.push(a);

    var a = new Album();
    a.name = "Breakfast in America";
    a.artist = "Supertramp";
    a.year = 1985;
    this.h.push(a);

    var a = new Album();
    a.name = "Coda";
    a.artist = "Led Zeppelin";
    a.year = 1977;
    this.h.push(a);

   }

  getAlbums(): Album[] {
    return this.h;
  }

}