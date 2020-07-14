import {Mazda} from './Mazda';

export class MazdaResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): MazdaResponse {
    return new MazdaResponse(jsonObj.map(e => Mazda.fromJson(e)));
  }
}
