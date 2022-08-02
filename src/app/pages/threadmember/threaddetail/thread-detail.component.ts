import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadDetailFindAllRes } from 'src/app/dto/thread-detail/thread-detail-find-all-res';
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
export class ThreadMemberDetailComponent implements OnInit {
  idParam!: string;

  thread: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadData: ThreadHeaderFindByIdRes = {} as ThreadHeaderFindByIdRes;

  constructor(
    private threadService: ThreadService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.threadService.findById(this.idParam).subscribe((res) => {
        this.threadData.data = res.data;
      });
    });
  }
}
