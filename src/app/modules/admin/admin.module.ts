import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: AdminMainComponent, children: []}
];

@NgModule({
  declarations: [AdminMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
