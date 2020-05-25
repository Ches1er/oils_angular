import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckboxItem} from '../../../classes/CheckboxItem';

@Component({
  selector: 'app-checkbox-component',
  templateUrl: './checkbox-component.component.html',
  styleUrls: ['./checkbox-component.component.less']
})
export class CheckboxComponentComponent implements OnInit {
  get selectedValues(): any[] {
    return this.pSelectedValues;
  }

  set selectedValues(value: any[]) {
    this.pSelectedValues = value;
  }
  @Input() options = Array<CheckboxItem>();
  @Output() toggle = new EventEmitter<any[]>();
  private pSelectedValues = [];
  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    const checkedOptions = this.options.filter(x => x.checked);
    this.selectedValues = checkedOptions.map(x => x.value);
    this.toggle.emit(checkedOptions.map(x => x.value));
  }
}
