import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowsMessagesService {
  private pLoginWindowShow: Subject<null> = new Subject<null>();

  constructor() {
  }

  // GETTERS

  get loginWindowShowMessage() {
    return this.pLoginWindowShow;
  }

  // FUNCTIONS

  public loginWindowShow() {
    this.pLoginWindowShow.next(null);
  }
}
