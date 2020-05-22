import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProductsModule} from "./modules/products/products.module";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: './modules/products/products.module#ProductsModule'},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  {path: 'product', loadChildren: './modules/product/product.module#ProductModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ProductsModule]
})
export class AppRoutingModule { }
