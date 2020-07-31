import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.less']
})
export class ProductsMainComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    // ngx-device-detector
    console.log(this.deviceService.isDesktop());
  }

}
