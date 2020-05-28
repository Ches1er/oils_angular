import {Inject, Injectable} from '@angular/core';
import {urlConfig} from '../../../config/urlConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {BrandResponse} from '../../../dto/brands/BrandResponse';
import {Brand} from '../../../dto/brands/Brand';
import {ServerResponse} from '../../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get brands(): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.GETBRANDS)
      .pipe(map(resp => BrandResponse.fromJson(resp)))
      .pipe(map(br => br.data));
  }

  public brandsByType(type: number): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.GETBRANDSBYTYPE + type)
      .pipe(map(resp => BrandResponse.fromJson(resp)))
      .pipe(map(br => br.data));
  }
  public addBrand(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('action', action);
    params.append('id_image', data.img);
    params.append('types', data.types);
    return this.http.post(this.urlConfig.ADDBRAND, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
