export class ArticlesThemes {
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

  public static fromJson(jsonObj: any): ArticlesThemes {
    return new ArticlesThemes(jsonObj.id, jsonObj.name, jsonObj.id_image, jsonObj.img);
  }
}
