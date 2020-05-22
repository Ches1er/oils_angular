import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {urlConfig} from "../../../config/urlConfig";
import {Observable} from "rxjs/internal/Observable";
import {Acea} from "../../../dto/acea/Acea";
import {map} from "rxjs/operators";
import {AceaResponse} from "../../../dto/acea/AceaResponse";

@Injectable({
  providedIn: 'root'
})
export class AceaServiceService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get Acea(): Observable<Array<Acea>>{
    return this.http.get(this.urlConfig.GETACEA)
      .pipe(map(resp => AceaResponse.fromJson(resp)))
      .pipe(map(ar => ar.data));
  }
}
