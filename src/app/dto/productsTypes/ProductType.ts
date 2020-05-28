export class ProductType {

  constructor(private pId, private pName, private pImg, private pImgId) {
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

  get img() {
    return this.pImg;
  }

  set img(value) {
    this.pImg = value;
  }

  get imgId() {
    return this.pImgId;
  }

  set imgId(value) {
    this.pImgId = value;
  }
  public static fromJson(jsonObj: any): ProductType {
    return new ProductType(jsonObj.id, jsonObj.name, jsonObj.img, jsonObj.id_image);
  }
}
