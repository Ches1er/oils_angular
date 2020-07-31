import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../../../../services/articles/articles.service';

@Component({
  selector: 'app-articles-nav',
  templateUrl: './articles-nav.component.html',
  styleUrls: ['./articles-nav.component.less']
})
export class ArticlesNavComponent implements OnInit {
  get themes(): any {
    return this.pThemes;
  }

  set themes(value: any) {
    this.pThemes = value;
  }
  get articles(): any {
    return this.pArticles;
  }

  set articles(value: any) {
    this.pArticles = value;
  }
  constructor(private articlesService: ArticlesService) { }
  private pThemes = null;
  private pArticles = null;
  public choosenTheme = null;
  ngOnInit() {
    this.articlesService.themes.subscribe(resp => (this.themes = resp));
  }
  getArticles(id: any) {
    this.articles = null;
    this.choosenTheme = id;
    this.articlesService.articles(id).subscribe(resp => {
      this.articles = resp;
    });
  }

}
