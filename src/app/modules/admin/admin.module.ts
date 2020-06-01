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
import { AdminParamsProductsGroupsComponent } from './admin-main/admin-content/admin-oils-params/admin-params-products-groups/admin-params-products-groups.component';
import { AdminParamsBrandsComponent } from './admin-main/admin-content/admin-oils-params/admin-params-brands/admin-params-brands.component';
import {ServerResponseModule} from '../server-response/server-response.module';
import {SharedModule} from '../shared/shared.module';
import { AdminParamsVolumeComponent } from './admin-main/admin-content/admin-oils-params/admin-params-volume/admin-params-volume.component';
import { AdminParamsViscComponent } from './admin-main/admin-content/admin-oils-params/admin-params-visc/admin-params-visc.component';
import { AdminParamsAceaComponent } from './admin-main/admin-content/admin-oils-params/admin-params-acea/admin-params-acea.component';
import { AdminParamsApiComponent } from './admin-main/admin-content/admin-oils-params/admin-params-api/admin-params-api.component';

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
  declarations: [AdminMainComponent, AdminNavComponent, AdminOilsParamsComponent, AdminOilsApprovalsComponent, AdminOilsGoodsComponent, AdminParamsProductsGroupsComponent, AdminParamsBrandsComponent, AdminParamsVolumeComponent, AdminParamsViscComponent, AdminParamsAceaComponent, AdminParamsApiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ImagesPickerModule,
    ServerResponseModule,
    SharedModule
  ]
})
export class AdminModule { }
