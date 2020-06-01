import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';
import {MainPropertiesService} from '../../../../../../services/goods/mainProperties/main-properties.service';

@Component({
  selector: 'app-admin-params-visc',
  templateUrl: './admin-params-visc.component.html',
  styleUrls: ['./admin-params-visc.component.less']
})
export class AdminParamsViscComponent implements OnInit {
  get viscosity(): any[] {
    return this.pViscosity;
  }

  set viscosity(value: any[]) {
    this.pViscosity = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  private pWhatHaveToDo: string;
  private pViscosity = [];
  addChangeViscosity: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  });

  constructor(private adminMessageService: AdminMessagesService, private mainProperties: MainPropertiesService) {
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.updateViscosity();
  }

  private updateViscosity() {
    this.mainProperties.viscosity('all').subscribe(resp => {
      this.viscosity = resp;
    });
  }
  fillInViscosity(value: any) {
    this.viscosity.filter(volume => {
      if (volume.id == value) {
        this.addChangeViscosity.patchValue({
          id: volume.id,
          name: volume.name
        });
      }
    });
    this.whatHaveToDo = 'update';
  }
  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.addChangeViscosity.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }

  onViscositySubmit() {
    this.mainProperties.addViscosity(this.addChangeViscosity.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление вязкости', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление новой вязкости', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление новой вязкости', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление новой вязкости',
          'Такая вязкость уже существует! Если хотите изменить ее данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateViscosity();
    });

  }
}
