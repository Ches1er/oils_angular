import {Acea} from "./Acea";

export class AceaResponse {

  constructor(private pData: Array<Acea>) {
  }


  get data(): Array<Acea> {
    return this.pData;
  }

  set data(value: Array<Acea>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): AceaResponse {
    return new AceaResponse(jsonObj.map(e => Acea.fromJson(e)));
  }
}
