import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../../../services/goods/api/api.service';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-params-api',
  templateUrl: './admin-params-api.component.html',
  styleUrls: ['./admin-params-api.component.less']
})
export class AdminParamsApiComponent implements OnInit {
  get api(): any[] {
    return this.pApi;
  }

  set api(value: any[]) {
    this.pApi = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }
  private pWhatHaveToDo: string;
  private pApi = [];
  addChangeApi: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  });
  constructor(private apiService: ApiService, private adminMessageService: AdminMessagesService) { }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.updateApi();
  }
  private updateApi() {
    this.apiService.Api('all').subscribe(resp => {
      this.api = resp;
    });
  }
  fillInApi(value: any) {
    this.api.filter(volume => {
      if (volume.id == value) {
        this.addChangeApi.patchValue({
          id: volume.id,
          name: volume.name
        });
      }
    });
    this.whatHaveToDo = 'update';
  }
  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.addChangeApi.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }
  onApiSubmit(): void {
    this.apiService.addApi(this.addChangeApi.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление значения Acea', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление нового значения Acea', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление нового значения Acea', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление нового значения Acea',
          'Такое значение уже существует! Если хотите изменить ее данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateApi();
    });

  }

}
