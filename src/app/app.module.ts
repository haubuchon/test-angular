import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatInputModule, MatSliderModule, MatGridListModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { GridComponent } from './grid/grid.component';
import { NavComponent } from './nav/nav.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AlbumsService } from './albums.service';
import { Sensor1Service } from './sensor1.service';
import { SensorsComponent } from './sensors/sensors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    GridComponent,
    NavComponent,
    Page2Component,
    Page3Component,
    SensorsComponent,
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatInputModule, 
    MatSliderModule ,
    MatGridListModule,

  ],

  providers: [AlbumsService, Sensor1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/