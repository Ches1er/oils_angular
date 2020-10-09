
export class Ilsac {
  constructor(private pId: any, private pName: string) {
  }

  get id(): any {
    return this.pId;
  }

  set id(value: any) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  public static fromJson(jsonObj: any): Ilsac {
    return new Ilsac(jsonObj.id, jsonObj.name);
  }
}
