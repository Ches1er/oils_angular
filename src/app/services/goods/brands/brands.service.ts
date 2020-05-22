import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {BrandResponse} from "../../../dto/brands/BrandResponse";
import {Brand} from "../../../dto/brands/Brand";

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get brands(): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.GETBRANDS)
      .pipe(map(resp => BrandResponse.fromJson(resp)))
      .pipe(map(br => br.data));
  }

  public brandsByType(type: number): Observable<Array<Brand>> {
    return this.http.get(this.urlConfig.GETBRANDSBYTYPE + type)
      .pipe(map(resp => BrandResponse.fromJson(resp)))
      .pipe(map(br => br.data));
  }
}
