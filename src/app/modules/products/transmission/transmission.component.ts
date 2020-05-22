import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/goods/products.service";
import {Oils} from "../../../dto/oils/oils";
import {BrandsService} from "../../../services/goods/brands/brands.service";
import {Brand} from "../../../dto/brands/Brand";

@Component({
  selector: 'app-transmission',
  templateUrl: './transmission.component.html',
  styleUrls: ['./transmission.component.less']
})
export class TransmissionComponent implements OnInit {
  private pProducts: Array<Oils> = [];
  private pBrands: Array<Brand> = [];
  private pProductType = 2;
  constructor(private productsService: ProductsService,
              private brandsService: BrandsService) { }

  get products(): Array<Oils> {
    return this.pProducts;
  }

  set products(value: Array<Oils>) {
    this.pProducts = value;
  }
  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
  }
  get productType(): number {
    return this.pProductType;
  }

  set productType(value: number) {
    this.pProductType = value;
  }

  ngOnInit() {
    this.updateOils();
    this.updateBrands();
  }
  private updateOils(){
    this.productsService.oils.subscribe(resp => this.products = resp);
  }
  private updateBrands(){
    this.brandsService.brandsByType(this.productType).subscribe(resp => this.brands = resp);
  }
}
