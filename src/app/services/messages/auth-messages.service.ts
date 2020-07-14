import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from '../../dto/user/User';

@Injectable({
  providedIn: 'root'
})
export class AuthMessagesService {
  private pLoginSuccess: Subject<User> = new Subject<User>();
  private pLogoutSuccess: Subject<null> = new Subject<null>();
  private pAdminLoggedIn: Subject<null> = new Subject<null>();

  constructor() {
  }

  get logoutSuccessMessage() {
    return this.pLogoutSuccess;
  }

  get loginSuccessMessage() {
    return this.pLoginSuccess;
  }

  get adminLoggedInMessage() {
    return this.pAdminLoggedIn;
  }

  // FUNCTIONS

  // Auth
  public loginSuccess(user: User) {
    this.pLoginSuccess.next(user);
  }

  public logoutSuccess() {
    this.pLogoutSuccess.next();
  }

  public adminLoggedIn() {
    this.pAdminLoggedIn.next();
  }
}
