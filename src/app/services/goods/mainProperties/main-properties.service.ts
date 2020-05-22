import {Inject, Injectable} from '@angular/core';
import {urlConfig} from "../../../config/urlConfig";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ViscosityResponse} from "../../../dto/mainProperties/ViscosityResponse";
import {Observable} from "rxjs/internal/Observable";
import {Viscosity} from "../../../dto/mainProperties/Viscosity";
import {VolumeResponse} from "../../../dto/mainProperties/VolumeResponse";
import {Volume} from "../../../dto/mainProperties/Volume";

@Injectable({
  providedIn: 'root'
})
export class MainPropertiesService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  get viscosity(): Observable<Array<Viscosity>>{
    return this.http.get(this.urlConfig.GETVISCOSITY)
      .pipe(map(resp => ViscosityResponse.fromJson(resp)))
      .pipe(map(vr => vr.data));
  }
  get volume(): Observable<Array<Volume>> {
    return this.http.get(this.urlConfig.GETVOLUME)
      .pipe(map(resp => VolumeResponse.fromJson(resp)))
      .pipe(map(vr => vr.data));
  }
}
