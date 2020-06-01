import { Component, OnInit } from '@angular/core';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';
import {AceaServiceService} from '../../../../../../services/goods/acea/acea-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-params-acea',
  templateUrl: './admin-params-acea.component.html',
  styleUrls: ['./admin-params-acea.component.less']
})
export class AdminParamsAceaComponent implements OnInit {
  get acea(): any[] {
    return this.pAcea;
  }

  set acea(value: any[]) {
    this.pAcea = value;
  }
  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }
  private pWhatHaveToDo: string;
  private pAcea = [];
  addChangeAcea: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  });
  constructor(private adminMessageService: AdminMessagesService, private aceaService: AceaServiceService) { }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.updateAcea();
  }
  private updateAcea() {
    this.aceaService.Acea('all').subscribe(resp => {
      this.acea = resp;
    });
  }
  fillInAcea(value: any) {
    this.acea.filter(volume => {
      if (volume.id == value) {
        this.addChangeAcea.patchValue({
          id: volume.id,
          name: volume.name
        });
      }
    });
    this.whatHaveToDo = 'update';
  }
  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.addChangeAcea.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }
  onAceaSubmit(): void {
    this.aceaService.addAcea(this.addChangeAcea.value, this.whatHaveToDo).subscribe(resp => {
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
      this.updateAcea();
    });

  }
}
