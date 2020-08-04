export class PriceExchange {

  constructor(private pId, private pName, private pPriceExchange) {
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

  get priceExchange() {
    return this.pPriceExchange;
  }

  set priceExchange(value) {
    this.pPriceExchange = value;
  }
  public static fromJson(jsonObj: any): PriceExchange {
    return new PriceExchange(jsonObj.id, jsonObj.name, jsonObj.exchange);
  }
}
