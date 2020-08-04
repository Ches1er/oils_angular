export class Goods {

  constructor(private pId, private pName, private pPrice, private pCatNumber, private pIdGroup, private pIdExchange, private pMax,
              private pMin) {
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

  get price() {
    return this.pPrice;
  }

  set price(value) {
    this.pPrice = value;
  }

  get catNumber() {
    return this.pCatNumber;
  }

  set catNumber(value) {
    this.pCatNumber = value;
  }

  get idGroup() {
    return this.pIdGroup;
  }

  set idGroup(value) {
    this.pIdGroup = value;
  }

  get idExchange() {
    return this.pIdExchange;
  }

  set idExchange(value) {
    this.pIdExchange = value;
  }

  get max() {
    return this.pMax;
  }

  set max(value) {
    this.pMax = value;
  }

  get min() {
    return this.pMin;
  }

  set min(value) {
    this.pMin = value;
  }
  public static fromJson(jsonObj: any): Goods {
    return new Goods(jsonObj.id, jsonObj.name, jsonObj.price, jsonObj.cat_number, jsonObj.id_group, jsonObj.id_exchange,
      jsonObj.max, jsonObj.min);
  }
}
