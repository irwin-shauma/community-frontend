import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThreadDetailFindAllRes } from 'src/app/dto/thread-detail/thread-detail-find-all-res';
import { ThreadDetailInsertReq } from 'src/app/dto/thread-detail/thread-detail-insert-req';
import { ThreadDetailData } from 'src/app/dto/threadheader/thread-detail-data';
import { ThreadHeaderData } from 'src/app/dto/threadheader/thread-header-data';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderFindByIdRes } from 'src/app/dto/threadheader/thread-header-find-by-id-res';
import { ThreadDetailService } from 'src/app/service/thread-detail.service';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
})
export class ThreadMemberDetailComponent implements OnInit, OnDestroy {
  idParam!: string;
  threadDetailSubs?: Subscription;
  thread: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadData: ThreadHeaderFindByIdRes = {} as ThreadHeaderFindByIdRes;
  insertComment: ThreadDetailInsertReq = {} as ThreadDetailInsertReq;

  constructor(
    private threadService: ThreadService,
    private activateRoute: ActivatedRoute,
    private threadDetailService: ThreadDetailService
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
    this.insertComment.commentThread = "";
  }

  submit(): void {
    this.insertComment.threadHeaderId = this.threadData.data.id
    this.threadDetailSubs = this.threadDetailService.insert(this.insertComment)
        .subscribe(result => {
          this.initData();
        })
    
  }

  ngOnDestroy(): void {
    this.threadDetailSubs?.unsubscribe();
  }
}
