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

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.less']
})
export class OilsComponent implements OnInit {
  get volume(): Array<Volume> {
    return this.pVolume;
  }

  set volume(value: Array<Volume>) {
    this.pVolume = value;
  }

  get viscosity(): Array<Viscosity> {
    return this.pViscosity;
  }

  set viscosity(value: Array<Viscosity>) {
    this.pViscosity = value;
  }

  get volumeIdsArray(): Array<number> {
    return this.pVolumeIdsArray;
  }

  set volumeIdsArray(value: Array<number>) {
    this.pVolumeIdsArray = value;
  }

  get viscosityIdsArray(): Array<number> {
    return this.pViscosityIdsArray;
  }

  set viscosityIdsArray(value: Array<number>) {
    this.pViscosityIdsArray = value;
  }

  // GETTERS AND SETTERS

  get products(): Array<Oils> {
    return this.pProducts;
  }

  set products(value: Array<Oils>) {
    this.pProducts = value;
  }

  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
  }

  get productType(): number {
    return this.pProductType;
  }

  get mbApprovals(): Array<Mb> {
    return this.pMbApprovals;
  }

  set mbApprovals(value: Array<Mb>) {
    this.pMbApprovals = value;
  }

  get bmwApprovals(): Array<Bmw> {
    return this.pBmwApprovals;
  }

  set bmwApprovals(value: Array<Bmw>) {
    this.pBmwApprovals = value;
  }

  get fiatApprovals(): Array<Fiat> {
    return this.pFiatApprovals;
  }

  set fiatApprovals(value: Array<Fiat>) {
    this.pFiatApprovals = value;
  }

  get fordApprovals(): Array<Ford> {
    return this.pFordApprovals;
  }

  set fordApprovals(value: Array<Ford>) {
    this.pFordApprovals = value;
  }

  get renApprovals(): Array<Ren> {
    return this.pRenApprovals;
  }

  set renApprovals(value: Array<Ren>) {
    this.pRenApprovals = value;
  }

  get vwApprovals(): Array<Vw> {
    return this.pVwApprovals;
  }

  set vwApprovals(value: Array<Vw>) {
    this.pVwApprovals = value;
  }

  get brandIdsArray(): Array<number> {
    return this.pBrandIdsArray;
  }

  set brandIdsArray(value: Array<number>) {
    this.pBrandIdsArray = value;
  }

  get apiIdsArray(): Array<number> {
    return this.pApiIdsArray;
  }

  set apiIdsArray(value: Array<number>) {
    this.pApiIdsArray = value;
  }

  get aceaIdsArray(): Array<number> {
    return this.pAceaIdsArray;
  }

  set aceaIdsArray(value: Array<number>) {
    this.pAceaIdsArray = value;
  }

  get baseIdsArray(): Array<number> {
    return this.pBaseIdsArray;
  }

  set baseIdsArray(value: Array<number>) {
    this.pBaseIdsArray = value;
  }

  get base(): Array<Base> {
    return this.pBase;
  }

  set base(value: Array<Base>) {
    this.pBase = value;
  }

  get Api(): Array<Api> {
    return this.pApi;
  }

  set Api(value: Array<Api>) {
    this.pApi = value;
  }

  get acea(): Array<Acea> {
    return this.pAcea;
  }

  set acea(value: Array<Acea>) {
    this.pAcea = value;
  }

  get nonEmptyProductList(): boolean {
    return this.pNonEmptyProductList;
  }

  set nonEmptyProductList(value: boolean) {
    this.pNonEmptyProductList = value;
  }

  get mbApprovalsIdsArray(): Array<number> {
    return this.pMbApprovalsIdsArray;
  }

  set mbApprovalsIdsArray(value: Array<number>) {
    this.pMbApprovalsIdsArray = value;
  }

  get bmwApprovalsIdsArray(): Array<number> {
    return this.pBmwApprovalsIdsArray;
  }

  set bmwApprovalsIdsArray(value: Array<number>) {
    this.pBmwApprovalsIdsArray = value;
  }

  get fiatApprovalsIdsArray(): Array<number> {
    return this.pFiatApprovalsIdsArray;
  }

  set fiatApprovalsIdsArray(value: Array<number>) {
    this.pFiatApprovalsIdsArray = value;
  }

  get fordApprovalsIdsArray(): Array<number> {
    return this.pFordApprovalsIdsArray;
  }

  set fordApprovalsIdsArray(value: Array<number>) {
    this.pFordApprovalsIdsArray = value;
  }

  get renApprovalsIdsArray(): Array<number> {
    return this.pRenApprovalsIdsArray;
  }

  set renApprovalsIdsArray(value: Array<number>) {
    this.pRenApprovalsIdsArray = value;
  }

  get vwApprovalsIdsArray(): Array<number> {
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

  private pProducts: Array<Oils> = [];
  private pBrands: Array<Brand> = [];
  private pAcea: Array<Acea> = [];
  private pApi: Array<Api> = [];
  private pBase: Array<Base> = [];
  private pViscosity: Array<Viscosity> = [];
  private pVolume: Array<Volume> = [];
  private pMbApprovals: Array<Mb> = [];
  private pBmwApprovals: Array<Bmw> = [];
  private pFiatApprovals: Array<Fiat> = [];
  private pFordApprovals: Array<Ford> = [];
  private pRenApprovals: Array<Ren> = [];
  private pVwApprovals: Array<Vw> = [];

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

  // Hide-Show Approvals

  hideMb = true;
  hideAll = true;
  hideVw = true;
  hideRen = true;
  hideFiat = true;
  hideFord = true;
  hideBmw = true;

  private pProductType = 1;

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
    []);

  constructor(private productsService: ProductsService,
              private brandsService: BrandsService,
              private aceaService: AceaServiceService,
              private apiService: ApiService,
              private baseService: BaseService,
              private approvalsService: ApprovalsService,
              private mainPropertiesService: MainPropertiesService
  ) {
  }

  ngOnInit() {
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
    if (e.mbApprovals) {
      const mbApprovalsArray = e.mbApprovals.split(',');
      e.mbApprovals = mbApprovalsArray.map(e => Number(e));
    }
    if (e.bmwApprovals) {
      const bmwApprovalsArray = e.bmwApprovals.split(',');
      e.bmwApprovals = bmwApprovalsArray.map(e => Number(e));
    }
    if (e.fordApprovals) {
      const fordApprovalsArray = e.fordApprovals.split(',');
      e.fordApprovals = fordApprovalsArray.map(e => Number(e));
    }
    if (e.fiatApprovals) {
      const fiatApprovalsArray = e.fiatApprovals.split(',');
      e.fiatApprovals = fiatApprovalsArray.map(e => Number(e));
    }
    if (e.renApprovals) {
      const renApprovalsArray = e.renApprovals.split(',');
      e.renApprovals = renApprovalsArray.map(e => Number(e));
    }
    if (e.vwApprovals) {
      const vwApprovalsArray = e.vwApprovals.split(',');
      e.vwApprovals = vwApprovalsArray.map(e => Number(e));
    }
    e.acea = aceaArray.map(e => Number(e));
    e.api = apiArray.map(e => Number(e));
    return e;
  }

  private updateApprovals() {
    this.approvalsService.mbApprovals.subscribe(resp => {
      this.mbApprovals = resp;
      this.mbOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
    this.approvalsService.bmwApprovals.subscribe(resp => {
      this.bmwApprovals = resp;
      this.bmwOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
    this.approvalsService.fiatApprovals.subscribe(resp => {
      this.fiatApprovals = resp;
      this.fiatOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
    this.approvalsService.fordApprovals.subscribe(resp => {
      this.fordApprovals = resp;
      this.fordOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
    this.approvalsService.renaultApprovals.subscribe(resp => {
      this.renApprovals = resp;
      this.renOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
    this.approvalsService.vwApprovals.subscribe(resp => {
      this.vwApprovals = resp;
      this.vwOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }

  private updateOils() {
    this.productsService.oils.subscribe(resp => {
      resp.forEach(e => {
        this.convertStrPropertiesToArray(e);
      });
      this.products = resp;
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
    this.aceaService.Acea.subscribe(resp => {
      this.acea = resp;
      this.aceaOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }

  private updateApi() {
    this.apiService.Api.subscribe(resp => {
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
    this.mainPropertiesService.viscosity.subscribe(resp => {
      this.viscosity = resp;
      this.viscOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
    this.mainPropertiesService.volume.subscribe(resp => {
      this.volume = resp;
      this.volOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }


  // Hide-Show checkboxes elements

  private nullIdsArrays() {
    const idsArrays = [
      'api',
      'acea',
      'base',
      'brand',
      'volume',
      'viscosity',
      'mbApprovals',
      'bmwApprovals',
      'renApprovals',
      'fiatApprovals',
      'fordApprovals',
      'vwApprovals'];
    idsArrays.forEach(e => {
      this[e + 'IdsArray'] = [];
    });
  }

  private commonCheckboxFade(definers: Array<string>, ifAllUnfaded: boolean) {
    for (let i = 0; i < definers.length; i++) {
      const methodName = definers[i] + 'CheckboxFade';
      const arrName = definers[i] + 'IdsArray';
      if (this[methodName]) {
        this[methodName](this[arrName], ifAllUnfaded);
      }
    }
  }

  // Hide-Show filter options

  // Api

  private apiCheckboxFade(apiArr: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.apiOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(apiArr);
      this.apiOptions.map(e => {
        e.fade = !unique.includes(e.value);
      });
    }
  }

  // Acea

  private aceaCheckboxFade(aceaArr: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.aceaOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(aceaArr);
      this.aceaOptions.map(e => {
        e.fade = !unique.includes(e.value);
      });
    }
  }

  // Base

  private baseCheckboxFade(baseArr: Array<number>, ifAllUnfaded: boolean): void {
    console.log(this.baseIdsArray);
    const unique = this.uniqueElementsInArray(baseArr);
    this.baseOptions.map(e => {
      if (!unique.includes(e.value)) {
        e.fade = true;
      }
    });
  }

  // Brand

  private brandCheckboxFade(brandArr: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.brandsOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(brandArr);
      this.brandsOptions.map(e => {
        if (!unique.includes(e.value)) {
          e.fade = true;
        }
      });
    }
  }

  // MBApprovals

  private mbApprovalsCheckboxFade(mbArray: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.mbOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(mbArray);
      this.mbOptions.map(e => {
        if (!unique.includes(e.value)) {
          e.fade = true;
        }
      });
    }
  }

  // BmwApprovals

  private bmwApprovalsCheckboxFade(bmwArray: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.bmwOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(bmwArray);
      this.bmwOptions.map(e => {
        if (!unique.includes(e.value)) {
          e.fade = true;
        }
      });
    }
  }

  // FiatApprovals

  private fiatApprovalsCheckboxFade(fiatArray: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.fiatOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(fiatArray);
      this.fiatOptions.map(e => {
        if (!unique.includes(e.value)) {
          e.fade = true;
        }
      });
    }
  }

  // FordApprovals

  private fordApprovalsCheckboxFade(fordArray: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.fordOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(fordArray);
      this.fordOptions.map(e => {
        if (!unique.includes(e.value)) {
          e.fade = true;
        }
      });
    }
  }

  // RenaultApprovals

  private renApprovalsCheckboxFade(renArray: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.renOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(renArray);
      this.renOptions.map(e => {
        if (!unique.includes(e.value)) {
          e.fade = true;
        }
      });
    }
  }

  // VwApprovals

  private vwApprovalsCheckboxFade(vwArray: Array<number>, ifAllUnfaded: boolean): void {
    if (ifAllUnfaded) {
      this.vwOptions.map(e => e.fade = false);
    } else {
      const unique = this.uniqueElementsInArray(vwArray);
      this.vwOptions.map(e => {
        if (!unique.includes(e.value)) {
          e.fade = true;
        }
      });
    }
  }

  // Finding unique elements in array

  private uniqueElementsInArray(arr: Array<number>): Array<number> {
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
  onBrandsChange(value: Array<number>) {
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
        this.approvalsIdsConcat(p, 'none');
      });
      this.commonCheckboxFade(['base',
        'api',
        'acea',
        'mbApprovals',
        'bmwApprovals',
        'fiatApprovals',
        'fordApprovals',
        'renApprovals',
        'vwApprovals'], false);
    });

  }

  // Acea
  onAceaChange(value: Array<number>) {
    this.requestItem.acea = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;

    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.apiIdsArray = this.apiIdsArray.concat(p.api);
        this.brandIdsArray = this.brandIdsArray.concat(p.acea);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.approvalsIdsConcat(p, 'none');
      });
      this.commonCheckboxFade(['base',
        'api',
        'brand',
        'mbApprovals',
        'bmwApprovals',
        'fiatApprovals',
        'fordApprovals',
        'renApprovals',
        'vwApprovals'], false);
    });
  }

  // Api
  onApiChange(value: Array<number>) {
    // this.requestItem.api = [];
    this.requestItem.api = value;
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    this.productsService.oilsWProperties(this.requestItem).subscribe(resp => {
      this.nonEmptyProductList = true;
      this.products = resp;
      this.products.forEach(p => {
        this.convertStrPropertiesToArray(p);
        this.aceaIdsArray = this.aceaIdsArray.concat(p.api);
        this.brandIdsArray = this.brandIdsArray.concat(p.acea);
        this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
        this.approvalsIdsConcat(p, 'none');
      });
      this.commonCheckboxFade(['base',
        'acea',
        'brand',
        'mbApprovals',
        'bmwApprovals',
        'fiatApprovals',
        'fordApprovals',
        'renApprovals',
        'vwApprovals'], false);
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
        this.viscosityIdsArray = this.viscosityIdsArray.concat(p.idVolume);
        this.approvalsIdsConcat(p, 'none');
      });
      this.commonCheckboxFade(['base',
        'acea',
        'brand',
        'mbApprovals',
        'bmwApprovals',
        'fiatApprovals',
        'fordApprovals',
        'renApprovals',
        'vwApprovals'], false);
    });
  }

  // Viscosity
  onViscosityChange(value) {
    // todo
  }

  // Base
  onBaseChange(value: Array<number>) {
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    if (value.length === 0) {
      this.commonCheckboxFade(['api', 'acea', 'brand', 'mbApprovals', 'bmwApprovals',
        'fiatApprovals',
        'fordApprovals',
        'renApprovals',
        'vwApprovals'], true);
      this.updateOils();
    } else {
      this.products.forEach(p => {
        p.show = value.includes(p.idBase);
        if (p.show) {
          this.apiIdsArray = this.apiIdsArray.concat(p.api);
          this.aceaIdsArray = this.aceaIdsArray.concat(p.acea);
          this.brandIdsArray = this.brandIdsArray.concat(p.idBrand);
          this.approvalsIdsConcat(p, 'none');
          this.nonEmptyProductList = true;
        }
      });
      this.commonCheckboxFade(['api', 'acea', 'brand', 'mbApprovals', 'bmwApprovals',
        'fiatApprovals',
        'fordApprovals',
        'renApprovals',
        'vwApprovals'], false);
    }
  }

  // Approvals Change
  onApprovalChange(value: Array<number>, definer: string) {
    this.nullIdsArrays();
    this.nonEmptyProductList = false;
    const fullAppArray = ['mbApprovals', 'bmwApprovals', 'fiatApprovals', 'fordApprovals', 'renApprovals', 'vwApprovals'];
    const appArrayWithoutDefiner = fullAppArray.filter(e => e !== definer);
    if (value.length === 0) {
      this.commonCheckboxFade(['api', 'acea', 'brand', 'base'].concat(appArrayWithoutDefiner), true);
      this.updateOils();
    } else {
      this.products.forEach(p => {
        p.show = value.includes(p.idBase);
        if (p.show) {
          this.apiIdsArray = this.apiIdsArray.concat(p.api);
          this.aceaIdsArray = this.aceaIdsArray.concat(p.acea);
          this.brandIdsArray = this.brandIdsArray.concat(p.idBrand);
          this.baseIdsArray = this.baseIdsArray.concat(p.idBase);
          this.approvalsIdsConcat(p, definer);
          this.nonEmptyProductList = true;
        }
      });
      this.commonCheckboxFade(['api', 'acea', 'brand', 'base'].concat(appArrayWithoutDefiner), false);
    }
  }

  private approvalsIdsConcat(p: Oils, exception: string): void {
    const approvalsArray = ['mb', 'bmw', 'ford', 'fiat', 'ren', 'vw'];
    approvalsArray.forEach(e => {
      if (e !== exception) {
        const propertyIdsArray = e + 'ApprovalsIdsArray';
        const productProperty = e + 'Approvals';
        this[propertyIdsArray] = this[propertyIdsArray].concat(p[productProperty]);
      }
    });
  }

  private updateOilsWithProperties(requestItem: RequestItem) {
    this.productsService.oilsWProperties(requestItem).subscribe(resp => {
      this.products = resp;
    });
  }


}
