import {Ford} from "./Ford";

export class FordResponse {
  constructor(private pData: Array<Ford>) {
  }
  get data(): Array<Ford> {
    return this.pData;
  }

  set data(value: Array<Ford>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): FordResponse {
    return new FordResponse(jsonObj.map(e => Ford.fromJson(e)))
  }
}
