import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../services/goods/products.service';
import {Oils} from '../../../dto/oils/oils';
import {Brand} from '../../../dto/brands/Brand';
import {BrandsService} from '../../../services/goods/brands/brands.service';
import {CheckboxItem} from '../../../classes/CheckboxItem';
import {Acea} from '../../../dto/acea/Acea';
import {AceaServiceService} from '../../../services/goods/acea/acea-service.service';
import {Api} from '../../../dto/api/Api';
import {ApiService} from '../../../services/goods/api/api.service';
import {Base} from '../../../dto/Base/Base';
import {BaseService} from '../../../services/goods/base/base.service';
import {ApprovalsService} from '../../../services/goods/approvals/approvals.service';
import {Mb} from '../../../dto/approvals/mb/Mb';
import {Bmw} from '../../../dto/approvals/bmw/Bmw';
import {Fiat} from '../../../dto/approvals/Fiat/Fiat';
import {Ford} from '../../../dto/approvals/Ford/Ford';
import {Ren} from '../../../dto/approvals/Renault/Ren';
import {Vw} from '../../../dto/approvals/Vw/Vw';
import {RequestItem} from '../../../classes/RequestItem';
import {MainPropertiesService} from '../../../services/goods/mainProperties/main-properties.service';
import {Viscosity} from '../../../dto/mainProperties/Viscosity';
import {Volume} from '../../../dto/mainProperties/Volume';
import {WindowsMessagesService} from '../../../services/messages/windows-messages.service';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.less']
})
export class OilsComponent implements OnInit {
  get nissanApprovals(): any {
    return this.pNissanApprovals;
  }

  set nissanApprovals(value: any) {
    this.pNissanApprovals = value;
  }
  get mazdaApprovals(): any {
    return this.pMazdaApprovals;
  }

  set mazdaApprovals(value: any) {
    this.pMazdaApprovals = value;
  }
  get jasoApprovals(): any {
    return this.pJasoApprovals;
  }

  set jasoApprovals(value: any) {
    this.pJasoApprovals = value;
  }
  get jaguarApprovals(): any {
    return this.pJaguarApprovals;
  }

  set jaguarApprovals(value: any) {
    this.pJaguarApprovals = value;
  }
  get volvoApprovals(): any {
    return this.pVolvoApprovals;
  }

  set volvoApprovals(value: any) {
    this.pVolvoApprovals = value;
  }
  get psaApprovals(): any {
    return this.pPsaApprovals;
  }

  set psaApprovals(value: any) {
    this.pPsaApprovals = value;
  }
  get chryslerApprovals(): any {
    return this.pChryslerApprovals;
  }

  set chryslerApprovals(value: any) {
    this.pChryslerApprovals = value;
  }
  get koenigApprovals(): any {
    return this.pKoenigApprovals;
  }

  set koenigApprovals(value: any) {
    this.pKoenigApprovals = value;
  }
  get gmApprovals(): any {
    return this.pGmApprovals;
  }

  set gmApprovals(value: any) {
    this.pGmApprovals = value;
  }
  get porscheApprovals(): any {
    return this.pPorscheApprovals;
  }

  set porscheApprovals(value: any) {
    this.pPorscheApprovals = value;
  }
  get nissanApprovalsIdsArray(): any[] {
    return this.pNissanApprovalsIdsArray;
  }

  set nissanApprovalsIdsArray(value: any[]) {
    this.pNissanApprovalsIdsArray = value;
  }
  get mazdaApprovalsIdsArray(): any[] {
    return this.pMazdaApprovalsIdsArray;
  }

  set mazdaApprovalsIdsArray(value: any[]) {
    this.pMazdaApprovalsIdsArray = value;
  }
  get jasoApprovalsIdsArray(): any[] {
    return this.pJasoApprovalsIdsArray;
  }

  set jasoApprovalsIdsArray(value: any[]) {
    this.pJasoApprovalsIdsArray = value;
  }
  get jaguarApprovalsIdsArray(): any[] {
    return this.pJaguarApprovalsIdsArray;
  }

  set jaguarApprovalsIdsArray(value: any[]) {
    this.pJaguarApprovalsIdsArray = value;
  }
  get volvoApprovalsIdsArray(): any[] {
    return this.pVolvoApprovalsIdsArray;
  }

