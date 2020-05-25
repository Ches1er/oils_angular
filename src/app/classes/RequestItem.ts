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
              private pMbApprovals: Array<any>,
              private pBmwApprovals: Array<any>,
              private pFiatApprovals: Array<any>,
              private pFordApprovals: Array<any>,
              private pRenApprovals: Array<any>,
              private pVwApprovals: Array<any>) {
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

  get mbApprovals(): Array<any> {
    return this.pMbApprovals;
  }

  set mbApprovals(value: Array<any>) {
    this.pMbApprovals = value;
  }

  get bmwApprovals(): Array<any> {
    return this.pBmwApprovals;
  }

  set bmwApprovals(value: Array<any>) {
    this.pBmwApprovals = value;
  }

  get fiatApprovals(): Array<any> {
    return this.pFiatApprovals;
  }

  set fiatApprovals(value: Array<any>) {
    this.pFiatApprovals = value;
  }

  get fordApprovals(): Array<any> {
    return this.pFordApprovals;
  }

  set fordApprovals(value: Array<any>) {
    this.pFordApprovals = value;
  }

  get renApprovals(): Array<any> {
    return this.pRenApprovals;
  }

  set renApprovals(value: Array<any>) {
    this.pRenApprovals = value;
  }

  get vwApprovals(): Array<any> {
    return this.pVwApprovals;
  }

  set vwApprovals(value: Array<any>) {
    this.pVwApprovals = value;
  }
}
