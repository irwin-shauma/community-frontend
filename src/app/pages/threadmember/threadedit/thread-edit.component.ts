import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThreadHeaderUpdateReq } from 'src/app/dto/threadheader/thread-header-update-req';
import { FileService } from 'src/app/service/file.service';
import { ThreadHeaderService } from 'src/app/service/thread-header.service';

@Component({
  selector: 'app-thread-edit',
  templateUrl: './thread-edit.component.html',
})
export class ThreadEditComponent implements OnDestroy, OnInit {
  idParam!: string;
  threadSubscription?: Subscription;
  data: ThreadHeaderUpdateReq = {} as ThreadHeaderUpdateReq;

  constructor(
    private activateRoute: ActivatedRoute,
    private threadHeaderService: ThreadHeaderService,
    private fileService: FileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;
    });

    this.threadHeaderService.findById(this.idParam).subscribe((res) => {
      this.data.id = res.data.id;
      this.data.userId = res.data.userId;
      this.data.title = res.data.title;
      this.data.contentThread = res.data.contentThread;
      this.data.threadTypeId = res.data.threadTypeId;
      this.data.fileId = res.data.fileId;
      this.data.isActive = res.data.isActive;
    });
  }

  onSubmit(): void {
    this.threadHeaderService.editThread(this.data).subscribe((result) => {
      this.router.navigateByUrl('/threads-main');
    });
  }

  onChangeFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.data.fileName = res[0];
      this.data.fileExtension = res[1];
    });
  }

  ngOnDestroy(): void {
    this.threadSubscription?.unsubscribe();
  }
}
