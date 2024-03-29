import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookmarkInsertReq } from 'src/app/dto/bookmark/bookmark-insert-req';
import { ThreadDetailInsertReq } from 'src/app/dto/thread-detail/thread-detail-insert-req';
import { ThreadLikeInsertReq } from 'src/app/dto/thread-like/thread-like-insert-req';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderFindByIdRes } from 'src/app/dto/threadheader/thread-header-find-by-id-res';
import { UserData } from 'src/app/dto/user/user-data';
import { BookmarkService } from 'src/app/service/bookmark.service';
import { LoginService } from 'src/app/service/login.service';
import { ThreadDetailService } from 'src/app/service/thread-detail.service';
import { ThreadLikeService } from 'src/app/service/thread-like.service';
import { ThreadService } from 'src/app/service/thread.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
})
export class ThreadMemberDetailComponent implements OnInit, OnDestroy {
  idParam!: string;
  threadDetailSubs?: Subscription;
  threadLikeSubs?: Subscription;
  thread: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadData: ThreadHeaderFindByIdRes = {} as ThreadHeaderFindByIdRes;
  insertComment: ThreadDetailInsertReq = {} as ThreadDetailInsertReq;
  likeInsert: ThreadLikeInsertReq = {} as ThreadLikeInsertReq;
  showEdit: boolean = false;
  bookmarkInsert: BookmarkInsertReq = {} as BookmarkInsertReq;
  loadingButton: boolean = false;
  userData: UserData = {} as UserData;

  constructor(
    private threadService: ThreadService,
    private activateRoute: ActivatedRoute,
    private threadDetailService: ThreadDetailService,
    private threadLikeService: ThreadLikeService,
    private loginService: LoginService,
    private router: Router,
    private bookmarkService: BookmarkService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.threadService.findById(this.idParam).subscribe((res) => {
        if (this.loginService.getData()?.data?.id === res.data.userId) {
          this.showEdit = true;
        }
        this.threadData.data = res.data;
      });
    });
    this.insertComment.commentThread = '';
  }

  initUser(): void {
    const id = this.loginService.getData()?.data?.id
    this.userService.findById(id!).subscribe(result => {
      this.userData = result.data!
    })
  }

  submit(): void {
    this.loadingButton = true
    this.insertComment.threadHeaderId = this.threadData.data.id;
    this.threadDetailSubs = this.threadDetailService
      .insert(this.insertComment)
      .subscribe((result) => {
        this.initData();
        this.loadingButton = false;
      });
  }

  like(threadId: string): void {
    this.likeInsert.threadId = threadId;
    this.threadLikeSubs = this.threadLikeService
      .insert(this.likeInsert)
      .subscribe((result) => {
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

  updateThread(id: string): void {
    this.router.navigateByUrl(`threads-main/edit/${id}`);
  }

  ngOnDestroy(): void {
    this.threadDetailSubs?.unsubscribe();
  }
}
