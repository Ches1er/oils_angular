import {Vw} from "./Vw";

export class VwResponse {
  constructor(private pData: Array<Vw>) {
  }
  get data(): Array<Vw> {
    return this.pData;
  }

  set data(value: Array<Vw>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): VwResponse {
    return new VwResponse(jsonObj.map(e => Vw.fromJson(e)))
  }
}
