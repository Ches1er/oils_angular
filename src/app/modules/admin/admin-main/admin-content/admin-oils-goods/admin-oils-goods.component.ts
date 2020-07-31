import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AceaServiceService} from '../../../../../services/goods/acea/acea-service.service';
import {ApiService} from '../../../../../services/goods/api/api.service';
import {ApprovalsService} from '../../../../../services/goods/approvals/approvals.service';
import {MainPropertiesService} from '../../../../../services/goods/mainProperties/main-properties.service';
import {BrandsService} from '../../../../../services/goods/brands/brands.service';
import {BaseService} from '../../../../../services/goods/base/base.service';
import {ProductsService} from '../../../../../services/goods/products.service';
import {AdminMessagesService} from '../../../../../services/messages/admin-messages.service';
import {Image} from '../../../../../dto/images/Image';
import {CheckboxItem} from '../../../../../classes/CheckboxItem';
import {AngularEditorCfg} from '../../../../../config/AngularEditorConfig';

@Component({
  selector: 'app-admin-oils-goods',
  templateUrl: './admin-oils-goods.component.html',
  styleUrls: ['./admin-oils-goods.component.less']
})
export class AdminOilsGoodsComponent implements OnInit {
  // "loading" variable use for ngx-loading component
  public loading = false;

  get nissanApprovals(): any[] {
    return this.pNissanApprovals;
  }

  set nissanApprovals(value: any[]) {
    this.pNissanApprovals = value;
  }

  get mazdaApprovals(): any[] {
    return this.pMazdaApprovals;
  }

  set mazdaApprovals(value: any[]) {
    this.pMazdaApprovals = value;
  }

  get jasoApprovals(): any[] {
    return this.pJasoApprovals;
  }

  set jasoApprovals(value: any[]) {
    this.pJasoApprovals = value;
  }

  get jaguarApprovals(): any[] {
    return this.pJaguarApprovals;
  }

  set jaguarApprovals(value: any[]) {
    this.pJaguarApprovals = value;
  }

  get volvoApprovals(): any[] {
    return this.pVolvoApprovals;
  }

  set volvoApprovals(value: any[]) {
    this.pVolvoApprovals = value;
  }

  get psaApprovals(): any[] {
    return this.pPsaApprovals;
  }

  set psaApprovals(value: any[]) {
    this.pPsaApprovals = value;
  }

  get chryslerApprovals(): any[] {
    return this.pChryslerApprovals;
  }

  set chryslerApprovals(value: any[]) {
    this.pChryslerApprovals = value;
  }

  get koenigApprovals(): any[] {
    return this.pKoenigApprovals;
  }

  set koenigApprovals(value: any[]) {
    this.pKoenigApprovals = value;
  }

  get gmApprovals(): any[] {
    return this.pGmApprovals;
  }

  set gmApprovals(value: any[]) {
    this.pGmApprovals = value;
  }

  get porscheApprovals(): any[] {
    return this.pPorscheApprovals;
  }

  set porscheApprovals(value: any[]) {
    this.pPorscheApprovals = value;
  }

  get api(): any[] {
    return this.pApi;
  }

  set api(value: any[]) {
    this.pApi = value;
  }

  get acea(): any[] {
    return this.pAcea;
  }

