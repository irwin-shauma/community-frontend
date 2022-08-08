import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PaymentData } from 'src/app/dto/payment/payment-data';
import { PaymentFindAllRes } from 'src/app/dto/payment/payment-find-all-res';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit{
  payments : PaymentFindAllRes= {} as PaymentFindAllRes
  paymentData!: PaymentData [];
  

  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  loading: boolean = true;

  paymentSubscription?: Subscription;

  constructor(
    private paymentService:PaymentService,
  ){}

  ngOnInit(): void{
    this.payments.data =[];
    this.initData();
  }

  loadData(event: LazyLoadEvent){
    this.getData()
  }

  getData(startPage: number = this.startPage, maxPage: number = this.maxPage) : void {
    this.loading = true;
    this.startPage = startPage;
    this.maxPage = maxPage;

    this.paymentSubscription = this.paymentService.showAllPayment().subscribe(
      result => {
        const resultData: any = result
        this.paymentData = resultData.data
        this.loading = false
        this.totalData = resultData.count
      }
    )
  }

  initData(): void{
    this.paymentService.showAllPayment().subscribe((result) => {
      this.payments = result;
      this.paymentData = result.data!;
    });
  }

  loadPayments(event: LazyLoadEvent){
    this.loading = true;

    setTimeout(() => {
      this.initData()
      this.loading = false;
    }, 2000);
  }
}
