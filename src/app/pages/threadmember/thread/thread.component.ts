import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BalanceFindById } from 'src/app/dto/balance/balance-find-by-id-res';
import { BookmarkInsertReq } from 'src/app/dto/bookmark/bookmark-insert-req';
import { EventHeaderData } from 'src/app/dto/event-header/event-header-data';
import { EventHeaderFindAllRes } from 'src/app/dto/event-header/event-header-find-all-res';
import { PremiumPaymentHistoryFindById } from 'src/app/dto/premium-payment-history/premium-payment-history-find-by-id-res';
import { ThreadLikeInsertReq } from 'src/app/dto/thread-like/thread-like-insert-req';
import { ThreadPollingAnswerInsertReq } from 'src/app/dto/thread-polling-answer/thread-polling-answer-insert-req';
import { ThreadHeaderData } from 'src/app/dto/threadheader/thread-header-data';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderInsertReq } from 'src/app/dto/threadheader/thread-header-insert-req';
import { ThreadHeaderPollingData } from 'src/app/dto/threadheaderpolling/thread-header-polling-data';
import { ThreadHeaderPollingFindAll } from 'src/app/dto/threadheaderpolling/thread-header-polling-find-all-res';
import { ThreadHeaderPollingInsertReq } from 'src/app/dto/threadheaderpolling/thread-header-polling-insert-req';
import { ThreadPollingDetailData } from 'src/app/dto/threadheaderpolling/thread-polling-detail-data';
import { ThreadPollingDetailInsertReq } from 'src/app/dto/threadheaderpolling/thread-polling-detail-insert-req';
import { ThreadTypeFindAll } from 'src/app/dto/threadtype/thread-type-find-all';
import { BalanceService } from 'src/app/service/balance.service';
import { BookmarkService } from 'src/app/service/bookmark.service';
import { EventHeaderService } from 'src/app/service/event-header.service';
import { FileService } from 'src/app/service/file.service';
import { LoginService } from 'src/app/service/login.service';
import { PremiumPaymentHistoryService } from 'src/app/service/premium-payment-history.service';
import { ThreadHeaderService } from 'src/app/service/thread-header.service';
import { ThreadLikeService } from 'src/app/service/thread-like.service';
import { ThreadPollingService } from 'src/app/service/thread-polling.service';
import { ThreadTypeService } from 'src/app/service/thread-type.service';
import { ThreadService } from 'src/app/service/thread.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-thread-member',
  templateUrl: './thread.component.html',
  styleUrls: ['./../thread.style.css'],
})
export class ThreadMemberComponent implements OnDestroy, OnInit {
  threadSubscription?: Subscription;
  pollingSubscription?: Subscription;
  threadLikeSubs?: Subscription;
  answerPollingSubscription?: Subscription;
  threadTypeShow = true;
  polling: boolean = false;
  premiumShow: boolean = false;
  insertThreadReq: ThreadHeaderInsertReq = {} as ThreadHeaderInsertReq;
  insertPolling: ThreadHeaderPollingData = {} as ThreadHeaderPollingData;
  username: string = '';
  file: string = '';
  fileEvent: string = '';
  titleEvent: string = '';
  startEvent: string = '';
  endEvent: string = '';
  location: string = '';
  provider: string = '';
  position: string = '';
  price: number = 0;
  idEvent: string = '';
  allThreadShow: boolean = true;
  pollingThreadShow: boolean = false;
  regularThreadShow: boolean = false;
  premiumThreadShow: boolean = false;
  regularCheck: string = '';
  pollingPresentasion: boolean = false;
  pollingTypeChoose: boolean = false;
  showType: boolean | any = false;
  data: ThreadHeaderData = {} as ThreadHeaderData;
  dataPolling: ThreadHeaderPollingData = {} as ThreadHeaderPollingData;
  threadType: ThreadTypeFindAll = {} as ThreadTypeFindAll;
  threadSelf: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadNonLogin: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadHeader: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadHeaderLike: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadHeaderBookmark: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  eventHeader: EventHeaderFindAllRes = {} as EventHeaderFindAllRes;
  course: EventHeaderData[] = [];
  eventNonLogin: EventHeaderData[] = [];
  courseNonLogin: EventHeaderData[] = [];
  balance: BalanceFindById = {} as BalanceFindById;
  threadPollingHeader: ThreadHeaderPollingFindAll =
    {} as ThreadHeaderPollingFindAll;
  threadPollingDetail: ThreadPollingDetailData = {} as ThreadPollingDetailData;
  premiumHistory: PremiumPaymentHistoryFindById =
    {} as PremiumPaymentHistoryFindById;
  likeInsert: ThreadLikeInsertReq = {} as ThreadLikeInsertReq;
  answerInsert: ThreadPollingAnswerInsertReq =
    {} as ThreadPollingAnswerInsertReq;
  bookmarkInsert: BookmarkInsertReq = {} as BookmarkInsertReq;
  isLoggedIn: boolean = false;
  isLoading: boolean = true;
  loadingButton: boolean = false;

