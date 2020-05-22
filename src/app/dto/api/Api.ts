export class Api {

  constructor(private pId: number, private pName:string) {
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

  public static fromJson(jsonObj): Api {
    return new Api(jsonObj.id, jsonObj.name);
  }
}
