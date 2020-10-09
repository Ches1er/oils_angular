import {Component, OnInit} from '@angular/core';
import {Image} from '../../../../../dto/images/Image';
import {AdminMessagesService} from '../../../../../services/messages/admin-messages.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToService} from '../../../../../services/to/to.service';
import {Goods} from '../../../../../dto/to/goods/Goods';
import {BrandsService} from '../../../../../services/goods/brands/brands.service';

@Component({
  selector: 'app-admin-to',
  templateUrl: './admin-to.component.html',
  styleUrls: ['./admin-to.component.less']
})
export class AdminToComponent implements OnInit {
  get models(): any {
    return this.pModels;
  }

  set models(value: any) {
    this.pModels = value;
  }

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
  private pModels = null;
  private pArticles = null;
  private whatHaveToDo = 'add';
  private isGoodsChanges = false;
  private pGoods = [];
  private pExchanges = null;
  private pGroups = null;
  private pChoosenImg: Image = null;
  private blockDefiner = false;
  goodsItemNameError = [];
  goodsItemArtError = [];
  goodsItemPriceError = [];
  prevId = 0;
  addChangeArticle: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    idModel: new FormControl('', Validators.required),
    goods: new FormControl(''),
    img: new FormControl('')
  });
  addGoodsItem: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    idGroup: new FormControl('', Validators.required),
    catNumber: new FormControl(''),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    idExchange: new FormControl('', Validators.required),
  });

  get ca() {
    return this.addChangeArticle;
  }

  get gi() {
    return this.addGoodsItem;
  }

  constructor(private adminMessageService: AdminMessagesService, private toService: ToService, private brandsService: BrandsService) {
  }

  ngOnInit() {
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
    this.ca.patchValue({
      img: image.id
    });
  }


  public onArticleSubmit() {
    const goodsStr = [];
    this.goods.map(e => {
      goodsStr.push(JSON.stringify(e));
    });
    this.ca.patchValue({goods: goodsStr.join(';')});
    this.toService.addTo(this.ca.value, this.whatHaveToDo, this.isGoodsChanges).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление данных о ТО', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление нового ТО', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление нового ТО', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление нового ТО',
          'ТО с таким авто уже существует! Если хотите изменить его данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateAutos(this.ca.controls.idModel);
    });
  }

  clearFields(e?) {
    if (e) {
      e.preventDefault();
    }
    this.ca.patchValue({
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
    this.brandsService.brandsByType(4, 'all').subscribe(resp => {
      this.brands = resp;
    });
  }

  private updateModels(brandId: any) {
    this.toService.models(brandId).subscribe(r => {
      this.models = r;
    });
  }

  updateAutos(modelId) {
    this.articles = null;
    this.ca.patchValue({idModel: modelId});
    this.toService.autos(modelId).subscribe(resp => this.articles = resp);
  }

  public getAuto(autoId) {
    this.isGoodsChanges = false;
    this.articles.map(article => {
      if (article.id == autoId) {
        this.ca.patchValue({id: article.id, name: article.name, idBrand: article.idBrand, img: article.imgId});
        this.choosenImg = new Image(article.id_image, 'name', article.img);
        this.toService.goods(article.id, 0).subscribe(g => {
          g.idGroup = Number(g.idGroup);
          this.pGoods = g;
        });
        this.whatHaveToDo = 'update';
      }
    });
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
      this.gi.get('catNumber').value, this.addGoodsItem.get('idGroup').value, this.addGoodsItem.get('idExchange').value,
      '', '');
    this.goods.push(goodsItems);
    this.isGoodsChanges = true;
  }

  private checkGoodsItemErrors(definer) {
    let hasErrors = 0;
    const propertyName = 'goodsItem' + definer + 'Error';
    for (let i = 0; i < this[propertyName].length; i++) {
      if (this[propertyName][i]) {
        hasErrors = 1;
        i = this[propertyName].length;
      }
    }
    if (!hasErrors) this[propertyName] = [];
  }

  nameChange(name: any, id: any) {
    if (name === '') {
      this.goodsItemNameError.push('Название товара не должно быть пустым!');
    }
    if (name !== '') {
      this.goods.map(e => {
        if (e.id == id) {
          this.goodsItemNameError.pop();
          this.checkGoodsItemErrors('Name');
          e.name = name;
        }
      });
    }
    this.isGoodsChanges = true;
  }

  catNumberChange(catNumber: any, id: any) {
    if (catNumber === '') {
      this.goodsItemArtError.push('Aртикул товара не должен быть пустым!');
    }
    if (catNumber !== '') {
      this.goods.map(e => {
        if (e.id == id) {
          this.goodsItemArtError.pop();
          this.checkGoodsItemErrors('Art');
          e.catNumber = catNumber;
        }
      });
    } else {
      return null;
    }
    this.isGoodsChanges = true;
  }


  priceChange(price: any, id: any) {
    if (price === '' || !this.isNumber(price)) {
      if (this.prevId === id) {
        return null;
      }
      this.goodsItemPriceError.push('Значение в поле "Цена товара" пустое или это не число.');
      this.prevId = id;
    }
    if (price !== '' && this.isNumber(price)) {
      this.goods.map(e => {
        if (e.id == id) {
          this.goodsItemPriceError.pop();
          this.checkGoodsItemErrors('Price');
          e.price = price;
        }
      });
    }
    this.isGoodsChanges = true;
  }

  private isNumber(num) {
    const regExp = new RegExp('^[0-9]*$');
    return regExp.test(num);
  }

  imagesPickerShow(e) {
    // change blockDefiner for working only in one block, else pictures will change in all blocks
    this.blockDefiner = true;
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }
}
