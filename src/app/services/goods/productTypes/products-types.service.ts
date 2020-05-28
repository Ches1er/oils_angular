import {Inject, Injectable} from '@angular/core';
import {urlConfig} from '../../../config/urlConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductType} from '../../../dto/productsTypes/ProductType';
import {map} from 'rxjs/operators';
import {ProductsTypesResponse} from '../../../dto/productsTypes/ProductsTypesResponse';
import {ServerResponse} from '../../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsTypesService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  get ProductsTypes(): Observable<Array<ProductType>> {
    return this.http.get(this.urlConfig.GETPRODUCTSTYPES)
      .pipe(map(resp => ProductsTypesResponse.fromJson(resp)))
      .pipe(map(ptr => ptr.data));
  }
  add(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('action', action);
    params.append('id_image', data.img);
    return this.http.post(this.urlConfig.ADDPRODUCTSTYPE, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
