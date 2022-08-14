import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventHeaderInsertReq } from 'src/app/dto/event-header/event-header-insert-req';
import { EventTypeFindAll } from 'src/app/dto/EventType/event-type-find-all';
import { EventHeaderService } from 'src/app/service/event-header.service';
import { EventTypeService } from 'src/app/service/event-type.service';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-create.component.html',
  styleUrls: ['./../eventmember.styles.css'],
})
export class EventCreateComponent implements OnInit {
  eventHeaderSubscription?: Subscription;
  insertEvent: EventHeaderInsertReq = {} as EventHeaderInsertReq;
  today = new Date();
  loading!: boolean;

  constructor(
    private eventTypeService: EventTypeService,
    private eventService: EventHeaderService,
    private router: Router,
    private fileService: FileService
  ) { }
  eventType: EventTypeFindAll = {} as EventTypeFindAll;
  ngOnInit(): void {
    this.eventType.data = [];
    this.initData();
  }

  initData(): void {
    this.eventTypeService.showAllEventType().subscribe((result) => {
      this.eventType = result;
    });
  }

  onsubmit(): void {
    this.loading = true;
    const startDate = formatDate(this.insertEvent.starts, `yyyy-MM-dd'T'HH:mm:ss.SSS${getTimeZone()}`, 'en')
    const endDate = formatDate(this.insertEvent.ends, `yyyy-MM-dd'T'HH:mm:ss.SSS${getTimeZone()}`, 'en')
    this.insertEvent.starts = startDate
    this.insertEvent.ends = endDate

    this.eventHeaderSubscription = this.eventService
      .addEventHeader(this.insertEvent)
      .subscribe((result) => {
        this.router.navigateByUrl('/event-members');
        this.loading = false;
      });
  }

  onInsertFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.insertEvent.fileName = res[0];
      this.insertEvent.fileExtension = res[1];
    });
  }
}

function getTimeZone() {
  var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

