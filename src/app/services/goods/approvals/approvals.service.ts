import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Mb} from "../../../dto/approvals/mb/Mb";
import {MbResponse} from "../../../dto/approvals/mb/MbResponse";
import {map} from "rxjs/operators";
import {Bmw} from "../../../dto/approvals/bmw/Bmw";
import {BmwResponse} from "../../../dto/approvals/bmw/BmwResponse";
import {Fiat} from "../../../dto/approvals/Fiat/Fiat";
import {FiatResponse} from "../../../dto/approvals/Fiat/FiatResponse";
import {Ford} from "../../../dto/approvals/Ford/Ford";
import {FordResponse} from "../../../dto/approvals/Ford/FordResponse";
import {Ren} from "../../../dto/approvals/Renault/Ren";
import {RenResponse} from "../../../dto/approvals/Renault/RenResponse";
import {Vw} from "../../../dto/approvals/Vw/Vw";
import {VwResponse} from "../../../dto/approvals/Vw/VwResponse";
import {ServerResponse} from '../../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ApprovalsService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  mbApprovals(definer: string): Observable<Array<Mb>> {
    return this.http.get(this.urlConfig.GETMBAPPROVALS + '/' + definer)
      .pipe(map(resp => MbResponse.fromJson(resp)))
      .pipe(map(ma => ma.data));
  }
  bmwApprovals(definer: string): Observable<Array<Bmw>> {
    return this.http.get(this.urlConfig.GETBMWAPPROVALS + '/' + definer)
      .pipe(map(resp => BmwResponse.fromJson(resp)))
      .pipe(map(ba => ba.data));
  }
  fiatApprovals(definer: string): Observable<Array<Fiat>> {
    return this.http.get(this.urlConfig.GETFIATAPPROVALS + '/' + definer)
      .pipe(map(resp => FiatResponse.fromJson(resp)))
      .pipe(map(fa => fa.data));
  }
  fordApprovals(definer: string): Observable<Array<Ford>> {
    return this.http.get(this.urlConfig.GETFORDAPPROVALS + '/' + definer)
      .pipe(map(resp => FordResponse.fromJson(resp)))
      .pipe(map(fa => fa.data));
  }
  renaultApprovals(definer: string): Observable<Array<Ren>> {
    return this.http.get(this.urlConfig.GETRENAPPROVALS + '/' + definer)
      .pipe(map(resp => RenResponse.fromJson(resp)))
      .pipe(map(ra => ra.data));
  }
  vwApprovals(definer: string): Observable<Array<Vw>> {
    return this.http.get(this.urlConfig.GETVWAPPROVALS + '/' + definer)
      .pipe(map(resp => VwResponse.fromJson(resp)))
      .pipe(map(va => va.data));
  }
  addApproval(action: string, data): Observable<string> {
    console.log(data);
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
