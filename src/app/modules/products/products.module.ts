import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { OilsComponent } from './oils/oils.component';
import { ProductsMainComponent } from './products-main/products-main.component';
import {TransmissionComponent} from "./transmission/transmission.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: 'main', component: ProductsMainComponent},
  {path: 'oils', component: OilsComponent, data: {definer: ['oils']}},
  {path: 'transmission', component: TransmissionComponent, data: {definer: ['transmission']}}
];

@NgModule({
  declarations: [OilsComponent, ProductsMainComponent, TransmissionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
