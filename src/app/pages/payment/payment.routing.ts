import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { HistoryPaymentComponent } from './history/history-payment.component';
import { PaymentUnapproveComponent } from './payment-unapprove/payment-unapprove.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
  },
  {
    path: 'unapprove-premiums',
    component: PaymentUnapproveComponent,
  },
  {
    path: 'history',
    component: HistoryPaymentComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRouting {}
