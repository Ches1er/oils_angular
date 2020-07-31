import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../../../dto/articles/Article';
import {ArticlesService} from '../../../../../services/articles/articles.service';
import {WindowsMessagesService} from '../../../../../services/messages/windows-messages.service';
import {ProductsService} from '../../../../../services/goods/products.service';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.less']
})
export class ArticlesContentComponent implements OnInit {
  get article(): Article {
    return this.pArticle;
  }

  set article(value: Article) {
    this.pArticle = value;
  }
  get goods(): any[] {
    return this.pGoods;
  }

  set goods(value: any[]) {
    this.pGoods = value;
  }
  private pArticle: Article = null;
  private pGoods = [];
  constructor(private activatedRoute: ActivatedRoute, private articlesService: ArticlesService,
              private windowsMessagesService: WindowsMessagesService, private productService: ProductsService) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.routeConfig.path === 'article_default') {
      return this.getArticle(1);
    }
    this.activatedRoute.paramMap.subscribe(params => {
      this.getArticle(params.get('id'));
    });
  }
  getArticle(id: any) {
    // Предотвращает клик по родительскому элементу
    // event.stopPropagation();
    // *
    this.goods = [];
    this.articlesService.article(id).subscribe(a => {
      this.article = a[0];
      this.article.goods = this.article.goods.split(',');
      this.getArticlesGoods();
    });

  }
  private getArticlesGoods(): void {
    this.article.goods.map(e => {
      e = e.split(':');
      this.productService.getGoodsUnit(e[0], e[1]).subscribe(resp => {
        this.goods.push(resp);
      });
    });
  }
  showGoods(id: any, tableDefiner: any) {
    this.windowsMessagesService.productOilWindowShow([id, tableDefiner]);
  }
}
