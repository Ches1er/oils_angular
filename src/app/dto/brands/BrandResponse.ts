import {Brand} from "./Brand";

export class BrandResponse {

  constructor(private pData: Array<Brand>) {
  }

  get data(): Array<Brand> {
    return this.pData;
  }

  set data(value: Array<Brand>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): BrandResponse {
    return new BrandResponse(jsonObj.map(b => Brand.fromJson(b)));
  }
}
