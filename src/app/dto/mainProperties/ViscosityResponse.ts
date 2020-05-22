import {Viscosity} from "./Viscosity";

export class ViscosityResponse {

  constructor(private pData: Array<Viscosity>) {
  }

  get data(): Array<Viscosity> {
    return this.pData;
  }

  set data(value: Array<Viscosity>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): ViscosityResponse {
    return new ViscosityResponse(jsonObj.map(e => Viscosity.fromJson(e)));
  }
}
