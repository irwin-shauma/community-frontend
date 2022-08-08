import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventHeaderUpdateReq } from 'src/app/dto/event-header/event-header-update-req';
import { EventHeaderService } from 'src/app/service/event-header.service';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
})
export class EventEditComponent {
  eventHeaderSubscription?: Subscription;
  data: EventHeaderUpdateReq = {} as EventHeaderUpdateReq;
  constructor(
    private eventService: EventHeaderService,
    private router: Router,
    private fileService: FileService
  ) {}

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
}
