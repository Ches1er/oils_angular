export class Article {

  constructor(private pId, private pName, private pIdImg, private pShortDesc, private pFullDesc, private pGoods, private pIdTheme, private pImg) {
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

  get idImg() {
    return this.pIdImg;
  }

  set idImg(value) {
    this.pIdImg = value;
  }

  get shortDesc() {
    return this.pShortDesc;
  }

  set shortDesc(value) {
    this.pShortDesc = value;
  }

  get fullDesc() {
    return this.pFullDesc;
  }

  set fullDesc(value) {
    this.pFullDesc = value;
  }

  get goods() {
    return this.pGoods;
  }

  set goods(value) {
    this.pGoods = value;
  }

  get idTheme() {
    return this.pIdTheme;
  }

  set idTheme(value) {
    this.pIdTheme = value;
  }

  get img() {
    return this.pImg;
  }

  set img(value) {
    this.pImg = value;
  }
  public static fromJson(jsonObj): Article {
    return new Article(jsonObj.id, jsonObj.name, jsonObj.id_image, jsonObj.short_desc, jsonObj.full_desc, jsonObj.goods, jsonObj.id_theme, jsonObj.img);
  }
}
