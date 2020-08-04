export class Group {
  constructor(private pId, private pName, private pTableDefiner) {
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

  get tableDefiner() {
    return this.pTableDefiner;
  }

  set tableDefiner(value) {
    this.pTableDefiner = value;
  }

  public static fromJson(jsonObj: any): Group {
    return new Group(jsonObj.id, jsonObj.name, jsonObj.table_definer);
  }
}