  set volvoApprovalsIdsArray(value: any[]) {
    this.pVolvoApprovalsIdsArray = value;
  }
  set psaApprovalsIdsArray(value: any[]) {
    this.pPsaApprovalsIdsArray = value;
  }
  get psaApprovalsIdsArray(): any[] {
    return this.pPsaApprovalsIdsArray;
  }
  get chryslerApprovalsIdsArray(): any[] {
    return this.pChryslerApprovalsIdsArray;
  }

  set chryslerApprovalsIdsArray(value: any[]) {
    this.pChryslerApprovalsIdsArray = value;
  }
  get koenigApprovalsIdsArray(): any[] {
    return this.pKoenigApprovalsIdsArray;
  }

  set koenigApprovalsIdsArray(value: any[]) {
    this.pKoenigApprovalsIdsArray = value;
  }
  get gmApprovalsIdsArray(): any[] {
    return this.pGmApprovalsIdsArray;
  }

  set gmApprovalsIdsArray(value: any[]) {
    this.pGmApprovalsIdsArray = value;
  }
  get porscheApprovalsIdsArray(): any[] {
    return this.pPorscheApprovalsIdsArray;
  }

  set porscheApprovalsIdsArray(value: any[]) {
    this.pPorscheApprovalsIdsArray = value;
  }
  // "loading" variable use for ngx-loading component
  public loading = false;

  // GETTERS AND SETTERS

  get volume(): any {
    return this.pVolume;
  }

  set volume(value: any) {
    this.pVolume = value;
  }

  get viscosity(): any {
    return this.pViscosity;
  }

  set viscosity(value: any) {
    this.pViscosity = value;
  }

  get volumeIdsArray(): any {
    return this.pVolumeIdsArray;
  }

  set volumeIdsArray(value: any) {
    this.pVolumeIdsArray = value;
  }

  get viscosityIdsArray(): any {
    return this.pViscosityIdsArray;
  }

  set viscosityIdsArray(value: any) {
    this.pViscosityIdsArray = value;
  }

  get products(): any {
    return this.pProducts;
  }

  set products(value: any) {
    this.pProducts = value;
  }

  get brands(): any {
    return this.pBrands;
  }

  set brands(value: any) {
    this.pBrands = value;
  }

