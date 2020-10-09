export class Model {
  constructor(private pId, private pName, private pIdBrand) {
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

  get idBrand() {
    return this.pIdBrand;
  }

  set idBrand(value) {
    this.pIdBrand = value;
  }

  public static fromJson(jsonObj: any): Model {
    return new Model(jsonObj.id, jsonObj.name, jsonObj.id_brand);
  }
}
