import {Model} from './Model';

export class ModelResponse {
  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }

  constructor(private pData) {
  }

  public static fromJson(jsonObj: any): ModelResponse {
    return new ModelResponse(jsonObj.map(e => Model.fromJson(e)));
  }
}
