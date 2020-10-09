import {Inject, Injectable} from '@angular/core';
import {urlConfig} from '../../config/urlConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Oils} from '../../dto/oils/oils';
import {OilsResponse} from '../../dto/oils/oilsResponse';
import {map} from 'rxjs/operators';
import {RequestItem} from '../../classes/RequestItem';
import {ServerResponse} from '../../dto/ServerResponse/ServerResponse';
import {FindGoodsResponse} from '../../dto/findGoods/FindGoodsResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlConfig: urlConfig = new urlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  get oils(): Observable<any> {
    return this.http.get(this.urlConfig.GETOILS)
      .pipe(map(resp => OilsResponse.fromJson(resp)))
      .pipe(map(or => or.data));
  }
  public oilsByBrandId(id: any): Observable<any> {
    return this.http.get(this.urlConfig.GETOILSBYBRANDID + id)
      .pipe(map(resp => OilsResponse.fromJson(resp)))
      .pipe(map(or => or.data));
  }

  public getOil(id: any): Observable<Oils> {
    return this.http.get(this.urlConfig.GETOIL + '/' + id)
      .pipe(map(resp => OilsResponse.fromJson(resp)))
      .pipe(map(or => or.data[0]));
  }
  public getGoodsUnit(id: any, tableDefiner: any): Observable<any> {
    if (tableDefiner === 'goods_oils') {
      return this.http.get(this.urlConfig.GETGOODSUNIT + '/' + id + '/' + tableDefiner)
        .pipe(map(resp => OilsResponse.fromJson(resp)))
        .pipe(map(or => or.data[0]));
    }
  }

  public oilsWProperties(requestItem: RequestItem): Observable<any> {
    const params = new FormData();
    params.append('brands', requestItem.brand.join(','));
    params.append('volume', requestItem.volume.join(','));
    params.append('viscosity', requestItem.viscosity.join(','));
    params.append('base', requestItem.base.join(','));
    params.append('api', requestItem.api.join(','));
    params.append('acea', requestItem.acea.join(','));
    params.append('ilsac', requestItem.ilsac.join(','));
    params.append('mb', requestItem.mbApprovals.join(','));
    params.append('bmw', requestItem.bmwApprovals.join(','));
    params.append('fiat', requestItem.fiatApprovals.join(','));
    params.append('ford', requestItem.fordApprovals.join(','));
    params.append('ren', requestItem.renApprovals.join(','));
    params.append('vw', requestItem.vwApprovals.join(','));
    params.append('porsche', requestItem.porscheApprovals.join(','));
    params.append('gm', requestItem.gmApprovals.join(','));
    params.append('koenig', requestItem.koenigApprovals.join(','));
    params.append('chrysler', requestItem.chryslerApprovals.join(','));
    params.append('psa', requestItem.psaApprovals.join(','));
    params.append('volvo', requestItem.volvoApprovals.join(','));
    params.append('jaguar', requestItem.jaguarApprovals.join(','));
    params.append('jaso', requestItem.jasoApprovals.join(','));
    params.append('mazda', requestItem.mazdaApprovals.join(','));
    params.append('nissan', requestItem.nissanApprovals.join(','));
    return this.http.post(this.urlConfig.GETOILSWPROPERTIES, params)
      .pipe(map(resp => OilsResponse.fromJson(resp)))
      .pipe(map(or => {
        return or.data;
      }));
  }

  public addOils(data, action: string): Observable<string> {
    const params = new FormData();
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('art', data.art);
    params.append('id_volume', data.idVolume);
    params.append('id_viscosity', data.idViscosity);
    params.append('id_base', data.idBase);
    params.append('id_brand', data.idBrand);
    params.append('id_image', data.idImg);
    params.append('short_desc', data.shortDesc);
    params.append('full_desc', data.fullDesc);
    params.append('acea', data.acea);
    params.append('api', data.api);
    params.append('ilsac', data.ilsac);
    params.append('mbApproval', data.mbApprovals);
    params.append('bmwApproval', data.bmwApprovals);
    params.append('fiatApproval', data.fiatApprovals);
    params.append('fordApproval', data.fordApprovals);
    params.append('renApproval', data.renApprovals);
    params.append('vwApproval', data.vwApprovals);
    params.append('porscheApproval', data.porscheApprovals);
    params.append('gmApproval', data.gmApprovals);
    params.append('koenigApproval', data.koenigApprovals);
    params.append('chryslerApproval', data.chryslerApprovals);
    params.append('psaApproval', data.psaApprovals);
    params.append('volvoApproval', data.volvoApprovals);
    params.append('jaguarApproval', data.jaguarApprovals);
    params.append('jasoApproval', data.jasoApprovals);
    params.append('mazdaApproval', data.mazdaApprovals);
    params.append('nissanApproval', data.nissanApprovals);
    return this.http.post(this.urlConfig.ADDOIL, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
  public findGoods(keyword): Observable<any> {
    return this.http.get(this.urlConfig.FIND + keyword)
      .pipe(map(resp => FindGoodsResponse.fromJson(resp)))
      .pipe(map(fgr => fgr.data));
  }
}

