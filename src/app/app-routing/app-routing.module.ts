import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from '../grid/grid.component';
import { Page2Component} from '../page2/page2.component';
import { Page3Component} from '../page3/page3.component';
import { SensorsComponent } from '../sensors/sensors.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'sensors', component: SensorsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }