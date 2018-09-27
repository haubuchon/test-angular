import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {desc: 'Tuiles', link: '/'},
    {desc: 'Graphes', link: '/page2'},
    {desc: 'Données', link: '/page3'},
    {desc: 'Senseurs', link: '/sensors'},
  ];
}