import {Oils} from './oils';

export class OilsResponse {
  constructor(private pData) {
  }
  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): OilsResponse {
    return new OilsResponse(jsonObj.map(e => Oils.fromJson(e)));
  }
}
