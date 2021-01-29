export class QuickFilters {
  get ilsac(): any {
    return this.pIlsac;
  }

  set ilsac(value: any) {
    this.pIlsac = value;
  }

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

  constructor(private pBrands: any,
              private pBase: any,
              private pApi: any,
              private pAcea: any,
              private pIlsac: any,
              private pVolume,
              private pViscosity,
              private pMbApprovals: any,
              private pBmwApprovals: any,
              private pFiatApprovals: any,
              private pFordApprovals: any,
              private pRenApprovals: any,
              private pVwApprovals: any,
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

  get brands(): any {
    return this.pBrands;
  }

  set brands(value: any) {
    this.pBrands = value;
  }

  get base(): any {
    return this.pBase;
  }

  set base(value: any) {
    this.pBase = value;
  }

  get api(): any {
    return this.pApi;
  }

  set api(value: any) {
    this.pApi = value;
  }

  get acea(): any {
    return this.pAcea;
  }

  set acea(value: any) {
    this.pAcea = value;
  }

  get mbApprovals(): any {
    return this.pMbApprovals;
  }

  set mbApprovals(value: any) {
    this.pMbApprovals = value;
  }

  get bmwApprovals(): any {
    return this.pBmwApprovals;
  }

  set bmwApprovals(value: any) {
    this.pBmwApprovals = value;
  }

  get fiatApprovals(): any {
    return this.pFiatApprovals;
  }

  set fiatApprovals(value: any) {
    this.pFiatApprovals = value;
  }

  get fordApprovals(): any {
    return this.pFordApprovals;
  }

  set fordApprovals(value: any) {
    this.pFordApprovals = value;
  }

  get renApprovals(): any {
    return this.pRenApprovals;
  }

  set renApprovals(value: any) {
    this.pRenApprovals = value;
  }

  get vwApprovals(): any {
    return this.pVwApprovals;
  }

  set vwApprovals(value: any) {
    this.pVwApprovals = value;
  }
}