  set acea(value: any[]) {
    this.pAcea = value;
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

  get fiatApprovals() {
    return this.pFiatApprovals;
  }

  set fiatApprovals(value) {
    this.pFiatApprovals = value;
  }

  get fordApprovals() {
    return this.pFordApprovals;
  }

  set fordApprovals(value) {
    this.pFordApprovals = value;
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

  get viscosity(): any[] {
    return this.pViscosity;
  }

  set viscosity(value: any[]) {
    this.pViscosity = value;
  }

  get volume(): any[] {
    return this.pVolume;
  }

  set volume(value: any[]) {
    this.pVolume = value;
  }

  get brand(): any[] {
    return this.pBrand;
  }

  set brand(value: any[]) {
    this.pBrand = value;
  }

  get base(): any[] {
    return this.pBase;
  }

  set base(value: any[]) {
    this.pBase = value;
  }

  get goods(): any[] {
    return this.pGoods;
  }

  set goods(value: any[]) {
    this.pGoods = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }

  get productType(): number {
    return this.pProductType;
  }

  constructor(private productsService: ProductsService,
              private brandsService: BrandsService,
              private aceaService: AceaServiceService,
              private apiService: ApiService,
              private baseService: BaseService,
              private approvalsService: ApprovalsService,
              private mainPropertiesService: MainPropertiesService,
              private adminMessageService: AdminMessagesService) {
  }

  private pChoosenImg: Image = null;
  private pGoods = [];
  private pWhatHaveToDo: string;
  private pBase = [];
  private pBrand = [];
  private pVolume = [];
  private pViscosity = [];
  private pMbApprovals = [];
  private pBmwApprovals = [];
  private pFiatApprovals = [];
  private pFordApprovals = [];
  private pRenApprovals = [];
  private pVwApprovals = [];
  private pPorscheApprovals = [];
  private pGmApprovals = [];
  private pKoenigApprovals = [];
  private pChryslerApprovals = [];
  private pPsaApprovals = [];
  private pVolvoApprovals = [];
  private pJaguarApprovals = [];
  private pJasoApprovals = [];
  private pMazdaApprovals = [];
  private pNissanApprovals = [];
  private pAcea = [];
  private pApi = [];
  aceaOptions = [];
  apiOptions = [];
  mbApprovalsOptions = [];
  bmwApprovalsOptions = [];
  fiatApprovalsOptions = [];
  fordApprovalsOptions = [];
  renApprovalsOptions = [];
  vwApprovalsOptions = [];
  porscheApprovalsOptions = [];
  gmApprovalsOptions = [];
  koenigApprovalsOptions = [];
  chryslerApprovalsOptions = [];
  psaApprovalsOptions = [];
  volvoApprovalsOptions = [];
  jaguarApprovalsOptions = [];
  jasoApprovalsOptions = [];
  mazdaApprovalsOptions = [];
  nissanApprovalsOptions = [];
  private pProductType = 1;
  approvalsArray = ['Mb', 'Bmw', 'Ford', 'Fiat', 'Ren', 'Vw', 'Porsche', 'Gm',
    'Koenig', 'Chrysler', 'Psa', 'Volvo', 'Jaguar', 'Jaso', 'Mazda', 'Nissan'];

  addChangeGoods: FormGroup = new FormGroup({
    id: new FormControl(''),
    art: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    idBrand: new FormControl('', Validators.required),

    /*Айди базы ставится по умолчанию*/
    idBase: new FormControl('1', Validators.required),
    idImg: new FormControl(''),
    idVolume: new FormControl('', Validators.required),
    idViscosity: new FormControl('', Validators.required),
    shortDesc: new FormControl('', Validators.required),
    fullDesc: new FormControl('', Validators.required),
    acea: new FormControl('', Validators.required),
    api: new FormControl('', Validators.required),
    mbApprovals: new FormControl(''),
    bmwApprovals: new FormControl(''),
    fiatApprovals: new FormControl(''),
    fordApprovals: new FormControl(''),
    renApprovals: new FormControl(''),
    vwApprovals: new FormControl(''),
    porscheApprovals: new FormControl(''),
    gmApprovals: new FormControl(''),
    koenigApprovals: new FormControl(''),
    chryslerApprovals: new FormControl(''),
    psaApprovals: new FormControl(''),
    volvoApprovals: new FormControl(''),
    jaguarApprovals: new FormControl(''),
    jasoApprovals: new FormControl(''),
    mazdaApprovals: new FormControl(''),
    nissanApprovals: new FormControl('')
  });
  angularEditorCfg = new AngularEditorCfg();
  config = this.angularEditorCfg.CONFIG;

  ngOnInit() {
    this.loading = true;
    this.whatHaveToDo = 'add';
    this.updateGoods();
    this.updateBrands();
    this.updateAcea();
    this.updateApi();
    this.updateBase();
    this.updateApprovals();
    this.updateMainProperties();
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      this.moveImageToTheFormControl(i);
      this.choosenImg = i;
    });
  }

  private updateGoods() {
    this.productsService.oils.subscribe(resp => {
      this.goods = resp;
    });
  }

