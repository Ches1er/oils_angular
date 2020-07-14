import {Gm} from './Gm';

export class GmResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): GmResponse {
    return new GmResponse(jsonObj.map(e => Gm.fromJson(e)));
  }
}
