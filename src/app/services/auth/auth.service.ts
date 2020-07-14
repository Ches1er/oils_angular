import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urlConfig} from '../../config/urlConfig';
import {map} from 'rxjs/operators';
import {User} from '../../dto/user/User';

class UrlConfig {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  // LOGIN

  login(data: any): Observable<any> {
    if (data.rememberMe === '') {
      data.rememberMe = 0;
    }
    const params = new FormData();
    params.append('name', data.name);
    params.append('password', data.password);
    params.append('rememberMe', data.rememberMe);
    return this.http.post(this.urlConfig.LOGIN, params)
      .pipe(map(resp => {
        if (resp.hasOwnProperty('error')) {
          return resp;
        } else {
          return User.fromJson(resp);
        }
      }));
  }

  loginByRememberMeToken(rememberToken: string): Observable<any> {
    const params = new FormData();
    params.append('remember_token', rememberToken);
    return this.http.post(this.urlConfig.LOGIN_REMEMBER, params)
      .pipe(map(resp => {
        return User.fromJson(resp);
      }));
  }
  // GET USER & ROLES

  roles(token: string): Observable<any> {
    const params = new FormData();
    params.append('api_token', token);
    return this.http.post(this.urlConfig.ROLES, params)
      .pipe(map(roles => roles));
  }

  user(): Observable<any> {
    const params = new FormData();
    return this.http.post(this.urlConfig.USER, params)
      .pipe(map(resp => User.fromJson(resp)));
  }
}
