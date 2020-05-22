import {HttpUrlEncodingCodec} from '@angular/common/http';

export class Oils {
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

  get fordApprovals(): any {
    return this.pFordApprovals;
  }

  set fordApprovals(value: any) {
    this.pFordApprovals = value;
  }

  get fiatApprovals(): any {
    return this.pFiatApprovals;
  }

  set fiatApprovals(value: any) {
    this.pFiatApprovals = value;
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
  get show(): boolean {
    return this.pShow;
  }

  set show(value: boolean) {
    this.pShow = value;
  }
  private urlEncode = new HttpUrlEncodingCodec();
  constructor (
    private pId: number,
    private pArt: string,
    private pName: string,
    private pIdVolume: number,
    private pIdViscosity: number,
    private pIdBase: number,
    private pIdBrand: number,
    private pIdImage: number,
    private pShortDesc: string,
    private pFullDesc: string,
    private pImg: string,
    private pShow: boolean,
    private pAcea: any,
    private pApi: any,
    private pMbApprovals: any,
    private pBmwApprovals: any,
    private pFordApprovals: any,
    private pFiatApprovals: any,
    private pRenApprovals: any,
    private pVwApprovals: any
  ){
  }


  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get art(): string {
    return this.pArt;
  }

  set art(value: string) {
    this.pArt = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get idVolume(): number {
    return this.pIdVolume;
  }

  set idVolume(value: number) {
    this.pIdVolume = value;
  }

  get idViscosity(): number {
    return this.pIdViscosity;
  }

  set idViscosity(value: number) {
    this.pIdViscosity = value;
  }

  get idBase(): number {
    return this.pIdBase;
  }

  set idBase(value: number) {
    this.pIdBase = value;
  }

  get idBrand(): number {
    return this.pIdBrand;
  }

  set idBrand(value: number) {
    this.pIdBrand = value;
  }

  get idImage(): number {
    return this.pIdImage;
  }

  set idImage(value: number) {
    this.pIdImage = value;
  }

  get shortDesc(): string {
    return this.urlEncode.decodeValue(this.pShortDesc);
  }

  set shortDesc(value: string) {
    this.pShortDesc = value;
  }

  get fullDesc(): string {
    return this.urlEncode.decodeValue(this.pFullDesc);
  }

  set fullDesc(value: string) {
    this.pFullDesc = value;
  }

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
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
      jsonObj.vwApproval
      );
  }
}

