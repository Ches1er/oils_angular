import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ViscosityResponse} from "../../../dto/mainProperties/ViscosityResponse";
import {Observable} from "rxjs/internal/Observable";
import {Viscosity} from "../../../dto/mainProperties/Viscosity";
import {VolumeResponse} from "../../../dto/mainProperties/VolumeResponse";
import {Volume} from "../../../dto/mainProperties/Volume";
import {ServerResponse} from '../../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class MainPropertiesService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  viscosity(definer: string): Observable<Array<Viscosity>> {
    return this.http.get(this.urlConfig.GETVISCOSITY + '/' + definer)
      .pipe(map(resp => ViscosityResponse.fromJson(resp)))
      .pipe(map(vr => vr.data));
  }
  volume(definer: string): Observable<Array<Volume>> {
    return this.http.get(this.urlConfig.GETVOLUME + '/' + definer)
      .pipe(map(resp => VolumeResponse.fromJson(resp)))
      .pipe(map(vr => vr.data));
  }
  addVolume(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('volume', data.name);
    params.append('id', data.id);
    params.append('action', action);
    return this.http.post(this.urlConfig.ADDVOLUME, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
  addViscosity(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('name', data.name);
    params.append('id', data.id);
    params.append('action', action);
    return this.http.post(this.urlConfig.ADDVISCOSITY, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
