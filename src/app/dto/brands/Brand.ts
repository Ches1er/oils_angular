export class Brand {

  constructor(private pId, private pName, private pIdimage, private pImg: string) {
  }

  get id() {
    return this.pId;
  }

  set id(value) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get id_image() {
    return this.pIdimage;
  }

  set id_image(value) {
    this.pIdimage = value;
  }

  get img() {
    return this.pImg;
  }

  set img(value) {
    this.pImg = value;
  }

  public static fromJson(jsonObj: any): Brand {
    return new Brand(jsonObj.id, jsonObj.name, jsonObj.id_image, jsonObj.img);
  }
}
