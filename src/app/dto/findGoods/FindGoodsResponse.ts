import {FindGoods} from './FindGoods';

export class FindGoodsResponse {

  constructor(private pData) {
  }

  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }
  public static fromJson(jsonObj): FindGoodsResponse {
    return new FindGoodsResponse(jsonObj.map(e => FindGoods.fromJson(e)));
  }
}
