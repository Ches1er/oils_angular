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
  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }
  get lastUpdated(): any {
    return this.pLastUpdated;
  }

  set lastUpdated(value: any) {
    this.pLastUpdated = value;
  }
  get lastAdded(): any {
    return this.pLastAdded;
  }

  set lastAdded(value: any) {
    this.pLastAdded = value;
  }
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
  private pWhatHaveToDo = 'add';
  private isGoodsChanges = false;
  private pGoods = [];
  private pExchanges = null;
  private pGroups = null;
  private pChoosenImg: Image = null;
  private blockDefiner = false;
  private pLastAdded = null;
  private pLastUpdated = null;
  showAllFields = null;
  goodsItemNameError = [];
  goodsItemArtError = [];
  goodsItemPriceError = [];
  prevId = -1;

  /* innerIndex - необходим для идентификации товарных позиций при их изменении, он инкреметируется при получении позиций при выборе авто
  и при добавлении новой товарной позиции, хранится в свойстве min, эта фича используется только в этом модуле. */
  innerIndex = 0;

  addChangeArticle: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    idModel: new FormControl('', Validators.required),
    shortDesc: new FormControl(''),
    goods: new FormControl(''),
    img: new FormControl('')
  });
  addGoodsItem: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    idGroup: new FormControl('', Validators.required),
    catNumber: new FormControl(''),
    price: new FormControl('', [Validators.required, Validators.pattern('^(0|[1-9]\\d*)(\\.\\d+)?$')]),
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
    this.updateLastAddedAndUpdated();
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

  private clearFields() {
    this.ca.patchValue({
      id: '',
      name: '',
      img: '',
      idBrand: '',
      goods: '',
      shortDesc: ''
    });
    this.whatHaveToDo = 'add';
    this.goods = [];
    this.choosenImg = null;
  }
  newAuto(e?) {
    this.models = null;
    if (e) {
      e.preventDefault();
    }
    this.clearFields();
    this.showAllFields = null;
  }

  private updateBrands() {
    this.brandsService.brandsByType(4, 'all').subscribe(resp => {
      this.brands = resp;
    });
  }

  updateModels(brandId: any) {
    this.clearFields();
    this.toService.models(brandId).subscribe(r => {
      this.models = r;
      // Устанавливаем модель по-умолчанию
      this.ca.patchValue({idModel: r[0].id});
      this.updateAutos(r[0].id);
      this.showAllFields = true;
    });
  }

  updateAutos(modelId) {
    this.articles = null;
    this.ca.patchValue({idModel: modelId});
    this.toService.autos(modelId).subscribe(resp => {
      this.articles = resp;
      this.clearFields();
      this.showAllFields = true;
    });
  }

  public getLastAddedOrUpdated(elem, modelId, autoId) {
    this.showAllFields = true;
    elem.preventDefault();
    this.articles = null;
    this.ca.patchValue({idModel: modelId});
    this.toService.autos(modelId).subscribe(resp => {
      this.articles = resp;
      this.clearFields();
      this.getAuto(autoId);
      this.toService.models(resp[0].idBrand).subscribe(r => {
        this.models = r;
      });
    });
  }

  public getAuto(autoId) {
    this.isGoodsChanges = false;
    this.articles.map(article => {
      if (article.id == autoId) {
        this.ca.patchValue({
          id: article.id, name: article.name, idBrand: article.idBrand, img: article.imgId,
          shortDesc: article.shortDesc
        });
        this.choosenImg = new Image(article.id_image, 'name', article.img);
        this.toService.goods(article.id, 0).subscribe(g => {
          // g.idGroup = Number(g.idGroup);
          this.goods = g;
          this.goods.map(e => {
            e.min = this.innerIndex;
            this.innerIndex++;
          });
        });
        this.whatHaveToDo = 'update';
      }
    });
  }

  groupChange(idGroup: any, innerId: any) {
    this.goods.map(e => {
      if (e.min == innerId) {
        e.idGroup = idGroup;
      }
    });
    this.isGoodsChanges = true;
  }

  exchangeChange(idExchange: any, innerId: any) {
    this.goods.map(e => {
      if (e.min == innerId) {
        e.idExchange = idExchange;
      }
    });
    this.isGoodsChanges = true;
  }

  removeItemFromGoods(elem, min: any) {
    elem.preventDefault();
    console.log(min);
    this.goods = this.goods.filter(e => {
      return e.min != min;
    });
    this.isGoodsChanges = true;
  }

  onGoodsItemSubmit() {
    const goodsItems = new Goods('', this.addGoodsItem.get('name').value, this.addGoodsItem.get('price').value,
      this.gi.get('catNumber').value, this.addGoodsItem.get('idGroup').value, this.addGoodsItem.get('idExchange').value,
      '', this.innerIndex);
    this.goods.push(goodsItems);
    this.isGoodsChanges = true;
    this.innerIndex++;
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

  nameChange(name: any, innerId: any) {
    if (name === '') {
      this.goodsItemNameError.push('Название товара не должно быть пустым!');
    }
    if (name !== '') {
      this.goods.map(e => {
        if (e.min == innerId) {
          this.goodsItemNameError.pop();
          this.checkGoodsItemErrors('Name');
          e.name = name;
        }
      });
    }
    this.isGoodsChanges = true;
  }

  catNumberChange(catNumber: any, innerId: any) {
    if (catNumber === '') {
      this.goodsItemArtError.push('Aртикул товара не должен быть пустым!');
    }
    if (catNumber !== '') {
      this.goods.map(e => {
        if (e.min == innerId) {
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


  priceChange(price: any, innerId: any) {
    if (price === '' || !this.isNumber(price)) {
      if (this.prevId === innerId) {
        return null;
      }
      this.goodsItemPriceError.push('Значение в поле "Цена товара" пустое или это не число.');
      this.prevId = innerId;
    }
    if (price !== '' && this.isNumber(price)) {
      this.goods.map(e => {
        if (e.min == innerId) {
          this.goodsItemPriceError.pop();
          this.checkGoodsItemErrors('Price');
          e.price = price;
        }
      });
    }
    this.isGoodsChanges = true;
  }

  private isNumber(num) {
    const regExp = new RegExp('^(0|[1-9]\\d*)(\\.\\d+)?$');
    return regExp.test(num);
  }

  imagesPickerShow(e) {
    // change blockDefiner for working only in one block, else pictures will change in all blocks
    this.blockDefiner = true;
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  private updateLastAddedAndUpdated() {
    this.toService.auto('lastAdded').subscribe(r => {
      this.lastAdded = r;
    });
    this.toService.auto('lastUpdated').subscribe(r => {
      this.lastUpdated = r;
    });
  }

  changeModel(value: any) {
    this.ca.patchValue({idModel: value});
  }
}
