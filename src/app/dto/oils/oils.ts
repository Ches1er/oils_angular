import {HttpUrlEncodingCodec} from '@angular/common/http';

export class Oils {
  get tableDefiner() {
    return this.pTableDefiner;
  }

  set tableDefiner(value) {
    this.pTableDefiner = value;
  }
  get brandName() {
    return this.pBrandName;
  }

  set brandName(value) {
    this.pBrandName = value;
  }
  get porscheApprovals() {
    return this.pPorscheApprovals;
  }

  set porscheApprovals(value) {
    this.pPorscheApprovals = value;
  }

  get gmApprovals() {
    return this.pGmApprovals;
  }

  set gmApprovals(value) {
    this.pGmApprovals = value;
  }

  get koenigApprovals() {
    return this.pKoenigApprovals;
  }

  set koenigApprovals(value) {
    this.pKoenigApprovals = value;
  }

  get chryslerApprovals() {
    return this.pChryslerApprovals;
  }

  set chryslerApprovals(value) {
    this.pChryslerApprovals = value;
  }

  get psaApprovals() {
    return this.pPsaApprovals;
  }

  set psaApprovals(value) {
    this.pPsaApprovals = value;
  }

  get volvoApprovals() {
    return this.pVolvoApprovals;
  }

  set volvoApprovals(value) {
    this.pVolvoApprovals = value;
  }

  get jaguarApprovals() {
    return this.pJaguarApprovals;
  }

  set jaguarApprovals(value) {
    this.pJaguarApprovals = value;
  }

  get jasoApprovals() {
    return this.pJasoApprovals;
  }

  set jasoApprovals(value) {
    this.pJasoApprovals = value;
  }

  get mazdaApprovals() {
    return this.pMazdaApprovals;
  }

  set mazdaApprovals(value) {
    this.pMazdaApprovals = value;
  }

  get nissanApprovals() {
    return this.pNissanApprovals;
  }

  set nissanApprovals(value) {
    this.pNissanApprovals = value;
  }
  get mbApprovals() {
    return this.pMbApprovals;
  }

  set mbApprovals(value) {
    this.pMbApprovals = value;
  }

  get bmwApprovals() {
    return this.pBmwApprovals;
  }

  set bmwApprovals(value) {
    this.pBmwApprovals = value;
  }

  get fordApprovals() {
    return this.pFordApprovals;
  }

  set fordApprovals(value) {
    this.pFordApprovals = value;
  }

  get fiatApprovals() {
    return this.pFiatApprovals;
  }

  set fiatApprovals(value) {
    this.pFiatApprovals = value;
  }

  get renApprovals() {
    return this.pRenApprovals;
  }

  set renApprovals(value) {
    this.pRenApprovals = value;
  }

  get vwApprovals() {
    return this.pVwApprovals;
  }

  set vwApprovals(value) {
    this.pVwApprovals = value;
  }
  get api() {
    return this.pApi;
  }

  set api(value) {
    this.pApi = value;
  }
  get acea() {
    return this.pAcea;
  }

  set acea(value) {
    this.pAcea = value;
  }
  get show() {
    return this.pShow;
  }

  set show(value) {
    this.pShow = value;
  }
  private urlEncode = new HttpUrlEncodingCodec();
  constructor(
    private pId,
    private pArt: string,
    private pName,
    private pIdVolume,
    private pIdViscosity,
    private pIdBase,
    private pIdBrand,
    private pBrandName,
    private pIdImage,
    private pShortDesc,
    private pFullDesc,
    private pImg,
    private pShow,
    private pAcea,
    private pApi,
    private pMbApprovals,
    private pBmwApprovals,
    private pFordApprovals,
    private pFiatApprovals,
    private pRenApprovals,
    private pVwApprovals,
    private pPorscheApprovals,
    private pGmApprovals,
    private pKoenigApprovals,
    private pChryslerApprovals,
    private pPsaApprovals,
    private pVolvoApprovals,
    private pJaguarApprovals,
    private pJasoApprovals,
    private pMazdaApprovals,
    private pNissanApprovals,
    private pTableDefiner
  ) {
  }


  get id() {
    return this.pId;
  }

  set id(value) {
    this.pId = value;
  }

  get art(): string {
    return this.pArt;
  }

  set art(value: string) {
    this.pArt = value;
  }

  get name() {
    return this.pName;
  }

  set name(value) {
    this.pName = value;
  }

  get idVolume() {
    return this.pIdVolume;
  }

  set idVolume(value) {
    this.pIdVolume = value;
  }

  get idViscosity() {
    return this.pIdViscosity;
  }

  set idViscosity(value) {
    this.pIdViscosity = value;
  }

  get idBase() {
    return this.pIdBase;
  }

  set idBase(value) {
    this.pIdBase = value;
  }

  get idBrand() {
    return this.pIdBrand;
  }

  set idBrand(value) {
    this.pIdBrand = value;
  }

  get idImage() {
    return this.pIdImage;
  }

  set idImage(value) {
    this.pIdImage = value;
  }

  get shortDesc() {
    return this.urlEncode.decodeValue(this.pShortDesc);
  }

  set shortDesc(value) {
    this.pShortDesc = value;
  }

  get fullDesc() {
    return this.urlEncode.decodeValue(this.pFullDesc);
  }

  set fullDesc(value) {
    this.pFullDesc = value;
  }

  get img() {
    return this.pImg;
  }

  set img(value) {
    this.pImg = value;
  }

  public static fromJson(jsonObj: any): Oils {
    return new Oils(
      jsonObj.id,
      jsonObj.art,
      jsonObj.name,
      jsonObj.id_volume,
      jsonObj.id_viscosity,
      jsonObj.id_base,
      jsonObj.id_brand,
      jsonObj.brand_name,
      jsonObj.id_image,
      jsonObj.short_desc,
      jsonObj.full_desc,
      jsonObj.img,
      true,
      jsonObj.acea,
      jsonObj.api,
      jsonObj.mbApproval,
      jsonObj.bmwApproval,
      jsonObj.fordApproval,
      jsonObj.fiatApproval,
      jsonObj.renApproval,
      jsonObj.vwApproval,
      jsonObj.porscheApproval,
      jsonObj.gmApproval,
      jsonObj.koenigApproval,
      jsonObj.chryslerApproval,
      jsonObj.psaApproval,
      jsonObj.volvoApproval,
      jsonObj.jaguarApproval,
      jsonObj.jasoApproval,
      jsonObj.mazdaApproval,
      jsonObj.nissanApproval,
      jsonObj.table_definer
      );
  }
}

