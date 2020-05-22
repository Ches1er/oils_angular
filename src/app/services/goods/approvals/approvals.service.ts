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

@Injectable({
  providedIn: 'root'
})
export class ApprovalsService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get mbApprovals(): Observable<Array<Mb>> {
    return this.http.get(this.urlConfig.GETMBAPPROVALS)
      .pipe(map(resp => MbResponse.fromJson(resp)))
      .pipe(map(ma => ma.data));
  }
  get bmwApprovals(): Observable<Array<Bmw>> {
    return this.http.get(this.urlConfig.GETBMWAPPROVALS)
      .pipe(map(resp => BmwResponse.fromJson(resp)))
      .pipe(map(ba => ba.data));
  }
  get fiatApprovals(): Observable<Array<Fiat>> {
    return this.http.get(this.urlConfig.GETFIATAPPROVALS)
      .pipe(map(resp => FiatResponse.fromJson(resp)))
      .pipe(map(fa => fa.data));
  }
  get fordApprovals(): Observable<Array<Ford>> {
    return this.http.get(this.urlConfig.GETFORDAPPROVALS)
      .pipe(map(resp => FordResponse.fromJson(resp)))
      .pipe(map(fa => fa.data));
  }
  get renaultApprovals(): Observable<Array<Ren>> {
    return this.http.get(this.urlConfig.GETRENAPPROVALS)
      .pipe(map(resp => RenResponse.fromJson(resp)))
      .pipe(map(ra => ra.data));
  }
  get vwApprovals(): Observable<Array<Vw>> {
    return this.http.get(this.urlConfig.GETVWAPPROVALS)
      .pipe(map(resp => VwResponse.fromJson(resp)))
      .pipe(map(va => va.data));
  }
}
