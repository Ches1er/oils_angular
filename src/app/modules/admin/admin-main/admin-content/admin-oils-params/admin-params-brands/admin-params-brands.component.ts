import {Component, OnInit} from '@angular/core';
import {BrandsService} from '../../../../../../services/goods/brands/brands.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Image} from '../../../../../../dto/images/Image';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';
import {ProductsTypesService} from '../../../../../../services/goods/productTypes/products-types.service';
import {CheckboxItem} from '../../../../../../classes/CheckboxItem';

@Component({
  selector: 'app-admin-params-brands',
  templateUrl: './admin-params-brands.component.html',
  styleUrls: ['./admin-params-brands.component.less']
})
export class AdminParamsBrandsComponent implements OnInit {
  get usedTypes(): any[] {
    return this.pUsedTypes;
  }

  set usedTypes(value: any[]) {
    this.pUsedTypes = value;
  }
  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }

  get brands(): any[] {
    return this.pBrands;
  }

  set brands(value: any[]) {
    this.pBrands = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  private pBrands = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private blockDefiner = false;
  private pUsedTypes = null;
  typesOptions = [];

  addChangeBrands: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    img: new FormControl(''),
    types: new FormControl('')
  });

  constructor(private brandsService: BrandsService,
              private adminMessageService: AdminMessagesService,
              private productTypesService: ProductsTypesService) {
  }

  ngOnInit() {
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.updateBrands();
    this.updateProductTypes();
    this.adminMessageService.typeUpdateCreateMessage.subscribe(resp => {
      this.updateProductTypes();
    });
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
    this.addChangeBrands.patchValue({
      img: image.id
    });
  }

  private updateBrands() {
    this.brandsService.brands.subscribe(resp => {
      resp.forEach(e => {
        e.types = e.types.split(',');
      });
      this.brands = resp;
    });
  }

  private updateProductTypes() {
    this.productTypesService.ProductsTypes.subscribe(resp => {
      this.typesOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }

  onBrandsSubmit() {
    this.brandsService.addBrand(this.addChangeBrands.value, this.whatHaveToDo).subscribe(resp => {
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
      this.updateBrands();
    });
  }
  onTypesChange(value) {
    const t = value.join(',');
    this.addChangeBrands.patchValue({types: t});
  }

  imagesPickerShow(e) {
    // change blockDefiner for working only in one block, else pictures will change in all blocks
    this.blockDefiner = true;
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.addChangeBrands.patchValue({
      id: '',
      name: '',
      img: '',
    });
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    this.usedTypes = null;
    this.typesOptions = [];
    this.updateProductTypes();
  }

  fillInBrand(value) {
    this.brands.filter(brand => {
      if (brand.id == value) {
        this.addChangeBrands.patchValue({
          id: brand.id,
          name: brand.name,
          img: brand.id_image,
          types: brand.types
        });
        this.usedTypes = brand.typesNames.split(',');
        this.choosenImg = new Image(brand.id_image, 'name', brand.img);
        this.whatHaveToDo = 'update';
      }
    });
  }


}
