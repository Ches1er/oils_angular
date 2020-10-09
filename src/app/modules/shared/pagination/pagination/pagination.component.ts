import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedModuleService} from '../../../../services/messages/shared-module.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {
  page = 1;    // the current page
  @Input() count;   // how many total items there are in all pages
  @Input() perPage; // how many items we want to show per page
  pagesToShow = 5; // how many pages between next/prev
  @Input() loading;    // check if content is being loaded

  @Output() goPrev = new EventEmitter<any>();
  @Output() goNext = new EventEmitter<any>();
  @Output() goPage = new EventEmitter<any>();
  constructor(private sharedModuleMessages: SharedModuleService) { }

  ngOnInit() {
  }
  getMin() {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax() {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    return max;
  }

  onPage(n): void {
    this.goPage.emit(n);
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(next): void {
    this.goNext.emit(next);
  }

  totalPages() {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  lastPage() {
    return this.perPage * this.page > this.count;
  }
  getPages() {
    const c = Math.ceil(this.count / this.perPage);
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }
}
