import {ProductType} from './ProductType';

export class ProductsTypesResponse {

  constructor(private pData: Array<ProductType>) {
  }

  get data(): Array<ProductType> {
    return this.pData;
  }

  set data(value: Array<ProductType>) {
    this.pData = value;
  }

  public static fromJson(jsonObj: any): ProductsTypesResponse {
    return new ProductsTypesResponse(jsonObj.map(e => ProductType.fromJson(e)));
  }
}
