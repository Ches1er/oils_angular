import {Ren} from "./Ren";

export class RenResponse {
  constructor(private pData: Array<Ren>) {
  }
  get data(): Array<Ren> {
    return this.pData;
  }

  set data(value: Array<Ren>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): RenResponse {
    return new RenResponse(jsonObj.map(e => Ren.fromJson(e)))
  }
}
