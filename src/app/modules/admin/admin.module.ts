import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import {RouterModule, Routes} from '@angular/router';
import { AdminNavComponent } from './admin-main/admin-nav/admin-nav.component';
import { AdminOilsParamsComponent } from './admin-main/admin-content/admin-oils-params/admin-oils-params.component';
import { AdminOilsApprovalsComponent } from './admin-main/admin-content/admin-oils-approvals/admin-oils-approvals.component';
import {AdminOilsGoodsComponent} from './admin-main/admin-content/admin-oils-goods/admin-oils-goods.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImagesPickerModule} from '../images-picker/images-picker.module';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: AdminMainComponent, children: [
      {path: '', redirectTo: 'oils', pathMatch: 'full'},
      {path: 'oils', component: AdminOilsGoodsComponent},
      {path: 'oils_params', component: AdminOilsParamsComponent},
      {path: 'oils_approvals', component: AdminOilsApprovalsComponent}
    ]}
];

@NgModule({
  declarations: [AdminMainComponent, AdminNavComponent, AdminOilsParamsComponent, AdminOilsApprovalsComponent, AdminOilsGoodsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ImagesPickerModule
  ]
})
export class AdminModule { }
