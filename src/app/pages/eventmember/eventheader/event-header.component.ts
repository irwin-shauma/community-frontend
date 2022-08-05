import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventHeaderData } from 'src/app/dto/event-header/event-header-data';
import { EventHeaderFindAllRes } from 'src/app/dto/event-header/event-header-find-all-res';
import { EventHeaderService } from 'src/app/service/event-header-service';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-eventheader',
  templateUrl: './event-header.component.html',
  styleUrls: ['./../eventmember.styles.css'],
})
export class EventHeaderComponent implements OnInit {
  eventHeader: EventHeaderData[] = [];
  eventSubscription?: Subscription;

  constructor(private eventHeaderService: EventHeaderService) {}

  ngOnInit(): void {
    this.onInitData();
  }

  onInitData(): void {
    this.eventHeaderService.showAllEventHeaderMember().subscribe((result) => {
      this.eventHeader = result.data;

      for (let i = 0; i < result.data.length; i++) {
        let event = new Date();
        this.eventHeader[i].startDate = event.toLocaleString();
      }
      for (let j = 0; j < result.data.length; j++) {
        let event = new Date();
        this.eventHeader[j].endDate = event.toLocaleString();
      }
    });
  }
}
