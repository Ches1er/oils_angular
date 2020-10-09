import {Viscosity} from './Viscosity';

export class ViscosityResponse {

  constructor(private pData: any) {
  }

  get data(): any {
    return this.pData;
  }

  set data(value: any) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): ViscosityResponse {
    return new ViscosityResponse(jsonObj.map(e => Viscosity.fromJson(e)));
  }
}
