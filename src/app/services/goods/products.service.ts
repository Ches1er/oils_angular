import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Oils} from "../../dto/oils/oils";
import {OilsResponse} from "../../dto/oils/oilsResponse";
import {map} from 'rxjs/operators';
import {RequestItem} from "../../classes/RequestItem";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get oils(): Observable<Array<Oils>> {
    return this.http.get(this.urlConfig.GETOILS)
      .pipe(map(resp => OilsResponse.fromJson(resp)))
      .pipe(map(or => or.data));
  }
  public oilsWProperties(requestItem: RequestItem): Observable<Array<Oils>> {
    const params = new FormData();
    params.append('brands', requestItem.brand.join(','));
    params.append('volume', requestItem.volume.join(','));
    params.append('viscosity', requestItem.viscosity.join(','));
    params.append('base', requestItem.base.join(','));
    params.append('api', requestItem.api.join(','));
    params.append('acea', requestItem.acea.join(','));
    params.append('mb', requestItem.mbApprovals.join(','));
    params.append('bmw', requestItem.bmwApprovals.join(','));
    params.append('fiat', requestItem.fiatApprovals.join(','));
    params.append('ford', requestItem.fordApprovals.join(','));
    params.append('ren', requestItem.renApprovals.join(','));
    params.append('vw', requestItem.vwApprovals.join(','));
    return this.http.post(this.urlConfig.GETOILSWPROPERTIES, params)
      .pipe(map(resp => OilsResponse.fromJson(resp)))
      .pipe(map(or => {
        return or.data;
      }));
  }

}
