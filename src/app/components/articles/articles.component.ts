import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../../services/articles/articles.service';
import {Article} from '../../dto/articles/Article';
import {ProductsService} from '../../services/goods/products.service';
import {WindowsMessagesService} from '../../services/messages/windows-messages.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  get goods(): any[] {
    return this.pGoods;
  }

  set goods(value: any[]) {
    this.pGoods = value;
  }

  get article(): Article {
    return this.pArticle;
  }

  set article(value: Article) {
    this.pArticle = value;
  }

  get articles(): any {
    return this.pArticles;
  }

  set articles(value: any) {
    this.pArticles = value;
  }

  get themes(): any {
    return this.pThemes;
  }

  set themes(value: any) {
    this.pThemes = value;
  }

  private pThemes = null;
  private pArticles = null;
  private pArticle: Article = null;
  public choosenTheme = null;
  private pGoods = [];

  constructor(private articlesService: ArticlesService, private productService: ProductsService,
              private windowsMessagesService: WindowsMessagesService) {
  }

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

  getArticle(event, id: any) {
    // Предотвращает клик по родительскому элементу
    event.stopPropagation();
    // *
    let newArticle;
    newArticle = this.articles.filter(article => {
      return article.id === id;
    });
    newArticle[0].pGoods = newArticle[0].pGoods.split(',');
    this.article = newArticle[0];
    this.getArticlesGoods();
  }

  private getArticlesGoods(): void {
    this.article.goods.map(e => {
      e = e.split(':');
      if (e[1] === 'goods_oils') {
        this.productService.getOil(e[0]).subscribe(resp => {
          this.goods.push(resp);
        });
      }
    });
  }
  showGoods(id: any, tableDefiner: any) {
    this.windowsMessagesService.productOilWindowShow([id, tableDefiner]);
  }
}
