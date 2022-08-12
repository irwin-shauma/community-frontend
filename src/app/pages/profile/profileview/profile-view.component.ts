import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/constant/role-constant';
import { BookmarkInsertReq } from 'src/app/dto/bookmark/bookmark-insert-req';
import { EventPaymentHistoryFindAllRes } from 'src/app/dto/event-payment-history/event-payment-history-find-all-res';
import { PremiumPaymentHistoryData } from 'src/app/dto/premium-payment-history/premium-payment-history-data';
import { PremiumPaymentHistoryFindAll } from 'src/app/dto/premium-payment-history/premium-payment-history-find-all';
import { ThreadLikeInsertReq } from 'src/app/dto/thread-like/thread-like-insert-req';
import { ThreadPollingAnswerInsertReq } from 'src/app/dto/thread-polling-answer/thread-polling-answer-insert-req';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderPollingData } from 'src/app/dto/threadheaderpolling/thread-header-polling-data';
import { ThreadHeaderPollingFindAll } from 'src/app/dto/threadheaderpolling/thread-header-polling-find-all-res';
import { UserData } from 'src/app/dto/user/user-data';
import { UserFindByIdRes } from 'src/app/dto/user/user-find-by-id-res';
import { BookmarkService } from 'src/app/service/bookmark.service';
import { LoginService } from 'src/app/service/login.service';
import { PremiumPaymentHistoryService } from 'src/app/service/premium-payment-history.service';
import { ThreadHeaderService } from 'src/app/service/thread-header.service';
import { ThreadLikeService } from 'src/app/service/thread-like.service';
import { ThreadPollingService } from 'src/app/service/thread-polling.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./../profile.styles.css'],
})
export class ProfileViewComponent implements OnInit, OnDestroy {
  idParam!: string;
  threadLikeSubs?: Subscription;
  answerPollingSubscription?: Subscription;
  id!: string | any;
  admin: boolean = false;
  data: UserData = {} as UserData;
  threadHeader: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadPolling: ThreadHeaderPollingFindAll = {} as ThreadHeaderPollingFindAll;
  premiumPaymentHistory!: PremiumPaymentHistoryData[];
  likeInsert: ThreadLikeInsertReq = {} as ThreadLikeInsertReq;
  premiumHistory: PremiumPaymentHistoryFindAll =
    {} as PremiumPaymentHistoryFindAll;
  eventHistory: EventPaymentHistoryFindAllRes =
    {} as EventPaymentHistoryFindAllRes;
  pollingPresentasion: boolean = false;
  answerInsert: ThreadPollingAnswerInsertReq =
    {} as ThreadPollingAnswerInsertReq;
  bookmarkInsert: BookmarkInsertReq = {} as BookmarkInsertReq;
  premiumSubs?: Subscription;
  userSubscription?: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private threadService: ThreadHeaderService,
    private threadPollingService: ThreadPollingService,
    private threadLikeService: ThreadLikeService,
    private bookmarkService: BookmarkService,
    private premiumPaymentHistoryService: PremiumPaymentHistoryService
  ) {}

  sliceOptions = {
    start: 0,
    end: 100,
    default: 100,
  };

  ngOnInit(): void {
    this.viewProfile();
    this.initData();
  }

  // view using loginService
  viewProfile(): void {
    this.id = this.loginService.getData()!.data!.id;

    this.userService.findById(this.id).subscribe((res) => {
      this.data.id = res.data?.id;
      this.data.fullName = res.data?.fullName;
      this.data.company = res.data?.company;
      this.data.industry = res.data?.industry;
      this.data.position = res.data?.position;
      this.data.fileId = res.data?.fileId;
    });
  }

  initData(): void {
    this.threadService.findAllByUser().subscribe((result) => {
      this.threadHeader = result;
    });
    this.threadPollingService.findByUserId().subscribe((result) => {
      this.threadPolling = result;
    });
    // this.premiumSubs = this.premiumPaymentHistoryService.findByUser().subscribe((res) => {
    //   this.premiumHistory.data = res.data;
    // });
    this.initPremium();
    if (this.loginService.getRole() !== Role.SUPERADMIN) {
      this.admin = true;
    }
  }

  initPremium(): void {
    this.premiumSubs = this.premiumPaymentHistoryService
      .getByUser()
      .subscribe((res) => {
        this.premiumPaymentHistory = res.data;
        this.premiumHistory = res;
      });
  }

  onExpandText(evt: any, id: string): void {
    this.router.navigateByUrl(`/threads-main/${id}`);
  }

  // path params
  findById(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.userService.findById(this.idParam).subscribe((res) => {
        this.data.id = res.data?.id;
        this.data.fullName = res.data?.fullName;
        this.data.company = res.data?.company;
        this.data.industry = res.data?.industry;
        this.data.position = res.data?.position;
        this.data.fileId = res.data?.fileId;
      });
    });
  }

  updateById(): void {
    this.router.navigateByUrl(`/profiles/edit`);
  }

  like(threadId: string): void {
    this.likeInsert.threadId = threadId;
    this.threadLikeSubs = this.threadLikeService
      .insert(this.likeInsert)
      .subscribe((result) => {
        this.initData();
      });
  }

  chooseAnswer(answerId: string): void {
    this.answerInsert.threadPollingId = answerId;
    this.answerPollingSubscription = this.threadPollingService
      .addPollingAnswer(this.answerInsert)
      .subscribe((result) => {
        this.pollingPresentasion = true;
        this.initData();
      });
  }

  unLike(threadId: string): void {
    this.threadLikeService.delete(threadId).subscribe((res) => {
      this.initData();
    });
  }

  bookmark(threadId: string): void {
    this.bookmarkInsert.threadId = threadId;
    this.bookmarkService.insert(this.bookmarkInsert).subscribe((result) => {
      this.initData();
    });
  }

  unBookmark(threadId: string): void {
    this.bookmarkService.delete(threadId).subscribe((result) => {
      this.initData();
    });
  }

  ngOnDestroy(): void {
    this.threadLikeSubs?.unsubscribe();
    this.answerPollingSubscription?.unsubscribe();
    this.premiumSubs?.unsubscribe();
  }
}
