import {Psa} from './Psa';

export class PsaResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): PsaResponse {
    return new PsaResponse(jsonObj.map(e => Psa.fromJson(e)));
  }
}
