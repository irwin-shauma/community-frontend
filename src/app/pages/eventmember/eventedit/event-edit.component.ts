import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventHeaderUpdateReq } from 'src/app/dto/event-header/event-header-update-req';
import { EventHeaderService } from 'src/app/service/event-header.service';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
})
export class EventEditComponent implements OnInit, OnDestroy {
  idParam!: string;
  eventHeaderSubscription?: Subscription;
  data: EventHeaderUpdateReq = {} as EventHeaderUpdateReq;
  constructor(
    private eventService: EventHeaderService,
    private router: Router,
    private fileService: FileService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.eventService.findById(this.idParam).subscribe((res) => {
        this.data.id = res.data?.id;
        this.data.title = res.data?.title;
        this.data.fileId = res.data?.fileId;
        this.data.starts = res.data?.startDate;
        this.data.ends = res.data?.endDate;
        this.data.provider = res.data?.provider;
        this.data.location = res.data?.location;
        this.data.price = res.data?.price;
      });
    });
  }

  onsubmit(): void {
    this.eventService.editEventHeader(this.data).subscribe((result) => {
      this.router.navigateByUrl('/event-members');
    });
  }

  onInsertFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.data.fileName = res[0];
      this.data.fileExtension = res[1];
    });
  }

  ngOnDestroy(): void {
    this.eventHeaderSubscription?.unsubscribe();
  }
}