  get productType(): any {
    return this.pProductType;
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

  get brandIdsArray(): any {
    return this.pBrandIdsArray;
  }

  set brandIdsArray(value: any) {
    this.pBrandIdsArray = value;
  }

  get apiIdsArray(): any {
    return this.pApiIdsArray;
  }

  set apiIdsArray(value: any) {
    this.pApiIdsArray = value;
  }

  get aceaIdsArray(): any {
    return this.pAceaIdsArray;
  }

  set aceaIdsArray(value: any) {
    this.pAceaIdsArray = value;
  }

  get baseIdsArray(): any {
    return this.pBaseIdsArray;
  }

  set baseIdsArray(value: any) {
    this.pBaseIdsArray = value;
  }

  get base(): any {
    return this.pBase;
  }

  set base(value: any) {
    this.pBase = value;
  }

  get Api(): any {
    return this.pApi;
  }

  set Api(value: any) {
    this.pApi = value;
  }

  get acea(): any {
    return this.pAcea;
  }

  set acea(value: any) {
    this.pAcea = value;
  }

  get nonEmptyProductList(): any {
    return this.pNonEmptyProductList;
  }

  set nonEmptyProductList(value: any) {
    this.pNonEmptyProductList = value;
  }

  get mbApprovalsIdsArray(): any {
    return this.pMbApprovalsIdsArray;
  }

  set mbApprovalsIdsArray(value: any) {
    this.pMbApprovalsIdsArray = value;
  }

  get bmwApprovalsIdsArray(): any {
    return this.pBmwApprovalsIdsArray;
  }

  set bmwApprovalsIdsArray(value: any) {
    this.pBmwApprovalsIdsArray = value;
  }

  get fiatApprovalsIdsArray(): any {
    return this.pFiatApprovalsIdsArray;
  }

  set fiatApprovalsIdsArray(value: any) {
    this.pFiatApprovalsIdsArray = value;
  }

  get fordApprovalsIdsArray(): any {
    return this.pFordApprovalsIdsArray;
  }

  set fordApprovalsIdsArray(value: any) {
    this.pFordApprovalsIdsArray = value;
  }

  get renApprovalsIdsArray(): any {
    return this.pRenApprovalsIdsArray;
  }

  set renApprovalsIdsArray(value: any) {
    this.pRenApprovalsIdsArray = value;
  }

  get vwApprovalsIdsArray(): any {
    return this.pVwApprovalsIdsArray;
  }

  set vwApprovalsIdsArray(value) {
    this.pVwApprovalsIdsArray = value;
  }

  private pApiIdsArray = [];
  private pAceaIdsArray = [];
  private pBaseIdsArray = [];
  private pBrandIdsArray = [];
  private pViscosityIdsArray = [];
  private pVolumeIdsArray = [];
  private pMbApprovalsIdsArray = [];
  private pBmwApprovalsIdsArray = [];
  private pFiatApprovalsIdsArray = [];
  private pFordApprovalsIdsArray = [];
  private pRenApprovalsIdsArray = [];
  private pVwApprovalsIdsArray = [];
  private pPorscheApprovalsIdsArray = [];
  private pGmApprovalsIdsArray = [];
  private pKoenigApprovalsIdsArray = [];
  private pChryslerApprovalsIdsArray = [];
  private pPsaApprovalsIdsArray = [];
  private pVolvoApprovalsIdsArray = [];
  private pJaguarApprovalsIdsArray = [];
  private pJasoApprovalsIdsArray = [];
  private pMazdaApprovalsIdsArray = [];
  private pNissanApprovalsIdsArray = [];

  private pProducts: any = [];
  private pBrands: any = [];
  private pAcea: any = [];
  private pApi: any = [];
  private pBase: any = [];
  private pViscosity: any = [];
  private pVolume: any = [];
  private pMbApprovals: any = [];
  private pBmwApprovals: any = [];
  private pFiatApprovals: any = [];
  private pFordApprovals: any = [];
  private pRenApprovals: any = [];
  private pVwApprovals: any = [];
  private pPorscheApprovals: any = [];
  private pGmApprovals: any = [];
  private pKoenigApprovals: any = [];
  private pChryslerApprovals: any = [];
  private pPsaApprovals: any = [];
  private pVolvoApprovals: any = [];
  private pJaguarApprovals: any = [];
  private pJasoApprovals: any = [];
  private pMazdaApprovals: any = [];
  private pNissanApprovals: any = [];

  private pNonEmptyProductList = false;
  brandsOptions = [];
  aceaOptions = [];
  apiOptions = [];
  baseOptions = [];
  volOptions = [];
  viscOptions = [];

  // Approvals Options

  mbOptions = [];
  bmwOptions = [];
  fiatOptions = [];
  fordOptions = [];
  renOptions = [];
  vwOptions = [];
  porscheOptions = [];
  gmOptions = [];
  koenigOptions = [];
  chryslerOptions = [];
  psaOptions = [];
  volvoOptions = [];
  jaguarOptions = [];
  jasoOptions = [];
  mazdaOptions = [];
  nissanOptions = [];

  // Hide-Show Approvals

  hideMb = true;
  hideAll = true;
  hideVw = true;
  hideRen = true;
  hideFiat = true;
  hideFord = true;
  hideBmw = true;
  hidePorsche = true;
  hideGm = true;
  hideKoenig = true;
  hideChrysler = true;
  hidePsa = true;
  hideVolvo = true;
  hideJaguar = true;
  hideJaso = true;
  hideMazda = true;
  hideNissan = true;

  private pProductType = 1;

  approvalsArray = ['Mb', 'Bmw', 'Ford', 'Fiat', 'Ren', 'Vw', 'Porsche', 'Gm', 'Koenig', 'Chrysler', 'Psa', 'Volvo', 'Jaguar', 'Jaso', 'Mazda', 'Nissan'];

  private requestItem: RequestItem = new RequestItem(
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [], [], [], [], [], [],
    [], [], [], []
  );

  constructor(private productsService: ProductsService,
              private brandsService: BrandsService,
              private aceaService: AceaServiceService,
              private apiService: ApiService,
              private baseService: BaseService,
              private approvalsService: ApprovalsService,
              private mainPropertiesService: MainPropertiesService,
              private windowsMessagesService: WindowsMessagesService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.updateOils();
    this.updateBrands();
    this.updateAcea();
    this.updateApi();
    this.updateBase();
    this.updateApprovals();
    this.updateMainProperties();
  }

  // Updates properties

  private convertStrPropertiesToArray(e: Oils): Oils {
    const aceaArray = e.acea.split(',');
    const apiArray = e.api.split(',');
    this.approvalsArray.forEach(model => {
      if (e[model.toLowerCase() + 'Approvals']) {
        const approvalsArray = e[model.toLowerCase() + 'Approvals'].split(',');
        e[model.toLowerCase() + 'Approvals'] = approvalsArray.map(elem => Number(elem));
      }
    });
    e.acea = aceaArray.map(e => Number(e));
    e.api = apiArray.map(e => Number(e));
    e.idBrand = Number(e.idBrand);
    e.idViscosity = Number(e.idViscosity);
    e.idVolume = Number(e.idVolume);
    return e;
  }

  private updateApprovals() {
    this.approvalsArray.forEach(model => {
      const toLowerCase = model.toLowerCase();
      this.approvalsService.approvals('prod', model).subscribe(resp => {
        console.log(resp);
        this[toLowerCase + 'Approvals'] = resp;
        this[toLowerCase + 'Options'] = resp.map(r => new CheckboxItem(r.id, r.name, false));
      });
    });
  }

  private updateOils() {
    this.productsService.oils.subscribe(resp => {
      resp.forEach(e => {
        this.convertStrPropertiesToArray(e);
      });
      this.products = resp;
      this.loading = false;
    });
    this.nonEmptyProductList = true;
  }

  private updateBrands() {
    this.brandsService.brandsByType(this.productType).subscribe(resp => {
      this.brandsOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
      this.brands = resp;
    });
  }

  private updateAcea() {
    this.aceaService.Acea('prod').subscribe(resp => {
      this.acea = resp;
      this.aceaOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }

  private updateApi() {
    this.apiService.Api('prod').subscribe(resp => {
      this.Api = resp;
      this.apiOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }

  private updateBase() {
    this.baseService.base.subscribe(resp => {
      this.base = resp;
      this.baseOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });

  }

  private updateMainProperties() {
    this.mainPropertiesService.viscosity('prod').subscribe(resp => {
      this.viscosity = resp;
      this.viscOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
    this.mainPropertiesService.volume('prod').subscribe(resp => {
      this.volume = resp;
      this.volOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }


  // Hide-Show checkboxes elements

  private nullIdsArrays() {
    const approvals = this.approvalsArray.map(model => {
      return model.toLowerCase() + 'Approvals';
    });
    const idsArrays = [
      'api',
      'acea',
      'base',
      'brand',
      'volume',
      'viscosity'
    ].concat(approvals);
    idsArrays.forEach(e => {
      this[e + 'IdsArray'] = [];
    });
  }

  private commonCheckboxFade(definers: any) {
    for (let i = 0; i < definers.length; i++) {
      const methodName = definers[i] + 'CheckboxFade';
      const arrName = definers[i] + 'IdsArray';
      if (this[methodName]) {
        this[methodName](this[arrName]);
      }
    }
  }

  // Hide-Show filter options

  // Api

  private apiCheckboxFade(apiArr: any): void {
    const unique = this.uniqueElementsInArray(apiArr);
    this.apiOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // Acea

  private aceaCheckboxFade(aceaArr: any): void {
    const unique = this.uniqueElementsInArray(aceaArr);
    this.aceaOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // Base
  private baseCheckboxFade(baseArr: any): void {
    const unique = this.uniqueElementsInArray(baseArr);
    this.baseOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // Brand

  private brandCheckboxFade(brandArr: any): void {
    const unique = this.uniqueElementsInArray(brandArr);
    this.brandsOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // Volume

  private volumeCheckboxFade(volumeArr): void {
    const unique = this.uniqueElementsInArray(volumeArr);
    this.volOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // Viscosity

  private viscosityCheckboxFade(viscArr): void {
    const unique = this.uniqueElementsInArray(viscArr);
    this.viscOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // MBApprovals

  private mbApprovalsCheckboxFade(mbArray: any): void {
    const unique = this.uniqueElementsInArray(mbArray);
    this.mbOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // BmwApprovals

  private bmwApprovalsCheckboxFade(bmwArray: any): void {
    const unique = this.uniqueElementsInArray(bmwArray);
    this.bmwOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // FiatApprovals

  private fiatApprovalsCheckboxFade(fiatArray: any): void {
    const unique = this.uniqueElementsInArray(fiatArray);
    this.fiatOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // FordApprovals

  private fordApprovalsCheckboxFade(fordArray: any): void {
    const unique = this.uniqueElementsInArray(fordArray);
    this.fordOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // RenaultApprovals

  private renApprovalsCheckboxFade(renArray: any): void {
    const unique = this.uniqueElementsInArray(renArray);
    this.renOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // VwApprovals

  private vwApprovalsCheckboxFade(vwArray: any): void {
    const unique = this.uniqueElementsInArray(vwArray);
    this.vwOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // PorscheApprovals

  private porscheApprovalsCheckboxFade(porscheArray: any): void {
    const unique = this.uniqueElementsInArray(porscheArray);
    this.porscheOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // GmApprovals

  private gmApprovalsCheckboxFade(gmArray: any): void {
    const unique = this.uniqueElementsInArray(gmArray);
    this.gmOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // KoenigApprovals

  private koenigApprovalsCheckboxFade(koenigArray: any): void {
    const unique = this.uniqueElementsInArray(koenigArray);
    this.koenigOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // ChryslerApprovals

  private chryslerApprovalsCheckboxFade(chryslerArray: any): void {
    const unique = this.uniqueElementsInArray(chryslerArray);
    this.chryslerOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // PsaApprovals

  private psaApprovalsCheckboxFade(psaArray: any): void {
    const unique = this.uniqueElementsInArray(psaArray);
    this.psaOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // VolvoApprovals

  private volvoApprovalsCheckboxFade(volvoArray: any): void {
    const unique = this.uniqueElementsInArray(volvoArray);
    this.volvoOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // JaguarApprovals

  private jaguarApprovalsCheckboxFade(jaguarArray: any): void {
    const unique = this.uniqueElementsInArray(jaguarArray);
    this.jaguarOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // JasoApprovals

  private jasoApprovalsCheckboxFade(jasoArray: any): void {
    const unique = this.uniqueElementsInArray(jasoArray);
    this.jasoOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // MazdaApprovals

  private mazdaApprovalsCheckboxFade(mazdaArray: any): void {
    const unique = this.uniqueElementsInArray(mazdaArray);
    this.mazdaOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // NissanApprovals

  private nissanApprovalsCheckboxFade(nissanArray: any): void {
    const unique = this.uniqueElementsInArray(nissanArray);
    this.nissanOptions.map(e => {
      e.fade = !unique.includes(e.value);
    });
  }

  // Finding unique elements in array

  private uniqueElementsInArray(arr: any): any {
    const result = [];
    if (arr.length === 0) {
      return result;
    }
    for (const str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }

  // Brands
  onBrandsChange(value: any) {
    this.requestItem.brand = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.apiIdsArray = this.apiIdsArray.concat(p.api);
        this.aceaIdsArray = this.aceaIdsArray.concat(p.acea);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.volumeIdsArray = this.volumeIdsArray.concat(p.idVolume);
        this.viscosityIdsArray = this.viscosityIdsArray.concat(p.idViscosity);
        this.approvalsIdsConcat(p, 'none');
      });
      const approvals = this.approvalsArray.map(model => {
        return model.toLowerCase() + 'Approvals';
      });
      this.commonCheckboxFade(['base',
        'api',
        'acea',
        'volume',
        'viscosity'].concat(approvals));
    });
  }

  // Acea
  onAceaChange(value: any) {
    this.requestItem.acea = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.apiIdsArray = this.apiIdsArray.concat(p.api);
        this.brandIdsArray = this.brandIdsArray.concat(p.idBrand);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.volumeIdsArray = this.volumeIdsArray.concat(p.idVolume);
        this.viscosityIdsArray = this.viscosityIdsArray.concat(p.idViscosity);
        this.approvalsIdsConcat(p, 'none');
      });
      const approvals = this.approvalsArray.map(model => {
        return model.toLowerCase() + 'Approvals';
      });
      this.commonCheckboxFade(['base',
        'api',
        'brand',
        'volume',
        'viscosity'].concat(approvals));
    });
  }

  // Api
  onApiChange(value: any) {
    console.log(this.brandsOptions);
    this.requestItem.api = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.aceaIdsArray = this.aceaIdsArray.concat(p.acea);
        this.brandIdsArray = this.brandIdsArray.concat(p.idBrand);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.volumeIdsArray = this.volumeIdsArray.concat(p.idVolume);
        this.viscosityIdsArray = this.viscosityIdsArray.concat(p.idViscosity);
        this.approvalsIdsConcat(p, 'none');
      });
      const approvals = this.approvalsArray.map(model => {
        return model.toLowerCase() + 'Approvals';
      });
      this.commonCheckboxFade(['base',
        'acea',
        'brand',
        'volume',
        'viscosity'].concat(approvals));
    });
  }

  // Volume
  onVolumeChange(value) {
    this.requestItem.volume = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.aceaIdsArray = this.aceaIdsArray.concat(p.acea);
        this.apiIdsArray = this.apiIdsArray.concat(p.api);
        this.brandIdsArray = this.brandIdsArray.concat(p.idBrand);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.viscosityIdsArray = this.viscosityIdsArray.concat(p.idViscosity);
        this.approvalsIdsConcat(p, 'none');
      });
      const approvals = this.approvalsArray.map(model => {
        return model.toLowerCase() + 'Approvals';
      });
      this.commonCheckboxFade(['base',
        'acea',
        'api',
        'brand',
        'viscosity'].concat(approvals));
    });
  }

  // Viscosity
  onViscosityChange(value) {
    this.requestItem.viscosity = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.aceaIdsArray = this.aceaIdsArray.concat(p.acea);
        this.apiIdsArray = this.apiIdsArray.concat(p.api);
        this.brandIdsArray = this.brandIdsArray.concat(p.idBrand);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.volumeIdsArray = this.volumeIdsArray.concat(p.idVolume);
        this.approvalsIdsConcat(p, 'none');
      });
      const approvals = this.approvalsArray.map(model => {
        return model.toLowerCase() + 'Approvals';
      });
      this.commonCheckboxFade(['base',
        'acea',
        'api',
        'brand',
        'volume'].concat(approvals));
    });
  }

  // Base
  onBaseChange(value: any) {
    this.requestItem.base = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.aceaIdsArray = this.aceaIdsArray.concat(p.api);
        this.brandIdsArray = this.brandIdsArray.concat(p.acea);
        this.apiIdsArray = this.apiIdsArray.concat(p.api);
        this.volumeIdsArray = this.volumeIdsArray.concat(p.idVolume);
        this.viscosityIdsArray = this.viscosityIdsArray.concat(p.idViscosity);
        this.approvalsIdsConcat(p, 'none');
      });
      const approvals = this.approvalsArray.map(model => {
        return model.toLowerCase() + 'Approvals';
      });
      this.commonCheckboxFade(['api',
        'acea',
        'brand',
        'volume',
        'viscosity'].concat(approvals));
    });
  }

  // Approvals Change
  onApprovalChange(value, definer: string) {
    this.requestItem[definer] = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    const fullAppArray = this.approvalsArray.map(model => {
      return model.toLowerCase() + 'Approvals';
    });
    const appArrayWithoutDefiner = fullAppArray.filter(e => e !== definer);
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.apiIdsArray = this.apiIdsArray.concat(p.api);
        this.aceaIdsArray = this.aceaIdsArray.concat(p.acea);
        this.brandIdsArray = this.brandIdsArray.concat(p.idBrand);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.volumeIdsArray = this.volumeIdsArray.concat(p.idVolume);
        this.viscosityIdsArray = this.viscosityIdsArray.concat(p.idViscosity);
        this.approvalsIdsConcat(p, definer);
        this.nonEmptyProductList = true;
      });
      this.commonCheckboxFade(['api', 'acea', 'brand', 'base', 'volume', 'viscosity'].concat(appArrayWithoutDefiner));
    });
  }

  private approvalsIdsConcat(p: Oils, exception: string): void {
    const approvalsArray = this.approvalsArray.map(model => {
      return model = model.toLowerCase();
    });
    approvalsArray.forEach(e => {
      if (e !== exception) {
        const propertyIdsArray = e + 'ApprovalsIdsArray';
        const productProperty = e + 'Approvals';
        this[propertyIdsArray] = this[propertyIdsArray].concat(p[productProperty]);
      }
    });
  }

  public onClickProduct(productId) {
    this.windowsMessagesService.productOilWindowShow([productId, 'goods_oils']);
  }
}
