import { Component, OnInit } from '@angular/core';
import {MainPropertiesService} from '../../../../../services/goods/mainProperties/main-properties.service';
import {BrandsService} from '../../../../../services/goods/brands/brands.service';
import {BaseService} from '../../../../../services/goods/base/base.service';
import {ApiService} from '../../../../../services/goods/api/api.service';
import {ApprovalsService} from '../../../../../services/goods/approvals/approvals.service';
import {AceaServiceService} from '../../../../../services/goods/acea/acea-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Image} from '../../../../../dto/images/Image';
import {AdminMessagesService} from '../../../../../services/messages/admin-messages.service';

@Component({
  selector: 'app-admin-oils-params',
  templateUrl: './admin-oils-params.component.html',
  styleUrls: ['./admin-oils-params.component.less']
})
export class AdminOilsParamsComponent implements OnInit {
  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }
  get brands(): any[] {
    return this.pBrands;
  }

  set brands(value: any[]) {
    this.pBrands = value;
  }
  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }
  private pBrands = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  addChangeBrands: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    img: new FormControl('')
  });
  constructor(private brandsService: BrandsService,
              private aceaService: AceaServiceService,
              private apiService: ApiService,
              private baseService: BaseService,
              private approvalsService: ApprovalsService,
              private mainPropertiesService: MainPropertiesService,
              private adminMessageService: AdminMessagesService) { }

  ngOnInit() {
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.updateBrands();
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      this.moveImageToTheFormControl(i);
      this.choosenImg = i;
    });
  }
  private moveImageToTheFormControl(image: Image) {
    this.addChangeBrands.patchValue({
      img: image.id
    });
  }
  private updateBrands() {
    this.brandsService.brands.subscribe(resp => {
      this.brands = resp;
    });
  }
  onBrandsSubmit() {
    // todo
  }
  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }
  clearFields(e) {
    e.preventDefault();
    this.addChangeBrands.patchValue({
      id: '',
      name: '',
      img: '',
    });
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    this.onSubmitResponse = null;
  }

  fillInBrand(value) {
    this.brands.filter(brand => {
      if (brand.id == value) {
        this.addChangeBrands.patchValue({
          id: brand.id,
          name: brand.name,
          img: brand.id_image
        });
        this.choosenImg = new Image(brand.id_image, 'name', brand.img);
        this.whatHaveToDo = 'update';
      }
    });
  }
}
