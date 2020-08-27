import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {WindowsMessagesService} from '../../services/messages/windows-messages.service';
import {AuthService} from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  private pToken;

  constructor(private pRouter: Router, private jwtHelperService: JwtHelperService,
              private msgService: WindowsMessagesService, private authService: AuthService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any | UrlTree> | any | UrlTree {
    const expectedRole: any = route.data.expectedRole;
    if (this.hasToken()) {
      if (this.checkRoles(expectedRole, this.jwtHelperService.decodeToken(this.token).roles)) {
        return true;
      }
      this.redirectAndLogin();
    }
    this.redirectAndLogin();
  }
  private hasToken(): any {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      this.token = data.api_token;
      return true;
    }
    return false;
  }
  private checkRoles(expectedRoles: any, userRoles: any): any {
    let result = false;
    expectedRoles.map(e => {
      if (userRoles.includes(e)) {
        result = true;
      }
    });
    return result;
  }
  private redirectAndLogin() {
    this.msgService.loginWindowShow();
    this.Router.navigate(['/main']);
    return false;
  }

  get Router(): Router {
    return this.pRouter;
  }

  get token() {
    return this.pToken;
  }

  set token(value) {
    this.pToken = value;
  }
}
