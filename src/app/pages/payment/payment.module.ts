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
    HistoryPaymentComponent]
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
