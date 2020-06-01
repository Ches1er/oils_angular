import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {Api} from "../../../dto/api/Api";
import {ApiResponse} from "../../../dto/api/ApiResponse";
import {ServerResponse} from '../../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  Api(definer: string): Observable<Array<Api>> {
    return this.http.get(this.urlConfig.GETAPI + '/' + definer)
      .pipe(map(resp => ApiResponse.fromJson(resp)))
      .pipe(map(ar => ar.data));
  }
  addApi(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('action', action);
    return this.http.post(this.urlConfig.ADDAPI, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
