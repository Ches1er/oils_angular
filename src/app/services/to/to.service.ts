import {Inject, Injectable} from '@angular/core';
import {urlConfig} from '../../config/urlConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AutoResponse} from '../../dto/to/auto/AutoResponse';
import {BrandResponse} from '../../dto/brands/BrandResponse';
import {GoodsResponse} from '../../dto/to/goods/GoodsResponse';
import {GroupResponse} from '../../dto/to/groups/GroupResponse';
import {PriceExchange} from '../../dto/to/priceExchange/PriceExchange';
import {PriceExchangeResponse} from '../../dto/to/priceExchange/PriceExchangeResponse';
import {ServerResponse} from '../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ToService {
  urlConfig: urlConfig = new urlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }
  get brands(): Observable<any> {
    return this.http.get(this.urlConfig.GETTOBRANDS)
      .pipe(map(resp => BrandResponse.fromJson(resp)))
      .pipe(map(br => br.data));
  }
  public autos(id): Observable<any> {
    return this.http.get(this.urlConfig.GETAUTOS + '/' + id)
      .pipe(map(resp => AutoResponse.fromJson(resp)))
      .pipe(map(ar => ar.data));
  }
  get groups(): Observable<any> {
    return this.http.get(this.urlConfig.GETGROUPS)
      .pipe(map(resp => GroupResponse.fromJson(resp)))
      .pipe(map(gr => gr.data));
  }
  get exchanges(): Observable<any> {
    return this.http.get(this.urlConfig.GETEXCHANGES)
      .pipe(map(resp => PriceExchangeResponse.fromJson(resp)))
      .pipe(map(pr => pr.data));
  }
  public auto(id): Observable<any> {
    return this.http.get(this.urlConfig.GETAUTO + id)
      .pipe(map(resp => AutoResponse.fromJson(resp)))
      .pipe(map(ar => ar.data[0]));
  }
  public goods(id, exchange): Observable<any> {
    return this.http.get(this.urlConfig.GETAUTOGOODS + id + '/' + exchange)
      .pipe(map(resp => GoodsResponse.fromJson(resp)))
      .pipe(map(gr => gr.data));
  }
  public addExchange(data, action): Observable<any> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('exchange', data.exchange);
    params.append('action', action);
    return this.http.post(this.urlConfig.ADDEXCHANGE, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
  public addTo(data, action, isGoodsChanges): Observable<any> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('id_brand', data.idBrand);
    params.append('goods', data.goods);
    params.append('id_image', data.img);
    params.append('action', action);
    params.append('is_goods_changes', isGoodsChanges);
    return this.http.post(this.urlConfig.ADDTO, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
