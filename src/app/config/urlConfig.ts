export class urlConfig {
  private base = 'http://oils/api/';
  CORE = this.base;

  // AUTH

  LOGIN = this.base + 'login';
  REGISTER = this.base + 'register';
  UPDATE_USER = this.base + 'update_user';
  LOGIN_REMEMBER = this.base + 'login_remember';
  ROLES = this.base + 'roles';
  USER = this.base + 'user';
  IS_ADMIN = this.base + 'is_admin';
  IS_AUTH = this.base + 'is_auth';
  REPEAT_VERIFICATION = this.base + 'repeat_verification_letter';

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

  // PORSCHE

  private porscheApprovalsBase = this.approvalsBase + 'porsche/';
  GETPORSCHEAPPROVALS = this.porscheApprovalsBase + 'all';

  // GM

  private gmApprovalsBase = this.approvalsBase + 'gm/';
  GETGMAPPROVALS = this.gmApprovalsBase + 'all';

  // KOENIG

  private koenigApprovalsBase = this.approvalsBase + 'koenig/';
  GETKOENIGAPPROVALS = this.koenigApprovalsBase + 'all';

  // CHRYSLER

  private chryslerApprovalsBase = this.approvalsBase + 'chrysler/';
  GETCHRYSLERAPPROVALS = this.chryslerApprovalsBase + 'all';

  // PSA

  private psaApprovalsBase = this.approvalsBase + 'psa/';
  GETPSAAPPROVALS = this.psaApprovalsBase + 'all';

  // VOLVO

  private volvoApprovalsBase = this.approvalsBase + 'volvo/';
  GETVOLVOAPPROVALS = this.volvoApprovalsBase + 'all';

  // JAGUAR

  private jaguarApprovalsBase = this.approvalsBase + 'jaguar/';
  GETJAGUARAPPROVALS = this.jaguarApprovalsBase + 'all';

  // JASO

  private jasoApprovalsBase = this.approvalsBase + 'jaso/';
  GETJASOAPPROVALS = this.jasoApprovalsBase + 'all';

  // MAZDA

  private mazdaApprovalsBase = this.approvalsBase + 'mazda/';
  GETMAZDAAPPROVALS = this.mazdaApprovalsBase + 'all';

  // NISSAN

  private nissanApprovalsBase = this.approvalsBase + 'nissan/';
  GETNISSANAPPROVALS = this.nissanApprovalsBase + 'all';

  // GOODS

  private goodsBase = this.CORE + 'goods/';
  // OILS
  GETOILS = this.goodsBase + 'oils';
  GETOILSWPROPERTIES = this.goodsBase + 'oilswprop';
  ADDOIL = this.goodsBase + 'addoil';

  // IMAGES
  private imagesBase = this.CORE + 'images/';
  GETIMAGES = this.imagesBase + 'all';
  GETIMAGE = this.imagesBase + 'image/';
  UPLOAD_IMAGE = this.imagesBase + 'upload_image';
}
