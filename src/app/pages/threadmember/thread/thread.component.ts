import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThreadHeaderData } from 'src/app/dto/threadheader/thread-header-data';
import { ThreadHeaderFindAll } from 'src/app/dto/threadheader/thread-header-find-all';
import { ThreadHeaderInsertReq } from 'src/app/dto/threadheader/thread-header-insert-req';
import { ThreadHeaderPollingData } from 'src/app/dto/threadheaderpolling/thread-header-polling-data';
import { ThreadTypeFindAll } from 'src/app/dto/threadtype/thread-type-find-all';
import { FileService } from 'src/app/service/file.service';
import { ThreadTypeService } from 'src/app/service/thread-type.service';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-thread-member',
  templateUrl: './thread.component.html',
  styleUrls: ['./../thread.style.css'],
})
export class ThreadMemberComponent implements OnDestroy, OnInit {
  threadSubscription?: Subscription;
  polling: boolean = false;
  insertThreadReq: ThreadHeaderInsertReq = {} as ThreadHeaderInsertReq;

  data: ThreadHeaderData = {} as ThreadHeaderData;
  dataPolling: ThreadHeaderPollingData = {} as ThreadHeaderPollingData;
  threadType: ThreadTypeFindAll = {} as ThreadTypeFindAll;
  threadHeader: ThreadHeaderFindAll = {} as ThreadHeaderFindAll;

  constructor(
    private threadService: ThreadService,
    private router: Router,
    private threadTypeService: ThreadTypeService,
    private fileService: FileService
  ) {}

  pollingArray = new FormArray([new FormControl('', Validators.required)]);

  addInputControl() {
    this.pollingArray.push(new FormControl('', Validators.required));
  }

  ngOnInit(): void {
    this.threadTypeService.showAllThreadType().subscribe((result) => {
      this.threadType = result;
    });
    this.threadService.showAllThread().subscribe((result) => {
      this.threadHeader = result;
    });
  }

  removeInputControl(idx: number) {
    this.pollingArray.removeAt(idx);
  }

  exitPolling() {
    this.polling = false;
  }

  clickPolling() {
    this.polling = true;
    this.pollingArray.reset();
  }

  onsubmit(): void {
    const insertThreadHeader = {} as ThreadHeaderInsertReq;
    insertThreadHeader.title = this.data.title;
    insertThreadHeader.contentThread = this.data.contentHeader;
    insertThreadHeader.threadTypeId = this.data.threadTypeId;
    insertThreadHeader.fileName = this.insertThreadReq.fileName;
    insertThreadHeader.fileExtension = this.insertThreadReq.fileExtension;

    this.threadSubscription = this.threadService
      .addThread(insertThreadHeader)
      .subscribe((result) => {
        this.router.navigateByUrl('/threads-main');
      });
  }
  onInsertFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.insertThreadReq.fileName = res[0];
      this.insertThreadReq.fileExtension = res[1];
    });
  }

  ngOnDestroy(): void {
    this.threadSubscription?.unsubscribe();
  }
}
