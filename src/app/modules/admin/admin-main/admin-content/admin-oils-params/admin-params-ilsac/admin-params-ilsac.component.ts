import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MainPropertiesService} from '../../../../../../services/goods/mainProperties/main-properties.service';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';

@Component({
  selector: 'app-admin-params-ilsac',
  templateUrl: './admin-params-ilsac.component.html',
  styleUrls: ['./admin-params-ilsac.component.less']
})
export class AdminParamsIlsacComponent implements OnInit {
  get ilsac(): any[] {
    return this.pIlsac;
  }

  set ilsac(value: any[]) {
    this.pIlsac = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  private pWhatHaveToDo: string;
  private pIlsac = [];
  addChangeIlsac: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  });

  constructor(private mainPropService: MainPropertiesService, private adminMessageService: AdminMessagesService) {
  }

  get fc() {
    return this.addChangeIlsac.controls;
  }

  get f() {
    return this.addChangeIlsac;
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.updateIlsac();
  }

  private updateIlsac() {
    this.mainPropService.ilsac('all').subscribe(resp => {
      this.ilsac = resp;
    });
  }

  fillInIlsac(value: any) {
    this.ilsac.filter(i => {
      if (i.id == value) {
        this.f.patchValue({
          id: i.id,
          name: i.name
        });
      }
    });
    this.whatHaveToDo = 'update';
  }
  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.f.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }
  onIlsacSubmit(): void {
    this.mainPropService.addIlsac(this.f.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление значения Ilsac', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление нового значения Ilsac', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление нового значения Ilsac', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление нового значения Ilsac',
          'Такое значение уже существует! Если хотите изменить ее данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateIlsac();
    });

  }
}
