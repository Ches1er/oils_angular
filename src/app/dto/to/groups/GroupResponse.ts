import {Group} from './Group';

export class GroupResponse {
  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }

  constructor(private pData) {
  }

  public static fromJson(jsonObj: any): GroupResponse {
    return new GroupResponse(jsonObj.map(e => Group.fromJson(e)));
  }
}
