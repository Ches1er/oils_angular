import {Auto} from './Auto';

export class AutoResponse {

  constructor(private pData) {
  }

  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): AutoResponse {
    return new AutoResponse(jsonObj.map(e => Auto.fromJson(e)));
  }
}
