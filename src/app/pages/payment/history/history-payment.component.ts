import { Component } from '@angular/core';

@Component({
  selector: 'app-history-payment',
  templateUrl: './history-payment.component.html',
})
export class HistoryPaymentComponent {
  listHistoryPayment = [
    {
      code: '31231',
      user: 'salman faris',
      trxNo: '123',
      event: 'blabalb',
      price: 'Rp20000',
    },
  ];
}
