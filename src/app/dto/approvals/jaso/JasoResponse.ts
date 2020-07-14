import {Jaso} from './Jaso';

export class JasoResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): JasoResponse {
    return new JasoResponse(jsonObj.map(e => Jaso.fromJson(e)));
  }
}
