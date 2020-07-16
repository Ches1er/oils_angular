import {Component, Inject, OnInit} from '@angular/core';
import {WindowsMessagesService} from '../../../services/messages/windows-messages.service';
import {ProductsService} from '../../../services/goods/products.service';

@Component({
  selector: 'app-product-oil',
  templateUrl: './product-oil.component.html',
  styleUrls: ['./product-oil.component.less']
})
export class ProductOilComponent implements OnInit {
  get oil(): any {
    return this.pOil;
  }

  set oil(value: any) {
    this.pOil = value;
  }

// "loading" variable use for ngx-loading component
  public loading = false;
  private pOil = null;
  visible = false;
  constructor(@Inject(WindowsMessagesService) private windowsMessagesService: WindowsMessagesService,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.windowsMessagesService.productOilWindowShowMessage.subscribe(id => {
      this.visible = true;
      this.productsService.getOil(id).subscribe(oil => {
        this.oil = oil;
      });
    });
  }
  public cancel() {
    this.visible = false;
  }
}
