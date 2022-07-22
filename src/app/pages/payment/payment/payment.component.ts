import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent {
  listApprovalPayment = [
    {
      name: 'salman',
      event: 'Event 2.0',
      file: true,
      status: false,
    },
    {
      name: 'salman',
      event: 'Event 2.0',
      file: true,
      status: false,
    },
    {
      name: 'salman',
      event: 'Event 2.0',
      file: true,
      status: false,
    },
  ];
}
