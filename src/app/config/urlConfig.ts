export class urlConfig {
  private base = 'http://oils/api/';
  CORE = this.base;

  // PRODUCTS_TYPES

  private productsTypesBase = this.CORE + 'products_types/';
  GETPRODUCTSTYPES = this.productsTypesBase + 'all';
  ADDPRODUCTSTYPE = this.productsTypesBase + 'add';

  // BRANDS
  private brandsBase = this.CORE + 'brands/';
  GETBRANDS = this.brandsBase + 'all';
  GETBRANDSBYTYPE = this.brandsBase + 'bytype/';
  ADDBRAND = this.brandsBase + 'add';

  // ACEA

  private aceaBase = this.CORE + 'acea/';
  GETACEA = this.aceaBase + 'all';
  ADDACEA = this.aceaBase + 'add';

  // API

  private apiBase = this.CORE + 'api/';
  GETAPI = this.apiBase + 'all';
  ADDAPI = this.apiBase + 'add';

  // BASE

  private baseBase = this.CORE + 'base/';
  GETBASE = this.baseBase + 'all';

  // VISCOSITY

  private viscosityBase = this.CORE + 'viscosity/';
  GETVISCOSITY = this.viscosityBase + 'all';
  ADDVISCOSITY = this.viscosityBase + 'add';

  // VOLUME

  private volumeBase = this.CORE + 'volume/';
  GETVOLUME = this.volumeBase + 'all';
  ADDVOLUME = this.volumeBase + 'add';

  // APROVALS

  private approvalsBase = this.CORE + 'approvals/';

  // Create-update

  ADDAPPROVAL = this.approvalsBase + 'add';

  // MB

  private mbApprovalsBase = this.approvalsBase + 'mb/';
  GETMBAPPROVALS = this.mbApprovalsBase + 'all';

  // BMW

  private bmwApprovalsBase = this.approvalsBase + 'bmw/';
  GETBMWAPPROVALS = this.bmwApprovalsBase + 'all';

  // FORD

  private fordApprovalsBase = this.approvalsBase + 'ford/';
  GETFORDAPPROVALS = this.fordApprovalsBase + 'all';

  // FIAT

  private fiatApprovalsBase = this.approvalsBase + 'fiat/';
  GETFIATAPPROVALS = this.fiatApprovalsBase + 'all';

  // RENAULT

  private renApprovalsBase = this.approvalsBase + 'ren/';
  GETRENAPPROVALS = this.renApprovalsBase + 'all';

  // VW

  private vwApprovalsBase = this.approvalsBase + 'vw/';
  GETVWAPPROVALS = this.vwApprovalsBase + 'all';

  // GOODS

  private goodsBase = this.CORE + 'goods/';
  // OILS
  GETOILS = this.goodsBase + 'oils';
  GETOILSWPROPERTIES = this.goodsBase + 'oilswprop';

  // IMAGES
  private imagesBase = this.CORE + 'images/';
  GETIMAGES = this.imagesBase + 'all';
  GETIMAGE = this.imagesBase + 'image/';
  UPLOAD_IMAGE = this.imagesBase + 'upload_image';
}
