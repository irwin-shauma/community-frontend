import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PremiumPaymentHistoryFindById } from 'src/app/dto/premium-payment-history/premium-payment-history-find-by-id-res';
import { ThreadHeaderData } from 'src/app/dto/threadheader/thread-header-data';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderInsertReq } from 'src/app/dto/threadheader/thread-header-insert-req';
import { ThreadHeaderPollingData } from 'src/app/dto/threadheaderpolling/thread-header-polling-data';
import { ThreadHeaderPollingInsertReq } from 'src/app/dto/threadheaderpolling/thread-header-polling-insert-req';
import { ThreadPollingDetailData } from 'src/app/dto/threadpollingdetail/thread-polling-detail-data';
import { ThreadTypeFindAll } from 'src/app/dto/threadtype/thread-type-find-all';
import { FileService } from 'src/app/service/file.service';
import { PremiumPaymentHistoryService } from 'src/app/service/premium-payment-history.service';
import { ThreadPollingService } from 'src/app/service/thread-polling.service';
import { ThreadTypeService } from 'src/app/service/thread-type.service';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-thread-member',
  templateUrl: './thread.component.html',
  styleUrls: ['./../thread.style.css'],
})
export class ThreadMemberComponent implements OnDestroy, OnInit {
  threadSubscription?: Subscription;
  pollingSubscription?: Subscription;
  threadTypeShow = true;
  polling: boolean = false;
  premiumShow: boolean = false;
  insertThreadReq: ThreadHeaderInsertReq = {} as ThreadHeaderInsertReq;
  insertPolling: ThreadHeaderPollingData = {} as ThreadHeaderPollingData;
  threadPollingDetail!: ThreadPollingDetailData[];
  regularCheck: string = '';
  showType: boolean = true;
  data: ThreadHeaderData = {} as ThreadHeaderData;
  dataPolling: ThreadHeaderPollingData = {} as ThreadHeaderPollingData;
  threadType: ThreadTypeFindAll = {} as ThreadTypeFindAll;
  threadHeader: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  premiumHistory: PremiumPaymentHistoryFindById =
    {} as PremiumPaymentHistoryFindById;

  sliceOptions = {
    start: 0,
    end: 100,
    default: 100,
  };

  constructor(
    private threadService: ThreadService,
    private router: Router,
    private threadTypeService: ThreadTypeService,
    private fileService: FileService,
    private premiumPaymentHistoryService: PremiumPaymentHistoryService,
    private pollingService: ThreadPollingService
  ) {}

  pollingArray = new FormArray([new FormControl('')]);

  finalResultPolling: any = '';

  addInputControl() {
    this.pollingArray.push(new FormControl(''));
  }

  ngOnInit(): void {
    this.onInitData();
  }

  onInitData(): void {
    this.threadTypeService.showAllThreadType().subscribe((result) => {
      this.threadType = result;
    });
    this.threadService.showAllThread().subscribe((result) => {
      this.threadHeader = result;
    });
    this.premiumPaymentHistoryService.findByUser().subscribe((result) => {
      if (result.data == null) {
        this.showType = false;
      }
      console.log(this.showType);
    });
    this.threadTypeService.findByRegularType().subscribe((result) => {
      this.regularCheck = result.data.id;
    });
  }

  removeInputControl(idx: number) {
    this.pollingArray.removeAt(idx);
  }

  exitPolling() {
    this.polling = false;
    this.threadTypeShow = true;
  }

  clickPolling() {
    this.polling = true;
    this.pollingArray.reset();
    this.threadTypeShow = false;
  }

  onsubmit(): void {
    if (this.pollingArray.value === null) {
      const insertThreadHeader = {} as ThreadHeaderInsertReq;
      insertThreadHeader.title = this.data.title;
      insertThreadHeader.contentThread = this.data.contentThread;
      if (this.data.threadTypeId === undefined) {
        insertThreadHeader.threadTypeId = this.regularCheck;
        this.threadTypeService.findByRegularType();
      } else {
        insertThreadHeader.threadTypeId = this.data.threadTypeId;
      }

      insertThreadHeader.fileName = this.insertThreadReq.fileName;
      insertThreadHeader.fileExtension = this.insertThreadReq.fileExtension;

      this.threadSubscription = this.threadService
        .addThread(insertThreadHeader)
        .subscribe((result) => {
          this.onInitData();
        });
    } else {
      const insertThreadPolling = {} as ThreadHeaderPollingInsertReq;
      insertThreadPolling.titlePolling = this.data.title;
      insertThreadPolling.contentPolling = this.data.contentThread;
      this.finalResultPolling = this.pollingArray.value;
      insertThreadPolling.threadPollingDetail = this.finalResultPolling;

      this.pollingSubscription = this.pollingService
        .addThreadPolling(insertThreadPolling)
        .subscribe((result) => {
          this.onInitData();
        });
    }
  }
  onInsertFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.insertThreadReq.fileName = res[0];
      this.insertThreadReq.fileExtension = res[1];
    });
  }

  onExpandText(evt: any, id: string): void {
    this.router.navigateByUrl(`/threads-main/${id}`);
  }

  onExpandTextPremium(evt: any): void {
    this.router.navigateByUrl(`/premiums`);
  }

  ngOnDestroy(): void {
    this.threadSubscription?.unsubscribe();
  }
}