  private updateApprovals() {
    this.approvalsArray.forEach(model => {
      const toLowerCase = model.toLowerCase();
      this.approvalsService.approvals('all', model).subscribe(resp => {
        this[toLowerCase + 'ApprovalsOptions'] = resp.map(r => new CheckboxItem(r.id, r.name, false));
        this.loading = false;
      });
    });
  }

  private updateBrands() {
    this.brandsService.brandsByType(this.productType).subscribe(resp => {
      this.brand = resp;
    });
  }

  private updateAcea() {
    this.aceaService.Acea('all').subscribe(resp => {
      this.aceaOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }

  private updateApi() {
    this.apiService.Api('all').subscribe(resp => {
      this.apiOptions = resp.map(r => new CheckboxItem(r.id, r.name, false));
    });
  }

  private updateBase() {
    this.baseService.base.subscribe(resp => {
      this.base = resp;
    });

  }

  private updateMainProperties() {
    this.mainPropertiesService.viscosity('all').subscribe(resp => {
      this.pViscosity = resp;
    });
    this.mainPropertiesService.volume('all').subscribe(resp => {
      this.pVolume = resp;
    });
  }

  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeGoods.patchValue({
      idImg: image.id
    });
  }

  fillInGoods(value: any) {
    this.goods.filter(item => {
      if (item.id == value) {
        this.addChangeGoods.patchValue({
          id: item.id, name: item.name, art: item.art, idVolume: item.idVolume, idViscosity: item.idViscosity, idBase: item.idBase,
          idBrand: item.idBrand, idImg: item.idImage, shortDesc: item.shortDesc, fullDesc: item.fullDesc, acea: item.acea, api: item.api,
          mbApprovals: item.mbApprovals, bmwApprovals: item.bmwApprovals, fiatApprovals: item.fiatApprovals,
          fordApprovals: item.fordApprovals, renApprovals: item.renApprovals, vwApprovals: item.vwApprovals,
          porscheApprovals: item.porscheApprovals, gmApprovals: item.gmApprovals, koenigApprovals: item.koenigApprovals,
          chryslerApprovals: item.chryslerApprovals, psaApprovals: item.psaApprovals, volvoApprovals: item.volvoApprovals,
          jaguarApprovals: item.jaguarApprovals, jasoApprovals: item.jasoApprovals, mazdaApprovals: item.mazdaApprovals,
          nissanApprovals: item.nissanApprovals
        });
        this.choosenImg = new Image(item.id_image, 'name', item.img);
        this.whatHaveToDo = 'update';
        this.addOilProperties(item.acea, item.api, item.mbApprovals, item.bmwApprovals, item.fiatApprovals, item.fordApprovals,
          item.renApprovals, item.vwApprovals, item.porscheApprovals, item.gmApprovals, item.koenigApprovals, item.chryslerApprovals,
          item.psaApprovals, item.volvoApprovals, item.jaguarApprovals, item.jasoApprovals, item.mazdaApprovals, item.nissanApprovals);
      }
    });
  }

  private optionsForItem(str, definer) {
    const options = definer + 'Options';
    this[options].map(e => {
      if (str && str.split(',').includes(String(e.value))) {
        this[definer].push(e.label);
      }
    });
  }

  private addOilProperties(acea, api, mbApprovals, bmwApprovals, fiatApprovals, fordApprovals, renApprovals, vwApprovals,
                           porscheApprovals, gmApprovals, koenigApprovals, chryslerApprovals, psaApprovals, volvoApprovals,
                           jaguarApprovals, jasoApprovals, mazdaApprovals, nissanApprovals) {
    this.emptyPropArrays();
    if (acea) {
      this.optionsForItem(acea, 'acea');
    }
    if (api) {
      this.optionsForItem(api, 'api');
    }
    if (porscheApprovals) {
      this.optionsForItem(porscheApprovals, 'porscheApprovals');
    }
    if (gmApprovals) {
      this.optionsForItem(gmApprovals, 'gmApprovals');
    }
    if (koenigApprovals) {
      this.optionsForItem(koenigApprovals, 'koenigApprovals');
    }
    if (chryslerApprovals) {
      this.optionsForItem(chryslerApprovals, 'chryslerApprovals');
    }
    if (psaApprovals) {
      this.optionsForItem(psaApprovals, 'psaApprovals');
    }
    if (volvoApprovals) {
      this.optionsForItem(volvoApprovals, 'volvoApprovals');
    }
    if (jaguarApprovals) {
      this.optionsForItem(jaguarApprovals, 'jaguarApprovals');
    }
    if (jasoApprovals) {
      this.optionsForItem(jasoApprovals, 'jasoApprovals');
    }
    if (mazdaApprovals) {
      this.optionsForItem(mazdaApprovals, 'mazdaApprovals');
    }
    if (nissanApprovals) {
      this.optionsForItem(nissanApprovals, 'nissanApprovals');
    }
    if (mbApprovals) {
      this.optionsForItem(mbApprovals, 'mbApprovals');
    }
    if (bmwApprovals) {
      this.optionsForItem(bmwApprovals, 'bmwApprovals');
    }
    if (fiatApprovals) {
      this.optionsForItem(fiatApprovals, 'fiatApprovals');
    }
    if (fordApprovals) {
      this.optionsForItem(fordApprovals, 'fordApprovals');
    }
    if (renApprovals) {
      this.optionsForItem(renApprovals, 'renApprovals');
    }
    if (vwApprovals) {
      this.optionsForItem(vwApprovals, 'vwApprovals');
    }
  }

  public onPropertiesChange(value, definer) {
    this[definer] = [];
    let data = value;
    if (Array.isArray(value)) {
      data = value.join(',');
      this.optionsForItem(data, definer);
    }
    this.addChangeGoods.patchValue({[definer]: data});
  }

  private emptyPropArrays() {
    const arrays = ['acea', 'api', 'mbApprovals', 'bmwApprovals', 'fiatApprovals', 'fordApprovals', 'renApprovals', 'vwApprovals',
      'porscheApprovals', 'gmApprovals', 'koenigApprovals', 'chryslerApprovals', 'psaApprovals', 'volvoApprovals',
      'jaguarApprovals', 'jasoApprovals', 'mazdaApprovals', 'nissanApprovals'];
    arrays.map(e => {
      this[e] = [];
    });
  }

  onChangeGoodsSubmit() {
    this.productsService.addOils(this.addChangeGoods.value, this.whatHaveToDo).subscribe(
      resp => {
        this.adminMessageService.ShowServerResponseWindow();
        if (resp === 'update success') {
          const data = ['обновление значения масла: ' + this.addChangeGoods.value.name, 'Данные успешно обновлены'];
          this.adminMessageService.DataToServerResponseData(data.join(';'));
          this.clearFields();
        }
        if (resp === 'insert success') {
          const data = ['добавление нового масла: ' + this.addChangeGoods.value.name, 'Данные успешно добавлены'];
          this.adminMessageService.DataToServerResponseData(data.join(';'));
          this.clearFields();
        }
        if (resp === 'error') {
          const data = ['добавление нового масла: ' + this.addChangeGoods.value.name,
            'Ой, что-то пошло не так! Повторите попытку.'];
          this.adminMessageService.DataToServerResponseData(data.join(';'));
        }
        if (resp === 'this object exists') {
          const data = ['добавление нового масла: ' + this.addChangeGoods.value.name,
            'Такое масло уже существует! Если хотите изменить его данные, выберите из списка.'];
          this.adminMessageService.DataToServerResponseData(data.join(';'));
        }
        this.updateGoods();
      }
    );
  }

  clearFields(e?) {
    if (e) {
      e.preventDefault();
    }
    this.addChangeGoods.patchValue({
      id: '',
      name: '',
      art: '',
      idVolume: '',
      idViscosity: '',
      idBrand: '',
      idImg: '',
      shortDesc: '',
      fullDesc: '',
      acea: '',
      api: '',
      mbApprovals: '',
      bmwApprovals: '',
      fiatApprovals: '',
      fordApprovals: '',
      renApprovals: '',
      vwApprovals: '',
      porscheApprovals: '',
      gmApprovals: '',
      koenigApprovals: '',
      chryslerApprovals: '',
      psaApprovals: '',
      volvoApprovals: '',
      jaguarApprovals: '',
      jasoApprovals: '',
      mazdaApprovals: '',
      nissanApprovals: ''
    });
    this.choosenImg = null;
    this.emptyPropArrays();
    this.whatHaveToDo = 'add';
  }
}
