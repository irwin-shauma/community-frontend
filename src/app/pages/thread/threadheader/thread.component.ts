import { Component, OnInit } from '@angular/core';
import { ThreadHeaderData } from 'src/app/dto/threadheader/thread-header-data';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderService } from 'src/app/service/thread-header.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: 'thread.component.html',
})
export class ThreadComponent implements OnInit{
  threadsHeaders: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;
  threadHeaderData!: ThreadHeaderData[];

  constructor(
    private threadHeaderService: ThreadHeaderService
  ){}

  ngOnInit(): void{
    this.threadsHeaders.data = [];
    this.initData();
  }

  initData(): void{
    this.threadHeaderService.showAllThreadHeader().subscribe((result) => {
      this.threadsHeaders = result;
      this.threadHeaderData = result.data!;
    });
  }


}
