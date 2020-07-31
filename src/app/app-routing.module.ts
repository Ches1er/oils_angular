import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductsModule} from './modules/products/products.module';
import {AdminModule} from './modules/admin/admin.module';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ArticlesModule} from './modules/articles/articles/articles.module';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: './modules/products/products.module#ProductsModule'},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'products', loadChildren: './modules/product/product.module#ProductModule'},
  {path: 'articles', loadChildren: './modules/articles/articles/articles.module#ArticlesModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ProductsModule, AdminModule, ArticlesModule]
})
export class AppRoutingModule { }
