import { Component, OnInit } from '@angular/core';
import {ToService} from '../../../../services/to/to.service';

@Component({
  selector: 'app-to-nav',
  templateUrl: './to-nav.component.html',
  styleUrls: ['./to-nav.component.less']
})
export class ToNavComponent implements OnInit {
  get brands(): any {
    return this.pBrands;
  }

  set brands(value: any) {
    this.pBrands = value;
  }
  get autos(): any {
    return this.pAutos;
  }

  set autos(value: any) {
    this.pAutos = value;
  }
  private pAutos = null;
  private pBrands = null;
  public choosenTheme = null;
  constructor(private toService: ToService) { }

  ngOnInit() {
    this.toService.brands.subscribe(resp => this.brands = resp);
  }
  getArticles(id: any) {
    this.autos = null;
    this.choosenTheme = id;
    this.toService.autos.subscribe(resp => this.autos = resp);
  }

}
