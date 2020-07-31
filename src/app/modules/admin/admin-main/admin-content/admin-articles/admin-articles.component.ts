import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../../../../services/articles/articles.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Image} from '../../../../../dto/images/Image';
import {AngularEditorCfg} from '../../../../../config/AngularEditorConfig';
import {AdminMessagesService} from '../../../../../services/messages/admin-messages.service';
import {ProductsService} from '../../../../../services/goods/products.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.less']
})
export class AdminArticlesComponent implements OnInit {
  get goods(): any {
    return this.pGoods;
  }

  set goods(value: any) {
    this.pGoods = value;
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
  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }
  private pChoosenImg: Image = null;
  private pThemes = null;
  private pGoods = [];
  private pArticles = null;
  private whatHaveToDo = 'add';

  whatToFind = '';
  oldWhatToFind = null;
  products = null;

  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;
  addChangeArticle: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    imgId: new FormControl(''),
    shortDesc: new FormControl('', Validators.required),
    fullDesc: new FormControl('', Validators.required),
    goods: new FormControl(''),
    foundGoods: new FormControl(''),
    idTheme: new FormControl('', Validators.required),
  });

  constructor(private articleService: ArticlesService, private adminMessageService: AdminMessagesService,
              private productService: ProductsService) { }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.updateThemes();
    this.updateArticles();
    this.adminMessageService.articlesThemesChangesMessage.subscribe(resp => this.updateThemes());
    this.addChangeArticle.get('foundGoods').valueChanges.subscribe(e => {
      this.whatToFind = this.addChangeArticle.get('foundGoods').value;
      this.find();
    });
  }

  private updateThemes() {
    this.articleService.themes.subscribe(resp => {
      this.themes = resp;
    });
  }
  private updateArticles() {
    this.articleService.articles('all').subscribe(resp => {
      this.articles = resp;
    });
  }
  public getArticle(article) {
    this.addChangeArticle.patchValue({
      id: article.id, name: article.name, imgId: article.idImg, shortDesc: article.shortDesc, fullDesc: article.fullDesc,
      goods: article.pGoods, idTheme: article.idTheme
    });
    this.getGoods(article.pGoods);
    this.choosenImg = new Image(article.imgId, 'name', article.img);
    this.whatHaveToDo = 'update';
  }
  private getGoods(goodsStr) {
    const goodsArr = goodsStr.split(',');
    goodsArr.map(estr => {
      const eArr = estr.split(':');
      if (eArr[1] === 'goods_oils') {
        this.productService.getOil(eArr[0]).subscribe(resp => {
          this.goods.push(resp);
        });
      }
    });
  }
  private makeGoodsStr() {
    const productsArray = [];
    this.goods.map(e => {
      productsArray.push([e.id, e.tableDefiner].join(':'));
    });
    const strProducts = productsArray.join(',');
    this.addChangeArticle.patchValue({goods: strProducts});
  }

  onArticleSubmit() {
    this.makeGoodsStr();
    this.articleService.addArticle(this.addChangeArticle.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление статьи', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление новой статьи', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление новой статьи', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление новой статьи',
          'Такая статья уже существует! Если хотите изменить ее, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateThemes();
      this.updateArticles();
      this.choosenImg = null;
      this.goods = [];
    });
  }
  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.addChangeArticle.patchValue({
      id: '',
      name: '',
      imgId: '',
      shortDesc: '',
      fullDesc: '',
      goods: '',
      idTheme: ''
    });
    this.whatHaveToDo = 'add';
  }
  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  removeGoods(id: any) {
    this.goods = this.goods.filter(e => {
      return e.id !== id;
    });
  }
  private find() {
    if (this.whatToFind === '') {this.products = null; } else {
      this.productService.findGoods(this.whatToFind).subscribe(resp => {
        if (resp.length === 0 || this.whatToFind === '') {
          this.products = null;
        } else {
          this.products = resp;
          this.oldWhatToFind = this.whatToFind;
        }
      });
    }
  }

  addProduct(id: any, tableDefiner: any) {
    if (tableDefiner === 'goods_oils') {
      this.productService.getOil(id).subscribe(resp => {
        this.goods.push(resp);
      });
    }
    this.products = null;
    const findField = document.getElementById('findFieldArt');
    findField.focus();
  }
}
