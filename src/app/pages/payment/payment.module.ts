import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { HistoryPaymentComponent } from './history/history-payment.component';
import { PaymentRouting } from './payment.routing';
import { PaymentComponent } from './payment/payment.component';
import { PaymentUnapproveComponent } from './payment-unapprove/payment-unapprove.component';
import { EventComponent } from './event/event.component';
import { UnapproveEventComponent } from './unapprove-event/unapprove-event.component';

@NgModule({
  imports: [
    PaymentRouting, 
    TableModule, 
    CheckboxModule, 
    ButtonModule, 
    FormsModule,
    CommonModule,
    ConfirmDialogModule,
  ],
  declarations: [
    PaymentComponent, 
    HistoryPaymentComponent, PaymentUnapproveComponent, EventComponent, UnapproveEventComponent]
    ,
  exports: [
    PaymentComponent, 
    HistoryPaymentComponent
  ],
  providers: [
    ConfirmationService
  ],
})
export class PaymentModule {}
