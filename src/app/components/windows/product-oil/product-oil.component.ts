import {Component, Inject, OnInit} from '@angular/core';
import {WindowsMessagesService} from '../../../services/messages/windows-messages.service';
import {ProductsService} from '../../../services/goods/products.service';

@Component({
  selector: 'app-product-oil',
  templateUrl: './product-oil.component.html',
  styleUrls: ['./product-oil.component.less']
})
export class ProductOilComponent implements OnInit {
  get product(): any {
    return this.pProduct;
  }

  set product(value: any) {
    this.pProduct = value;
  }

// "loading" variable use for ngx-loading component
  public loading = false;
  private pProduct = null;
  visible = false;
  constructor(@Inject(WindowsMessagesService) private windowsMessagesService: WindowsMessagesService,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.windowsMessagesService.productOilWindowShowMessage.subscribe(data => {
      this.visible = true;
      this.productsService.getGoodsUnit(data[0], data[1]).subscribe(product => {
        this.product = product;
      });
    });
  }
  public cancel() {
    this.visible = false;
    const findField = document.getElementById('findField');
    findField.focus();
  }
}
