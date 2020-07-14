import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WindowsMessagesService} from '../../../services/messages/windows-messages.service';
import {AuthService} from '../../../services/auth/auth.service';
import {AuthMessagesService} from '../../../services/messages/auth-messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
// "loading" variable use for ngx-loading component
  public loading = false;
  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl('')
  });
  visible = false;
  error = null;

  constructor(@Inject(WindowsMessagesService) private windowsMessagesService: WindowsMessagesService,
              @Inject(AuthService) private authService: AuthService,
              @Inject(AuthMessagesService) private authMessagesService: AuthMessagesService) {
  }

  ngOnInit() {
    this.windowsMessagesService.loginWindowShowMessage.subscribe(m => this.visible = true);
  }

  public cancel() {
    this.visible = false;
  }

  public onSubmit() {
    this.loading = true;
    this.authService.login(this.loginForm.value)
      .subscribe(resp => {
        if (resp.error) {
          this.error = resp;
          this.loading = false;
        } else {
          // 30 min expiration time. 1*24*60*30
          const tokenData = {
            api_token: resp.apiToken,
            remember_token: resp.rememberToken,
            expiration: Date.now() + (30 * 60 * 1000)
          };
          localStorage.setItem('tokenData', JSON.stringify(tokenData));
          this.authMessagesService.loginSuccess(resp);
          this.loading = false;
          this.visible = false;
        }
      });
  }

}
