import {Goods} from './Goods';

export class GoodsResponse {

  constructor(private pData) {
  }

  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }
  public static fromJson(jsonObj): GoodsResponse {
    return new GoodsResponse(jsonObj.map(e => Goods.fromJson(e)));
  }
}
