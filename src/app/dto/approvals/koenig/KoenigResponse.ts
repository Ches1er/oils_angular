import {Koenig} from './Koenig';

export class KoenigResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): KoenigResponse {
    return new KoenigResponse(jsonObj.map(e => Koenig.fromJson(e)));
  }
}
