import {Porsche} from './Porsche';

export class PorscheResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): PorscheResponse {
    return new PorscheResponse(jsonObj.map(e => Porsche.fromJson(e)));
  }
}
