import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToService} from '../../../../../../services/to/to.service';
import {Image} from '../../../../../../dto/images/Image';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';

@Component({
  selector: 'app-admin-to-exchange',
  templateUrl: './admin-to-exchange.component.html',
  styleUrls: ['./admin-to-exchange.component.less']
})
export class AdminToExchangeComponent implements OnInit {
  get exchanges(): any {
    return this.pExchanges;
  }

  set exchanges(value: any) {
    this.pExchanges = value;
  }
  whatHaveToDo = 'update';
  private pExchanges = null;
  addChangeExchange: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    exchange: new FormControl('', Validators.required)
  });
  constructor(private toService: ToService, private adminMessageService: AdminMessagesService) { }

  ngOnInit() {
    this.updateExchanges();
  }

  private updateExchanges() {
    this.toService.exchanges.subscribe(resp => this.exchanges = resp);
  }
  onExchangeSubmit() {
    this.toService.addExchange(this.addChangeExchange.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление курса', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
    });
  }

  fillInExchange(value: any) {
    this.exchanges.filter(exchange => {
      if (exchange.id == value) {
        console.log(exchange);
        this.addChangeExchange.patchValue({
          id: exchange.id,
          name: exchange.name,
          exchange: exchange.priceExchange,
        });
      }
    });
  }
}
