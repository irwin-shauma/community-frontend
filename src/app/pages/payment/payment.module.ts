import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { HistoryPaymentComponent } from './history/history-payment.component';
import { PaymentRouting } from './payment.routing';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [PaymentRouting, TableModule, CheckboxModule, ButtonModule, FormsModule],
  declarations: [PaymentComponent, HistoryPaymentComponent],
  exports: [PaymentComponent, HistoryPaymentComponent],
})
export class PaymentModule {}
