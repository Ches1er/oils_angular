import { Component, OnInit } from '@angular/core';
import {ToService} from '../../../../services/to/to.service';

@Component({
  selector: 'app-to-nav',
  templateUrl: './to-nav.component.html',
  styleUrls: ['./to-nav.component.less']
})
export class ToNavComponent implements OnInit {
  get models(): any {
    return this.pModels;
  }

  set models(value: any) {
    this.pModels = value;
  }
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
  private pModels = null;
  public choosenTheme = null;
  public choosenModel = null;
  constructor(private toService: ToService) { }

  ngOnInit() {
    this.toService.brands.subscribe(resp => this.brands = resp);
  }
  getModels(id: any) {
    this.models = null;
    this.choosenTheme = id;
    this.toService.models(id).subscribe(resp => {
      this.models = resp;
      if (this.models.length == 0) this.models = null;
    });
  }
  getArticles(id: any) {
    this.autos = null;
    this.choosenModel = id;
    this.toService.autos(id).subscribe(resp => {
      this.autos = resp;
      if (this.autos.length == 0) this.autos = null;
    });
  }

}
