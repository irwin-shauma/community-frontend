import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThreadDetailFindAllRes } from 'src/app/dto/thread-detail/thread-detail-find-all-res';
import { ThreadDetailInsertReq } from 'src/app/dto/thread-detail/thread-detail-insert-req';
import { ThreadLikeInsertReq } from 'src/app/dto/thread-like/thread-like-insert-req';
import { ThreadDetailData } from 'src/app/dto/threadheader/thread-detail-data';
import { ThreadHeaderData } from 'src/app/dto/threadheader/thread-header-data';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderFindByIdRes } from 'src/app/dto/threadheader/thread-header-find-by-id-res';
import { EventHeaderService } from 'src/app/service/event-header.service';
import { ThreadDetailService } from 'src/app/service/thread-detail.service';
import { ThreadLikeService } from 'src/app/service/thread-like.service';
import { ThreadService } from 'src/app/service/thread.service';

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

  constructor(
    private threadService: ThreadService,
    private activateRoute: ActivatedRoute,
    private threadDetailService: ThreadDetailService,
    private threadLikeService: ThreadLikeService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.threadService.findById(this.idParam).subscribe((res) => {
        this.threadData.data = res.data;
      });
    });
    this.insertComment.commentThread = '';
  }

  submit(): void {
    this.insertComment.threadHeaderId = this.threadData.data.id;
    this.threadDetailSubs = this.threadDetailService
      .insert(this.insertComment)
      .subscribe((result) => {
        this.initData();
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

  ngOnDestroy(): void {
    this.threadDetailSubs?.unsubscribe();
  }
}
