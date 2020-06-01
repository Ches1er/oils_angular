import { Component, OnInit } from '@angular/core';
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
  get formHide(): boolean {
    return this.pFormHide;
  }

  set formHide(value: boolean) {
    this.pFormHide = value;
  }

  constructor(private approvalsService: ApprovalsService, private adminMessegesService: AdminMessagesService) { }
  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }
  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
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
    this.activatedApproval = def;
    this.formHide = false;
    this.addChangeApproval.patchValue({
      definer: def
    });
    if (def === 'Mb') {this.fillInMbApprovalsList(); }
    if (def === 'Bmw') {this.fillInBmwApprovalsList(); }
    if (def === 'Fiat') {this.fillInFiatApprovalsList(); }
    if (def === 'Ford') {this.fillInFordApprovalsList(); }
    if (def === 'Ren') {this.fillInRenApprovalsList(); }
    if (def === 'Vw') {this.fillInVwApprovalsList(); }
  }
  private fillInMbApprovalsList() {
    this.approvalsService.mbApprovals('all').subscribe(resp => {
      this.approvals = resp;
    });
  }
  private fillInBmwApprovalsList() {
    this.approvalsService.bmwApprovals('all').subscribe(resp => {
      this.approvals = resp;
    });
  }
  private fillInFiatApprovalsList() {
    this.approvalsService.fiatApprovals('all').subscribe(resp => {
      this.approvals = resp;
    });
  }
  private fillInFordApprovalsList() {
    this.approvalsService.fordApprovals('all').subscribe(resp => {
      this.approvals = resp;
    });
  }
  private fillInRenApprovalsList() {
    this.approvalsService.renaultApprovals('all').subscribe(resp => {
      this.approvals = resp;
    });
  }
  private fillInVwApprovalsList() {
    this.approvalsService.vwApprovals('all').subscribe(resp => {
      this.approvals = resp;
    });
  }

  onApprovalSubmit() {
    this.approvalsService.addApproval(this.whatHaveToDo, this.addChangeApproval.value).subscribe(resp => {
      this.clearFields();
      const methodName = 'fillIn' + this.addChangeApproval.value.definer + 'ApprovalsList';
      if (this[methodName]) { this[methodName](); }
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
    if (e) { e.preventDefault(); }
    this.addChangeApproval.patchValue({
      id: '',
      name: ''
    });
    this.whatHaveToDo = 'add';
  }
}
