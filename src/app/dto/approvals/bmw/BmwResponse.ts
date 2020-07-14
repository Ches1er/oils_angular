import {Bmw} from './Bmw';

export class BmwResponse {

  constructor(private pData: Array<Bmw>) {
  }
  get data(): Array<Bmw> {
    return this.pData;
  }

  set data(value: Array<Bmw>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): BmwResponse {
    return new BmwResponse(jsonObj.map(e => Bmw.fromJson(e)))
  }
}
