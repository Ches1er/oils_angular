import {Chrysler} from './Chrysler';

export class ChryslerResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): ChryslerResponse {
    return new ChryslerResponse(jsonObj.map(e => Chrysler.fromJson(e)));
  }
}
