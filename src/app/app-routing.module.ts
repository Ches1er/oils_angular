import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductsModule} from './modules/products/products.module';
import {AdminModule} from './modules/admin/admin.module';
import {ContactsComponent} from './components/contacts/contacts.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: './modules/products/products.module#ProductsModule'},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'products', loadChildren: './modules/product/product.module#ProductModule'},
  {path: 'articles', loadChildren: './modules/product/product.module#ProductModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ProductsModule, AdminModule]
})
export class AppRoutingModule { }
