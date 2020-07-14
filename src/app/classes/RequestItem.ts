export class RequestItem {
  get porscheApprovals(): any {
    return this.pPorscheApprovals;
  }

  set porscheApprovals(value: any) {
    this.pPorscheApprovals = value;
  }

  get gmApprovals(): any {
    return this.pGmApprovals;
  }

  set gmApprovals(value: any) {
    this.pGmApprovals = value;
  }

  get koenigApprovals(): any {
    return this.pKoenigApprovals;
  }

  set koenigApprovals(value: any) {
    this.pKoenigApprovals = value;
  }

  get chryslerApprovals(): any {
    return this.pChryslerApprovals;
  }

  set chryslerApprovals(value: any) {
    this.pChryslerApprovals = value;
  }

  get psaApprovals(): any {
    return this.pPsaApprovals;
  }

  set psaApprovals(value: any) {
    this.pPsaApprovals = value;
  }

  get volvoApprovals(): any {
    return this.pVolvoApprovals;
  }

  set volvoApprovals(value: any) {
    this.pVolvoApprovals = value;
  }

  get jaguarApprovals(): any {
    return this.pJaguarApprovals;
  }

  set jaguarApprovals(value: any) {
    this.pJaguarApprovals = value;
  }

  get jasoApprovals(): any {
    return this.pJasoApprovals;
  }

  set jasoApprovals(value: any) {
    this.pJasoApprovals = value;
  }

  get mazdaApprovals(): any {
    return this.pMazdaApprovals;
  }

  set mazdaApprovals(value: any) {
    this.pMazdaApprovals = value;
  }

  get nissanApprovals(): any {
    return this.pNissanApprovals;
  }

  set nissanApprovals(value: any) {
    this.pNissanApprovals = value;
  }
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
              private pVwApprovals: Array<any>,
              private pPorscheApprovals: any,
              private pGmApprovals: any,
              private pKoenigApprovals: any,
              private pChryslerApprovals: any,
              private pPsaApprovals: any,
              private pVolvoApprovals: any,
              private pJaguarApprovals: any,
              private pJasoApprovals: any,
              private pMazdaApprovals: any,
              private pNissanApprovals: any,
              ) {
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
