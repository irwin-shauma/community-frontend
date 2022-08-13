import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Subscription } from 'rxjs';
import { EventPaymentHistoryData } from 'src/app/dto/event-payment-history/event-payment-history-data';
import { EventPaymentHistoryUpdateReq } from 'src/app/dto/event-payment-history/event-payment-update-req';
import { EventPaymentHistoryService } from 'src/app/service/event-payment-history.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {

  eventPaymentData: EventPaymentHistoryData[] = []
  updateData: EventPaymentHistoryUpdateReq = {} as EventPaymentHistoryUpdateReq
  subscription?: Subscription
  loading: boolean = true
  id!: string;
  idPayment!: string;
  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;

  constructor(private eventPaymentService: EventPaymentHistoryService, private confirmationService: ConfirmationService) { }

  
  ngOnInit(): void {
    this.initData()
  }

  loadData(event: LazyLoadEvent){
    this.initData()
  }

  initData(startPage: number = this.startPage, maxPage: number = this.maxPage): void {
    this.startPage = startPage;
    this.maxPage = maxPage;

    this.subscription = this.eventPaymentService.showAllEventPaymentHistory(this.startPage, this.maxPage).subscribe(result => {
      const resultData: any = result
      this.eventPaymentData = resultData.data
      this.totalData = resultData.count
      this.loading = false
    })
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
