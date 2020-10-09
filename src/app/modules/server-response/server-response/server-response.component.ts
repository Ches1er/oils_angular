import { Component, OnInit } from '@angular/core';
import {AdminMessagesService} from '../../../services/messages/admin-messages.service';
import {TimeInterval} from 'rxjs';

@Component({
  selector: 'app-server-response',
  templateUrl: './server-response.component.html',
  styleUrls: ['./server-response.component.less']
})
export class ServerResponseComponent implements OnInit {

  private pAction: string = null;
  private pResult: string = null;
  private pVisible = false;

  get visible(): boolean {
    return this.pVisible;
  }

  set visible(value: boolean) {
    this.pVisible = value;
  }

  get action(): string {
    return this.pAction;
  }

  set action(value: string) {
    this.pAction = value;
  }

  get result(): string {
    return this.pResult;
  }

  set result(value: string) {
    this.pResult = value;
  }

  constructor(private adminMessageService: AdminMessagesService) { }

  ngOnInit() {
    this.adminMessageService.ShowServerResponseWindowMessage.subscribe(resp => this.visible = true);
    this.adminMessageService.dataToServerResponse.subscribe(resp => {
      const data = resp.split(';');
      this.action = data[0];
      this.result = data[1];
      setTimeout(() => this.cancel(), 5000);
    });
  }
  public cancel() {
    this.visible = false;
    window.location.reload();
  }
}
