import {Jaguar} from './Jaguar';

export class JaguarResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): JaguarResponse {
    return new JaguarResponse(jsonObj.map(e => Jaguar.fromJson(e)));
  }
}
