import { Component, OnInit } from '@angular/core';
import {BrandsService} from '../../../../../../services/goods/brands/brands.service';
import {ToService} from '../../../../../../services/to/to.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';

@Component({
  selector: 'app-admin-to-models',
  templateUrl: './admin-to-models.component.html',
  styleUrls: ['./admin-to-models.component.less']
})
export class AdminToModelsComponent implements OnInit {
  get models(): any[] {
    return this.pModels;
  }

  set models(value: any[]) {
    this.pModels = value;
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
  get productType() {
    return this.pProductType;
  }
  constructor(private brandsService: BrandsService, private toService: ToService, private adminMessageService: AdminMessagesService) { }
  private pBrands = [];
  private pModels = [];
  private pWhatHaveToDo: string;
  private pProductType = 4;
  addChangeModels: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    idBrand: new FormControl('', Validators.required)
  });
  get f() {return this.addChangeModels; }
  get fc() {return this.addChangeModels.controls; }
  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.adminMessageService.brandsUpdateCreateMessage.subscribe(() => {
      this.updateBrands();
    });
    this.updateBrands();
  }
  private updateBrands() {
    this.brandsService.brandsByType(4, 'all').subscribe(resp => {
      resp.forEach(e => {
        if (e.types) e.types = e.types.split(',');
      });
      this.brands = resp;
    });
  }
  updateModels(brandId: any) {
    this.toService.models(brandId).subscribe(r => {
      this.f.patchValue({idBrand: brandId})
      this.models = r;
    });
  }

  onChangeModelsSubmit() {
    this.toService.addModel(this.f.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление данных о модели', 'Данные успешно обновлены'];
        this.adminMessageService.brandUpdateCreate();
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление новой модели', 'Данные успешно добавлены'];
        this.adminMessageService.brandUpdateCreate();
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление новой модели', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление новой модели',
          'Модель с таким названием уже существует! Если хотите изменить данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateModels(this.fc.idBrand.value);
    });
  }

  fillInModel(value: any) {
    this.models.filter(model => {
      if (model.id == value) {
        this.f.patchValue({
          id: model.id,
          name: model.name,
          idBrand: model.idBrand
        });
        this.whatHaveToDo = 'update';
      }
    });
  }
  clearFields(e?) {
    if (e) {
      e.preventDefault();
    }
    this.f.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }

  updateBrand(value: any) {
    this.f.patchValue({idBrand: value});
  }
}
