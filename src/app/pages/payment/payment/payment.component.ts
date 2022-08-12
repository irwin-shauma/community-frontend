import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PremiumPaymentHistoryData } from 'src/app/dto/premium-payment-history/premium-payment-history-data';
import { PremiumPaymentHistoryFindAll } from 'src/app/dto/premium-payment-history/premium-payment-history-find-all';
import { PremiumPaymentHistoryUpdateReq } from 'src/app/dto/premium-payment-history/premium-payment-history-update-req';
import { PremiumPaymentHistoryService } from 'src/app/service/premium-payment-history.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit{
  payments : PremiumPaymentHistoryFindAll= {} as PremiumPaymentHistoryFindAll
  paymentData!: PremiumPaymentHistoryData [];
  updateData: PremiumPaymentHistoryUpdateReq = {} as PremiumPaymentHistoryUpdateReq;
  
  id!: string;
  idPayment!: string;
  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  loading: boolean = true;

  paymentSubscription?: Subscription;

  constructor(
    private paymentService:PremiumPaymentHistoryService
  ){}

  ngOnInit(): void{
    this.payments.data =[];
    this.getData();
    
  }

  loadData(event: LazyLoadEvent){
    this.getData()
  }

  getData(startPage: number = this.startPage, maxPage: number = this.maxPage) : void {
    this.loading = true;
    this.startPage = startPage;
    this.maxPage = maxPage;

    this.paymentSubscription = this.paymentService.showAllPremiumPaymentHistory(this.startPage, this.maxPage).subscribe(
      result => {
        const resultData: any = result
        this.paymentData = resultData.data
        this.loading = false
        this.totalData = resultData.count
      }
    )
  }
}
