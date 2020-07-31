import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ProductsService} from '../../../services/goods/products.service';
import {WindowsMessagesService} from '../../../services/messages/windows-messages.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.less']
})
export class HeaderSearchComponent implements OnInit {
  whatToFind = '';
  oldWhatToFind = null;
  products = null;

  constructor(private router: Router, private productsService: ProductsService, private windowMessagesService: WindowsMessagesService) {
  }

  ngOnInit() {

  }

  public find() {
    if (this.whatToFind === '') { this.products = null; } else {
      this.productsService.findGoods(this.whatToFind).subscribe(resp => {
        if (resp.length === 0 || this.whatToFind === '') {
          this.products = null;
        } else {
          this.products = resp;
          this.oldWhatToFind = this.whatToFind;
        }
      });
    }
  }

  showProduct(id: any, tableDefiner: any) {
    this.windowMessagesService.productOilWindowShow([id, tableDefiner]);
  }
}
