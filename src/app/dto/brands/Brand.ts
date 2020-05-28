export class Brand {
  get typesNames(): any {
    return this.pTypesNames;
  }

  set typesNames(value: any) {
    this.pTypesNames = value;
  }
  get types(): any {
    return this.pTypes;
  }

  set types(value: any) {
    this.pTypes = value;
  }

  constructor(private pId, private pName, private pIdimage, private pImg: string, private pTypes: any, private pTypesNames: any) {
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
    return new Brand(jsonObj.id, jsonObj.name, jsonObj.id_image, jsonObj.img, jsonObj.types, jsonObj.types_names);
  }
}
