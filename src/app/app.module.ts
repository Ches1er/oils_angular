import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';
import { HeaderAuthBlockComponent } from './components/header/header-auth-block/header-auth-block.component';
import { HeaderSearchComponent } from './components/header/header-search/header-search.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/windows/login/login.component';
import { AuthButtonsBlockComponent } from './components/header/header-auth-block/auth-buttons-block/auth-buttons-block.component';
import { CurrentUserBlockComponent } from './components/header/header-auth-block/current-user-block/current-user-block.component';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {AngularEditorModule} from '@kolkov/angular-editor';
import { ProductOilComponent } from './components/windows/product-oil/product-oil.component';
import { ArticlesComponent } from './components/articles/articles.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {JwtModule} from '@auth0/angular-jwt';
import {NoSanitizePipe} from './classes/noSanitizePipe';

export function getToken() {
  return localStorage.getItem('api_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeaderNavComponent,
    HeaderAuthBlockComponent,
    HeaderSearchComponent,
    ContactsComponent,
    LoginComponent,
    AuthButtonsBlockComponent,
    CurrentUserBlockComponent,
    ProductOilComponent,
    ArticlesComponent,
    NoSanitizePipe
  ],
  imports: [
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    AngularEditorModule,
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        allowedDomains: ['http://localhost:4200', 'http://oilexpress.online'],
        disallowedRoutes: [
          'http://mydomain/api/login',
          'http://mydomain/api/login_remember',
          'http://oilexpress.online/api/login',
          'http://oilexpress.online/api/login_remember',
        ]
      }
    }),
    AppRoutingModule,
    ReactiveFormsModule, FormsModule, DeviceDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
