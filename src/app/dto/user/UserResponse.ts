import {User} from './User';

export class UserResponse {

  constructor(private pData) {
  }

  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): UserResponse {
    return new UserResponse(jsonObj.map(e => User.fromJson(e)));
  }
}