  sliceOptions = {
    start: 0,
    end: 200,
    default: 100,
  };

  constructor(
    private threadService: ThreadService,
    private threadHeaderService: ThreadHeaderService,
    private router: Router,
    private threadTypeService: ThreadTypeService,
    private fileService: FileService,
    private premiumPaymentHistoryService: PremiumPaymentHistoryService,
    private pollingService: ThreadPollingService,
    private threadLikeService: ThreadLikeService,
    private bookmarkService: BookmarkService,
    private loginService: LoginService,
    private userService: UserService,
    private eventService: EventHeaderService,
    private balanceService: BalanceService
  ) {}

  pollingArray = new FormArray([new FormControl('')]);

  finalResultPolling: ThreadPollingDetailInsertReq[] = [];

  addInputControl() {
    this.pollingArray.push(new FormControl(''));
  }

  ngOnInit(): void {
    this.initNonLogin();

    if (this.loginService.getData() != null) {
      this.isLoggedIn = true;
      this.onInitData();
    }
  }

  initNonLogin(): void {
    this.threadHeaderService.findAllNonLogin().subscribe((result) => {
      this.threadNonLogin.data = result.data;
      this.isLoading = false;
    });
    this.eventService.showAllEventNonLogin(0, 1).subscribe((result) => {
      this.eventNonLogin = result.data
    });
    this.eventService.showAllCourseNonLogin(0, 1).subscribe((result) => {
      this.courseNonLogin = result.data
    });
  }

  onInitData(): void {
    this.threadTypeService.showAllThreadType().subscribe((result) => {
      this.threadType = result;
    });
    this.threadHeaderService.findAllByUser().subscribe((result) => {
      this.threadSelf.data = result.data;
    });

    this.threadService.showAllThreadDesc().subscribe((result) => {
      this.threadHeader = result;
      this.isLoading = false;
    });
    this.premiumPaymentHistoryService.getPremium().subscribe((result) => {
      if (result.data !== null) {
        this.showType = result.data!.isActive;
      }
    });
    this.threadTypeService.findByRegularType().subscribe((result) => {
      this.regularCheck = result.data.id;
    });
    this.pollingService.showAllPolling().subscribe((result) => {
      this.threadPollingHeader = result;
    });

    this.threadService.showAllByUserLike().subscribe((result) => {
      this.threadHeaderLike = result;
    });

    this.threadService.showAllByUserBookmark().subscribe((result) => {
      this.threadHeaderBookmark = result;
    });

    this.balanceService.findByUser().subscribe((result) => {
      this.balance = result;
    });

    this.eventService.showAllCourseNonLogin(0, 1).subscribe((result) => {
      this.courseNonLogin = result.data
    });

    this.eventService.showAllCourse().subscribe((result) => {
      this.course = result.data
    });

    this.eventService.showAllEvent().subscribe((result) => {
      this.fileEvent = result.data[result.data.length - 1].fileId;
      this.titleEvent = result.data[result.data.length - 1].title;
      let event = new Date();
      this.startEvent = result.data[result.data.length - 1].startDate;
      this.startEvent = result.data[result.data.length - 1].startDate;
      this.endEvent = result.data[result.data.length - 1].endDate;
      this.location = result.data[result.data.length - 1].location;
      this.provider = result.data[result.data.length - 1].provider;
      this.price = result.data[result.data.length - 1].price;
      this.idEvent = result.data[result.data.length - 1].id;
    });

    this.userService
      .findById(this.loginService.getData()?.data?.id!)
      .subscribe((result) => {
        this.username = result.data?.fullName!;
        this.file = result.data?.fileId!;
        this.position = result.data?.position!;
      });
  }

