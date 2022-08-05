import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventHeaderData } from 'src/app/dto/event-header/event-header-data';
import { EventHeaderService } from 'src/app/service/event-header.service';

@Component({
  selector: 'app-eventheader',
  templateUrl: './event-header.component.html',
  styleUrls: ['./../eventmember.styles.css'],
})
export class EventHeaderComponent implements OnInit {
  eventHeader: EventHeaderData[] = [];
  eventSubscription?: Subscription;

  constructor(
    private eventHeaderService: EventHeaderService,
    private router: Router
  ) {}

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

  clickToDetail(id: string): void {
    this.router.navigateByUrl(`/event-members/detail/${id}`);
  }
}
