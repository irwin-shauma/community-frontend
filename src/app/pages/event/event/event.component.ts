import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { EventHeaderData } from 'src/app/dto/event-header/event-header-data';
import { EventHeaderFindAllRes } from 'src/app/dto/event-header/event-header-find-all-res';
import { EventHeaderService } from 'src/app/service/event-header-service';

import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-event-list',
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {

  idDeleted!: number;
  eventHeaders: EventHeaderFindAllRes = {} as EventHeaderFindAllRes;
  eventHeaderData!: EventHeaderData[];
  deleteSubscription?: Subscription;

  startPage: number = 0
  maxPage: number = 5
  totalData: number = 0
  loading: boolean = true
  eventSubscription?: Subscription;

  checkboxDisabled: boolean = true

  constructor(
    private confirmationService: ConfirmationService,
    private eventHeaderService: EventHeaderService
  ) { }


  ngOnInit(): void {
    this.initData();
  }

  loadData(event: LazyLoadEvent) {
    this.getData(event.first, event.rows)
  }
  getData(startPage: number = this.startPage, maxPage: number = this.maxPage): void {
    this.loading = true;
    this.startPage = startPage
    this.maxPage = maxPage

    this.eventSubscription = this.eventHeaderService.showAllEventHeader(startPage, maxPage,).subscribe(
      result => {
        const resultData: any = result
        this.eventHeaderData = resultData.data
        this.loading = false
        this.totalData = resultData.count
      },
    )
  }

  initData(): void {
    this.eventHeaderService.showAllEventHeader(0, 5).subscribe((result) => {
      this.eventHeaders = result;
      this.eventHeaderData = result.data!;
    })
  }

  delete(): void{
    this.deleteSubscription= this.eventHeaderService
    .deleteEventHeader(this.idDeleted)
    .subscribe((result) => {
      this.initData()
    });
  }

  confirm(id: number): void {
    this.idDeleted = id;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.delete();
      }
    })

  }
}
