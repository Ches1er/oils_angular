import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';
import {BrandsService} from '../../../../../../services/goods/brands/brands.service';
import {Image} from '../../../../../../dto/images/Image';
import {ToService} from '../../../../../../services/to/to.service';

@Component({
  selector: 'app-admin-to-brands',
  templateUrl: './admin-to-brands.component.html',
  styleUrls: ['./admin-to-brands.component.less']
})
export class AdminToBrandsComponent implements OnInit {
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
  addChangeBrands: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    img: new FormControl(''),
    types: new FormControl('')
  });

  constructor(
              private adminMessageService: AdminMessagesService, private brandsService: BrandsService) {
  }

  ngOnInit() {
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.updateBrands();
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      // blockDefiner controls that image will change only in one block
      if (this.blockDefiner) {
        this.moveImageToTheFormControl(i);
        this.choosenImg = i;
      }
      this.blockDefiner = false;
    });
  }

  private updateBrands() {
    this.brandsService.brandsByType(4, 'all').subscribe(resp => {
      resp.forEach(e => {
        if (e.types) e.types = e.types.split(',');
      });
      this.brands = resp;
    });
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeBrands.patchValue({
      img: image.id
    });
  }

  onBrandsSubmit() {
    if (this.addChangeBrands.get('types').value === '') {
      this.addChangeBrands.patchValue({types: 'Авто'});
    }
    this.brandsService.addBrand(this.addChangeBrands.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление данных о бренде', 'Данные успешно обновлены'];
        this.adminMessageService.brandUpdateCreate();
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление нового бренда', 'Данные успешно добавлены'];
        this.adminMessageService.brandUpdateCreate();
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

  imagesPickerShow(e) {
    // change blockDefiner for working only in one block, else pictures will change in all blocks
    this.blockDefiner = true;
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  clearFields(e?) {
    if (e) {
      e.preventDefault();
    }
    this.addChangeBrands.patchValue({
      id: '',
      name: '',
      img: '',
    });
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
  }

  fillInBrand(value) {
    this.brands.filter(brand => {
      if (brand.id == value) {
        console.log(brand);
        this.addChangeBrands.patchValue({
          id: brand.id,
          name: brand.name,
          img: brand.id_image,
          types: brand.types
        });
        this.choosenImg = new Image(brand.id_image, 'name', brand.img);
        this.whatHaveToDo = 'update';
      }
    });
  }

}
