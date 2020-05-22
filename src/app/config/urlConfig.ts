export class urlConfig {
  private base = 'http://oils/api/';
  CORE = this.base;

    //BRANDS
  private brandsBase = this.CORE + 'brands/';
  GETBRANDS = this.brandsBase + 'all';
  GETBRANDSBYTYPE = this.brandsBase + 'bytype/';

    //ACEA

  private aceaBase = this.CORE + 'acea/';
  GETACEA = this.aceaBase + 'all';

    //API

  private apiBase = this.CORE + 'api/';
  GETAPI = this.apiBase + 'all';

   //BASE

  private baseBase = this.CORE + 'base/';
  GETBASE = this.baseBase + 'all';

    // VISCOSITY

  private viscosityBase = this.CORE + 'viscosity/';
  GETVISCOSITY = this.viscosityBase + 'all';

  // VOLUME

  private volumeBase = this.CORE + 'volume/';
  GETVOLUME = this.volumeBase + 'all';

          //APROVALS

  private approvalsBase = this.CORE + 'approvals/';

  //MB

  private mbApprovalsBase = this.approvalsBase + 'mb/';
  GETMBAPPROVALS = this.mbApprovalsBase + 'all';

  //BMW

  private bmwApprovalsBase = this.approvalsBase + 'bmw/';
  GETBMWAPPROVALS = this.bmwApprovalsBase + 'all';

  //FORD

  private fordApprovalsBase = this.approvalsBase + 'ford/';
  GETFORDAPPROVALS = this.fordApprovalsBase + 'all';

  //FIAT

  private fiatApprovalsBase = this.approvalsBase + 'fiat/';
  GETFIATAPPROVALS = this.fiatApprovalsBase + 'all';

  //RENAULT

  private renApprovalsBase = this.approvalsBase + 'ren/';
  GETRENAPPROVALS = this.renApprovalsBase + 'all';

  //VW

  private vwApprovalsBase = this.approvalsBase + 'vw/';
  GETVWAPPROVALS = this.vwApprovalsBase + 'all';

         //GOODS

  private goodsBase = this.CORE + 'goods/';
  //OILS
  GETOILS = this.goodsBase + 'oils';
  GETOILSWPROPERTIES = this.goodsBase + 'oilswprop';
}
