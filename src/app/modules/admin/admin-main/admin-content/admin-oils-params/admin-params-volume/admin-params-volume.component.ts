import { Component, OnInit } from '@angular/core';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';
import {MainPropertiesService} from '../../../../../../services/goods/mainProperties/main-properties.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-params-volume',
  templateUrl: './admin-params-volume.component.html',
  styleUrls: ['./admin-params-volume.component.less']
})
export class AdminParamsVolumeComponent implements OnInit {
  get volumes(): any[] {
    return this.pVolumes;
  }

  set volumes(value: any[]) {
    this.pVolumes = value;
  }
  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  private pVolumes = [];
  private pWhatHaveToDo: string;
  addChangeVolume: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });
  constructor(private adminMessageService: AdminMessagesService, private mainProperties: MainPropertiesService) { }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.updateVolumes();
  }
  get fc() { return this.addChangeVolume.controls; }
  get f() { return this.addChangeVolume; }
  private updateVolumes() {
    this.mainProperties.volume('all').subscribe(resp => {
      this.pVolumes = resp;
    });
  }

  onVolumesSubmit() {
    this.mainProperties.addVolume(this.addChangeVolume.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление объема', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление нового объема', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление нового объема', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление нового объема',
          'Такой объем уже существует! Если хотите изменить его данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.updateVolumes();
    });

  }

  fillInVolume(value: any) {
    this.volumes.filter(volume => {
      if (volume.id == value) {
        this.addChangeVolume.patchValue({
          id: volume.id,
          name: volume.name
        });
      }
    });
    this.whatHaveToDo = 'update';
  }

  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.addChangeVolume.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }
}
