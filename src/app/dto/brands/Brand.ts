export class Brand {

  constructor(private pId:number, private pName:string, private pIdimage:number, private pImg: string) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get id_image(): number {
    return this.pIdimage;
  }

  set id_image(value: number) {
    this.pIdimage = value;
  }

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
    this.pImg = value;
  }

  public static fromJson(jsonObj: any): Brand {
    return new Brand(jsonObj.id, jsonObj.name, jsonObj.id_image, jsonObj.img);
  }
}
