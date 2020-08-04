import {Inject, Injectable} from '@angular/core';
import {urlConfig} from '../../config/urlConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AutoResponse} from '../../dto/to/auto/AutoResponse';
import {BrandResponse} from '../../dto/brands/BrandResponse';

@Injectable({
  providedIn: 'root'
})
export class ToService {
  urlConfig: urlConfig = new urlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }
  get brands(): Observable<any> {
    return this.http.get(this.urlConfig.GETBRANDS)
      .pipe(map(resp => BrandResponse.fromJson(resp)))
      .pipe(map(br => br.data));
  }
  get autos(): Observable<any> {
    return this.http.get(this.urlConfig.GETAUTOS)
      .pipe(map(resp => AutoResponse.fromJson(resp)))
      .pipe(map(ar => ar.data));
  }
}
