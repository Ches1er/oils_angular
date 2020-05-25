import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../../../dto/images/Image';
import {map} from 'rxjs/operators';
import {ImagesResponse} from '../../../dto/images/ImagesResponse';
import {urlConfig} from '../../../config/urlConfig';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get images(): Observable<Array<Image>> {
    return this.http.get(this.urlConfig.GETIMAGES)
      .pipe(map(resp => ImagesResponse.fromJson(resp)))
      .pipe(map(imgResp => imgResp.data));
  }
  image(name: string): Observable<Image> {
    return this.http.get(this.urlConfig.GETIMAGE + name)
      .pipe(map(resp => Image.fromJson(resp)));
  }

  uploadImage(file: File): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('file', file, file.name);
    return this.http.post(this.urlConfig.UPLOAD_IMAGE, uploadData)
      .pipe(resp => resp);
  }
}
