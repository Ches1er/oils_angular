import {Article} from './Article';

export class ArticleResponse {

  constructor(private pData) {
  }

  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }
  public static fromJson(jsonObj): ArticleResponse {
    return new ArticleResponse(jsonObj.map(e => Article.fromJson(e)));
  }
}
