import {Oils} from "./oils";

export class OilsResponse {
  constructor(private pData: Array<Oils>) {
  }
  get data(): Array<Oils> {
    return this.pData;
  }

  set data(value: Array<Oils>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): OilsResponse {
    return new OilsResponse(jsonObj.map(e => Oils.fromJson(e)));
  }
}
