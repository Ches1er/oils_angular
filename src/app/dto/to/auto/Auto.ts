export class Auto {

  constructor(private pId, private pName, private pImgId, private pImg) {
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
    return new Auto(jsonObj.id, jsonObj.name, jsonObj.id_image, jsonObj.img);
  }
}