  removeInputControl(idx: number) {
    this.pollingArray.removeAt(idx);
  }

  exitPolling() {
    this.polling = false;
    this.threadTypeShow = true;
    this.pollingTypeChoose = false;
  }

  clickPolling() {
    this.polling = true;
    this.pollingTypeChoose = true;
    this.pollingArray.reset();
    this.threadTypeShow = false;
  }

  onsubmit(): void {
    this.loadingButton = true;
    if (this.pollingTypeChoose === false) {
      console.log(this.pollingArray.value);
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
          this.data.title = '';
          this.data.contentThread = '';
          this.loadingButton = false
        });
    } else {
      const insertThreadPolling = {} as ThreadHeaderPollingInsertReq;
      insertThreadPolling.titlePolling = this.data.title;
      insertThreadPolling.contentPolling = this.data.contentThread;
      insertThreadPolling.duration = this.insertPolling.duration;
      insertThreadPolling.pollingQuestion = this.insertPolling.pollingQuestion;
      for (let i = 0; i < this.pollingArray.length; i++) {
        const insertThreadDetailPolling = {} as ThreadPollingDetailInsertReq;
        insertThreadDetailPolling.pollingChoice = this.pollingArray.value[i]!;
        this.finalResultPolling.push(insertThreadDetailPolling);
      }
      insertThreadPolling.threadPollingDetail = this.finalResultPolling;

      this.pollingSubscription = this.pollingService
        .addThreadPolling(insertThreadPolling)
        .subscribe((result) => {
          this.onInitData();
          this.pollingArray.reset();
          this.data.title = '';
          this.data.contentThread = '';
          this.loadingButton = false;
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

  like(threadId: string): void {
    this.likeInsert.threadId = threadId;
    this.threadLikeSubs = this.threadLikeService
      .insert(this.likeInsert)
      .subscribe((result) => {
        this.onInitData();
      });
  }

  chooseAnswer(answerId: string): void {
    this.answerInsert.threadPollingId = answerId;
    this.answerPollingSubscription = this.pollingService
      .addPollingAnswer(this.answerInsert)
      .subscribe((result) => {
        this.pollingPresentasion = true;
        this.onInitData();
      });
  }

  unLike(threadId: string): void {
    this.threadLikeService.delete(threadId).subscribe((res) => {
      this.onInitData();
    });
  }

  bookmark(threadId: string): void {
    this.bookmarkInsert.threadId = threadId;
    this.bookmarkService.insert(this.bookmarkInsert).subscribe((result) => {
      this.onInitData();
    });
  }

  unBookmark(threadId: string): void {
    this.bookmarkService.delete(threadId).subscribe((result) => {
      this.onInitData();
    });
  }

  clickToDetail(id: string): void {
    this.router.navigateByUrl(`/event-members/detail/${id}`);
  }

  directToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.threadSubscription?.unsubscribe();
    this.pollingSubscription?.unsubscribe();
    this.threadLikeSubs?.unsubscribe();
  }
}
