import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { HistoryPaymentComponent } from './history/history-payment.component';
import { PaymentUnapproveComponent } from './payment-unapprove/payment-unapprove.component';
import { PaymentComponent } from './payment/payment.component';
import { UnapproveEventComponent } from './unapprove-event/unapprove-event.component';

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
    path: 'events',
    component: EventComponent,
  },
  {
    path: 'unapprove-events',
    component: UnapproveEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRouting {}
