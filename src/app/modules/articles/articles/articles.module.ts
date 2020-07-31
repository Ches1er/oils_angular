import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesMainComponent } from './articles-main/articles-main.component';
import { ArticlesNavComponent } from './articles-main/articles-nav/articles-nav.component';
import { ArticlesContentComponent } from './articles-main/articles-content/articles-content.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: ArticlesMainComponent, children: [
      {path: '', redirectTo: 'article_default', pathMatch: 'full'},
      {path: 'article_default', component: ArticlesContentComponent},
      {path: 'article/:id', component: ArticlesContentComponent},
    ]}
];

@NgModule({
  declarations: [ArticlesMainComponent, ArticlesNavComponent, ArticlesContentComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class ArticlesModule { }
