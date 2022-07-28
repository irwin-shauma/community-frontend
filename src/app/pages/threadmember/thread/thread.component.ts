import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThreadHeaderInsertReq } from 'src/app/dto/threadheader/thread-header-insert-req';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-thread-member',
  templateUrl: './thread.component.html',
  styleUrls: ['./../thread.style.css'],
})
export class ThreadMemberComponent implements OnDestroy {
  threadSubscription?: Subscription;
  polling: boolean = false;
  insertThreadReq: ThreadHeaderInsertReq = {} as ThreadHeaderInsertReq;
  constructor(private threadService: ThreadService, private router: Router) {}

  pollingArray = new FormArray([new FormControl('', Validators.required)]);

  addInputControl() {
    this.pollingArray.push(new FormControl('', Validators.required));
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
    this.threadSubscription = this.threadService
      .addThread(this.insertThreadReq)
      .subscribe((result) => {
        this.router.navigateByUrl('/threads-main');
      });
  }

  ngOnDestroy(): void {
    this.threadSubscription?.unsubscribe();
  }
}
