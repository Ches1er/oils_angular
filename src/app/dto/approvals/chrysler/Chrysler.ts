export class Chrysler {
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
  public static fromJson(jsonObj: any): Chrysler {
    return new Chrysler(jsonObj.id, jsonObj.name);
  }
}
