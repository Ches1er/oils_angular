import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {urlConfig} from "../../../config/urlConfig";
import {Observable} from "rxjs/internal/Observable";
import {Acea} from "../../../dto/acea/Acea";
import {map} from "rxjs/operators";
import {AceaResponse} from "../../../dto/acea/AceaResponse";
import {ServerResponse} from '../../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class AceaServiceService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  Acea(definer: string): Observable<any> {
    return this.http.get(this.urlConfig.GETACEA + '/' + definer)
      .pipe(map(resp => AceaResponse.fromJson(resp)))
      .pipe(map(ar => ar.data));
  }
  addAcea(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('action', action);
    return this.http.post(this.urlConfig.ADDACEA, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
