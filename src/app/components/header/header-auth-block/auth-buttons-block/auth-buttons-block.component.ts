import {Component, Inject, OnInit} from '@angular/core';
import {WindowsMessagesService} from '../../../../services/messages/windows-messages.service';
import {AuthMessagesService} from '../../../../services/messages/auth-messages.service';

@Component({
  selector: 'app-auth-buttons-block',
  templateUrl: './auth-buttons-block.component.html',
  styleUrls: ['./auth-buttons-block.component.less']
})
export class AuthButtonsBlockComponent implements OnInit {
  ifUserLoggedIn = false;

  constructor(@Inject(WindowsMessagesService) private windowsMessagesService: WindowsMessagesService,
              @Inject(AuthMessagesService) private authMessagesService: AuthMessagesService) {
  }

  ngOnInit() {
    this.ifUserLoggedIn = false;
    this.authMessagesService.loginSuccessMessage.subscribe(m => this.ifUserLoggedIn = true);
    this.authMessagesService.logoutSuccessMessage.subscribe(m => {
      this.ifUserLoggedIn = false;
    });
    if (localStorage.length > 0) {
      const tokenData = JSON.parse(localStorage.getItem('tokenData'));
      if (tokenData.remember_token === null) {
        this.ifUserLoggedIn = false;
        localStorage.clear();
      }
    }
  }

  loginWindowShow() {
    this.windowsMessagesService.loginWindowShow();
  }
  logout() {
    localStorage.clear();
    this.authMessagesService.logoutSuccess();
  }
}
