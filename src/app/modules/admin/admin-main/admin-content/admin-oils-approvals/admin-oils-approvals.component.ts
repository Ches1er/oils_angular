import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApprovalsService} from '../../../../../services/goods/approvals/approvals.service';
import {AdminMessagesService} from '../../../../../services/messages/admin-messages.service';

@Component({
  selector: 'app-admin-oils-approvals',
  templateUrl: './admin-oils-approvals.component.html',
  styleUrls: ['./admin-oils-approvals.component.less']
})
export class AdminOilsApprovalsComponent implements OnInit {
  get approvals(): any[] {
    return this.pApprovals;
  }

  set approvals(value: any[]) {
    this.pApprovals = value;
  }

  get formHide() {
    return this.pFormHide;
  }

  set formHide(value) {
    this.pFormHide = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  constructor(private approvalsService: ApprovalsService, private adminMessageService: AdminMessagesService) {
  }

  private pFormHide = true;
  private pWhatHaveToDo: string;
  private pApprovals = [];
  activatedApproval = null;
  addChangeApproval: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    definer: new FormControl('')
  });

  ngOnInit() {

  }

  onApprovalClick(def: string, event) {
    event.preventDefault();
    this.whatHaveToDo = 'add';
    this.activatedApproval = def;
    this.formHide = false;
    this.addChangeApproval.patchValue({
      definer: def
    });
    this.fillInApprovalsList(def);
  }
  private fillInApprovalsList(def: string): void {
    const method = def.toLowerCase() + 'Approvals';
    this.approvalsService.approvals('all', def).subscribe(resp => {
        this.approvals = resp;
      }
    );
  }

  onApprovalSubmit() {
    this.approvalsService.addApproval(this.whatHaveToDo, this.addChangeApproval.value).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление значения допуска: ' + this.addChangeApproval.value.definer, 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление нового допуска: ' + this.addChangeApproval.value.definer, 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление нового допуска: ' + this.addChangeApproval.value.definer,
          'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление нового допуска: ' + this.addChangeApproval.value.definer,
          'Такой допуск уже существует! Если хотите изменить ее данные, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.fillInApprovalsList(this.addChangeApproval.value.definer);
    });
  }

  fillInApproval(value: any) {
    this.approvals.filter(volume => {
      if (volume.id == value) {
        this.addChangeApproval.patchValue({
          id: volume.id,
          name: volume.name
        });
      }
    });
    this.whatHaveToDo = 'update';
  }

  clearFields(e?) {
    if (e) {
      e.preventDefault();
    }
    this.addChangeApproval.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }
}
