export class Mb {

  constructor(private pId: number, private pName: string) {
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
  public static fromJson(jsonObj: any): Mb {
    return new Mb(jsonObj.id, jsonObj.name);
  }
}
