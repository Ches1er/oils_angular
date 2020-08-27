import {Component, Inject, OnInit} from '@angular/core';
import {AuthMessagesService} from '../../../../services/messages/auth-messages.service';
import {User} from '../../../../dto/user/User';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-current-user-block',
  templateUrl: './current-user-block.component.html',
  styleUrls: ['./current-user-block.component.less']
})
export class CurrentUserBlockComponent implements OnInit {
  get currentUser(): User {
    return this.pCurrentUser;
  }

  set currentUser(value: User) {
    this.pCurrentUser = value;
  }

  get tokenData() {
    return this.pTokenData;
  }

  set tokenData(value) {
    this.pTokenData = value;
  }

  constructor(@Inject(AuthMessagesService) private authMessagesService: AuthMessagesService,
              @Inject(AuthService) private authService: AuthService) {
  }

  private pCurrentUser: User = null;
  private pTokenData;
  admin = false;

  private static isAdmin(roles: any) {
    return roles.includes('admin');
  }

  ngOnInit() {
    this.authMessagesService.logoutSuccessMessage.subscribe(() => {
      this.currentUser = null;
    });
    if (localStorage.length > 0) {
      this.tokenData = JSON.parse(localStorage.getItem('tokenData'));
      if (this.tokenData.expiration < Date.now()) {
        localStorage.clear();
      }
    }
    if (localStorage.length > 0 && this.tokenData.remember_token !== null) {
      this.authService.loginByRememberMeToken(this.tokenData.remember_token)
        .subscribe(user => {
          if (user) {
            this.authMessagesService.loginSuccess(user.apiToken);
            this.getUserAndRoles(user);
          }
        });
    }
    this.authMessagesService.loginSuccessMessage.subscribe(user => {
      if (this.tokenData.remember_token === null) {
          this.pCurrentUser = user;
          this.authService.roles(user.apiToken).subscribe(roles => {
            if (roles.includes('admin')) {
              this.authMessagesService.adminLoggedIn();
            }
          });
        } else {
          return null;
        }
      }
    );
  }

  private getUserAndRoles(user: User) {
    this.pCurrentUser = user;
    this.authService.roles(user.apiToken).subscribe(roles => {
      if (CurrentUserBlockComponent.isAdmin(roles)) {
        this.authMessagesService.adminLoggedIn();
      }
    });
  }

}
