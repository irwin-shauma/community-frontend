import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PremiumUpdateBalanceReq } from 'src/app/dto/balance/premium-update-balance-req';
import { UpdateCurrentBalanceReq } from 'src/app/dto/balance/update-current-balance-req';
import { PremiumPaymentHistoryData } from 'src/app/dto/premium-payment-history/premium-payment-history-data';
import { PremiumPaymentHistoryUpdateReq } from 'src/app/dto/premium-payment-history/premium-payment-history-update-req';
import { BalanceService } from 'src/app/service/balance.service';
import { PremiumPaymentHistoryService } from 'src/app/service/premium-payment-history.service';

@Component({
  selector: 'app-payment-unapprove',
  templateUrl: './payment-unapprove.component.html',
})
export class PaymentUnapproveComponent implements OnInit, OnDestroy {
  premiumData: PremiumPaymentHistoryData[] = [];
  subscription?: Subscription;
  id!: string;
  idPayment!: string;
  price!: number;
  loading: boolean = true;
  updateData: PremiumPaymentHistoryUpdateReq =
    {} as PremiumPaymentHistoryUpdateReq;
  updateBalance: PremiumUpdateBalanceReq = {} as PremiumUpdateBalanceReq;

  constructor(
    private premiumPaymentService: PremiumPaymentHistoryService,
    private confirmationService: ConfirmationService,
    private balanceService: BalanceService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.subscription = this.premiumPaymentService
      .showAllUnApprove()
      .subscribe((result) => {
        this.premiumData = result.data;
        this.loading = false;
      });
  }

  loadData(event: LazyLoadEvent) {
    this.initData();
  }

  approve(): void {
    this.updateData.id = this.id;
    this.updateData.paymentId = this.idPayment;
    this.updateData.isApprove = true;
    this.updateData.isActive = true;

    this.balanceService
      .updatePremiumSystem(this.updateBalance)
      .subscribe((result) => {});

    this.premiumPaymentService
      .approvePremium(this.updateData)
      .subscribe((res) => {
        this.initData();
      });
  }

  reject(): void {
    this.updateData.id = this.id;
    this.updateData.paymentId = this.idPayment;
    this.updateData.isApprove = false;
    this.updateData.isActive = false;
    this.premiumPaymentService
      .approvePremium(this.updateData)
      .subscribe((res) => {
        this.initData();
      });
  }

  confirm(id: string, idPayment: string, price: number): void {
    this.loading = true;
    this.id = id;
    this.idPayment = idPayment;
    this.updateBalance.balance = price;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to approve this payment?',
      accept: () => {
        this.approve();
      },
      reject: () => {
        this.loading = false;
      },
    });
  }

  confirmReject(id: string, idPayment: string): void {
    this.loading = true;
    this.id = id;
    this.idPayment = idPayment;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to reject this payment?',
      accept: () => {
        this.reject();
      },
      reject: () => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
