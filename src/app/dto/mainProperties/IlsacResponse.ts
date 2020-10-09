import {Ilsac} from './Ilsac';

export class IlsacResponse {
  constructor(private pData: any) {
  }

  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): IlsacResponse {
    return new IlsacResponse(jsonObj.map(e => Ilsac.fromJson(e)));
  }
}
