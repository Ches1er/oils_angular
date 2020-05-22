import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {Api} from "../../../dto/api/Api";
import {ApiResponse} from "../../../dto/api/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get Api(): Observable<Array<Api>>{
    return this.http.get(this.urlConfig.GETAPI)
      .pipe(map(resp => ApiResponse.fromJson(resp)))
      .pipe(map(ar => ar.data));
  }
}
