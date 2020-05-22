import {Base} from "./Base";

export class BaseResponse {

  constructor(private pData: Array<Base>) {
  }

  get data(): Array<Base> {
    return this.pData;
  }

  set data(value: Array<Base>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): BaseResponse {
    return new BaseResponse(jsonObj.map(e => Base.fromJson(e)));
  }
}
