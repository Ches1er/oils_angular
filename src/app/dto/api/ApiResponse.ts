import {Api} from "./Api";

export class ApiResponse {

  constructor(private pData: Array<Api>) {
  }

  get data(): Array<Api> {
    return this.pData;
  }

  set data(value: Array<Api>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): ApiResponse {
    return new ApiResponse(jsonObj.map(e => Api.fromJson(e)));
  }
}
