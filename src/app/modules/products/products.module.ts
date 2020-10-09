import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { OilsComponent } from './oils/oils.component';
import { ProductsMainComponent } from './products-main/products-main.component';
import {TransmissionComponent} from './transmission/transmission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {path: 'main', component: ProductsMainComponent},
  {path: 'oils', component: OilsComponent, data: {definer: ['oils']}},
  {path: 'transmission', component: TransmissionComponent, data: {definer: ['transmission']}}
];

@NgModule({
  declarations: [OilsComponent, ProductsMainComponent, TransmissionComponent],
  imports: [
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#252525',
      secondaryColour: '#252525',
      tertiaryColour: '#252525'
    }),
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule, NgxPaginationModule
  ]
})
export class ProductsModule { }
