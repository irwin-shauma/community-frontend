import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PremiumUpdateBalanceReq } from 'src/app/dto/balance/premium-update-balance-req';
import { UpdateCurrentBalanceReq } from 'src/app/dto/balance/update-current-balance-req';
import { EventPaymentHistoryData } from 'src/app/dto/event-payment-history/event-payment-history-data';
import { EventPaymentHistoryUpdateReq } from 'src/app/dto/event-payment-history/event-payment-update-req';
import { BalanceService } from 'src/app/service/balance.service';
import { EventPaymentHistoryService } from 'src/app/service/event-payment-history.service';

@Component({
  selector: 'app-unapprove-event',
  templateUrl: './unapprove-event.component.html',
})
export class UnapproveEventComponent implements OnInit, OnDestroy {
  eventPaymentData: EventPaymentHistoryData[] = [];
  updateData: EventPaymentHistoryUpdateReq = {} as EventPaymentHistoryUpdateReq;
  updateBalance: UpdateCurrentBalanceReq = {} as UpdateCurrentBalanceReq;
  subscription?: Subscription;
  loading: boolean = true;
  id!: string;
  idPayment!: string;

  constructor(
    private eventPaymentService: EventPaymentHistoryService,
    private confirmationService: ConfirmationService,
    private balanceService: BalanceService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  loadData(event: LazyLoadEvent) {
    this.initData();
  }

  initData(): void {
    this.subscription = this.eventPaymentService
      .showAllEventPaymentHistory()
      .subscribe((result) => {
        this.eventPaymentData = result.data!;
        this.loading = false;
      });
  }

  approve(): void {
    this.updateData.id = this.id;
    this.updateData.paymentId = this.idPayment;
    this.updateData.isApprove = true;
    this.updateData.isActive = true;
    this.balanceService
      .updateBalance(this.updateBalance)
      .subscribe((result) => {});

    this.eventPaymentService
      .approvePayment(this.updateData)
      .subscribe((res) => {
        this.initData();
      });
  }

  reject(): void {
    this.updateData.id = this.id;
    this.updateData.paymentId = this.idPayment;
    this.updateData.isApprove = false;
    this.updateData.isActive = false;
    this.eventPaymentService
      .approvePayment(this.updateData)
      .subscribe((res) => {
        this.initData();
      });
  }

  confirm(
    id: string,
    idPayment: string,
    eventCreator: string,
    balance: number
  ): void {
    this.loading = true;
    this.id = id;
    this.idPayment = idPayment;
    this.updateBalance.userId = eventCreator;
    this.updateBalance.balance = balance;
    console.log('ini balance', this.updateBalance.balance);
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
