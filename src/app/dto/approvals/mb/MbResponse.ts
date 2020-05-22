import {Mb} from "./Mb";

export class MbResponse {

  constructor(private pData: Array<Mb>) {
  }
  get data(): Array<Mb> {
    return this.pData;
  }

  set data(value: Array<Mb>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): MbResponse {
    return new MbResponse(jsonObj.map(e => Mb.fromJson(e)))
  }
}
