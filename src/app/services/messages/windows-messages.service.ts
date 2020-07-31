import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowsMessagesService {

  private pLoginWindowShow: Subject<null> = new Subject<null>();
  private pProductOilWindowShow: Subject<any> = new Subject<any>();

  constructor() {
  }

  // GETTERS

  get loginWindowShowMessage() {
    return this.pLoginWindowShow;
  }

  get productOilWindowShowMessage(): Subject<any> {
    return this.pProductOilWindowShow;
  }

  // FUNCTIONS

  public loginWindowShow() {
    this.pLoginWindowShow.next(null);
  }

  public productOilWindowShow(data) {
    this.pProductOilWindowShow.next(data);
  }
}
