import {Component, Inject, OnInit} from '@angular/core';
import {AuthMessagesService} from '../../../services/messages/auth-messages.service';
import {ProductsService} from '../../../services/goods/products.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent implements OnInit {
  get adminLoggedIn(): boolean {
    return this.pAdminLoggedIn;
  }

  set adminLoggedIn(value: boolean) {
    this.pAdminLoggedIn = value;
  }

  get userLoggedIn() {
    return this.pUserLoggedIn;
  }

  set userLoggedIn(value) {
    this.pUserLoggedIn = value;
  }
  private pAdminLoggedIn;
  private pUserLoggedIn;
  constructor(private authMessagesService: AuthMessagesService) { }

  ngOnInit() {
    this.unlogUser();
    this.authMessagesService.adminLoggedInMessage.subscribe(() => {
      this.adminLoggedIn = true;
    });
    this.authMessagesService.logoutSuccessMessage.subscribe(() => {
      this.unlogUser();
    });
  }

  unlogUser() {
    this.adminLoggedIn = false;
    this.userLoggedIn = false;
  }

}
