export class Auto {
  get shortDesc() {
    return this.pShortDesc;
  }

  set shortDesc(value) {
    this.pShortDesc = value;
  }
  get idModel() {
    return this.pIdModel;
  }

  set idModel(value) {
    this.pIdModel = value;
  }
  get idBrand() {
    return this.pIdBrand;
  }

  set idBrand(value) {
    this.pIdBrand = value;
  }

  constructor(private pId, private pName, private pImgId, private pImg, private pIdModel, private pIdBrand, private pShortDesc) {
  }

  get id() {
    return this.pId;
  }

  set id(value) {
    this.pId = value;
  }

  get name() {
    return this.pName;
  }

  set name(value) {
    this.pName = value;
  }

  get imgId() {
    return this.pImgId;
  }

  set imgId(value) {
    this.pImgId = value;
  }

  get img() {
    return this.pImg;
  }

  set img(value) {
    this.pImg = value;
  }
  public static fromJson(jsonObj: any): Auto {
    return new Auto(jsonObj.id, jsonObj.name, jsonObj.id_image, jsonObj.img, jsonObj.id_model, jsonObj.id_brand, jsonObj.short_desc);
  }
}
