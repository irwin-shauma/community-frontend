import { Component, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PaymentData } from 'src/app/dto/payment/payment-data';
import { PaymentFindAllRes } from 'src/app/dto/payment/payment-find-all-res';
import { PaymentUpdateReq } from 'src/app/dto/payment/payment-update-req';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit{
  payments : PaymentFindAllRes= {} as PaymentFindAllRes
  paymentData!: PaymentData [];
  updateData: PaymentUpdateReq = {} as PaymentUpdateReq;
  
  idPayment!: string;
  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  loading: boolean = true;

  paymentSubscription?: Subscription;

  constructor(
    private paymentService:PaymentService,
    private confirmationService: ConfirmationService
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
      this.loading = false;
    });
  }

  loadPayments(event: LazyLoadEvent){
    this.loading = true;

    this.initData();
  }

  approve(): void {
    this.updateData.id = this.idPayment;
    this.updateData.isApprove = true
    this.paymentService.approve(this.updateData).subscribe((res) => {
      this.initData();
    });
    
  }

  reject(): void {
    this.updateData.id = this.idPayment;
    this.updateData.isApprove = false
    this.paymentService.approve(this.updateData).subscribe(res => {
      this.initData();
    })
  }


  confirm(id: string): void {
    this.loading = true
    this.idPayment = id;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to approve this payment?',
      accept: () => {
        this.approve();
        
      },
      reject: ()=> {
        this.loading = false
      }
    });
  }

  confirmReject(id: string): void {
    this.loading = true
    this.idPayment = id;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to reject this payment?',
      accept: () => {
        this.reject();
      },
      reject: ()=> {
        this.loading = false
      }
    });
  }
}
