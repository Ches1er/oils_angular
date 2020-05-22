import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Base} from "../../../dto/Base/Base";
import {map} from "rxjs/operators";
import {BaseResponse} from "../../../dto/Base/BaseResponse";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get base(): Observable<Array<Base>> {
    return this.http.get(this.urlConfig.GETBASE)
      .pipe(map(resp => BaseResponse.fromJson(resp)))
      .pipe(map(br => br.data));
  }
}
