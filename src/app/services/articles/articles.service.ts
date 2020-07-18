import {Inject, Injectable} from '@angular/core';
import {urlConfig} from '../../config/urlConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticlesThemesResponse} from '../../dto/articles_themes/ArticlesThemesResponse';
import {ArticleResponse} from '../../dto/articles/ArticleResponse';
import {ServerResponse} from '../../dto/ServerResponse/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  urlConfig: urlConfig = new urlConfig();
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  get themes(): Observable<any> {
    return this.http.get(this.urlConfig.GETTHEMES)
      .pipe(map(resp => ArticlesThemesResponse.fromJson(resp)))
      .pipe(map(atr => atr.data));
  }
  public articles(id): Observable<any> {
    return this.http.get(this.urlConfig.GETARTICLESBYTHEME + id)
      .pipe(map(resp => ArticleResponse.fromJson(resp)))
      .pipe(map(ar => ar.data));
  }
  public addTheme(data, action): Observable<string> {
    const params = new FormData();
    params.append('action', action);
    params.append('id', data.id);
    params.append('id_image', data.idImg);
    params.append('name', data.name);
    return this.http.post(this.urlConfig.ADDTHEME, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
  public addArticle(data, action): Observable<string> {
    const params = new FormData();
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('short_desc', data.shortDesc);
    params.append('full_desc', data.fullDesc);
    params.append('short_desc', data.shortDesc);
    params.append('id_image', data.idImg);
    params.append('id_theme', data.idTheme);
    params.append('goods', data.goods);
    return this.http.post(this.urlConfig.ADDARTICLE, params)
      .pipe(map(resp => ServerResponse.fromJson(resp)))
      .pipe(map(sr => sr.response));
  }
}
