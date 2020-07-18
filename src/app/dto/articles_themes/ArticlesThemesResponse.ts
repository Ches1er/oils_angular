import {ArticlesThemes} from './ArticlesThemes';

export class ArticlesThemesResponse {
  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }

  constructor(private pData) {
  }

  public static fromJson(jsonObj: any): ArticlesThemesResponse {
    return new ArticlesThemesResponse(jsonObj.map(e => ArticlesThemes.fromJson(e)));
  }
}
