import {Brand} from './Brand';

export class BrandResponse {

  constructor(private pData) {
  }

  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): BrandResponse {
    return new BrandResponse(jsonObj.map(b => Brand.fromJson(b)));
  }
}
