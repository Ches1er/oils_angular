import {Inject, Injectable} from '@angular/core';
import {urlConfig} from '../../../config/urlConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Mb} from '../../../dto/approvals/mb/Mb';
import {MbResponse} from '../../../dto/approvals/mb/MbResponse';
import {map} from 'rxjs/operators';
import {Bmw} from '../../../dto/approvals/bmw/Bmw';
import {BmwResponse} from '../../../dto/approvals/bmw/BmwResponse';
import {Fiat} from '../../../dto/approvals/Fiat/Fiat';
import {FiatResponse} from '../../../dto/approvals/Fiat/FiatResponse';
import {Ford} from '../../../dto/approvals/Ford/Ford';
import {FordResponse} from '../../../dto/approvals/Ford/FordResponse';
import {Ren} from '../../../dto/approvals/Renault/Ren';
import {RenResponse} from '../../../dto/approvals/Renault/RenResponse';
import {Vw} from '../../../dto/approvals/Vw/Vw';
import {VwResponse} from '../../../dto/approvals/Vw/VwResponse';
import {ServerResponse} from '../../../dto/ServerResponse/ServerResponse';
import {PorscheResponse} from '../../../dto/approvals/porsche/PorscheResponse';
import {GmResponse} from '../../../dto/approvals/gm/GmResponse';
import {KoenigResponse} from '../../../dto/approvals/koenig/KoenigResponse';
import {ChryslerResponse} from '../../../dto/approvals/chrysler/ChryslerResponse';
import {PsaResponse} from '../../../dto/approvals/psa/PsaResponse';
import {VolvoResponse} from '../../../dto/approvals/volvo/VolvoResponse';
import {JaguarResponse} from '../../../dto/approvals/jaguar/JaguarResponse';
import {JasoResponse} from '../../../dto/approvals/jaso/JasoResponse';
import {MazdaResponse} from '../../../dto/approvals/mazda/MazdaResponse';
import {NissanResponse} from '../../../dto/approvals/nissan/NissanResponse';

@Injectable({
  providedIn: 'root'
})
export class ApprovalsService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  approvals(definer: string, model: string): Observable<any> {
    const url = 'GET' + model.toUpperCase() + 'APPROVALS';
    return this.http.get(this.urlConfig[url] + '/' + definer)
      .pipe(map(resp => {
        let r = null;
        if (model === 'Mb') {r = MbResponse.fromJson(resp); }
        if (model === 'Bmw') {r = BmwResponse.fromJson(resp); }
        if (model === 'Fiat') {r = FiatResponse.fromJson(resp); }
        if (model === 'Ford') {r = FordResponse.fromJson(resp); }
        if (model === 'Ren') {r = RenResponse.fromJson(resp); }
        if (model === 'Vw') {r = VwResponse.fromJson(resp); }
        if (model === 'Porsche') {r = PorscheResponse.fromJson(resp); }
        if (model === 'Gm') {r = GmResponse.fromJson(resp); }
        if (model === 'Koenig') {r = KoenigResponse.fromJson(resp); }
        if (model === 'Chrysler') {r = ChryslerResponse.fromJson(resp); }
        if (model === 'Psa') {r = PsaResponse.fromJson(resp); }
        if (model === 'Volvo') {r = VolvoResponse.fromJson(resp); }
        if (model === 'Jaguar') {r = JaguarResponse.fromJson(resp); }
        if (model === 'Jaso') {r = JasoResponse.fromJson(resp); }
        if (model === 'Mazda') {r = MazdaResponse.fromJson(resp); }
        if (model === 'Nissan') {r = NissanResponse.fromJson(resp); }
        return r;
      }
      )).pipe(map(resp => resp.data));
  }
  addApproval(action: string, data): Observable<string> {
    const params = new FormData();
    params.append('definer', data.definer);
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    return this.http.post(this.urlConfig.ADDAPPROVAL, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
