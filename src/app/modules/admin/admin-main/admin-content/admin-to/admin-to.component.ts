import {Component, OnInit} from '@angular/core';
import {Image} from '../../../../../dto/images/Image';
import {AdminMessagesService} from '../../../../../services/messages/admin-messages.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToService} from '../../../../../services/to/to.service';
import {Goods} from '../../../../../dto/to/goods/Goods';

@Component({
  selector: 'app-admin-to',
  templateUrl: './admin-to.component.html',
  styleUrls: ['./admin-to.component.less']
})
export class AdminToComponent implements OnInit {
  get groups(): any {
    return this.pGroups;
  }

  set groups(value: any) {
    this.pGroups = value;
  }

  get exchanges(): any {
    return this.pExchanges;
  }

  set exchanges(value: any) {
    this.pExchanges = value;
  }

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

  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }

  get brands(): any {
    return this.pBrands;
  }

  set brands(value: any) {
    this.pBrands = value;
  }

  private pBrands = null;
  private pArticles = null;
  private whatHaveToDo = 'add';
  private isGoodsChanges = false;
  private pGoods = [];
  private pExchanges = null;
  private pGroups = null;
  private pChoosenImg: Image = null;
  private blockDefiner = false;
  addChangeArticle: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    idBrand: new FormControl('', Validators.required),
    goods: new FormControl(''),
    img: new FormControl('')
  });
  addGoodsItem: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    idGroup: new FormControl('', Validators.required),
    catNumber: new FormControl(''),
    price: new FormControl('', Validators.required),
    idExchange: new FormControl('', Validators.required),
  });

  constructor(private adminMessageService: AdminMessagesService, private toService: ToService) {
  }

  ngOnInit() {
    this.updateArticles();
    this.updateBrands();
    this.toService.groups.subscribe(g => this.groups = g);
    this.toService.exchanges.subscribe(e => this.exchanges = e);
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      // blockDefiner controls that image will change only in one block
      if (this.blockDefiner) {
        this.moveImageToTheFormControl(i);
        this.choosenImg = i;
      }
      this.blockDefiner = false;
    });
  }
  private moveImageToTheFormControl(image: Image) {
    this.addChangeArticle.patchValue({
      img: image.id
    });
  }

  updateArticles() {
    this.articles = null;
    this.toService.autos('all').subscribe(resp => this.articles = resp);
  }

  public onArticleSubmit() {
    const goodsStr = [];
    this.goods.map(e => {
      goodsStr.push(JSON.stringify(e));
    });
    this.addChangeArticle.patchValue({goods: goodsStr.join(';')});
    this.toService.addTo(this.addChangeArticle.value, this.whatHaveToDo, this.isGoodsChanges).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление данных о бренде', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление нового бренда', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление нового бренда', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление нового бренда',
          'Бренд с таким названием уже существует! Если хотите изменить его данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateArticles();
    });
  }
  clearFields(e?) {
    if (e) {
      e.preventDefault();
    }
    this.addChangeArticle.patchValue({
      id: '',
      name: '',
      img: '',
      idBrand: '',
      goods: ''
    });
    this.whatHaveToDo = 'add';
    this.goods = [];
    this.choosenImg = null;
  }

  private updateBrands() {
    this.toService.brands.subscribe(resp => this.brands = resp);
  }

  public getArticle(article) {
    this.isGoodsChanges = false;
    this.addChangeArticle.patchValue({id: article.id, name: article.name, idBrand: article.idBrand, img: article.imgId});
    this.choosenImg = new Image(article.id_image, 'name', article.img);
    this.toService.goods(article.id, 0).subscribe(g => {
      this.pGoods = g;
    });
    this.whatHaveToDo = 'update';
  }

  groupChange(idGroup: any, idGoods: any) {
    this.goods.map(e => {
      if (e.id == idGoods) {
        e.idGroup = idGroup;
      }
    });
    this.isGoodsChanges = true;
  }

  exchangeChange(idExchange: any, idGoods: any) {
    this.goods.map(e => {
      if (e.id == idGoods) {
        e.idExchange = idExchange;
      }
    });
    this.isGoodsChanges = true;
  }

  removeItemFromGoods(elem, id: any) {
    elem.preventDefault();
    this.goods = this.goods.filter(e => {
      return e.id != id;
    });
    this.isGoodsChanges = true;
  }

  onGoodsItemSubmit() {
    const goodsItems = new Goods('', this.addGoodsItem.get('name').value, this.addGoodsItem.get('price').value,
      this.addGoodsItem.get('catNumber').value, this.addGoodsItem.get('idGroup').value, this.addGoodsItem.get('idExchange').value,
      '', '');
    this.goods.push(goodsItems);
    this.isGoodsChanges = true;
  }

  nameChange(name: any, id: any) {
    this.goods.map(e => {
      if (e.id == id) {
        e.name = name;
      }
    });
    this.isGoodsChanges = true;
  }

  catNumberChange(catNumber: any, id: any) {
    this.goods.map(e => {
      if (e.id == id) {
        e.catNumber = catNumber;
      }
    });
    this.isGoodsChanges = true;
  }

  priceChange(price: any, id: any) {
    this.goods.map(e => {
      if (e.id == id) {
        e.price = price;
      }
    });
    this.isGoodsChanges = true;
  }

  imagesPickerShow(e) {
    // change blockDefiner for working only in one block, else pictures will change in all blocks
    this.blockDefiner = true;
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }
}
