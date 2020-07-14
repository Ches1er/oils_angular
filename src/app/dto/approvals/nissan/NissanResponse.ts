import {Nissan} from './Nissan';

export class NissanResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): NissanResponse {
    return new NissanResponse(jsonObj.map(e => Nissan.fromJson(e)));
  }
}
