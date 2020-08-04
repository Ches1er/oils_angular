import {PriceExchange} from './PriceExchange';

export class PriceExchangeResponse {

  constructor(private pData) {
  }

  get data() {
    return this.pData;
  }

  set data(value) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): PriceExchangeResponse {
    return new PriceExchangeResponse(jsonObj.map(e => PriceExchange.fromJson(e)));
  }
}
