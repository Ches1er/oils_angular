import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.less']
})
export class HeaderSearchComponent implements OnInit {
  whatToFind = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public find() {
    if (this.whatToFind === '') {return null; }
    const navigationExtras: NavigationExtras = {
      queryParams: {findData: this.whatToFind}
    };
    this.router.navigate(['/find'], navigationExtras);
  }
}
