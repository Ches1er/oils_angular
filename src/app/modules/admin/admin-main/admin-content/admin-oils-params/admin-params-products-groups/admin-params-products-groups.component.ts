import {Component, OnInit} from '@angular/core';
import {ProductsTypesService} from '../../../../../../services/goods/productTypes/products-types.service';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Image} from '../../../../../../dto/images/Image';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';

@Component({
  selector: 'app-admin-params-products-groups',
  templateUrl: './admin-params-products-groups.component.html',
  styleUrls: ['./admin-params-products-groups.component.less']
})
export class AdminParamsProductsGroupsComponent implements OnInit {
  get productsTypes(): any[] {
    return this.pProductsTypes;
  }

  set productsTypes(value: any[]) {
    this.pProductsTypes = value;
  }

  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }

  addChangeProductTypes: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    img: new FormControl('')
  });
  private pProductsTypes = [];

  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  private blockDefiner = false;

  constructor(private productsTypesService: ProductsTypesService, private adminMessageService: AdminMessagesService) {
  }

  ngOnInit() {
    this.updateProductsTypes();
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      // blockDefiner controls that image will change only in one (client) block
      if (this.blockDefiner) {
        this.moveImageToTheFormControl(i);
        this.choosenImg = i;
      }
      this.blockDefiner = false;
    });
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeProductTypes.patchValue({
      img: image.id
    });
  }

  private updateProductsTypes() {
    this.productsTypesService.ProductsTypes.subscribe(resp => {
      this.productsTypes = resp;
    });
  }

  imagesPickerShow(e) {
    // change blockDefiner for working only in clients block, else pictures will change in obj block too
    this.blockDefiner = true;
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  clearFields(e) {
    e.preventDefault();
    this.addChangeProductTypes.patchValue({
      id: '',
      name: '',
      img: '',
    });
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    this.onSubmitResponse = null;
  }

  public onProductsTypesSubmit() {
    this.productsTypesService.add(this.addChangeProductTypes.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление данных о товарной группе', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.adminMessageService.typeUpdateCreate();
      }
      if (resp === 'insert success') {
        const data = ['добавление товарной группы', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.adminMessageService.typeUpdateCreate();
      }
      if (resp === 'error') {
        const data = ['добавление-обновление товарной группы', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление товарной группы',
          'Тип с таким названием уже существует! Если хотите изменить его данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateProductsTypes();
    });
  }

  fillInProductType(value: any) {
    this.productsTypes.filter(pt => {
      if (pt.id == value) {
        this.addChangeProductTypes.patchValue({
          id: pt.id,
          name: pt.name,
          img: pt.imgId
        });
        this.choosenImg = new Image(pt.imgId, 'name', pt.img);
        this.whatHaveToDo = 'update';
      }
    });
  }
}
