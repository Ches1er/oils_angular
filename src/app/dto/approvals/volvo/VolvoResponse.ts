import {Volvo} from './Volvo';

export class VolvoResponse {
  constructor(private pData: any) {
  }
  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): VolvoResponse {
    return new VolvoResponse(jsonObj.map(e => Volvo.fromJson(e)));
  }
}
