import {Volume} from "./Volume";

export class VolumeResponse {

  constructor(private pData: Array<Volume>) {
  }

  get data(): Array<Volume> {
    return this.pData;
  }

  set data(value: Array<Volume>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): VolumeResponse {
    return new VolumeResponse(jsonObj.map(e => Volume.fromJson(e)));
  }
}
