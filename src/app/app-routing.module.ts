import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductsModule} from './modules/products/products.module';
import {AdminModule} from './modules/admin/admin.module';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ArticlesModule} from './modules/articles/articles/articles.module';
import {ToModule} from './modules/to/to.module';
import {RolesGuard} from './dto/guards/roles.guard';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: './modules/products/products.module#ProductsModule'},
  {path: 'admin', canActivate: [RolesGuard], loadChildren: './modules/admin/admin.module#AdminModule', data: {
      expectedRole: ['admin']}},
  {path: 'contacts', component: ContactsComponent},
  {path: 'products', loadChildren: './modules/product/product.module#ProductModule'},
  {path: 'articles', loadChildren: './modules/articles/articles/articles.module#ArticlesModule'},
  {path: 'to', loadChildren: './modules/to/to.module#ToModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ProductsModule, AdminModule, ArticlesModule, ToModule]
})
export class AppRoutingModule { }
