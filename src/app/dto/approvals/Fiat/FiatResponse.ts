import {MbResponse} from "../mb/MbResponse";
import {Fiat} from "./Fiat";

export class FiatResponse {
  constructor(private pData: Array<Fiat>) {
  }
  get data(): Array<Fiat> {
    return this.pData;
  }

  set data(value: Array<Fiat>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): FiatResponse {
    return new FiatResponse(jsonObj.map(e => Fiat.fromJson(e)))
  }
}
