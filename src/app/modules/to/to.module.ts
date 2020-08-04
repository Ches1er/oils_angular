import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToMainComponent } from './to-main/to-main.component';
import { ToNavComponent } from './to-main/to-nav/to-nav.component';
import { ToContentComponent } from './to-main/to-content/to-content.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: ToMainComponent, children: [
      {path: '', redirectTo: 'to_default', pathMatch: 'full'},
      {path: 'to_default', component: ToContentComponent},
      {path: 'auto_goods/:id', component: ToContentComponent},
    ]}
];
@NgModule({
  declarations: [ToMainComponent, ToNavComponent, ToContentComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class ToModule { }
