export class RequestItem {
  get viscosity() {
    return this.pViscosity;
  }

  set viscosity(value) {
    this.pViscosity = value;
  }
  get volume() {
    return this.pVolume;
  }

  set volume(value) {
    this.pVolume = value;
  }

  constructor(private pBrand: Array<any>,
              private pBase: Array<any>,
              private pApi: Array<any>,
              private pAcea: Array<any>,
              private pVolume,
              private pViscosity,
              private pMb: Array<any>,
              private pBmw: Array<any>,
              private pFiat: Array<any>,
              private pFord: Array<any>,
              private pRen: Array<any>,
              private pVw: Array<any>) {
  }

  get brand(): Array<any> {
    return this.pBrand;
  }

  set brand(value: Array<any>) {
    this.pBrand = value;
  }

  get base(): Array<any> {
    return this.pBase;
  }

  set base(value: Array<any>) {
    this.pBase = value;
  }

  get api(): Array<any> {
    return this.pApi;
  }

  set api(value: Array<any>) {
    this.pApi = value;
  }

  get acea(): Array<any> {
    return this.pAcea;
  }

  set acea(value: Array<any>) {
    this.pAcea = value;
  }

  get mb(): Array<any> {
    return this.pMb;
  }

  set mb(value: Array<any>) {
    this.pMb = value;
  }

  get bmw(): Array<any> {
    return this.pBmw;
  }

  set bmw(value: Array<any>) {
    this.pBmw = value;
  }

  get fiat(): Array<any> {
    return this.pFiat;
  }

  set fiat(value: Array<any>) {
    this.pFiat = value;
  }

  get ford(): Array<any> {
    return this.pFord;
  }

  set ford(value: Array<any>) {
    this.pFord = value;
  }

  get ren(): Array<any> {
    return this.pRen;
  }

  set ren(value: Array<any>) {
    this.pRen = value;
  }

  get vw(): Array<any> {
    return this.pVw;
  }

  set vw(value: Array<any>) {
    this.pVw = value;
  }
}
