import { Component, OnInit } from '@angular/core';
import {ToService} from '../../../../services/to/to.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-to-content',
  templateUrl: './to-content.component.html',
  styleUrls: ['./to-content.component.less']
})
export class ToContentComponent implements OnInit {
  private pGroups = null;
  private pGoods = null;
  private pAuto = null;

  get groups(): any {
    return this.pGroups;
  }

  set groups(value: any) {
    this.pGroups = value;
  }

  get goods(): any {
    return this.pGoods;
  }

  set goods(value: any) {
    this.pGoods = value;
  }

  get auto(): any {
    return this.pAuto;
  }

  set auto(value: any) {
    this.pAuto = value;
  }

  constructor(private toService: ToService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.routeConfig.path === 'to_default') {
      this.getGoods(1, 1);
      this.getAuto(1);
    } else {
      this.activatedRoute.paramMap.subscribe(params => {
        const id = params.get('id');
        this.getGoods(id, 1);
        this.getAuto(id);
      });
    }
  }

  private getGoods(id: any, exchange) {
    this.toService.groups.subscribe(g => this.groups = g);
    this.toService.goods(id, exchange).subscribe(g => {
      this.goods = g;
    });
  }

  private getAuto(id: any) {
    this.toService.auto(id).subscribe(a => {
      this.auto = a;
    });
  }
}
